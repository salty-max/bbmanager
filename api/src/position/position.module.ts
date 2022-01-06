import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { PositionService } from "./position.service";
import { PositionResolver } from "./position.resolver";
import { PositionSchema } from "./position.model";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Position", schema: PositionSchema }]),
  ],
  providers: [PositionService, PositionResolver],
})
export class PositionModule {}
