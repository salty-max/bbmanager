import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema as MongooseSchema } from "mongoose";
import { CreateRaceInput, ListRaceInput, UpdateRaceInput } from "./race.inputs";
import { Race, RaceDocument } from "./race.model";

@Injectable()
export class RaceService {
  constructor(
    @InjectModel(Race.name) private readonly raceModel: Model<RaceDocument>,
  ) {}

  async create(payload: CreateRaceInput) {
    const createdRace = new this.raceModel(payload);
    return await createdRace.save();
  }

  async getById(_id: MongooseSchema.Types.ObjectId) {
    return this.raceModel.findById(_id).exec();
  }

  async list(filters: ListRaceInput) {
    return await this.raceModel.find({ ...filters }).exec();
  }

  async update(payload: UpdateRaceInput) {
    return this.raceModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  async delete(_id: MongooseSchema.Types.ObjectId) {
    return this.raceModel.findByIdAndDelete(_id).exec();
  }
}
