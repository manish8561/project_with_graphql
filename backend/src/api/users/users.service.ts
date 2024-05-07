import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./entities/user.entity";
import { RECORD_NOT_FOUND } from "src/constants";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOne(_id: string): Promise<User> {
    return this.userModel.findOne({ _id }).exec();
  }

  async update(_id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findOne({ _id });
    if (!user) {
      throw new Error(RECORD_NOT_FOUND);
    }
    user.name = updateUserDto.name;
    user.status = updateUserDto.status;
    await user.save();
    return user;
  }

  async remove(_id: string): Promise<User> {
    const user = await this.userModel.findOne({ _id });
    if (!user) {
      throw new Error(RECORD_NOT_FOUND);
    }
    await user.deleteOne();
    return user;
  }
}
