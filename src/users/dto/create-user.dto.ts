import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
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
