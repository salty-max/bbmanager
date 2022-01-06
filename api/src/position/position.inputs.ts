import { Field, ID, InputType } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

@InputType()
export class CreatePositionInput {
  @Field(() => String)
  name: string;
  @Field(() => ID)
  race: MongooseSchema.Types.ObjectId;
}

@InputType()
export class ListPositionInput {
  @Field(() => ID, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => ID, { nullable: true })
  race?: MongooseSchema.Types.ObjectId;
}

@InputType()
export class UpdatePositionInput {
  @Field(() => ID)
  _id?: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => ID, { nullable: true })
  race?: MongooseSchema.Types.ObjectId;
}
