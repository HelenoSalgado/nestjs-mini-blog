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
import { ProfileModule } from './modules/profile/profile.module';
import { ProfileController } from './modules/profile/controller/profile.controller';
import { ProfileService } from './modules/profile/service/profile.service';
import { ProfileRepository } from './modules/profile/repository';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    UserModule, 
    ProfileModule, 
    PostModule, 
    CommentModule, 
    PrismaModule,
    CacheModule.register()
  ],
  controllers: [
    UserController, 
    ProfileController, 
    PostController, 
    CommentController
  ],
  providers: [
    UserService, 
    ProfileService,
    PostService, 
    CommentService, 
    UserRepository, 
    ProfileRepository,
    PostRepository, 
    CommentRepository],
})
export class AppModule {}
