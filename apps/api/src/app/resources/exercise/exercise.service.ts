import { Injectable } from '@nestjs/common';
import { Exercise } from '@trainum/models/entities';
import { CreateExerciseDto, UpdateExerciseDto } from '@trainum/models/exercise';
import { ExercisesSeed } from '@trainum/models/seeds';
import { PrismaService } from '../../prisma/prisma.service';

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
        equipment: x.equipment.map((x) => x.name),
        userId: userId,
      };
    });

    return Promise.all(exercises.map((x) => this.create(x)));
  }

  async create(createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    const targets = (await this.prisma.target.findMany({})).filter((x) => {
      return createExerciseDto.targets.includes(x.name);
    });

    const equipment = (await this.prisma.equipment.findMany({})).filter((x) => {
      return createExerciseDto.equipment.includes(x.name);
    });

    return await this.prisma.exercise.create({
      data: {
        name: createExerciseDto.name,
        type: createExerciseDto.type,
        description: createExerciseDto.description,
        images: {
          connect: [],
        },
        targets: {
          connect: targets.map((a) => ({ id: a.id })),
        },
        equipment: {
          connect: equipment.map((a) => ({ id: a.id })),
        },
        user: {
          connect: {
            id: createExerciseDto.userId,
          },
        },
      },
      include: {
        targets: true,
        images: true,
        equipment: true,
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
        images: true,
        equipment: true,
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
