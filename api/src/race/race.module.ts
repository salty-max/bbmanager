import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { RaceService } from "./race.service";
import { RaceResolver } from "./race.resolver";
import { RaceSchema } from "./race.model";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Race", schema: RaceSchema }])],
  providers: [RaceService, RaceResolver],
})
export class RaceModule {}
