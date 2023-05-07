import { Inject, Injectable } from '@nestjs/common';
import { PostRepository } from '../repository';
import ShortUniqueId from 'short-unique-id';
import { Post, UpdatePost } from '../interface/post.interface';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class PostService {
  constructor(
    private repository: PostRepository,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async create(post: Post){
    this.cacheManager.del('getPostsAll')
    const generateId = new ShortUniqueId();
    post.id = generateId(11);

    return await this.repository.create(post);
  }

  async findAll(){

    const postsInCache = await this.cacheManager.get('getPostsAll');
    if(postsInCache) return postsInCache;
    const posts = await this.repository.findAll();
    await this.cacheManager.set('getPostsAll', posts, 0);
    return posts;

  }

  async findOne(id: string){
    return await this.repository.findOne(id);
  }

  async update(id: string, updatePost: UpdatePost){
    this.cacheManager.del('getPostsAll');
    return await this.repository.update(id, updatePost);
  }

  async remove(id: string){
    this.cacheManager.del('getPostsAll')
    return await this.repository.remove(id);
  }

  async insertLike(data: { id: string, likes: number }){
    return await this.repository.insertLike(data)
  }
  
}
