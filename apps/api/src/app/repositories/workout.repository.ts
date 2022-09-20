import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { Prisma } from '.prisma/client';
import { Workout } from '@trainum/models/entities';

@Injectable()
export class WorkoutRepository {
  constructor(private prisma: PrismaService) {}

  async findAllByUser(userId: number, selectAll = false): Promise<Workout[]> {
    return this.prisma.workout.findMany({
      where: {
        users: {
          some: {
            userId,
          },
        },
      },
      select: this.getSelect(selectAll),
    });
  }

  private baseSelect: Prisma.WorkoutSelect = {
    date: true,
    id: true,
    sets: true,
    template: true,
  };

  private allSelect: Prisma.WorkoutSelect = {
    ...this.baseSelect,
    users: true,
  };

  private getSelect(all = false): Prisma.WorkoutSelect {
    return all ? this.allSelect : this.baseSelect;
  }
}
