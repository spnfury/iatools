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

    // Extraer el ID del video de la URL
    const videoId = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1];
    if (!videoId) {
      return NextResponse.json(
        { error: 'URL de YouTube no válida' },
        { status: 400 }
      );
    }

    // Construir la URL de SnapInsta
    const snapInstaUrl = `https://snapinsta.app/api/ajaxSearch`;

    // Obtener la URL del video
    const response = await axios.post(snapInstaUrl, {
      q: `https://www.youtube.com/watch?v=${videoId}`,
      t: 'media',
      lang: 'es'
    }, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://snapinsta.app',
        'Referer': 'https://snapinsta.app/'
      }
    });

    if (!response.data || !response.data.url) {
      throw new Error('No se pudo obtener la URL del video');
    }

    return NextResponse.json({
      downloadUrl: response.data.url
    });

  } catch (error) {
    console.error('Error downloading video:', error);
    return NextResponse.json(
      { error: 'Error al descargar el video. Por favor, intenta con otro enlace o vuelve a intentarlo más tarde.' },
      { status: 500 }
    );
  }
} 