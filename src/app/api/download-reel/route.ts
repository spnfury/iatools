import { NextResponse } from 'next/server';
import { IgApiClient } from 'instagram-private-api';

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

    // Inicializar el cliente de Instagram
    const ig = new IgApiClient();
    
    // Configurar credenciales (puedes usar credenciales temporales)
    ig.state.generateDevice(process.env.IG_USERNAME || '');
    await ig.account.login(process.env.IG_USERNAME || '', process.env.IG_PASSWORD || '');

    // Obtener la información del reel
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