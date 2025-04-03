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

    // Extraer el código del reel de la URL
    const reelCode = url.match(/\/reel\/([^\/]+)/)?.[1];
    if (!reelCode) {
      return NextResponse.json(
        { error: 'URL de Instagram no válida' },
        { status: 400 }
      );
    }

    // Construir la URL de SaveFrom
    const saveFromUrl = `https://savefrom.net/#url=https://www.instagram.com/reel/${reelCode}/`;

    // Obtener la página de SaveFrom
    const response = await axios.get(saveFromUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Cache-Control': 'max-age=0'
      }
    });

    // Extraer la URL del video de la respuesta
    const videoUrlMatch = response.data.match(/href="(https:\/\/[^"]+\.mp4[^"]*)"/);
    if (!videoUrlMatch || !videoUrlMatch[1]) {
      throw new Error('No se pudo encontrar la URL del video');
    }

    const videoUrl = videoUrlMatch[1];

    return NextResponse.json({
      downloadUrl: videoUrl
    });

  } catch (error) {
    console.error('Error downloading reel:', error);
    return NextResponse.json(
      { error: 'Error al descargar el reel. Por favor, intenta con otro enlace o vuelve a intentarlo más tarde.' },
      { status: 500 }
    );
  }
} 