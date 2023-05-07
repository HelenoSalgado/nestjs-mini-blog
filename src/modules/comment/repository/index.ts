import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Comment, UpdateComment } from '../interface/comment.interface';

@Injectable()
export class CommentRepository {
  constructor(private prisma: PrismaService) {}

  create(data: Comment){
    return this.prisma.comment.create({
      data,
    });
  }

  findOne(id: string){
    return this.prisma.comment.findUnique({ 
      where: { id },
      select: {
        profileId: true,
        id: true,
        content: true,
        likes: true,
      },
    });
  }

  findAll(id: string){
    return this.prisma.comment.findMany({
      where: { postId: id },
      select: {
        id: true,
        profile: {
          select: {
            name: true,
            avatar: true,
          },
        },
        content: true,
      },
    });
  }

  update(id: string, data: UpdateComment){
    return this.prisma.comment.update({
      where: { id },
      data,
    });
  }

  remove(id: string){
    return this.prisma.comment.delete({ where: { id } });
  }

  insertLike({ id, likes }: { id: string; likes: number }){
    return this.prisma.comment.update({ 
      where: { id }, 
      data: {
        likes
      }
    })
  }
}