import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'iatools.shop - Herramientas de IA Premium',
  description: 'Acceso a más de 80 herramientas de IA y software premium en una simple suscripción.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <Script
          defer
          data-domain="iatools.shop"
          src="https://plausible.miprimermvp.com/js/script.js"
        />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
} 