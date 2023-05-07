import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsOptional
} from 'class-validator';

export class UpdateProfileDto {

  id: string

  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(21)
  @ApiProperty()
  name?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  avatar?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  bio?: string;

}