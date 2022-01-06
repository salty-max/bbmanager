import { Model, Schema as MongooseSchema } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Skill, SkillDocument } from "./skill.model";
import {
  CreateSkillInput,
  ListSkillInput,
  UpdateSkillInput,
} from "./skill.inputs";

@Injectable()
export class SkillService {
  constructor(
    @InjectModel(Skill.name) private readonly skillModel: Model<SkillDocument>,
  ) {}

  async create(payload: CreateSkillInput) {
    const createdSkill = new this.skillModel(payload);
    return await createdSkill.save();
  }

  async getById(_id: MongooseSchema.Types.ObjectId) {
    return this.skillModel.findById(_id).exec();
  }

  async list(filters: ListSkillInput) {
    return await this.skillModel.find({ ...filters }).exec();
  }

  async update(payload: UpdateSkillInput) {
    return await this.skillModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  async delete(_id: MongooseSchema.Types.ObjectId) {
    return await this.skillModel.findByIdAndDelete(_id).exec();
  }
}
