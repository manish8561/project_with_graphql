import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UsersResolver } from "./users.resolver";
import { UsersSettingService } from "./users-setting.service";
import { UsersSettingResolver } from "./users-setting.resolver";

@Module({
  controllers: [UsersController],
  providers: [
    UsersResolver,
    UsersService,
    UsersSettingResolver,
    UsersSettingService,
  ],
})
export class UsersModule {}
