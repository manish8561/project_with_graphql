import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType()
export class CreateUserSettingInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  userId: string;

  @IsOptional()
  @Field({ nullable: true, defaultValue: false })
  receiveNotifications: boolean;

  @IsOptional()
  @Field({ nullable: true, defaultValue: false })
  receiveEmails: boolean;
}
