import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './entities/course.entity';
import { Model } from 'mongoose';

@Injectable()
export class CoursesService {
  constructor(@InjectModel(Course.name) private CourseModel: Model<Course>) {}

  create(createCourseDto: CreateCourseDto) {
    return this.CourseModel.create(createCourseDto);
  }

  findAll() {
    return this.CourseModel.find();
  }

  findOne(id: string) {
    return this.CourseModel.findById(id);
  }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    return this.CourseModel.findByIdAndUpdate(id, updateCourseDto);
  }

  remove(id: string) {
    return this.CourseModel.findByIdAndDelete(id);
  }
}
