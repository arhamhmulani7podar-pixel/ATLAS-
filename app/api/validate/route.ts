import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { idea } = await request.json();

    if (!idea || typeof idea !== 'string') {
      return NextResponse.json(
        { error: 'Invalid idea provided' },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are a startup validation expert. Analyze startup ideas and return structured JSON with: market_demand (string), competition (string), monetization (string), difficulty (string), score (number 0-100), summary (string), strengths (array), weaknesses (array).',
        },
        {
          role: 'user',
          content: `Analyze this startup idea: ${idea}`,
        },
      ],
      temperature: 0.7,
      response_format: { type: 'json_object' },
    });

    const result = JSON.parse(completion.choices[0].message.content || '{}');

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Validation error:', error);
    return NextResponse.json(
      { error: 'Failed to validate idea', details: error.message },
      { status: 500 }
    );
  }
}
