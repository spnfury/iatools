'use client';

import { useState } from 'react';
import { TrendingUp, Check, ArrowRight, Languages, Zap, Search, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { generateServiceMetadata } from '@/lib/metadata';
import RelatedTools from '@/components/RelatedTools';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return generateServiceMetadata('semrush', 'es');
}

export default function SEMrushPage() {
  const [language, setLanguage] = useState('es');

  const content = {
    es: {
      title: "SEMrush Unlimited - SEO Gratis",
      description: "Accede a SEMrush con análisis ilimitado, sin límites. La mejor herramienta de SEO en español.",
      hero: {
        title: "SEMrush Unlimited",
        subtitle: "SEO Gratis",
        description: "Accede a SEMrush con análisis ilimitado, sin límites y la mejor calidad de datos SEO. Incluido en tu suscripción IA Tools.",
        cta: "Acceder Ahora"
      },
      features: [
        {
          title: "Análisis Ilimitado",
          description: "Sin límites de búsquedas mensuales",
          icon: Zap
        },
        {
          title: "Datos Completos",
          description: "Acceso a todas las métricas SEO",
          icon: Search
        },
        {
          title: "Herramientas Avanzadas",
          description: "Análisis de competencia completo",
          icon: BarChart3
        }
      ],
      benefits: [
        "Análisis ilimitado de palabras clave",
        "Acceso a todas las métricas SEO",
        "Análisis de competencia completo",
        "Auditorías de sitio ilimitadas",
        "Reportes personalizados",
        "Actualizaciones automáticas"
      ],
      seo: {
        title: "SEMrush Unlimited - SEO Gratis | IA Tools",
        description: "Accede a SEMrush con análisis ilimitado, sin límites. La mejor herramienta de SEO en español. Incluido en IA Tools.",
        keywords: "semrush, seo, keywords, unlimited, free, gratis, análisis, competencia, español, inglés"
      }
    },
    en: {
      title: "SEMrush Unlimited - Free SEO",
      description: "Access SEMrush with unlimited analysis, no limits. The best SEO tool in English.",
      hero: {
        title: "SEMrush Unlimited",
        subtitle: "Free SEO",
        description: "Access SEMrush with unlimited analysis, no limits and the best SEO data quality. Included in your IA Tools subscription.",
        cta: "Access Now"
      },
      features: [
        {
          title: "Unlimited Analysis",
          description: "No monthly search limits",
          icon: Zap
        },
        {
          title: "Complete Data",
          description: "Access to all SEO metrics",
          icon: Search
        },
        {
          title: "Advanced Tools",
          description: "Complete competition analysis",
          icon: BarChart3
        }
      ],
      benefits: [
        "Unlimited keyword analysis",
        "Access to all SEO metrics",
        "Complete competition analysis",
        "Unlimited site audits",
        "Custom reports",
        "Automatic updates"
      ],
      seo: {
        title: "SEMrush Unlimited - Free SEO | IA Tools",
        description: "Access SEMrush with unlimited analysis, no limits. The best SEO tool in English. Included in IA Tools.",
        keywords: "semrush, seo, keywords, unlimited, free, analysis, competition, english, spanish"
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
                <TrendingUp className="w-5 h-5" />
                {language === 'es' ? 'Probar Análisis' : 'Try Analysis'}
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
                ? '¿Listo para dominar el SEO?' 
                : 'Ready to dominate SEO?'
              }
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              {language === 'es'
                ? 'Únete a miles de profesionales que ya usan SEMrush Unlimited'
                : 'Join thousands of professionals already using SEMrush Unlimited'
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
              {language === 'es' ? 'SEMrush Unlimited - La Mejor Herramienta de SEO' : 'SEMrush Unlimited - The Best SEO Tool'}
            </h2>
            <p className="text-gray-400 mb-4">
              {language === 'es'
                ? 'SEMrush Unlimited te ofrece acceso completo a la plataforma de SEO más avanzada del mercado. Con análisis ilimitado, datos completos y herramientas avanzadas, podrás optimizar tu sitio web para alcanzar las primeras posiciones en Google.'
                : 'SEMrush Unlimited gives you complete access to the most advanced SEO platform on the market. With unlimited analysis, complete data, and advanced tools, you can optimize your website to reach the top positions on Google.'
              }
            </p>
            <p className="text-gray-400">
              {language === 'es'
                ? 'Incluido en tu suscripción IA Tools, SEMrush Unlimited elimina todas las limitaciones y te permite analizar sin restricciones. Perfecto para SEOs, agencias digitales, empresas y cualquier profesional que necesite herramientas de análisis SEO avanzadas.'
                : 'Included in your IA Tools subscription, SEMrush Unlimited removes all limitations and allows you to analyze without restrictions. Perfect for SEOs, digital agencies, businesses, and any professional who needs advanced SEO analysis tools.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <RelatedTools language={language as 'es' | 'en'} currentTool="/semrush" />
    </div>
  );
} 