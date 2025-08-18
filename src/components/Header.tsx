'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="bg-white/10 p-1.5 rounded-lg">
            <img 
              src="https://i.imgur.com/FWblcQ5.png" 
              alt="Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-8" aria-label="Principal">
          <a href="#herramientas" className="text-gray-300 hover:text-white">Herramientas</a>
          <a href="#planes" className="text-gray-300 hover:text-white">Precios</a>
          <a href="#opiniones" className="text-gray-300 hover:text-white">Opiniones</a>
          <a href="#faq" className="text-gray-300 hover:text-white">FAQ</a>
          <Link href="/reels" className="text-gray-300 hover:text-white">Descargar Reels</Link>
        </nav>
      </div>
    </header>
  );
}