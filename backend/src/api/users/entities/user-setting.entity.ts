import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class UserSetting {
  @Field(() => String, { description: "userId in string format for mongodb" })
  userId: string;

  @Field({ defaultValue: false })
  receiveNotifications: boolean;

  @Field({ defaultValue: false })
  receiveEmails: boolean;
}
