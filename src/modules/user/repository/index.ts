import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto, FindIdParams } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserRepository {

  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto){
    return this.prisma.user.create({ 
      data: createUserDto,
      select: {
        id: true,
        name: true,
        email: true,
        profileViews: true,
        city: true,
        country: true
      },
    });
  }

  findAll(){
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        profileViews: true,
        city: true,
        country: true
      },
    });
  }

  async findEmail(email: string){
    return this.prisma.user.findUnique({ 
      where: { 
        email 
      },
      select: {
        email: true,
      },
    });
  }

  findOne( where: FindIdParams ){
    return this.prisma.user.findUnique({ 
      where,
      select: {
        id: true,
        name: true,
        email: true,
        profileViews: true,
        city: true,
        country: true,
      },
     });
  }

  update(where: FindIdParams, data: UpdateUserDto){
    return this.prisma.user.update({
      where,
      data,
    });
  }

  remove(where: FindIdParams) {
    return this.prisma.user.delete({ where });
  }
}