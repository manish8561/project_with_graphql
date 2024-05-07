import { ObjectType, Field } from "@nestjs/graphql";
import { UserSetting } from "./user-setting.entity";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

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

  @Prop()
  @Field({ defaultValue: "active" })
  status: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usersetting",
    autopopulate: true,
  })
  @Field({ nullable: true })
  settings?: UserSetting;
}

export const UsersSchema = SchemaFactory.createForClass(User);
