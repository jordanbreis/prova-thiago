import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';
import {
  IsString,
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsNumber,
  Max,
  Min,
} from 'class-validator';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @MinLength(4)
  name: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsNumber()
  @IsNotEmpty()
  @Max(1200)
  @Min(1)
  time: number;
}
