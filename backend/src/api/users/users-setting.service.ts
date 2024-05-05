import { Injectable } from "@nestjs/common";
import { CreateUserSettingInput } from "./dto/create-user-setting.input";

@Injectable()
export class UsersSettingService {
  createUserSetting(createUserSettingInput: CreateUserSettingInput) {
    console.log(createUserSettingInput);
    return {
      userId: createUserSettingInput.userId,
    };
  }
}
