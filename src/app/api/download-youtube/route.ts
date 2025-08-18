import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Funcionalidad deshabilitada temporalmente' },
      { status: 503 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Solicitud no válida' },
      { status: 400 }
    );
  }
}