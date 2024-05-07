import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { UserSetting } from "./entities/user-setting.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserInput } from "./dto/update-user.input";

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: "users" })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: "user" })
  findOne(@Args("id", { type: () => String }) id: string) {
    return this.usersService.findOne(id);
  }
  @ResolveField(() => UserSetting, { name: "settings" })
  getUserSetting(@Parent() user: User) {
    return {
      userId: user._id,
      receiveNotifications: false,
      receiveEmails: true,
    };
  }

  @Mutation(() => User)
  async createUser(@Args("createUserDto") createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Mutation(() => User)
  async updateUser(@Args("updateUserInput") updateUserInput: UpdateUserInput) {
    console.log(updateUserInput, "inside resolver");
    return await this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args("id", { type: () => String }) id: string) {
    return this.usersService.remove(id);
  }
}
