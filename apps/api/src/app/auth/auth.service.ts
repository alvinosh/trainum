import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@trainum/models/auth';
import { PrismaService } from '../prisma/prisma.service';

import * as argon from 'argon2';
import { Token } from '@trainum/models/types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signup(dto: CreateUserDto): Promise<Token> {
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        username: dto.username,
        hash: await argon.hash(dto.password),
      },
    });

    const tokens = await this.getTokens(user.id);
    return tokens;
  }

  async login() {
    return {
      message: 'Login success',
    };
  }

  async logout() {
    return {
      message: 'Logout success',
    };
  }

  async refresh() {
    return {
      message: 'Refresh success',
    };
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
}
