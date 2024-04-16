import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "*"
  });
  app.setGlobalPrefix("/api")
  app.use('/audio', express.static(join(__dirname, '..', 'audio')));
  await app.listen(3001);
}
bootstrap();
