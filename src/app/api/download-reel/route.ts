import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    // Aquí iría la lógica real para descargar el reel
    // Por ahora devolvemos una URL de ejemplo
    const response = await axios.get(`https://api.instagram.com/v1/media/shortcode/${url}`, {
      headers: {
        'Authorization': `Bearer ${process.env.INSTAGRAM_ACCESS_TOKEN}`
      }
    });

    // En un caso real, aquí procesaríamos la respuesta de Instagram
    // y devolveríamos la URL del video
    return NextResponse.json({
      downloadUrl: 'https://example.com/video.mp4'
    });

  } catch (error) {
    console.error('Error downloading reel:', error);
    return NextResponse.json(
      { error: 'Error downloading reel' },
      { status: 500 }
    );
  }
} 