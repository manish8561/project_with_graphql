import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UsersResolver } from "./users.resolver";
import { UsersSettingService } from "./users-setting.service";
import { UsersSettingResolver } from "./users-setting.resolver";
import { User, UsersSchema } from "./entities/user.entity";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = UsersSchema;
          schema.plugin(require("mongoose-autopopulate"));
          return schema;
        },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [
    UsersResolver,
    UsersService,
    UsersSettingResolver,
    UsersSettingService,
  ],
})
export class UsersModule {}
