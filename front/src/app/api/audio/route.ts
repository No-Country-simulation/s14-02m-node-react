import { AudioResponse } from '@/interfaces/backRes.interface'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  try {    
    const body: { text: string } = await req.json()
    const fetchgpt = await fetch(`${process.env.BACKEND_URL}/api/translate-to-audio`, {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: body.text })
    })
    const response: AudioResponse = await fetchgpt.json()
    const withBackendResponse: AudioResponse = {
        success: true,
        audioUrl: `${process.env.BACKEND_URL}${response.audioUrl}`
    }
    return NextResponse.json(withBackendResponse)
  } catch (error) {
    console.log({error_del_catch: error});
    return NextResponse.json({error: 'No se pudo obtener el audio'})
  }
}
