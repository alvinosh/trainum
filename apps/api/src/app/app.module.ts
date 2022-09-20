import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { ATGuard } from './common/guards';
import { PrismaModule } from './prisma/prisma.module';
import { ExerciseModule } from './resources/exercise/exercise.module';
import { WorkoutsModule } from './resources/workouts/workouts.module';
import { SetModule } from './resources/set/set.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PrismaModule,
    ExerciseModule,
    WorkoutsModule,
    SetModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ATGuard,
    },
  ],
})
export class AppModule {}
