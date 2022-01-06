import { Document, Schema as MongooseSchema } from "mongoose";
import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum SkillCategory {
  GENERAL,
  AGILITY,
  STRENGTH,
  PASSING,
  EXTRAORDINARY,
  MUTATION,
}

registerEnumType(SkillCategory, {
  name: "SkillCategory",
  description: "Categories for skills",
});

@ObjectType()
@Schema()
export class Skill {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId;
  @Field(() => String)
  @Prop()
  name: string;
  @Field(() => String, { nullable: true })
  @Prop()
  description?: string;
  @Field(() => SkillCategory)
  @Prop()
  category: SkillCategory;
}

export type SkillDocument = Skill & Document;
export const SkillSchema = SchemaFactory.createForClass(Skill);
