import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Post()
  async createUser(@Body() userDto: UserDto) {
    return await this.userService.createUser(userDto);
  }
}

//Criar a rota que vai receber os dados do usuario// 