import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Post, UpdatePost } from '../interface/post.interface';

@Injectable()
export class PostRepository {
  constructor(private prisma: PrismaService) {}

  create({ id, title, description, content, authorId}: Post){
    return this.prisma.post.create({ 
      data: {
        id,
        title, 
        description, 
        content, 
        author: {
          connect: {
            id: authorId
          },
        }, 
      }
     });
  }

  findAll(){
    return this.prisma.post.findMany({
      select: {
        id: true,
        author: {
          select: {
            name: true,
          },
        },
        title: true,
        content: true,
        authorId: true,
        comments: {
          select: {
            id: true,
          },
        },
        likes: true,
        published: true,
      },
    });
  }

  findOne(id: string){
    return this.prisma.post.findUnique({
      where: { id },
      select: {
        author: {
          select: {
            name: true,
          },
        },
        title: true,
        content: true,
        authorId: true,
        comments: {
          select: {
            id: true,
          },
        },
        likes: true,
        published: true,
      },
    });
  }

  update(id: string, data: UpdatePost){
    return this.prisma.post.update({ 
      where: { id }, 
      data,
      select: {
        title: true,
        description: true,
        content: true,
        published: true,
        authorId: true,
        updatedAt: true,
      },
    });
  }

  remove(id: string){
    return this.prisma.post.delete({ where: { id } });
  }

  insertLike({ id, likes }: { id: string; likes: number; }){
    return this.prisma.post.update({ 
      where: {
        id
      },
      data: {
        likes
      },
      select: {
        likes: true,
      }
    })
  }
}