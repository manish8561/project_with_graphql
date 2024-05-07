import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Field({ nullable: true })
  name: string;

  @ApiProperty({
    description: "Email of the customer",
  })
  @IsEmail()
  @IsNotEmpty()
  @Field()
  email: string;
}
