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
    const reelCode = url.match(/\/reel\/([^\/\?]+)/)?.[1];
    if (!reelCode) {
      return NextResponse.json(
        { error: 'Invalid Instagram reel URL' },
        { status: 400 }
      );
    }

    // Construir la URL de la API de SaveFrom
    const apiUrl = `https://api.savefrom.net/api/single/convert?url=${encodeURIComponent(url)}&format=mp4`;

    // Hacer la petición a la API
    const response = await axios.get(apiUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.data || !response.data.url) {
      throw new Error('No se pudo obtener la URL del video');
    }

    return NextResponse.json({
      downloadUrl: response.data.url
    });

  } catch (error) {
    console.error('Error downloading reel:', error);
    return NextResponse.json(
      { error: 'Error al descargar el reel. Por favor, intenta con otro enlace.' },
      { status: 500 }
    );
  }
} 