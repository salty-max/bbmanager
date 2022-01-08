import { Field, ID, InputType, Int } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

@InputType()
export class CreatePlayerInput {
  @Field(() => String)
  name: string;

  @Field(() => ID)
  position: MongooseSchema.Types.ObjectId;

  @Field(() => Int, { defaultValue: 0 })
  spp?: number;

  @Field(() => Int, { defaultValue: 1 })
  level?: number;

  @Field(() => Int, { defaultValue: 0 })
  value?: number;

  @Field(() => Int)
  movement: number;

  @Field(() => Int)
  strength: number;

  @Field(() => Int)
  agility: number;

  @Field(() => Int)
  armour: number;

  @Field(() => [ID], { defaultValue: [] })
  skills?: MongooseSchema.Types.ObjectId[];

  @Field(() => [ID], { defaultValue: [] })
  injuries?: MongooseSchema.Types.ObjectId[];
}

@InputType()
export class ListPlayerInput {
  @Field(() => ID, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => ID, { nullable: true })
  position?: MongooseSchema.Types.ObjectId;

  @Field(() => Int, { nullable: true })
  spp?: number;

  @Field(() => Int, { nullable: true })
  level?: number;

  @Field(() => Int, { nullable: true })
  value?: number;

  @Field(() => Int, { nullable: true })
  movement?: number;

  @Field(() => Int, { nullable: true })
  strength?: number;

  @Field(() => Int, { nullable: true })
  agility?: number;

  @Field(() => Int, { nullable: true })
  armour?: number;

  @Field(() => [ID], { nullable: true })
  skills?: MongooseSchema.Types.ObjectId[];

  @Field(() => [ID], { nullable: true })
  injuries?: MongooseSchema.Types.ObjectId[];
}

@InputType()
export class UpdatePlayerInput {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => ID, { nullable: true })
  position?: MongooseSchema.Types.ObjectId;

  @Field(() => Int, { nullable: true })
  spp?: number;

  @Field(() => Int, { nullable: true })
  level?: number;

  @Field(() => Int, { nullable: true })
  value?: number;

  @Field(() => Int, { nullable: true })
  movement?: number;

  @Field(() => Int, { nullable: true })
  strength?: number;

  @Field(() => Int, { nullable: true })
  agility?: number;

  @Field(() => Int, { nullable: true })
  armour?: number;

  @Field(() => [ID], { nullable: true })
  skills?: MongooseSchema.Types.ObjectId[];

  @Field(() => [ID], { nullable: true })
  injuries?: MongooseSchema.Types.ObjectId[];
}
