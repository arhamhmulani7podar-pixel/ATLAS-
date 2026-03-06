import { NextRequest, NextResponse } from 'next/server';
import { validateIdea } from '@/lib/aiEngine';

export async function POST(request: NextRequest) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: 'Server misconfiguration: OPENAI_API_KEY is not set' },
      { status: 500 }
    );
  }

  try {
    const { idea } = await request.json();

    if (!idea || typeof idea !== 'string') {
      return NextResponse.json(
        { error: 'Invalid idea provided' },
        { status: 400 }
      );
    }

    const result = await validateIdea(idea);
    return NextResponse.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Validation error:', error);
    return NextResponse.json(
      { error: 'Failed to validate idea', details: message },
      { status: 500 }
    );
  }
}
