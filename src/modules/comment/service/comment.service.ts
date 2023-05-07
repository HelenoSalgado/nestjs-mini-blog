import { Injectable } from '@nestjs/common';
import { CommentRepository } from '../repository';
import ShortUniqueId from 'short-unique-id';
import { Comment, UpdateComment } from '../interface/comment.interface';

@Injectable()
export class CommentService {

  constructor(private repository: CommentRepository) {}

  async create(comment: Comment){

    const generateId = new ShortUniqueId();
    comment.id = generateId(11);

    return await this.repository.create(comment);
  }

  async findOne(id: string){
    return await this.repository.findOne(id);
  }

  async findAll(id: string){
    return await this.repository.findAll(id);
  }

  async update(id: string, updateComment: UpdateComment){
    return await this.repository.update(id, updateComment);
  }

  async remove(id: string){
    return await this.repository.remove(id);
  }

  async insertLike(data: { id: string, likes: number }){
    return await this.repository.insertLike(data);
  }
  
}
