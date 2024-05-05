import { ObjectType, Field, Float } from "@nestjs/graphql";

@ObjectType()
export class Product {
  @Field(() => String, { description: "id in string format for mongodb" })
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Float)
  price: number;

  @Field({ defaultValue: "active" })
  status: string;
}
