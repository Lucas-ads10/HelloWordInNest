import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUsers(): Promise<User[]> {
    return this.prisma.getPrismaClient().user.findMany();
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.prisma.getPrismaClient().user.findUnique({
      where: { id: parseInt(id) },
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }
    return user;
  }

  async createUser(data: { name: string; age: number; telephone: string }): Promise<User> {
    return this.prisma.getPrismaClient().user.create({
      data: {
        name: data.name,
        age: data.age,
        telephone: data.telephone,
      }
    });
  }

  async deleteUser(id: string): Promise<User> {
    const user = await this.getUserById(id); // Ensure user exists
    return this.prisma.getPrismaClient().user.delete({
      where: { id: parseInt(id) },
    });
  }

  async updateUser(id: string, data: { name: string; age: number; telephone: string }): Promise<User> {
    const user = await this.getUserById(id); // Ensure user exists
    return this.prisma.getPrismaClient().user.update({
      where: { id: parseInt(id) },
      data: {
        name: data.name,
        age: data.age,
        telephone: data.telephone,
      },
    });
  }
}
