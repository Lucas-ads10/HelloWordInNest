import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service'; // Importe o UserService aqui

@Module({
  imports: [UserModule, PrismaModule], // Importe os módulos aqui
  controllers: [],
  providers: [PrismaService, UserService], // Adicione o UserService aqui
})
export class AppModule {}
