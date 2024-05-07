import { ObjectType, Field } from "@nestjs/graphql";
import { UserSetting } from "./user-setting.entity";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { USER_STATUS } from "src/constants/enums";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
@ObjectType()
export class User {
  @Field(() => String, { description: "_id in string format for mongodb" })
  _id: string;

  @Prop()
  @Field({ nullable: true })
  name: string;

  @Prop({ required: true, unique: true })
  @Field()
  email?: string;

  @Prop({ default: USER_STATUS.Active })
  @Field({ defaultValue: USER_STATUS.Active })
  status: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  // show field in graphql
  @Field({ nullable: true })
  settings?: UserSetting;
}

export const UsersSchema = SchemaFactory.createForClass(User);
