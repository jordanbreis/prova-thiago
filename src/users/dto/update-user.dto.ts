import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsEmail,
  IsString,
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @MinLength(4)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @MinLength(4)
  password: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @MinLength(4)
  firstname: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @MinLength(4)
  lastname: string;
}
