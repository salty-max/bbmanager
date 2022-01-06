import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema as MongooseSchema } from "mongoose";

import {
  CreatePositionInput,
  ListPositionInput,
  UpdatePositionInput,
} from "./position.inputs";
import { Position, PositionDocument } from "./position.model";

@Injectable()
export class PositionService {
  constructor(
    @InjectModel(Position.name)
    private readonly positionModel: Model<PositionDocument>,
  ) {}

  async create(payload: CreatePositionInput) {
    const createdPosition = new this.positionModel(payload);
    return await createdPosition.save();
  }

  async getById(_id: MongooseSchema.Types.ObjectId) {
    return await this.positionModel.findById(_id).exec();
  }

  async list(filters: ListPositionInput) {
    return await this.positionModel.find({ ...filters }).exec();
  }

  async update(payload: UpdatePositionInput) {
    return await this.positionModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  async delete(_id: MongooseSchema.Types.ObjectId) {
    return await this.positionModel.findByIdAndDelete(_id).exec();
  }
}
