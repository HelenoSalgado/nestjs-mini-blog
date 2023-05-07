import { Module } from '@nestjs/common';
import { PostService } from './service/post.service';
import { PostController } from './controller/post.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PostRepository } from './repository';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  controllers: [PostController],
  providers: [PostService, PostRepository],
  imports: [PrismaModule, CacheModule.register()],
})
export class PostModule {}
