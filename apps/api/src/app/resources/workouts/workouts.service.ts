import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from '../../../../../../libs/models/src/lib/workouts/create-workout.dto';
import { UpdateWorkoutDto } from '../../../../../../libs/models/src/lib/workouts/update-workout.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class WorkoutsService {
  constructor(private prisma: PrismaService) {}

  create(createWorkoutDto: CreateWorkoutDto) {
    return 'This action adds a new workout';
  }

  findAll() {
    return `This action returns all workouts`;
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
