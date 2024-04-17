import { Controller, Post, Body, Get, Res, HttpStatus } from '@nestjs/common';
import { GptService } from './gpt.service';
import { Response } from 'express';
import { Payload } from './interfaces/payload.interface';

@Controller()
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('/translate')
  async translate(@Body() requestBody: Payload) {
    const response = JSON.parse(await this.gptService.translate(requestBody));
    return response;
  }

  @Post('/translate-to-audio')
  async translateToAudio(
    @Body('text') text: string,
    @Res() response: Response,
  ) {
    try {
      if (text.trim() === '') {
        response.status(HttpStatus.BAD_REQUEST).send({
          message:
            'El texto proporcionado está vacío. Por favor, proporcione un texto válido.',
        });
        return;
      }

      if (text.length > 200) {
        response.status(HttpStatus.BAD_REQUEST).send({
          message: 'El texto proporcionado excede el límite de 200 caracteres.',
        });
        return;
      }

      const result = await this.gptService.convertToAudio(text);

      if (result.success) {
        response
          .status(HttpStatus.OK)
          .json({ success: true, audioUrl: result.audioUrl });
      } else {
        response
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .send({ message: result.message });
      }
    } catch (error) {
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ message: 'Error al procesar la solicitud' });
    }
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
