import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { Prisma } from '.prisma/client';
import { User } from '@trainum/models/entities';
import { ExercisesSeed } from '@trainum/models/seeds';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findByid(id: number, selectAll = false): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id },
      select: this.getSelect(selectAll),
    });
  }

  async findByUsername(username: string, selectAll = false): Promise<User> {
    return this.prisma.user.findUnique({
      where: { username },
      select: this.getSelect(selectAll),
    });
  }

  async findByEmail(email: string, selectAll = false): Promise<User> {
    return this.prisma.user.findUnique({
      where: { email },
      select: this.getSelect(selectAll),
    });
  }

  async create(body: Prisma.UserCreateInput, selectAll = false): Promise<User> {
    const user: User = await this.prisma.user.create({
      data: {
        ...body,
        exercises: {
          create: ExercisesSeed().map((x) => {
            return {
              exercise: {
                connect: {
                  id: x.id,
                },
              },
            };
          }),
        },
      },
      select: this.getSelect(selectAll),
    });

    return user;
  }

  async update(
    id: number,
    body: Prisma.UserUpdateInput,
    selectAll = false
  ): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: body,
      select: this.getSelect(selectAll),
    });
  }

  baseSelect: Prisma.UserSelect = {
    createdAt: true,
    updatedAt: true,
    id: true,
    email: true,
    username: true,
  };

  allSelect: Prisma.UserSelect = {
    ...this.baseSelect,
    hash: true,
    hashedRt: true,
  };

  private getSelect(all = false): Prisma.UserSelect {
    return all ? this.allSelect : this.baseSelect;
  }
}
