import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CreateCoursesMiddleware } from './middleware/create-courses.middleware';

@Module({
  imports: [
    UsersModule,
    CoursesModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://0.0.0.0:27017/minhaprova'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CreateCoursesMiddleware)
      .forRoutes({ path: 'courses', method: RequestMethod.POST });
  }
}
