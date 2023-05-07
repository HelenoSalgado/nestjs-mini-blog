import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Param, 
  Delete,
  Put, 
  NotFoundException 
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { msg } from 'src/constants/msgUser';
import { CreateUserDto, FindIdParams } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('users')
export class UserController {

  constructor(private readonly usersService: UserService) {}

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
   
   await this.usersService.create(createUserDto);
   return { message: msg.userCreatedSucess, statusCode: 200 };

  }

  @Get()
  async findAll(){

    const users = await this.usersService.findAll();

    if(users.length == 0) throw new NotFoundException(msg.usersNotExist);

    return users;

  }

  @Get(':id')
  async findOne(@Param() id: FindIdParams) {

    const user = await this.usersService.findOne(id);

    if(!user) throw new NotFoundException(msg.userNotExist);

    return user;

  }

  @Put('update/:id')
  async update(@Param() id: FindIdParams, @Body() updateUserDto: UpdateUserDto){

    await this.usersService.update(id, updateUserDto);
    return { message: msg.userUpdatedSucess, statusCode: 200 };

  }

  @Delete('delete/:id')
  async remove(@Param() id: FindIdParams) {

    await this.usersService.remove(id);
    return { message: msg.userDeletedSucess, statusCode: 200 };

  }
}
