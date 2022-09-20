import { Injectable } from '@nestjs/common';
import { Workout } from '@trainum/models/entities';
import { CreateWorkoutDto } from '../../../../../../libs/models/src/lib/workouts/create-workout.dto';
import { UpdateWorkoutDto } from '../../../../../../libs/models/src/lib/workouts/update-workout.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { WorkoutRepository } from '../../repositories/workout.repository';

@Injectable()
export class WorkoutsService {
  constructor(private workoutRepository: WorkoutRepository) {}

  create(createWorkoutDto: CreateWorkoutDto) {
    return 'This action adds a new workout';
  }

  async findAllByUser(userId: number): Promise<Workout[]> {
    return this.workoutRepository.findAllByUser(userId);
  }

  findOne(id: number) {
    return `This action returns a #${id} workout`;
  }

  update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
    return `This action updates a #${id} workout`;
  }

  remove(id: number) {
    return `This action removes a #${id} workout`;
  }
}
