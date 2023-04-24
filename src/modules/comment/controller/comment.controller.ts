import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { CommentService } from '../service/comment.service';
import { msg } from 'src/constants/msgComment';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';

@Controller('/comments')
export class CommentController {

  constructor(private readonly commentService: CommentService) {}

  @Post('create')
  async create(@Body() createCommentDto: CreateCommentDto): Promise<CreateCommentDto>{
    return await this.commentService.create(createCommentDto);
  }

  @Get(':id')
  async findOne(@Param() where: {id: string} ) {

    const comment = await this.commentService.findOne(where.id);

    if(!comment) throw new NotFoundException(msg.commentNotExist);

    return comment;

  }

  @Get()
  async findAll() {
    const comments = await this.commentService.findAll();

    if(comments.length == 0) throw new NotFoundException(msg.commentNotExist);
  
    return comments;
  }

  @Put('update/:id')
  async update(@Param() where: { id: string }, 
  @Body() updatePostDto: UpdateCommentDto):Promise<UpdateCommentDto>{

    return await this.commentService.update(where.id, updatePostDto);

  }

  async insertLike(data: { id: string, likes: number }){
    return await this.commentService.insertLike(data)
  }

  @Delete('delete/:id')
  async remove(@Param() where: {id: string}){

    await this.commentService.remove(where.id);

    return {message: msg.commentDeletedSucess, statusCode: 200}

  }
}
