import { Injectable } from "@nestjs/common";
import { CreateUserSettingInput } from "./dto/create-user-setting.input";
import { Model, Types } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UserSetting } from "./entities/user-setting.entity";

@Injectable()
export class UsersSettingService {
  constructor(
    @InjectModel(UserSetting.name) private userSettingModel: Model<UserSetting>,
  ) {}
  /**
   * implement using graphql only
   * @param createUserSettingInput
   * @returns
   */
  async createUserSetting(createUserSettingInput: CreateUserSettingInput) {
    const data: any = createUserSettingInput;
    data.userId = new Types.ObjectId(createUserSettingInput.userId);
    await this.userSettingModel.create(data);
    return {
      userId: createUserSettingInput.userId,
    };
  }
  /**
   * separate function for graphql to make join with user collection
   * @param userId
   * @returns
   */
  async getUserSetting(userId: string): Promise<UserSetting> {
    return this.userSettingModel.findOne(
      { userId },
      { receiveNotifications: 1, receiveEmails: 1 },
    );
  }
}
