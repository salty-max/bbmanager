import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { TeamService } from "./team.service";
import { TeamResolver } from "./team.resolver";
import { TeamSchema } from "./team.model";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Team", schema: TeamSchema }])],
  providers: [TeamService, TeamResolver],
})
export class TeamModule {}
