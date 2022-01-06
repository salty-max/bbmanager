import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

import { Position } from "../position/position.model";

@ObjectType()
@Schema()
export class Race {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  // @Field(() => [Position])
  // @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Position.name })
  // positions: MongooseSchema.Types.ObjectId[] | Position[];
}

export type RaceDocument = Race & Document;
export const RaceSchema = SchemaFactory.createForClass(Race);
