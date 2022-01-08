import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema as MongooseSchema } from "mongoose";

import {
  CreatePlayerInput,
  ListPlayerInput,
  UpdatePlayerInput,
} from "./player.inputs";
import { Player, PlayerDocument } from "./player.model";

@Injectable()
export class PlayerService {
  constructor(
    @InjectModel(Player.name)
    private readonly playerModel: Model<PlayerDocument>,
  ) {}

  async create(payload: CreatePlayerInput) {
    const createdPlayer = new this.playerModel(payload);
    return await createdPlayer.save();
  }

  async getById(_id: MongooseSchema.Types.ObjectId) {
    return await this.playerModel.findById(_id).exec();
  }

  async list(filters: ListPlayerInput) {
    return await this.playerModel.find({ ...filters }).exec();
  }

  async update(payload: UpdatePlayerInput) {
    return await this.playerModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  async delete(_id: MongooseSchema.Types.ObjectId) {
    return await this.playerModel.findByIdAndDelete(_id).exec();
  }
}
