import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { PostService } from '../service/post.service';
import { msg } from 'src/constants/msgPost';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';

@Controller('posts')
export class PostController {

  constructor(private readonly postsService: PostService) {}

  @Post('create')
  async create(@Body() createPostDto: CreatePostDto): Promise<CreatePostDto>{
    return await this.postsService.create(createPostDto);
  }

  @Get()
  async findAll() {
    const posts = await this.postsService.findAll();

    //if(posts.length == 0) throw new NotFoundException(msg.postsNotExist);
  
    return posts;
  }

  @Get(':id')
  async findOne( @Param() where: { id: string }) {
      
      const post = await this.postsService.findOne(where.id);
      if(!post) throw new NotFoundException(msg.postNotExist);
      return post;

  }

  @Put('update/:id')
  async update(
  @Param() where: { id: string }, 
  @Body() updatePostDto: UpdatePostDto){

    await this.postsService.update(where.id, updatePostDto);
    return { message: msg.postUpdated, statusCode: 200 };

  }

  @Delete('delete/:id')
  async remove(@Param() where: { id: string }){

    // return new Promise((resolve, reject) => {
    //   if(true) {

    //     setTimeout(() => {
    //       resolve(true)
    //     }, 1000);
         
    //   } else {
    //      reject();
    //   }
    // });
    await this.postsService.remove(where.id);
    return { message: msg.postDeletedSucess, statusCode: 200 };
    
  }

  @Post('likes')
  async insertLike(@Body() data: { id: string, likes : number }){
    return await this.postsService.insertLike(data);
  }
}
