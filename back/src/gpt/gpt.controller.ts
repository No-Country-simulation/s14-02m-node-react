import { Controller, Post, Body, Get } from '@nestjs/common';
import { GptService } from './gpt.service';
import { Payload } from './interfaces/payload.interface';

@Controller()
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('/translate')
  async translate(@Body() requestBody: Payload) {
    const jsonRes = JSON.parse(await this.gptService.translate(requestBody));
    return jsonRes;
  }

  @Get('/test')
  test() {
    return 'el controlador de rutas gpt funciona :)';
  }

  @Post('/test')
  testPost(@Body() body: any) {
    return body;
  }
}
