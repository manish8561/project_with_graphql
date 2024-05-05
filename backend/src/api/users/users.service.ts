import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserInput } from "./dto/create-user.input";

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return "This action adds a new user";
  }

  createUser(createUserInput: CreateUserInput) {
    console.log(createUserInput);
    return {
      id: createUserInput.id,
    };
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: string) {
    return {
      id,
      name: "Manish Sharma",
      email: "manish@gmail.com",
      status: "active",
    };
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
