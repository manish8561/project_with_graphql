import { InputType, Field, PartialType } from "@nestjs/graphql";
import { CreateUserDto } from "./create-user.dto";

@InputType()
export class UpdateUserInput extends PartialType(CreateUserDto) {
  @Field()
  id: string;

  @Field({ defaultValue: "active" })
  status: string;
}
