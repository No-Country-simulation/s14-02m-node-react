import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {

  const body: { message: string, to: string } = await req.json()
  const fetchgpt = await fetch('https://s14-02m-node-react.onrender.com/api/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: body.message, to: body.to })
  })
  const response = await fetchgpt.json()
  console.log({ response });
  return NextResponse.json(response)
}