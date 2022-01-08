import { Module } from "@nestjs/common";
import { InjuryResolver } from "./injury.resolver";
import { InjuryService } from "./injury.service";
import { MongooseModule } from "@nestjs/mongoose";
import { InjurySchema } from "./injury.model";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Injury", schema: InjurySchema }]),
  ],
  providers: [InjuryService, InjuryResolver],
})
export class InjuryModule {}
