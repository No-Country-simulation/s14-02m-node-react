import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';
import { Payload } from './interfaces/payload.interface';

@Injectable()
export class GptService {
  private openai: OpenAI;
  private model = process.env.GPT_MODEL;

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
    const response = await this.openai.chat.completions.create({
      model: this.model,
      messages: [
        {
          role: 'system',
          content: `Translate the user's phrase to ${to} language according to iso-639-1 format, you must respond in JSON format with properties "from" which would be the iso-639-1 format of the original language written by the user, plus a second property "translated" which would be the translated language.`,
        },
        {
          role: 'user',
          content: message,
        },
      ],
      response_format: { type: 'json_object' },
    });

    return response.choices[0].message.content;
  }
}
