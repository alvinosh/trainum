import { Injectable } from '@nestjs/common';
import { Exercise } from '@trainum/models/entities';
import { CreateExerciseDto, UpdateExerciseDto } from '@trainum/models/exercise';
import { ExercisesSeed } from '@trainum/models/seeds';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExerciseService {
  constructor(private prisma: PrismaService) {}

  async createSeed(userId: number): Promise<Exercise[]> {
    const exercises: CreateExerciseDto[] = ExercisesSeed().map((x) => {
      return {
        type: x.type,
        description: x.description,
        name: x.name,
        targets: x.targets.map((x) => x.name),
        userId: userId,
      };
    });

    console.log(10, exercises);

    return Promise.all(exercises.map((x) => this.create(x)));
  }

  async create(createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    const targets = (await this.prisma.target.findMany({})).filter((x) => {
      return createExerciseDto.targets.includes(x.name);
    });

    return await this.prisma.exercise.create({
      data: {
        name: createExerciseDto.name,
        description: createExerciseDto.description,
        type: createExerciseDto.type,
        targets: {
          connect: targets.map((x) => ({
            id: x.id,
          })),
        },
        user: {
          connect: {
            id: createExerciseDto.userId,
          },
        },
      },
    });
  }

  async findAllForUser(userId: number): Promise<Exercise[]> {
    return this.prisma.exercise.findMany({
      where: {
        user: {
          id: userId,
        },
      },
      include: {
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
