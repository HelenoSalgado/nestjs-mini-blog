import { Module } from '@nestjs/common';
import { UserController } from './modules/user/controller/user.controller';
import { UserModule } from './modules/user/users.module';
import { PostModule } from './modules/post/post.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { PostController } from './modules/post/controller/post.controller';
import { UserService } from './modules/user/service/user.service';
import { PostService } from './modules/post/service/post.service';
import { UserRepository } from './modules/user/repository';
import { PostRepository } from './modules/post/repository';
import { CommentModule } from './modules/comment/comment.module';
import { CommentController } from './modules/comment/controller/comment.controller';
import { CommentRepository } from './modules/comment/repository';
import { CommentService } from './modules/comment/service/comment.service';

@Module({
  imports: [UserModule, PostModule, CommentModule, PrismaModule],
  controllers: [UserController, PostController, CommentController],
  providers: [
    UserService, 
    PostService, 
    CommentService, 
    UserRepository, 
    PostRepository, 
    CommentRepository],
})
export class AppModule {}
