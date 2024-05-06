import { ObjectType, Field } from "@nestjs/graphql";
import { UserSetting } from "./user-setting.entity";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
@ObjectType()
export class User {
  @Prop()
  @Field(() => String, { description: "id in string format for mongodb" })
  id: string;

  @Prop()
  @Field({ nullable: true })
  name: string;

  @Prop({ required: true })
  @Field()
  email?: string;

  @Prop()
  @Field({ defaultValue: "active" })
  status: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Usersetting" })
  @Field({ nullable: true })
  settings?: UserSetting;
}

export const UsersSchema = SchemaFactory.createForClass(User);
