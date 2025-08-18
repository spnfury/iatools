'use client';

import { useState } from 'react';
import { Download, Check, ArrowRight, Languages, Zap, Image, Sparkles } from 'lucide-react';
import Link from 'next/link';
import RelatedTools from '@/components/RelatedTools';

export default function FreepikPage() {
  const [language, setLanguage] = useState('es');

  const content = {
    es: {
      title: "Freepik Unlimited - Recursos Gratis",
      description: "Accede a Freepik con descargas ilimitadas, sin límites. La mejor biblioteca de recursos gráficos en español.",
      hero: {
        title: "Freepik Unlimited",
        subtitle: "Recursos Gratis",
        description: "Accede a Freepik con descargas ilimitadas, sin límites y la mejor calidad de recursos gráficos. Incluido en tu suscripción IA Tools.",
        cta: "Acceder Ahora"
      },
      features: [
        {
          title: "Descargas Ilimitadas",
          description: "Sin límites de descargas mensuales",
          icon: Zap
        },
        {
          title: "Recursos Premium",
          description: "Acceso a toda la biblioteca",
          icon: Image
        },
        {
          title: "Formatos Múltiples",
          description: "Vectores, fotos y PSD incluidos",
          icon: Sparkles
        }
      ],
      benefits: [
        "Descargas ilimitadas sin restricciones",
        "Acceso a todos los recursos premium",
        "Vectores en alta calidad",
        "Fotos profesionales incluidas",
        "Archivos PSD editables",
        "Actualizaciones automáticas"
      ],
      seo: {
        title: "Freepik Unlimited - Recursos Gratis | IA Tools",
        description: "Accede a Freepik con descargas ilimitadas, sin límites. La mejor biblioteca de recursos gráficos en español. Incluido en IA Tools.",
        keywords: "freepik, recursos, vectores, fotos, unlimited, free, gratis, gráficos, español, inglés"
      }
    },
    en: {
      title: "Freepik Unlimited - Free Resources",
      description: "Access Freepik with unlimited downloads, no limits. The best graphic resources library in English.",
      hero: {
        title: "Freepik Unlimited",
        subtitle: "Free Resources",
        description: "Access Freepik with unlimited downloads, no limits and the best graphic resources quality. Included in your IA Tools subscription.",
        cta: "Access Now"
      },
      features: [
        {
          title: "Unlimited Downloads",
          description: "No monthly download limits",
          icon: Zap
        },
        {
          title: "Premium Resources",
          description: "Access to entire library",
          icon: Image
        },
        {
          title: "Multiple Formats",
          description: "Vectors, photos and PSD included",
          icon: Sparkles
        }
      ],
      benefits: [
        "Unlimited downloads without restrictions",
        "Access to all premium resources",
        "High-quality vectors",
        "Professional photos included",
        "Editable PSD files",
        "Automatic updates"
      ],
      seo: {
        title: "Freepik Unlimited - Free Resources | IA Tools",
        description: "Access Freepik with unlimited downloads, no limits. The best graphic resources library in English. Included in IA Tools.",
        keywords: "freepik, resources, vectors, photos, unlimited, free, graphics, english, spanish"
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
                <Download className="w-5 h-5" />
                {language === 'es' ? 'Ver Recursos' : 'View Resources'}
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
                ? '¿Listo para descargar sin límites?' 
                : 'Ready to download without limits?'
              }
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              {language === 'es'
                ? 'Únete a millones de diseñadores que ya usan Freepik Unlimited'
                : 'Join millions of designers already using Freepik Unlimited'
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
              {language === 'es' ? 'Freepik Unlimited - La Mejor Biblioteca de Recursos' : 'Freepik Unlimited - The Best Resources Library'}
            </h2>
            <p className="text-gray-400 mb-4">
              {language === 'es'
                ? 'Freepik Unlimited te ofrece acceso completo a la biblioteca de recursos gráficos más grande del mercado. Con descargas ilimitadas, recursos premium y múltiples formatos, podrás encontrar todo lo que necesitas para tus proyectos de diseño.'
                : 'Freepik Unlimited gives you complete access to the largest graphic resources library on the market. With unlimited downloads, premium resources, and multiple formats, you can find everything you need for your design projects.'
              }
            </p>
            <p className="text-gray-400">
              {language === 'es'
                ? 'Incluido en tu suscripción IA Tools, Freepik Unlimited elimina todas las limitaciones y te permite descargar sin restricciones. Perfecto para diseñadores, creadores de contenido, empresas y cualquier profesional que necesite recursos gráficos de alta calidad.'
                : 'Included in your IA Tools subscription, Freepik Unlimited removes all limitations and allows you to download without restrictions. Perfect for designers, content creators, businesses, and any professional who needs high-quality graphic resources.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <RelatedTools language={language as 'es' | 'en'} currentTool="/freepik" />
    </div>
  );
} 