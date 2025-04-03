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

    // Primero obtenemos el token de SnapTik
    const tokenResponse = await axios.get('https://snaptik.app/action-ajax.php', {
      params: {
        url,
        lang: 'es',
        token: '',
        format: 'mp4'
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
        'Origin': 'https://snaptik.app',
        'Referer': 'https://snaptik.app/'
      }
    });

    if (!tokenResponse.data || !tokenResponse.data.token) {
      throw new Error('No se pudo obtener el token de SnapTik');
    }

    // Luego usamos el token para obtener la URL del video
    const videoResponse = await axios.get('https://snaptik.app/action-ajax.php', {
      params: {
        url,
        lang: 'es',
        token: tokenResponse.data.token,
        format: 'mp4'
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
        'Origin': 'https://snaptik.app',
        'Referer': 'https://snaptik.app/'
      }
    });

    if (!videoResponse.data || !videoResponse.data.url) {
      throw new Error('No se pudo obtener la URL del video');
    }

    return NextResponse.json({
      downloadUrl: videoResponse.data.url
    });

  } catch (error) {
    console.error('Error downloading reel:', error);
    return NextResponse.json(
      { error: 'Error al descargar el reel. Por favor, intenta con otro reel o más tarde.' },
      { status: 500 }
    );
  }
} 