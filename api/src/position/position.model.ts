import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Skill } from "src/skill/skill.model";

import { Race } from "../race/race.model";

@ObjectType()
@Schema()
export class Position {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => Race)
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Race.name })
  race: MongooseSchema.Types.ObjectId | Race;

  @Field(() => Int)
  @Prop()
  cost: number;

  @Prop()
  movement: number;

  @Field(() => Int)
  @Prop()
  strength: number;

  @Field(() => Int)
  @Prop()
  agility: number;

  @Field(() => Int)
  @Prop()
  armour: number;

  @Field(() => [Skill])
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Skill.name })
  prebuilt_skills: MongooseSchema.Types.ObjectId[] | Skill[];

  @Field(() => Int)
  @Prop()
  max_per_team: number;
}

export type PositionDocument = Position & Document;
export const PositionSchema = SchemaFactory.createForClass(Position);
