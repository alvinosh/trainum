import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

import { PrismaClient, Prisma } from '.prisma/client';

import {
  ExerciseEquipmentSeed,
  ExercisesSeed,
  ExerciseTargetSeed,
} from '@trainum/models/seeds/';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const Targets = await this.target.createMany({
      data: ExerciseTargetSeed().map((x) => {
        return {
          id: x.id,
          name: x.name,
        };
      }),
      skipDuplicates: true,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const Equipment = await this.equipment.createMany({
      data: ExerciseEquipmentSeed().map((x) => {
        return {
          id: x.id,
          name: x.name,
        };
      }),
      skipDuplicates: true,
    });

    console.log;

    await Promise.all(
      ExercisesSeed().map((exercise) => {
        return this.exercise.upsert({
          where: {
            id: exercise.id,
          },
          update: {},
          create: {
            id: exercise.id,
            name: exercise.name,
            type: exercise.type,
            equipment: {
              connect: exercise.equipment.map((x) => ({ name: x.name })),
            },
            targets: {
              connect: exercise.targets.map((x) => ({ name: x.name })),
            },
          },
        });
      })
    );
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }

  async cleanDatabase() {
    if (process.env.NODE_ENV === 'production') return;
    const models = Reflect.ownKeys(this).filter((key) => key[0] !== '_');
    return Promise.all(models.map((modelKey) => this[modelKey].deleteMany()));
  }
}
