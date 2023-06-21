import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { prototype } from 'events';

@Schema()
export class Course {
  @Prop()
  name: string;

  @Prop()
  value: number;

  @Prop()
  time: number;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
