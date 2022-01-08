import { Module } from "@nestjs/common";
import { PlayerService } from "./player.service";
import { PlayerResolver } from "./player.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { PlayerSchema } from "./player.model";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Player", schema: PlayerSchema }]),
  ],
  providers: [PlayerService, PlayerResolver],
})
export class PlayerModule {}
