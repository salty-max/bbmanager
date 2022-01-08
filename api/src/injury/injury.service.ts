import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema as MongooseSchema } from "mongoose";

import {
  CreateInjuryInput,
  ListInjuryInput,
  UpdateInjuryInput,
} from "./injury.inputs";
import { Injury, InjuryDocument } from "./injury.model";

@Injectable()
export class InjuryService {
  constructor(
    @InjectModel(Injury.name)
    private readonly injuryModel: Model<InjuryDocument>,
  ) {}

  async create(payload: CreateInjuryInput) {
    const createdInjury = new this.injuryModel(payload);
    return await createdInjury.save();
  }

  async getById(_id: MongooseSchema.Types.ObjectId) {
    return await this.injuryModel.findById(_id).exec();
  }

  async list(filters: ListInjuryInput) {
    return await this.injuryModel.find({ ...filters }).exec();
  }

  async update(payload: UpdateInjuryInput) {
    return await this.injuryModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  async delete(_id: MongooseSchema.Types.ObjectId) {
    return await this.injuryModel.findByIdAndDelete(_id).exec();
  }
}
