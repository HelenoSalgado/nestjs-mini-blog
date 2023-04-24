import { Module } from '@nestjs/common';
import { CommentService } from './service/comment.service';
import { CommentController } from './controller/comment.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CommentRepository } from './repository';

@Module({
  controllers: [CommentController],
  providers: [CommentService, CommentRepository],
  imports: [PrismaModule],
})
export class CommentModule {}
