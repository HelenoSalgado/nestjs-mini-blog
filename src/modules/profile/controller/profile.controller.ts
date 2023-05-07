import { 
  Controller, 
  Body,
  Param,
  Get,
  Put, 
} from '@nestjs/common';
import { ProfileService } from '../service/profile.service';
import { UpdateProfileDto } from '../dto/update-profile.tdo';
import { msg } from 'src/constants/msgProfile';

@Controller('profile')
export class ProfileController {

  constructor(private readonly profileService: ProfileService) {}


  @Get()
  async get(@Param('id') id: string) {
   
   return await this.profileService.get(id);

  }

  @Put('update/:id')
  async update(
    @Param() where: { id: string },
    @Body() updateProfileDto: UpdateProfileDto
    ) {
   
   await this.profileService.update(where.id, updateProfileDto);
   return { message: msg.profileUpdateSucess, statusCode: 200 };

  }
}
