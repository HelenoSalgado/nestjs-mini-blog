import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCommentDto {
 
  id: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(300)
  @ApiProperty()
  content: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  postId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  profileId: string;

  likes: number;

}

export class FindIdParams {
  @IsString()
  id: string;
}