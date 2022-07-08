import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

import { CreateUserDto } from '@trainum/models/auth';
import { Token } from '@trainum/models/types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/local/signup')
  async signup(@Body() dto: CreateUserDto): Promise<Token> {
    return this.authService.signup(dto);
  }

  @Post('/local/login')
  async login() {
    return this.authService.login();
  }

  @Post('logout')
  async logout() {
    return this.authService.logout();
  }

  @Post('refresh')
  async refresh() {
    return this.authService.refresh();
  }
}
