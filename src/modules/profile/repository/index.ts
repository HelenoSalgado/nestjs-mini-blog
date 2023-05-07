import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateProfile } from '../interface/profile.interface';

@Injectable()
export class ProfileRepository {

  constructor(private prisma: PrismaService) {}

  get(id: string){
    return this.prisma.profile.findUnique({
      where: { id },
    });
  };

  update(id: string, data: UpdateProfile){
    return this.prisma.profile.update({
      where: { id },
      data,
    });
  };

}