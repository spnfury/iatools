'use client';

import { useState } from 'react';
import { Palette, Check, ArrowRight, Languages, Zap, Image, Sparkles } from 'lucide-react';
import Link from 'next/link';
import RelatedTools from '@/components/RelatedTools';

export default function CanvaProPage() {
  const [language, setLanguage] = useState('es');

  const content = {
    es: {
      title: "Canva Pro Unlimited - Diseño Gratis",
      description: "Accede a Canva Pro con elementos ilimitados, sin límites. La mejor herramienta de diseño en español.",
      hero: {
        title: "Canva Pro Unlimited",
        subtitle: "Diseño Gratis",
        description: "Accede a Canva Pro con elementos ilimitados, sin límites y la mejor calidad de diseño. Incluido en tu suscripción IA Tools.",
        cta: "Acceder Ahora"
      },
      features: [
        {
          title: "Elementos Ilimitados",
          description: "Sin límites de descargas mensuales",
          icon: Zap
        },
        {
          title: "Plantillas Premium",
          description: "Acceso a todas las plantillas",
          icon: Image
        },
        {
          title: "Herramientas Avanzadas",
          description: "Funciones profesionales incluidas",
          icon: Sparkles
        }
      ],
      benefits: [
        "Elementos ilimitados sin restricciones",
        "Acceso a todas las plantillas premium",
        "Herramientas de IA incluidas",
        "Fondo remover automático",
        "Almacenamiento ilimitado",
        "Actualizaciones automáticas"
      ],
      seo: {
        title: "Canva Pro Unlimited - Diseño Gratis | IA Tools",
        description: "Accede a Canva Pro con elementos ilimitados, sin límites. La mejor herramienta de diseño en español. Incluido en IA Tools.",
        keywords: "canva, diseño, design, unlimited, free, gratis, plantillas, templates, español, inglés"
      }
    },
    en: {
      title: "Canva Pro Unlimited - Free Design",
      description: "Access Canva Pro with unlimited elements, no limits. The best design tool in English.",
      hero: {
        title: "Canva Pro Unlimited",
        subtitle: "Free Design",
        description: "Access Canva Pro with unlimited elements, no limits and the best design quality. Included in your IA Tools subscription.",
        cta: "Access Now"
      },
      features: [
        {
          title: "Unlimited Elements",
          description: "No monthly download limits",
          icon: Zap
        },
        {
          title: "Premium Templates",
          description: "Access to all templates",
          icon: Image
        },
        {
          title: "Advanced Tools",
          description: "Professional features included",
          icon: Sparkles
        }
      ],
      benefits: [
        "Unlimited elements without restrictions",
        "Access to all premium templates",
        "AI tools included",
        "Automatic background removal",
        "Unlimited storage",
        "Automatic updates"
      ],
      seo: {
        title: "Canva Pro Unlimited - Free Design | IA Tools",
        description: "Access Canva Pro with unlimited elements, no limits. The best design tool in English. Included in IA Tools.",
        keywords: "canva, design, unlimited, free, templates, english, spanish"
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
                <Palette className="w-5 h-5" />
                {language === 'es' ? 'Ver Plantillas' : 'View Templates'}
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
                ? '¿Listo para diseñar sin límites?' 
                : 'Ready to design without limits?'
              }
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              {language === 'es'
                ? 'Únete a millones de diseñadores que ya usan Canva Pro Unlimited'
                : 'Join millions of designers already using Canva Pro Unlimited'
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
              {language === 'es' ? 'Canva Pro Unlimited - La Mejor Herramienta de Diseño' : 'Canva Pro Unlimited - The Best Design Tool'}
            </h2>
            <p className="text-gray-400 mb-4">
              {language === 'es'
                ? 'Canva Pro Unlimited te ofrece acceso completo a la plataforma de diseño más popular del mercado. Con elementos ilimitados, plantillas premium y herramientas avanzadas, podrás crear diseños profesionales para cualquier proyecto.'
                : 'Canva Pro Unlimited gives you complete access to the most popular design platform on the market. With unlimited elements, premium templates, and advanced tools, you can create professional designs for any project.'
              }
            </p>
            <p className="text-gray-400">
              {language === 'es'
                ? 'Incluido en tu suscripción IA Tools, Canva Pro Unlimited elimina todas las limitaciones y te permite diseñar sin restricciones. Perfecto para diseñadores, creadores de contenido, empresas y cualquier profesional que necesite herramientas de diseño avanzadas.'
                : 'Included in your IA Tools subscription, Canva Pro Unlimited removes all limitations and allows you to design without restrictions. Perfect for designers, content creators, businesses, and any professional who needs advanced design tools.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <RelatedTools language={language as 'es' | 'en'} currentTool="/canva-pro" />
    </div>
  );
} 