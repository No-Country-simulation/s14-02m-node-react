import { ChatCompletionTool } from 'openai/resources';

export const processLanguage: ChatCompletionTool = {
  type: 'function',
  function: {
    name: 'traductor',
    description: 'El usuario necesita traducir una palabra o frase, interpreta el mensaje y traduce el concepto. Siempre responderás el mensaje traducido, nunca le devolverás al usuario su misma frase en su idioma original.',
    parameters: {
      type: 'object',
      properties: {
        translated: {
          type: 'string',
          description: 'Traducción resultante desde el idioma original al idioma solicitado',
        },
        from: {
          type: 'string',
          description: 'Idioma del texto original solicitado por el usuario en formato ISO-369-1, ej: en, es, de, it..',
        },
      },
      required: ['translated', 'from'],
      
    },
  },
};

export const detectError: ChatCompletionTool = {
  type: 'function',
  function: {
    name: 'detector',
    description: 'Detecta frases o palabras irreconocibles',
    parameters: {
      type: 'object',
      properties: {
        error: {
          type: 'string',
          description: 'La frase enviada por el usuario no tiene lógica, es inentendible o la palabra no existe',
        },
      },
      required: ['error'],
      
    },
  },
};
