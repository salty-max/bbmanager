import { Args, Resolver, Mutation, Query, ID } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

import {
  CreateSkillInput,
  ListSkillInput,
  UpdateSkillInput,
} from "./skill.inputs";
import { Skill } from "./skill.model";
import { SkillService } from "./skill.service";

@Resolver(() => Skill)
export class SkillResolver {
  constructor(private readonly skillService: SkillService) {}

  @Query(() => Skill)
  async skill(
    @Args("_id", { type: () => ID }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return await this.skillService.getById(_id);
  }

  @Query(() => [Skill])
  async skills(@Args("filters", { nullable: true }) filters?: ListSkillInput) {
    return await this.skillService.list(filters);
  }

  @Mutation(() => Skill)
  async createSkill(@Args("payload") payload: CreateSkillInput) {
    return await this.skillService.create(payload);
  }

  @Mutation(() => Skill)
  async updateSkill(@Args("payload") payload: UpdateSkillInput) {
    return await this.skillService.update(payload);
  }

  @Mutation(() => Skill)
  async deleteSkill(
    @Args("_id", { type: () => ID }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return await this.skillService.delete(_id);
  }
}
