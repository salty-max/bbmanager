import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
@ObjectType()
@Schema()
export class Race {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String, { nullable: true })
  @Prop()
  description: string;

  @Field(() => [String], { nullable: true })
  @Prop()
  benefits: string[];

  @Field(() => [String], { nullable: true })
  @Prop()
  drawbacks: string[];

  // @Field(() => [Position])
  // @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Position.name })
  // positions: MongooseSchema.Types.ObjectId[] | Position[];
}

export type RaceDocument = Race & Document;
export const RaceSchema = SchemaFactory.createForClass(Race);
