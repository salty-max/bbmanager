import { Schema as MongooseSchema } from "mongoose";
import { Field, ID, InputType } from "@nestjs/graphql";

import { SkillCategory } from "./skill.model";

@InputType()
export class CreateSkillInput {
  @Field(() => String)
  name: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => SkillCategory)
  category: SkillCategory;
}

@InputType()
export class ListSkillInput {
  @Field(() => ID, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => SkillCategory, { nullable: true })
  category?: SkillCategory;
}

@InputType()
export class UpdateSkillInput {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => SkillCategory, { nullable: true })
  category?: SkillCategory;
}
