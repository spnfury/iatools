import { NextResponse } from 'next/server';
import { IgApiClient } from 'instagram-private-api';

function isValidInstagramUrl(value: string): boolean {
  try {
    const url = new URL(value);
    if (!/^(?:www\.)?instagram\.com$/.test(url.hostname)) return false;
    return /\/reel\//.test(url.pathname);
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    if (!isValidInstagramUrl(url)) {
      return NextResponse.json(
        { error: 'URL de Instagram no válida' },
        { status: 400 }
      );
    }

    // Extraer el código del reel de la URL
    const reelCode = url.match(/\/reel\/([^\/?#]+)/)?.[1];
    if (!reelCode) {
      return NextResponse.json(
        { error: 'URL de Instagram no válida' },
        { status: 400 }
      );
    }

    // Inicializar el cliente de Instagram
    const ig = new IgApiClient();
    
    // Configurar credenciales (puedes usar credenciales temporales)
    const username = process.env.IG_USERNAME;
    const password = process.env.IG_PASSWORD;
    if (!username || !password) {
      return NextResponse.json(
        { error: 'Servicio no disponible: faltan credenciales del proveedor' },
        { status: 503 }
      );
    }
    ig.state.generateDevice(username);
    await ig.account.login(username, password);

    // Intentar obtener la info directamente con el shortcode
    const reelInfo = await ig.media.info(reelCode);
    
    if (!reelInfo.items[0]?.video_versions?.[0]?.url) {
      throw new Error('No se pudo obtener la URL del video');
    }

    return NextResponse.json({
      downloadUrl: reelInfo.items[0].video_versions[0].url
    });

  } catch (error) {
    console.error('Error downloading reel:', error);
    return NextResponse.json(
      { error: 'Error al descargar el reel. Por favor, intenta con otro enlace o vuelve a intentarlo más tarde.' },
      { status: 500 }
    );
  }
} 