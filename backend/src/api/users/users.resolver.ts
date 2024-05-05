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
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { UserSetting } from "./entities/user-setting.entity";
import { CreateUserSettingInput } from "./dto/create-user-setting.input";

@Resolver(() => User)
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
      userId: user.id,
      receiveNotifications: false,
      receiveEmails: true,
    };
  }

  @Mutation(() => User)
  createUser(@Args("createUserInput") createUserInput: CreateUserInput) {
    return this.usersService.createUser(createUserInput);
  }

  @Mutation(() => UserSetting)
  createUserSetting(
    @Args("createUserSettingInput")
    createUserSettingInput: CreateUserSettingInput,
  ) {
    return this.usersService.createUserSetting(createUserSettingInput);
  }

  @Mutation(() => User)
  updateUser(@Args("updateUserInput") updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args("id", { type: () => String }) id: string) {
    return this.usersService.remove(id);
  }
}
