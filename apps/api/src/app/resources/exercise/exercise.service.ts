import { Injectable } from '@nestjs/common';
import { Exercise } from '@trainum/models/entities';
import { UpdateExerciseDto } from '@trainum/models/exercise';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ExerciseService {
  constructor(private prisma: PrismaService) {}

  async findAllForUser(userId: number): Promise<Exercise[]> {
    return this.prisma.exercise.findMany({
      where: {
        users: {
          every: {
            userId,
          },
        },
      },
      include: {
        equipment: true,
        images: true,
        targets: true,
      },
    });
  }

  async findOne(id: number) {
    return `This action returns a #${id} exercise`;
  }

  async update(id: number, updateExerciseDto: UpdateExerciseDto) {
    return `This action updates a #${id} exercise`;
  }

  async remove(id: number) {
    return `This action removes a #${id} exercise`;
  }
}
