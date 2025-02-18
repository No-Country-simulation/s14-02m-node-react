import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { OpenAI } from 'openai';
import { Payload } from './interfaces/payload.interface';
import * as fs from 'fs';
import { resolve } from 'path';
import * as crypto from 'crypto';
import { getLangByISO } from './utils/getLangByISO';
import { QUERY_TO_TRANSLATE } from './utils/gpt.queries';

@Injectable()
export class GptService {
  private openai: OpenAI;
  private model = process.env.GPT_MODEL;
  private audioFolder = resolve('./audio');
  constructor() {
    try {
      this.openai = new OpenAI({
        apiKey: process.env.GPT_KEY,
      });
    } catch (error) {
      console.error('Error al inicializar GPT:', error);
    }
  }

  async translate({ message, to }: Payload) {
    const langToTranslate = getLangByISO(to);

    const response = await this.openai.chat.completions.create({
      model: this.model,
      messages: [
        {
          role: 'system',
          content: QUERY_TO_TRANSLATE,
        },
        {
          role: 'user',
          content: `
          {
            to: ${langToTranslate.name},
            text: ${message},
          }`,
        },
      ],
      response_format: { type: 'json_object' },
    });

    const result = response.choices[0].message.content;

    if (result.includes('error')) {
      const errorMessage = JSON.parse(result);
      throw new HttpException(errorMessage.error, HttpStatus.BAD_REQUEST);
    }

    return result;
  }

  async convertToAudio(
    text: string,
  ): Promise<{ success: boolean; message?: string; audioUrl?: string }> {
    try {
      if (text.trim() === '') {
        const errorMessage =
          'El texto proporcionado está vacío. Por favor, proporcione un texto válido para convertir a audio.';
        return { success: false, message: errorMessage };
      }

      // Genera un identificador único para el archivo de audio usando crypto
      const uniqueId = crypto.randomBytes(16).toString('hex');
      const speechFile = resolve(`${this.audioFolder}/${uniqueId}.mp3`);

      const mp3 = await this.openai.audio.speech.create({
        model: process.env.VOICE_MODEL,
        voice: 'alloy',
        input: text,
      });

      const buffer = Buffer.from(await mp3.arrayBuffer());

      // Guarda el archivo localmente
      fs.writeFileSync(speechFile, buffer);

      // Devuelve la URL del archivo de audio
      const audioUrl = `/audio/${uniqueId}.mp3`;

      return { success: true, audioUrl };
    } catch (error) {
      const errorMessage = 'Error al convertir texto a audio: ' + error.message;
      return { success: false, message: errorMessage };
    }
  }
}
