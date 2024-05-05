import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UsersResolver } from "./users.resolver";

@Module({
  controllers: [UsersController],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
