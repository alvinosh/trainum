import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

import { PrismaClient } from '.prisma/client';

import {
  ExerciseEquipmentSeed,
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

    const Targets = await this.target.createMany({
      data: ExerciseTargetSeed().map((x) => {
        return {
          id: x.id,
          name: x.name,
        };
      }),
      skipDuplicates: true,
    });

    const Equipment = await this.equipment.createMany({
      data: ExerciseEquipmentSeed().map((x) => {
        return {
          id: x.id,
          name: x.name,
        };
      }),
      skipDuplicates: true,
    });
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
