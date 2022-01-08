import { Field, ID, InputType, Int } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";
import { Player } from "../player/player.model";

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
  @Field(() => Int, { defaultValue: 0 })
  victories?: number;
  @Field(() => Int, { defaultValue: 0 })
  defeats?: number;
  @Field(() => Int, { defaultValue: 0 })
  draws?: number;
  @Field(() => Int, { defaultValue: 1000000 })
  finances?: number;
  @Field(() => [Player], { defaultValue: [] })
  players?: Player[];
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
  victories?: number;
  @Field(() => Int, { nullable: true })
  defeats?: number;
  @Field(() => Int, { nullable: true })
  draws?: number;
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
  @Field(() => [Player], { nullable: true })
  players?: Player[];
}
