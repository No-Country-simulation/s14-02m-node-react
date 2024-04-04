import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {

  const body: {message: string, to: string} = await req.json()
  const model = process.env.GPT_MODEL
  const apikey = process.env.GPT_KEY
  
  const messages = [
    {
      "role": "system",
      "content": `Traduce la frase del usuario al idioma ${body.to} según formato iso-639-1, debes responder en formato JSON con propiedades "from" que sería el formato iso-639-1 del idioma original escrito por el usuario, además una segunda propiedad "translated" que sería el idioma traducido.`
    },
    {
      "role": "user",
      "content": body.message
    }
  ]
    
    const fetchgpt = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apikey}`
        },
        body: JSON.stringify({messages, model, response_format: { "type": "json_object" }})
      })
      const response = await fetchgpt.json()
      const parseGPT = JSON.parse(response.choices[0].message.content)
      return NextResponse.json(parseGPT)
    }