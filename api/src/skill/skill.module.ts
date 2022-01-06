import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { SkillService } from "./skill.service";
import { SkillResolver } from "./skill.resolver";
import { SkillSchema } from "./skill.model";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Skill", schema: SkillSchema }]),
  ],
  providers: [SkillService, SkillResolver],
})
export class SkillModule {}
