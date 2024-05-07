import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { USER_STATUS } from "src/constants/enums";
@InputType()
export class UpdateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Field()
  name: string;

  @ApiProperty({ default: USER_STATUS.Active })
  @IsString()
  @IsNotEmpty()
  @IsEnum(USER_STATUS)
  @Field({ defaultValue: USER_STATUS.Active })
  status: string;
}
