import { Module } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { WorkoutsController } from './workouts.controller';
import { WorkoutRepository } from '../../repositories/workout.repository';

@Module({
  controllers: [WorkoutsController],
  providers: [WorkoutsService, WorkoutRepository],
})
export class WorkoutsModule {}
