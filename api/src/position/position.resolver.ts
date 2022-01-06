import {
  Args,
  Resolver,
  Mutation,
  Query,
  ID,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

import { Race } from "../race/race.model";
import {
  CreatePositionInput,
  ListPositionInput,
  UpdatePositionInput,
} from "./position.inputs";
import { Position, PositionDocument } from "./position.model";
import { PositionService } from "./position.service";

@Resolver(() => Position)
export class PositionResolver {
  constructor(private readonly positionService: PositionService) {}

  @Query(() => Position)
  async position(
    @Args("_id", { type: () => ID }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return await this.positionService.getById(_id);
  }

  @Query(() => [Position])
  async positions(
    @Args("filters", { nullable: true }) filters?: ListPositionInput,
  ) {
    return await this.positionService.list(filters);
  }

  @Mutation(() => Position)
  async createPosition(@Args("payload") payload: CreatePositionInput) {
    return await this.positionService.create(payload);
  }

  @Mutation(() => Position)
  async updatePosition(@Args("payload") payload: UpdatePositionInput) {
    return await this.positionService.update(payload);
  }

  @Mutation(() => Position)
  async deletePosition(
    @Args("_id", { type: () => ID }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return await this.positionService.delete(_id);
  }

  @ResolveField()
  async race(
    @Parent() position: PositionDocument,
    @Args("populate") populate: boolean,
  ) {
    if (populate) {
      await position.populate({
        path: "race",
        model: Race.name,
      });
    }

    return position.race;
  }
}
