import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

import { CreateUserDto, LoginUserDto } from '@trainum/models/auth';
import { Token } from '@trainum/models/types';

import { ATGuard, RTGuard } from '../common/guards';
import { RT, UserId } from '../common/decorators';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/local/signup')
  async signup(@Body() dto: CreateUserDto): Promise<Token> {
    return this.authService.signup(dto);
  }

  @Post('/local/login')
  async login(@Body() dto: LoginUserDto): Promise<Token> {
    return this.authService.login(dto);
  }

  @Post('logout')
  @UseGuards(ATGuard)
  async logout(@UserId() id: number) {
    return this.authService.logout(id);
  }

  @Post('refresh')
  @UseGuards(RTGuard)
  async refresh(@UserId() id: number, @RT() rt: string) {
    console.log(id, rt);
    return this.authService.refresh(id, rt);
  }
}
