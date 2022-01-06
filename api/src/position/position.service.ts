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

  create(payload: CreatePositionInput) {
    const createdPosition = new this.positionModel(payload);
    return createdPosition.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.positionModel.findById(_id).exec();
  }

  list(filters: ListPositionInput) {
    return this.positionModel.find({ ...filters }).exec();
  }

  update(payload: UpdatePositionInput) {
    return this.positionModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.positionModel.findByIdAndDelete(_id).exec();
  }
}
