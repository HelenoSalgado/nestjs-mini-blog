import { Module } from '@nestjs/common';
import { PostService } from './service/post.service';
import { PostController } from './controller/post.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PostRepository } from './repository';

@Module({
  controllers: [PostController],
  providers: [PostService, PostRepository],
  imports: [PrismaModule],
})
export class PostModule {}
