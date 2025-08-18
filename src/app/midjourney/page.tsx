'use client';

import { useState } from 'react';
import { Image, Check, ArrowRight, Languages, Zap, Palette, Sparkles } from 'lucide-react';
import Link from 'next/link';
import RelatedTools from '@/components/RelatedTools';

export default function MidjourneyPage() {
  const [language, setLanguage] = useState('es');

  const content = {
    es: {
      title: "Midjourney Unlimited - IA Generación de Imágenes Gratis",
      description: "Accede a Midjourney con generación ilimitada de imágenes, sin límites. La mejor IA de generación de imágenes en español.",
      hero: {
        title: "Midjourney Unlimited",
        subtitle: "IA Generación de Imágenes Gratis",
        description: "Accede a Midjourney con generación ilimitada de imágenes, sin límites y la mejor calidad artística. Incluido en tu suscripción IA Tools.",
        cta: "Acceder Ahora"
      },
      features: [
        {
          title: "Generación Ilimitada",
          description: "Sin límites de imágenes mensuales",
          icon: Zap
        },
        {
          title: "Calidad Artística",
          description: "Imágenes de nivel profesional",
          icon: Palette
        },
        {
          title: "Estilos Avanzados",
          description: "Múltiples estilos y técnicas",
          icon: Sparkles
        }
      ],
      benefits: [
        "Generación ilimitada de imágenes",
        "Acceso a todos los modelos",
        "Estilos personalizados incluidos",
        "Generación en alta resolución",
        "Soporte para múltiples formatos",
        "Actualizaciones automáticas"
      ],
      seo: {
        title: "Midjourney Unlimited - IA Generación de Imágenes Gratis | IA Tools",
        description: "Accede a Midjourney con generación ilimitada de imágenes, sin límites. La mejor IA de generación de imágenes en español. Incluido en IA Tools.",
        keywords: "midjourney, ai art, generación de imágenes, unlimited, free, gratis, arte, imágenes, español, inglés"
      }
    },
    en: {
      title: "Midjourney Unlimited - Free AI Image Generation",
      description: "Access Midjourney with unlimited image generation, no limits. The best AI image generation in English.",
      hero: {
        title: "Midjourney Unlimited",
        subtitle: "Free AI Image Generation",
        description: "Access Midjourney with unlimited image generation, no limits and the best artistic quality. Included in your IA Tools subscription.",
        cta: "Access Now"
      },
      features: [
        {
          title: "Unlimited Generation",
          description: "No monthly image limits",
          icon: Zap
        },
        {
          title: "Artistic Quality",
          description: "Professional-level images",
          icon: Palette
        },
        {
          title: "Advanced Styles",
          description: "Multiple styles and techniques",
          icon: Sparkles
        }
      ],
      benefits: [
        "Unlimited image generation",
        "Access to all models",
        "Custom styles included",
        "High-resolution generation",
        "Support for multiple formats",
        "Automatic updates"
      ],
      seo: {
        title: "Midjourney Unlimited - Free AI Image Generation | IA Tools",
        description: "Access Midjourney with unlimited image generation, no limits. The best AI image generation in English. Included in IA Tools.",
        keywords: "midjourney, ai art, image generation, unlimited, free, art, images, english, spanish"
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
        >
          <Languages className="w-4 h-4" />
          {language === 'es' ? 'EN' : 'ES'}
        </button>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {currentContent.hero.title}
              <br />
              <span className="text-blue-400">{currentContent.hero.subtitle}</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              {currentContent.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#planes"
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition text-lg font-medium"
              >
                {currentContent.hero.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-full hover:bg-gray-700 transition text-lg font-medium">
                <Image className="w-5 h-5" />
                {language === 'es' ? 'Ver Galería' : 'View Gallery'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              {language === 'es' ? 'Características Principales' : 'Key Features'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-xl text-center group hover:bg-gray-700 transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/30 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              {language === 'es' ? 'Todo lo que incluye' : 'Everything Included'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {currentContent.benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {currentContent.benefits.slice(3).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'es' 
                ? '¿Listo para crear arte sin límites?' 
                : 'Ready to create art without limits?'
              }
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              {language === 'es'
                ? 'Únete a miles de artistas que ya usan Midjourney Unlimited'
                : 'Join thousands of artists already using Midjourney Unlimited'
              }
            </p>
            <Link 
              href="/#planes"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-bold text-lg"
            >
              {language === 'es' ? 'Comenzar Ahora' : 'Get Started Now'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 bg-gray-800/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <h2 className="text-2xl font-bold mb-6">
              {language === 'es' ? 'Midjourney Unlimited - La Mejor IA de Generación de Imágenes' : 'Midjourney Unlimited - The Best AI Image Generation'}
            </h2>
            <p className="text-gray-400 mb-4">
              {language === 'es'
                ? 'Midjourney Unlimited te ofrece acceso completo a la plataforma de generación de imágenes más avanzada del mercado. Con generación ilimitada, calidad artística premium y múltiples estilos, podrás crear imágenes profesionales para cualquier proyecto.'
                : 'Midjourney Unlimited gives you complete access to the most advanced image generation platform on the market. With unlimited generation, premium artistic quality, and multiple styles, you can create professional images for any project.'
              }
            </p>
            <p className="text-gray-400">
              {language === 'es'
                ? 'Incluido en tu suscripción IA Tools, Midjourney Unlimited elimina todas las limitaciones y te permite generar imágenes sin restricciones. Perfecto para artistas, diseñadores, creadores de contenido y cualquier profesional que necesite imágenes de alta calidad.'
                : 'Included in your IA Tools subscription, Midjourney Unlimited removes all limitations and allows you to generate images without restrictions. Perfect for artists, designers, content creators, and any professional who needs high-quality images.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <RelatedTools language={language as 'es' | 'en'} currentTool="/midjourney" />
    </div>
  );
} 