import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TranslationController } from './app.controller';
import { translateService } from './app.service'

@Module({
  imports: [],
  controllers: [AppController, TranslationController],
  providers: [AppService, translateService],
})
export class AppModule {}
