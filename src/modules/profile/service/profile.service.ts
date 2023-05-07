import { Injectable } from '@nestjs/common';
import { UpdateProfileDto } from '../dto/update-profile.tdo';
import { ProfileRepository } from '../repository';
import ShortUniqueId from 'short-unique-id';

@Injectable()
export class ProfileService {

  constructor(private repository: ProfileRepository) {}

  async get(id: string){
    return await this.repository.get(id)
  }

  async update(id: string, updateProfileDto: UpdateProfileDto){
     await this.repository.update(id, updateProfileDto)
  }
}
