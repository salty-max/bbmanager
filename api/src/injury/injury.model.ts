import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

import { Stat } from "../player/player.model";

@ObjectType()
@Schema()
export class Injury {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId;
  @Field(() => String)
  label: string;
  @Field(() => Boolean, { defaultValue: false })
  crippling: boolean;
  @Field(() => Boolean, { defaultValue: false })
  niggling: boolean;
  @Field(() => Stat, { nullable: true })
  afflicted_stat: Stat;
}

export type InjuryDocument = Injury & Document;
export const InjurySchema = SchemaFactory.createForClass(Injury);
