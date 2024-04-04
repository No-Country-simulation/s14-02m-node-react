import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';
import fetch from 'node-fetch';
import { configDotenv } from 'dotenv';

configDotenv()


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}



@Injectable()
export class translateService {
  async translateText(message: string, to: string): Promise<any> {
    try {
      const model = process.env.GPT_MODEL
      const apikey = process.env.GPT_KEY

      const messages = [
        {
          "role": "system",
          "content": `Translate the user's phrase to ${to} language according to iso-639-1 format, you must respond in JSON format with properties "from" which would be the iso-639-1 format of the original language written by the user, plus a second property "translated" which would be the translated language.`
        },
        {
          "role": "user",
          "content": message
        }
      ];

      const fetchGPT = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apikey}`
        },
        body: JSON.stringify({ messages, model, response_format: { "type": "json_object" } })
      });

      if (!fetchGPT.ok) {
        console.log('Estado de la respuesta:', fetchGPT.status);
        
        throw new Error('Error al realizar la solicitud a la API de OpenAI');
      }

      const response = await fetchGPT.json();
      const parsedResponse = JSON.parse(response.choices[0].message.content);
      return parsedResponse;
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Error interno del servidor');
    }
  }
}

