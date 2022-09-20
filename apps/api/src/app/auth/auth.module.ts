import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserRepository } from '../repositories/user.repository';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ATStrategy, RTStrategy } from './strategies';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, ATStrategy, RTStrategy, UserRepository],
})
export class AuthModule {}
