import { Injectable } from '@nestjs/common';
import { CreateUserDto, FindIdParams } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserRepository } from '../repository';
import { msg } from 'src/constants/msgUser';
import ShortUniqueId from 'short-unique-id';

@Injectable()
export class UserService {

  constructor(private repository: UserRepository) {}

  async create(createUserDto: CreateUserDto){

    const userExist = await this.repository.findEmail(createUserDto.email);

    if(userExist) return { message: msg.userExist, statusCode: 200 };

    const generateId = new ShortUniqueId();

    createUserDto.id = generateId(11);

    return await this.repository.create(createUserDto);

  }

  async findAll(){

    return await this.repository.findAll();

  }

  async findEmail(email: string){

    return await this.repository.findEmail(email);

  }

  async findOne( id: FindIdParams ){

    return await this.repository.findOne(id);

  }

  async update(id: FindIdParams, updateUserDto: UpdateUserDto){

    return await this.repository.update(id, updateUserDto);

  }

  async remove(id: FindIdParams) {

    return await this.repository.remove(id);

  }
}
