import { Field, ID, InputType, Int } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

@InputType()
export class CreateTeamInput {
  @Field(() => String)
  name: string;
  @Field(() => String, { nullable: true })
  warcry?: string;
  @Field(() => ID)
  race: MongooseSchema.Types.ObjectId;
  @Field(() => Int, { defaultValue: 0 })
  tv?: number;
  @Field(() => Int, { defaultValue: 1000000 })
  finances?: number;
}

@InputType()
export class ListTeamInput {
  @Field(() => ID, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  warcry?: string;
  @Field(() => ID, { nullable: true })
  race?: MongooseSchema.Types.ObjectId;
  @Field(() => Int, { nullable: true })
  tv?: number;
  @Field(() => Int, { nullable: true })
  finances?: number;
}

@InputType()
export class UpdateTeamInput {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  warcry?: string;
  @Field(() => ID, { nullable: true })
  race?: MongooseSchema.Types.ObjectId;
  @Field(() => Int, { nullable: true })
  tv?: number;
  @Field(() => Int, { nullable: true })
  finances?: number;
}
