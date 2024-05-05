import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateUserInput {
  @Field({ description: "Example field (placeholder)" })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field()
  email: string;
}
