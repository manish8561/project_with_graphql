import { ObjectType, Field } from "@nestjs/graphql";
import { UserSetting } from "./user-setting.entity";

@ObjectType()
export class User {
  @Field(() => String, { description: "id in string format for mongodb" })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field()
  email?: string;

  @Field({ defaultValue: "active" })
  status: string;

  @Field({ nullable: true })
  settings?: UserSetting;
}
