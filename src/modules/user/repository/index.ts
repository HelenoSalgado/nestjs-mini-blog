import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { FindIdParams } from '../dto/create-user.dto';
import { UpdateUser, User } from '../interface/user.interface';
import { Profile } from '../interface/profile.interface';

@Injectable()
export class UserRepository {

  constructor(private prisma: PrismaService) {}

  create(data: User){
    return this.prisma.user.create({ 
      data,
      select: {
        id: true,
        name: true,
        email: true,
        profileViews: true,
      },
    });
  }

  createProfile(id: string, name: string){
    return this.prisma.profile.create({
      data: {
        id,
        name,
        User: {
          connect: {
            id,
          }
        }
      },
    })
  }

  findAll(){
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        profileViews: true,
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
      },
     });
  }

  update(where: FindIdParams, data: UpdateUser){
    return this.prisma.user.update({
      where,
      data,
    });
  }

  remove(where: FindIdParams) {
    return this.prisma.user.delete({ where });
  }
}