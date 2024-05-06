import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateUserInput {
  @Field({ nullable: true })
  name: string;

  @Field()
  email: string;
}
