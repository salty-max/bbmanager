import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

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
}

export type PositionDocument = Position & Document;
export const PositionSchema = SchemaFactory.createForClass(Position);
