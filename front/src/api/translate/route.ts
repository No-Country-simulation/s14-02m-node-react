import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
    const body = await req.text()
    const [messageUnparse, toUnparse] = body.split('&')
    const [_key, message] = messageUnparse.split('=')
    const [__key, to] = toUnparse.split('=')
    const model = process.env.GPT_MODEL
    const apikey = process.env.GPT_KEY

    const messages = [
        {
          "role": "system",
          "content": `Traduce la frase del usuario al idioma ${to} según formato iso-639-1`
        },
        {
          "role": "user",
          "content": message
        }
      ]
    
    const fetchgpt = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apikey}`
        },
        body: JSON.stringify({messages, model})
    })
    const response = await fetchgpt.json()
    return NextResponse.json(response)
}