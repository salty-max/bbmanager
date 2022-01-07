import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Race } from "../race/race.model";

@ObjectType()
@Schema()
export class Team {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId;
  @Field(() => String)
  @Prop()
  name: string;
  @Field(() => String, { nullable: true })
  @Prop()
  warcry?: string;
  @Field(() => Race)
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Race.name })
  race: MongooseSchema.Types.ObjectId | Race;
  @Field(() => Int)
  @Prop()
  tv: number;
  @Field(() => Int)
  @Prop()
  finances: number;
}

export type TeamDocument = Team & Document;
export const TeamSchema = SchemaFactory.createForClass(Team);
