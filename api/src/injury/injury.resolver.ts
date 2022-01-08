import { Args, Resolver, Mutation, Query, ID } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

import {
  CreateInjuryInput,
  ListInjuryInput,
  UpdateInjuryInput,
} from "./injury.inputs";
import { Injury } from "./injury.model";
import { InjuryService } from "./injury.service";

@Resolver(() => Injury)
export class InjuryResolver {
  constructor(private readonly injuryService: InjuryService) {}

  @Query(() => Injury)
  async injury(
    @Args("_id", { type: () => ID }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return await this.injuryService.getById(_id);
  }

  @Query(() => [Injury])
  async injurys(
    @Args("filters", { nullable: true }) filters?: ListInjuryInput,
  ) {
    return await this.injuryService.list(filters);
  }

  @Mutation(() => Injury)
  async createInjury(@Args("payload") payload: CreateInjuryInput) {
    return await this.injuryService.create(payload);
  }

  @Mutation(() => Injury)
  async updateInjury(@Args("payload") payload: UpdateInjuryInput) {
    return await this.injuryService.update(payload);
  }

  @Mutation(() => Injury)
  async deleteInjury(
    @Args("_id", { type: () => ID }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return await this.injuryService.delete(_id);
  }
}
