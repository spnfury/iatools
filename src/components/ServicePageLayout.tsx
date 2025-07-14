'use client';

import { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';
import Link from 'next/link';

interface ServicePageLayoutProps {
  children: React.ReactNode;
  seoData: {
    es: {
      title: string;
      description: string;
      keywords: string;
    };
    en: {
      title: string;
      description: string;
      keywords: string;
    };
  };
}

export default function ServicePageLayout({ children, seoData }: ServicePageLayoutProps) {
  const [language, setLanguage] = useState('es');

  // Actualizar metadatos dinámicamente
  useEffect(() => {
    const currentData = seoData[language as keyof typeof seoData];
    
    // Actualizar título
    document.title = currentData.title;
    
    // Actualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentData.description);
    }
    
    // Actualizar meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', currentData.keywords);
    }
    
    // Actualizar Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', currentData.title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', currentData.description);
    }
    
    // Actualizar Twitter Cards
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', currentData.title);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', currentData.description);
    }
  }, [language, seoData]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header con navegación */}
      <header className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-40 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="bg-white/10 p-1.5 rounded-lg">
              <img src="https://i.imgur.com/FWblcQ5.png" alt="IA Tools Logo" className="h-8 w-auto object-contain"/>
            </div>
            <span className="ml-3 text-lg font-bold">IA Tools</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link 
              href="/#planes" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              {language === 'es' ? 'Precios' : 'Pricing'}
            </Link>
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-lg transition-colors text-sm"
            >
              <Languages className="w-4 h-4" />
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              {language === 'es' 
                ? '© 2024 IA Tools. Todos los derechos reservados.' 
                : '© 2024 IA Tools. All rights reserved.'
              }
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                {language === 'es' ? 'Términos' : 'Terms'}
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                {language === 'es' ? 'Privacidad' : 'Privacy'}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 