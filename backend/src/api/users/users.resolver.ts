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
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersSettingService } from "./users-setting.service";

@Resolver((of) => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly userSettingService: UsersSettingService,
  ) {}

  @Query(() => [User], { name: "users" })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: "user" })
  findOne(@Args("id", { type: () => String }) id: string) {
    return this.usersService.findOne(id);
  }
  /**
   * joining field with another table
   * @param user
   * @returns
   */
  @ResolveField(() => UserSetting, { name: "settings" })
  async getUserSetting(@Parent() user: User) {
    const settings = await this.userSettingService.getUserSetting(user._id);
    return {
      userId: user._id,
      receiveNotifications: settings.receiveNotifications,
      receiveEmails: settings.receiveEmails,
    };
  }

  @Mutation(() => User)
  async createUser(@Args("createUserDto") createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Mutation(() => User)
  async updateUser(
    @Args("id", { type: () => String }) id: string,
    @Args("updateUserDto") updateUserDto: UpdateUserDto,
  ) {
    return await this.usersService.update(id, updateUserDto);
  }

  @Mutation(() => User)
  removeUser(@Args("id", { type: () => String }) id: string) {
    return this.usersService.remove(id);
  }
}
