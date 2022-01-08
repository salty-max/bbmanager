import { Field, ID, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

import { Skill } from "../skill/skill.model";
import { Position } from "../position/position.model";
import { Injury } from "../injury/injury.model";

@ObjectType()
@Schema()
export class Player {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => Position)
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Position.name })
  position: MongooseSchema.Types.ObjectId | Position;

  @Field(() => Int)
  @Prop()
  spp: number;

  @Field(() => Int)
  @Prop()
  level: number;

  @Field(() => Int)
  @Prop()
  value: number;

  @Field(() => Int)
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
  skills: MongooseSchema.Types.ObjectId[] | Skill[];

  @Field(() => [Injury])
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Injury.name })
  injuries: MongooseSchema.Types.ObjectId[] | Injury[];
}

export enum Stat {
  MOVEMENT,
  STRENGTH,
  AGILITY,
  ARMOUR,
}

registerEnumType(Stat, {
  name: "Stat",
  description: "Different player statistics",
});

export type PlayerDocument = Player & Document;
export const PlayerSchema = SchemaFactory.createForClass(Player);
