import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUsers(): Promise<User[]> {
    return this.prisma.getPrismaClient().user.findMany();
  }

  async createUser(data: { name: string; age: number; telephone: string }): Promise<User> {
    return this.prisma.getPrismaClient().user.create({
      data: {
        name: data.name,
        age: data.age,
        telephone: data.telephone,
      },
    });
  }
}
