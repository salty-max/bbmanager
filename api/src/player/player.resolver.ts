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

import { Injury } from "../injury/injury.model";
import { Position } from "../position/position.model";
import { Skill } from "../skill/skill.model";
import {
  CreatePlayerInput,
  ListPlayerInput,
  UpdatePlayerInput,
} from "./player.inputs";
import { Player, PlayerDocument } from "./player.model";
import { PlayerService } from "./player.service";

@Resolver(() => Player)
export class PlayerResolver {
  constructor(private readonly playerService: PlayerService) {}

  @Query(() => Player)
  async player(
    @Args("_id", { type: () => ID }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return await this.playerService.getById(_id);
  }

  @Query(() => [Player])
  async players(
    @Args("filters", { nullable: true }) filters?: ListPlayerInput,
  ) {
    return await this.playerService.list(filters);
  }

  @Mutation(() => Player)
  async createPlayer(@Args("payload") payload: CreatePlayerInput) {
    return await this.playerService.create(payload);
  }

  @Mutation(() => Player)
  async updatePlayer(@Args("payload") payload: UpdatePlayerInput) {
    return await this.playerService.update(payload);
  }

  @Mutation(() => Player)
  async deletePlayer(
    @Args("_id", { type: () => ID }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return await this.playerService.delete(_id);
  }

  @ResolveField()
  async position(
    @Parent() player: PlayerDocument,
    @Args("populate") populate: boolean,
  ) {
    if (populate) {
      await player.populate({
        path: "position",
        model: Position.name,
      });
    }

    return player.skills;
  }

  @ResolveField()
  async skills(
    @Parent() player: PlayerDocument,
    @Args("populate") populate: boolean,
  ) {
    if (populate) {
      await player.populate({
        path: "skills",
        model: Skill.name,
      });
    }

    return player.skills;
  }

  @ResolveField()
  async injuries(
    @Parent() player: PlayerDocument,
    @Args("populate") populate: boolean,
  ) {
    if (populate) {
      await player.populate({
        path: "injuries",
        model: Injury.name,
      });
    }

    return player.injuries;
  }
}
