import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UsersModel: Model<User>) {}

  async CryptPassword(password: string) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash;
  }

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await this.CryptPassword(createUserDto.password);
    this.UsersModel.create(createUserDto);
    return { message: 'Usuario Criado', code: HttpStatus.OK };
  }

  findAll() {
    return this.UsersModel.find().select('-password');
  }

  findOne(email: string) {
    //função de get account para o auth usar
    const results = this.UsersModel.findOne({ email: email });
    return results;
  }

  findById(id: string) {
    return this.UsersModel.findById(id).select('-password');
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.UsersModel.findByIdAndUpdate(id, updateUserDto).select(
      '-password',
    );
  }

  remove(id: string) {
    return this.UsersModel.findByIdAndDelete(id).select('-password');
  }
}
