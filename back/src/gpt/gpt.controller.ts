import { Controller, Post, Body, Get,Res, HttpStatus } from '@nestjs/common';
import { GptService } from './gpt.service';
import { Response } from 'express';
import { Payload } from './interfaces/payload.interface';

@Controller()
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('/translate')
  async translate(@Body() requestBody: Payload) {
    const jsonRes = JSON.parse(await this.gptService.translate(requestBody));
    return jsonRes;
  }
  @Post('/translate-to-audio')
  async translateToAudio(@Body('text') text: string, @Res() response: Response) {
      try {
          if (text.trim() === '') {
              // Si el texto está vacío, envía un mensaje de error con el código de estado 400
              response.status(HttpStatus.BAD_REQUEST).send({ message: 'El texto proporcionado está vacío. Por favor, proporcione un texto válido.' });
              return;
          }
          const result = await this.gptService.convertToAudio(text);
  
          if (result.success) {
              // Configura los encabezados de la respuesta HTTP para enviar el archivo de audio
              response.set('Content-Type', 'audio/mpeg');
              response.set('Content-Disposition', 'attachment; filename="translated_audio.mp3"');
  
              // Envía el contenido del archivo de audio al cliente como respuesta
              response.send(result.audioContent);
          } else {
              response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: result.message });
          }
      } catch (error) {
          response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Error al procesar la solicitud' });
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
