import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ExerciseService } from '../exercise/exercise.service';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ATStrategy, RTStrategy } from './strategies';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, ExerciseService, ATStrategy, RTStrategy],
})
export class AuthModule {}
