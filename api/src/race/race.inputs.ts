import { Field, ID, InputType } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

@InputType()
export class CreateRaceInput {
  @Field(() => String)
  name: string;
}

@InputType()
export class ListRaceInput {
  @Field(() => ID, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
}

@InputType()
export class UpdateRaceInput {
  @Field(() => ID)
  _id?: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
}
