'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
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
        <nav className="flex space-x-8">
          <Link 
            href="/" 
            className={`${pathname === '/' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Inicio
          </Link>
          <Link 
            href="/terms" 
            className={`${pathname === '/terms' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Términos
          </Link>
        </nav>
      </div>
    </header>
  );
} 