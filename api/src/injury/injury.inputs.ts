import { Field, ID, InputType } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";
import { Stat } from "src/player/player.model";

@InputType()
export class CreateInjuryInput {
  @Field(() => String)
  label: string;
  @Field(() => Boolean, { defaultValue: false })
  crippling?: boolean;
  @Field(() => Boolean, { defaultValue: false })
  niggling?: boolean;
  @Field(() => Stat, { nullable: true })
  afflicted_stat?: Stat;
}

@InputType()
export class ListInjuryInput {
  @Field(() => ID, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  label?: string;
  @Field(() => Boolean, { nullable: true })
  crippling?: boolean;
  @Field(() => Boolean, { nullable: true })
  niggling?: boolean;
  @Field(() => Stat, { nullable: true })
  afflicted_stat?: Stat;
}

@InputType()
export class UpdateInjuryInput {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  label?: string;
  @Field(() => Boolean, { nullable: true })
  crippling?: boolean;
  @Field(() => Boolean, { nullable: true })
  niggling?: boolean;
  @Field(() => Stat, { nullable: true })
  afflicted_stat?: Stat;
}
