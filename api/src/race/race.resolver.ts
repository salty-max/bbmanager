import { Args, Resolver, Mutation, Query, ID } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";
import { CreateRaceInput, ListRaceInput, UpdateRaceInput } from "./race.inputs";
import { Race } from "./race.model";
import { RaceService } from "./race.service";

@Resolver(() => Race)
export class RaceResolver {
  constructor(private readonly raceService: RaceService) {}

  @Query(() => Race)
  async race(
    @Args("_id", { type: () => ID }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return await this.raceService.getById(_id);
  }

  @Query(() => [Race])
  async races(@Args("filters", { nullable: true }) filters?: ListRaceInput) {
    return await this.raceService.list(filters);
  }

  @Mutation(() => Race)
  async createRace(@Args("payload") payload: CreateRaceInput) {
    return await this.raceService.create(payload);
  }

  @Mutation(() => Race)
  async updateRace(@Args("payload") payload: UpdateRaceInput) {
    return await this.raceService.update(payload);
  }

  @Mutation(() => Race)
  async deleteRace(
    @Args("_id", { type: () => ID }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return await this.raceService.delete(_id);
  }
}
