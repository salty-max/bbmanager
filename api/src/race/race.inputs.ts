import { Field, ID, InputType } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

@InputType()
export class CreateRaceInput {
  @Field(() => String)
  name: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => [String], { nullable: true })
  benefits?: string[];
  @Field(() => [String], { nullable: true })
  drawbacks?: string[];
}

@InputType()
export class ListRaceInput {
  @Field(() => ID, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
  // @Field(() => [ID], { nullable: true })
  // positions?: [MongooseSchema.Types.ObjectId];
}

@InputType()
export class UpdateRaceInput {
  @Field(() => ID)
  _id?: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => [String], { nullable: true })
  benefits?: string[];
  @Field(() => [String], { nullable: true })
  drawbacks?: string[];
}
