import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';

@Injectable()
export class GptService {
  private gptInstance: OpenAI;

  constructor() {
    try {
      this.gptInstance = new OpenAI({
        apiKey: process.env.GPT_KEY, 
      });
    } catch (error) {
      console.error('Error al inicializar GPT:', error);
    }
  }}