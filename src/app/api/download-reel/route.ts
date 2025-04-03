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
    const reelCode = url.match(/\/reel\/([^\/\?]+)/)?.[1];
    if (!reelCode) {
      return NextResponse.json(
        { error: 'Invalid Instagram reel URL' },
        { status: 400 }
      );
    }

    const ig = new IgApiClient();
    
    // Iniciar sesión (necesitarás credenciales válidas)
    ig.state.generateDevice(process.env.IG_USERNAME || '');
    await ig.account.login(process.env.IG_USERNAME || '', process.env.IG_PASSWORD || '');

    // Obtener la información del reel
    const reelInfo = await ig.media.info(reelCode);
    
    // Obtener la URL del video
    const videoUrl = reelInfo.items[0].video_versions[0].url;

    return NextResponse.json({
      downloadUrl: videoUrl
    });

  } catch (error) {
    console.error('Error downloading reel:', error);
    return NextResponse.json(
      { error: 'Error downloading reel. Please try again later.' },
      { status: 500 }
    );
  }
} 