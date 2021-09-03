import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.send("Hello world!");
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
