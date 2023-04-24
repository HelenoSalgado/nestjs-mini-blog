import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UserService } from './service/user.service';
import { UserRepository } from './repository';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
  imports: [PrismaModule],
})
export class UserModule {}
