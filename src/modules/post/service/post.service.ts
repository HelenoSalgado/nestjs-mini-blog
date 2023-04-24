import { Injectable } from '@nestjs/common';
import { PostRepository } from '../repository';
import ShortUniqueId from 'short-unique-id';
import { Post, UpdatePost } from '../interface/post.interface';
import { UserRepository } from 'src/modules/user/repository';

@Injectable()
export class PostService {
  constructor(private repository: PostRepository) {}

  async create(post: Post){

    const generateId = new ShortUniqueId();
    post.id = generateId(11);

    return await this.repository.create(post);
  }

  async findAll(){
    return await this.repository.findAll();
  }

  async findOne(id: string){
    return await this.repository.findOne(id);
  }

  async update(id: string, updatePost: UpdatePost){
    return await this.repository.update(id, updatePost);
  }

  async remove(id: string){
    return await this.repository.remove(id);
  }

  async insertLike(data: { id: string, likes: number }){
    return await this.repository.insertLike(data)
  }
  
}
