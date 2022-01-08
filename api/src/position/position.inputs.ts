import { Field, ID, InputType, Int } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

@InputType()
export class CreatePositionInput {
  @Field(() => String)
  name: string;
  @Field(() => ID)
  race: MongooseSchema.Types.ObjectId;
  @Field(() => Int)
  cost: number;
  @Field(() => Int)
  movement: number;
  @Field(() => Int)
  strength: number;
  @Field(() => Int)
  agility: number;
  @Field(() => Int)
  armour: number;
  @Field(() => [ID], { nullable: true })
  prebuilt_skills?: MongooseSchema.Types.ObjectId[];
  @Field(() => Int)
  max_per_team: number;
}

@InputType()
export class ListPositionInput {
  @Field(() => ID, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Int, { nullable: true })
  cost?: number;
  @Field(() => Int, { nullable: true })
  movement?: number;
  @Field(() => Int, { nullable: true })
  strength?: number;
  @Field(() => Int, { nullable: true })
  agility?: number;
  @Field(() => Int, { nullable: true })
  armour?: number;
  @Field(() => ID, { nullable: true })
  race?: MongooseSchema.Types.ObjectId;
  @Field(() => [ID], { nullable: true })
  prebuilt_skills?: MongooseSchema.Types.ObjectId[];
}

@InputType()
export class UpdatePositionInput {
  @Field(() => ID)
  _id?: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Int, { nullable: true })
  cost?: number;
  @Field(() => Int, { nullable: true })
  movement?: number;
  @Field(() => Int, { nullable: true })
  strength?: number;
  @Field(() => Int, { nullable: true })
  agility?: number;
  @Field(() => Int, { nullable: true })
  armour?: number;
  @Field(() => ID, { nullable: true })
  race?: MongooseSchema.Types.ObjectId;
  @Field(() => [ID], { nullable: true })
  prebuilt_skills?: MongooseSchema.Types.ObjectId[];
  @Field(() => Int, { nullable: true })
  max_per_team?: number;
}
