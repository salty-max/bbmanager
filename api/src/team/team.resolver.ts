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
import { Race } from "src/race/race.model";

import { CreateTeamInput, ListTeamInput, UpdateTeamInput } from "./team.inputs";
import { Team, TeamDocument } from "./team.model";
import { TeamService } from "./team.service";

@Resolver(() => Team)
export class TeamResolver {
  constructor(private readonly teamService: TeamService) {}

  @Query(() => Team)
  async team(
    @Args("_id", { type: () => ID }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return await this.teamService.getById(_id);
  }

  @Query(() => [Team])
  async teams(@Args("filters", { nullable: true }) filters?: ListTeamInput) {
    return await this.teamService.list(filters);
  }

  @Mutation(() => Team)
  async createTeam(@Args("payload") payload: CreateTeamInput) {
    return await this.teamService.create(payload);
  }

  @Mutation(() => Team)
  async updateTeam(@Args("payload") payload: UpdateTeamInput) {
    return await this.teamService.update(payload);
  }

  @Mutation(() => Team)
  async deleteTeam(
    @Args("_id", { type: () => ID }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return await this.teamService.delete(_id);
  }

  @ResolveField()
  async race(
    @Parent() team: TeamDocument,
    @Args("populate") populate: boolean,
  ) {
    if (populate)
      await team.populate({
        path: "race",
        model: Race.name,
      });

    return team.race;
  }
}
