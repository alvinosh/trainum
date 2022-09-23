import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';

import { CreateUserDto, LoginUserDto } from '@trainum/models/auth';
import { Token } from '@trainum/models/types';
import { User } from '@trainum/models/entities';
import { ConfigService } from '@nestjs/config';
import { ExerciseService } from '../resources/exercise/exercise.service';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,

    private userRepository: UserRepository
  ) {}

  async signup(dto: CreateUserDto): Promise<Token> {
    if (dto.password != dto.confirm_password)
      throw new BadRequestException('Passwords do not match');

    if (await this.emailExists(dto.email))
      throw new BadRequestException('Email Already Exists');
    if (await this.usernameExists(dto.username))
      throw new BadRequestException('Username Already Exists');

    const user = await this.userRepository.create({
      email: dto.email,
      username: dto.username,
      hash: await argon.hash(dto.password),
    });

    const tokens = await this.getTokens(user.id);
    return tokens;
  }

  async login(dto: LoginUserDto): Promise<Token> {
    const user = await this.userRepository.findByUsername(dto.username, true);

    if (!user) throw new BadRequestException('Username does not exist');

    const isValid = await argon.verify(user.hash, dto.password);
    if (!isValid)
      throw new BadRequestException('Username or password is incorrect');

    const tokens = await this.getTokens(user.id);
    return tokens;
  }

  async refresh(id: number): Promise<Token> {
    const user = await this.userRepository.findByid(id, true);
    if (!user) throw new BadRequestException('Invalid Token');

    const tokens = await this.getTokens(user.id);
    return tokens;
  }

  async getTokens(id: number): Promise<Token> {
    const at_promise = this.jwtService.signAsync(
      {
        sub: id,
      },
      {
        secret: this.configService.get<string>('JWT_AT_SECRET'),
        expiresIn: '5s',
      }
    );

    const rt_promise = this.jwtService.signAsync(
      {
        sub: id,
      },
      {
        secret: this.configService.get<string>('JWT_RT_SECRET'),
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

  async usernameExists(username: string): Promise<boolean> {
    return (await this.userRepository.findByUsername(username)) ? true : false;
  }

  async emailExists(email: string): Promise<boolean> {
    return (await this.userRepository.findByEmail(email)) ? true : false;
  }
}
