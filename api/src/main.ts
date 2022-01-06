import * as dotenv from "dotenv";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

dotenv.config();

const { NODE_LOCAL_PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(NODE_LOCAL_PORT);
}
bootstrap();
