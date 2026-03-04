import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Descargar Reels de Instagram | iatools.shop',
  description: 'Descarga reels de Instagram en formato MP4 de forma rápida y sencilla. Solo pega la URL del reel y descárgalo al instante.',
  keywords: 'descargar reels instagram, descargar videos instagram, instagram reels downloader, descargar reels mp4',
  openGraph: {
    title: 'Descargar Reels de Instagram | iatools.shop',
    description: 'Descarga reels de Instagram en formato MP4 de forma rápida y sencilla. Solo pega la URL del reel y descárgalo al instante.',
    type: 'website',
    url: 'https://iatools.iapasion.com/reels',
  },
};

export default function ReelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 