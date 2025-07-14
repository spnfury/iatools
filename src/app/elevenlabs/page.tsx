'use client';

import { useState } from 'react';
import { Play, Download, Star, Check, ArrowRight, Volume2, Languages } from 'lucide-react';
import Link from 'next/link';
import { generateServiceMetadata } from '@/lib/metadata';
import RelatedTools from '@/components/RelatedTools';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return generateServiceMetadata('elevenlabs', 'es');
}

export default function ElevenLabsPage() {
  const [language, setLanguage] = useState('es');

  const content = {
    es: {
      title: "ElevenLabs Unlimited - Text to Speech AI Gratis",
      description: "Accede a ElevenLabs Pro con voces ilimitadas, sin límites de caracteres. La mejor IA de texto a voz en español.",
      hero: {
        title: "ElevenLabs Unlimited",
        subtitle: "Text to Speech AI Gratis",
        description: "Accede a ElevenLabs Pro con voces ilimitadas, sin límites de caracteres y la mejor calidad de audio. Incluido en tu suscripción IA Tools.",
        cta: "Acceder Ahora"
      },
      features: [
        {
          title: "Voces Ilimitadas",
          description: "Más de 1000 voces premium en múltiples idiomas",
          icon: Volume2
        },
        {
          title: "Sin Límites",
          description: "Genera audio sin restricciones de caracteres",
          icon: Check
        },
        {
          title: "Calidad Premium",
          description: "Audio de estudio con emociones naturales",
          icon: Star
        }
      ],
      benefits: [
        "Acceso a todas las voces premium",
        "Sin límites de caracteres mensuales",
        "Generación de audio en tiempo real",
        "Soporte para múltiples idiomas",
        "API completa incluida",
        "Actualizaciones automáticas"
      ],
      seo: {
        title: "ElevenLabs Unlimited - Text to Speech AI Gratis | IA Tools",
        description: "Accede a ElevenLabs Pro con voces ilimitadas, sin límites de caracteres. La mejor IA de texto a voz en español. Incluido en IA Tools.",
        keywords: "elevenlabs, text to speech, tts, ai voice, unlimited, free, gratis, voces, audio, español"
      }
    },
    en: {
      title: "ElevenLabs Unlimited - Free Text to Speech AI",
      description: "Access ElevenLabs Pro with unlimited voices, no character limits. The best AI text-to-speech in English.",
      hero: {
        title: "ElevenLabs Unlimited",
        subtitle: "Free Text to Speech AI",
        description: "Access ElevenLabs Pro with unlimited voices, no character limits and the best audio quality. Included in your IA Tools subscription.",
        cta: "Access Now"
      },
      features: [
        {
          title: "Unlimited Voices",
          description: "Over 1000 premium voices in multiple languages",
          icon: Volume2
        },
        {
          title: "No Limits",
          description: "Generate audio without character restrictions",
          icon: Check
        },
        {
          title: "Premium Quality",
          description: "Studio-quality audio with natural emotions",
          icon: Star
        }
      ],
      benefits: [
        "Access to all premium voices",
        "No monthly character limits",
        "Real-time audio generation",
        "Multi-language support",
        "Complete API included",
        "Automatic updates"
      ],
      seo: {
        title: "ElevenLabs Unlimited - Free Text to Speech AI | IA Tools",
        description: "Access ElevenLabs Pro with unlimited voices, no character limits. The best AI text-to-speech in English. Included in IA Tools.",
        keywords: "elevenlabs, text to speech, tts, ai voice, unlimited, free, voices, audio, english"
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
                <Play className="w-5 h-5" />
                {language === 'es' ? 'Ver Demo' : 'Watch Demo'}
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
                ? '¿Listo para crear audio profesional?' 
                : 'Ready to create professional audio?'
              }
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              {language === 'es'
                ? 'Únete a miles de creadores que ya usan ElevenLabs Unlimited'
                : 'Join thousands of creators already using ElevenLabs Unlimited'
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
              {language === 'es' ? 'ElevenLabs Unlimited - La Mejor IA de Texto a Voz' : 'ElevenLabs Unlimited - The Best AI Text to Speech'}
            </h2>
            <p className="text-gray-400 mb-4">
              {language === 'es'
                ? 'ElevenLabs Unlimited te ofrece acceso completo a la plataforma de texto a voz más avanzada del mercado. Con más de 1000 voces premium, generación ilimitada de audio y calidad de estudio, podrás crear contenido de audio profesional para cualquier proyecto.'
                : 'ElevenLabs Unlimited gives you complete access to the most advanced text-to-speech platform on the market. With over 1000 premium voices, unlimited audio generation, and studio quality, you can create professional audio content for any project.'
              }
            </p>
            <p className="text-gray-400">
              {language === 'es'
                ? 'Incluido en tu suscripción IA Tools, ElevenLabs Unlimited elimina todas las limitaciones y te permite generar audio sin restricciones. Perfecto para creadores de contenido, podcasters, desarrolladores y cualquier profesional que necesite audio de alta calidad.'
                : 'Included in your IA Tools subscription, ElevenLabs Unlimited removes all limitations and allows you to generate audio without restrictions. Perfect for content creators, podcasters, developers, and any professional who needs high-quality audio.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <RelatedTools language={language as 'es' | 'en'} currentTool="/elevenlabs" />
    </div>
  );
} 