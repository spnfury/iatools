'use client';

import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        {/* Whop Rating Bar */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="flex items-center gap-1.5 text-sm">
            <span className="text-red-500 font-semibold">W</span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-300">Calificado 4.9/5 en Whop</span>
          </div>
        </div>
        
        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="bg-white/10 p-1.5 rounded-lg">
              <img 
                src="https://i.imgur.com/FWblcQ5.png" 
                alt="Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6" aria-label="Principal">
            <a href="#herramientas" className="text-gray-300 hover:text-white transition-colors">Herramientas</a>
            <a href="#planes" className="text-gray-300 hover:text-white transition-colors">Planes</a>
            <a href="#opiniones" className="text-gray-300 hover:text-white transition-colors">Opiniones</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
          </nav>
          
          <a 
            href="https://whop.com/checkout/plan_tNnm4kX0PhWAD/?d2c=true&a=usere6d0672893"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
          >
            Iniciar Sesión
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}