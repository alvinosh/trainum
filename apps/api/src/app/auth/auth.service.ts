import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';

import { CreateUserDto, LoginUserDto } from '@trainum/models/auth';
import { Token } from '@trainum/models/types';
import { User } from '@trainum/models/entities';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signup(dto: CreateUserDto): Promise<Token> {
    if (dto.password != dto.confirm_password)
      throw new BadRequestException('Passwords do not match');

    const user_email = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    const user_usrname = await this.prisma.user.findUnique({
      where: { username: dto.username },
    });

    if (user_email) throw new BadRequestException('Email Already Exists');
    if (user_usrname) throw new BadRequestException('Username Already Exists');

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        username: dto.username,
        hash: await argon.hash(dto.password),
      },
    });

    const tokens = await this.getTokens(user.id);
    await this.updateRTHash(user.id, tokens.refreshToken);
    return tokens;
  }

  async login(dto: LoginUserDto): Promise<Token> {
    const user = await this.prisma.user.findUnique({
      where: { username: dto.username },
    });

    if (!user) throw new BadRequestException('Username does not exist');

    const isValid = await argon.verify(user.hash, dto.password);
    if (!isValid)
      throw new BadRequestException('Username or password is incorrect');

    const tokens = await this.getTokens(user.id);
    await this.updateRTHash(user.id, tokens.refreshToken);
    return tokens;
  }

  async logout(id: number): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: {
        hashedRt: null,
      },
      select: {
        username: true,
        email: true,
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async refresh(id: number, token: string): Promise<Token> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user || !user.hashedRt) throw new BadRequestException('Invalid Token');

    const isValid = await argon.verify(user.hashedRt, token);
    if (!isValid) throw new BadRequestException('Invalid Token');

    const tokens = await this.getTokens(user.id);
    await this.updateRTHash(user.id, tokens.refreshToken);
    return tokens;
  }

  async getTokens(id: number): Promise<Token> {
    const at_promise = this.jwtService.signAsync(
      {
        sub: id,
      },
      {
        secret: 'at-secret',
        expiresIn: '15min',
      }
    );
    const rt_promise = this.jwtService.signAsync(
      {
        sub: id,
      },
      {
        secret: 'rt-secret',
        expiresIn: '1w',
      }
    );

    const [accessToken, refreshToken] = await Promise.all([
      at_promise,
      rt_promise,
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async updateRTHash(id: number, token: string): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: {
        hashedRt: await argon.hash(token),
      },
    });
  }
}
