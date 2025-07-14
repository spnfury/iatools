import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'iatools.shop - Herramientas de IA Premium',
  description: 'Acceso a más de 80 herramientas de IA y software premium en una simple suscripción.',
  keywords: 'IA, inteligencia artificial, ChatGPT, Midjourney, Runway, herramientas premium, automatización, diseño, SEO, ecommerce',
  authors: [{ name: 'IA Tools Team' }],
  creator: 'IA Tools',
  publisher: 'IA Tools',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://iatools.shop'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'iatools.shop - Herramientas de IA Premium',
    description: 'Acceso a más de 80 herramientas de IA y software premium en una simple suscripción.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://iatools.shop',
    siteName: 'IA Tools',
    images: [
      {
        url: '/favicon.svg',
        width: 32,
        height: 32,
        alt: 'IA Tools Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iatools.shop - Herramientas de IA Premium',
    description: 'Acceso a más de 80 herramientas de IA y software premium en una simple suscripción.',
    creator: '@iatools',
    images: ['/favicon.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.className}>
      <head>
        <Script
          strategy="afterInteractive" data-domain="iatools.shop" src="https://plausible.miprimermvp.com/js/script.js"
        />
      </head>
      <body className="bg-gray-900 text-white">
        <Header />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
} 