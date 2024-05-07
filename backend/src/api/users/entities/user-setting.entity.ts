import { ObjectType, Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<UserSetting>;

@Schema()
@ObjectType()
export class UserSetting {
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    autopopulate: true,
    unique: true,
  })
  @Field(() => String, { description: "userId in string format for mongodb" })
  userId: string;

  @Prop({ default: false })
  @Field({ defaultValue: false })
  receiveNotifications: boolean;

  @Prop({ default: false })
  @Field({ defaultValue: false })
  receiveEmails: boolean;
}

export const UserSettingSchema = SchemaFactory.createForClass(UserSetting);
