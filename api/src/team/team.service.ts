import { Model, Schema as MongooseSchema } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Team, TeamDocument } from "./team.model";
import { CreateTeamInput, ListTeamInput, UpdateTeamInput } from "./team.inputs";

@Injectable()
export class TeamService {
  constructor(
    @InjectModel(Team.name) private readonly teamModel: Model<TeamDocument>,
  ) {}

  async create(payload: CreateTeamInput) {
    const createdTeam = new this.teamModel(payload);
    return await createdTeam.save();
  }

  async getById(_id: MongooseSchema.Types.ObjectId) {
    return this.teamModel.findById(_id).exec();
  }

  async list(filters: ListTeamInput) {
    return await this.teamModel.find({ ...filters }).exec();
  }

  async update(payload: UpdateTeamInput) {
    return await this.teamModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  async delete(_id: MongooseSchema.Types.ObjectId) {
    return await this.teamModel.findByIdAndDelete(_id).exec();
  }
}
