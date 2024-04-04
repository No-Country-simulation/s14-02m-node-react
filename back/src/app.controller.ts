import { Controller, Post, Get, Body } from '@nestjs/common';
import { AppService,  translateService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}




@Controller('api')
export class TranslationController {
  constructor(private readonly translateService: translateService) {}

  @Post('/translate')
  async translateText(@Body() requestBody: { message: string, to: string }): Promise<string> {
    try {
      const translatedText = await this.translateService.translateText(requestBody.message, requestBody.to);
      return translatedText;
    } catch (error) {
      console.error('Error al realizar la traducción:', error);
      throw error;
    }
  }
}