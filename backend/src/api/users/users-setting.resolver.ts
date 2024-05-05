import { Resolver, Mutation, Args } from "@nestjs/graphql";

import { UserSetting } from "./entities/user-setting.entity";
import { CreateUserSettingInput } from "./dto/create-user-setting.input";
import { UsersSettingService } from "./users-setting.service";

@Resolver((of) => UserSetting)
export class UsersSettingResolver {
  constructor(private readonly usersSettingService: UsersSettingService) {}

  @Mutation(() => UserSetting)
  createUserSetting(
    @Args("createUserSettingInput")
    createUserSettingInput: CreateUserSettingInput,
  ) {
    return this.usersSettingService.createUserSetting(createUserSettingInput);
  }
}
