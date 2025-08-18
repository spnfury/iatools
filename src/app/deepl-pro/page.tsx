'use client';

import { useState } from 'react';
import { Globe, Check, ArrowRight, Languages, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import RelatedTools from '@/components/RelatedTools';

export default function DeepLProPage() {
  const [language, setLanguage] = useState('es');

  const content = {
    es: {
      title: "DeepL Pro Unlimited - Traducción IA Gratis",
      description: "Accede a DeepL Pro con traducciones ilimitadas, sin límites de caracteres. La mejor IA de traducción en español.",
      hero: {
        title: "DeepL Pro Unlimited",
        subtitle: "Traducción IA Gratis",
        description: "Accede a DeepL Pro con traducciones ilimitadas, sin límites de caracteres y la mejor calidad de traducción. Incluido en tu suscripción IA Tools.",
        cta: "Acceder Ahora"
      },
      features: [
        {
          title: "Traducciones Ilimitadas",
          description: "Sin límites de caracteres mensuales",
          icon: Zap
        },
        {
          title: "29 Idiomas",
          description: "Soporte completo para múltiples idiomas",
          icon: Globe
        },
        {
          title: "Calidad Premium",
          description: "Traducciones con contexto natural",
          icon: Shield
        }
      ],
      benefits: [
        "Traducciones ilimitadas sin restricciones",
        "Soporte para 29 idiomas diferentes",
        "API completa incluida",
        "Traducción de documentos completos",
        "Glosarios personalizados",
        "Actualizaciones automáticas"
      ],
      seo: {
        title: "DeepL Pro Unlimited - Traducción IA Gratis | IA Tools",
        description: "Accede a DeepL Pro con traducciones ilimitadas, sin límites de caracteres. La mejor IA de traducción en español. Incluido en IA Tools.",
        keywords: "deepl, traducción, translation, ai, unlimited, free, gratis, idiomas, español, inglés"
      }
    },
    en: {
      title: "DeepL Pro Unlimited - Free AI Translation",
      description: "Access DeepL Pro with unlimited translations, no character limits. The best AI translation in English.",
      hero: {
        title: "DeepL Pro Unlimited",
        subtitle: "Free AI Translation",
        description: "Access DeepL Pro with unlimited translations, no character limits and the best translation quality. Included in your IA Tools subscription.",
        cta: "Access Now"
      },
      features: [
        {
          title: "Unlimited Translations",
          description: "No monthly character limits",
          icon: Zap
        },
        {
          title: "29 Languages",
          description: "Complete support for multiple languages",
          icon: Globe
        },
        {
          title: "Premium Quality",
          description: "Natural context translations",
          icon: Shield
        }
      ],
      benefits: [
        "Unlimited translations without restrictions",
        "Support for 29 different languages",
        "Complete API included",
        "Full document translation",
        "Custom glossaries",
        "Automatic updates"
      ],
      seo: {
        title: "DeepL Pro Unlimited - Free AI Translation | IA Tools",
        description: "Access DeepL Pro with unlimited translations, no character limits. The best AI translation in English. Included in IA Tools.",
        keywords: "deepl, translation, ai, unlimited, free, languages, english, spanish"
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
                <Globe className="w-5 h-5" />
                {language === 'es' ? 'Probar Traducción' : 'Try Translation'}
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
                ? '¿Listo para traducir sin límites?' 
                : 'Ready to translate without limits?'
              }
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              {language === 'es'
                ? 'Únete a miles de usuarios que ya usan DeepL Pro Unlimited'
                : 'Join thousands of users already using DeepL Pro Unlimited'
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
              {language === 'es' ? 'DeepL Pro Unlimited - La Mejor IA de Traducción' : 'DeepL Pro Unlimited - The Best AI Translation'}
            </h2>
            <p className="text-gray-400 mb-4">
              {language === 'es'
                ? 'DeepL Pro Unlimited te ofrece acceso completo a la plataforma de traducción más avanzada del mercado. Con soporte para 29 idiomas, traducciones ilimitadas y calidad premium, podrás traducir cualquier contenido con precisión profesional.'
                : 'DeepL Pro Unlimited gives you complete access to the most advanced translation platform on the market. With support for 29 languages, unlimited translations, and premium quality, you can translate any content with professional accuracy.'
              }
            </p>
            <p className="text-gray-400">
              {language === 'es'
                ? 'Incluido en tu suscripción IA Tools, DeepL Pro Unlimited elimina todas las limitaciones y te permite traducir sin restricciones. Perfecto para empresas, traductores, desarrolladores y cualquier profesional que necesite traducciones de alta calidad.'
                : 'Included in your IA Tools subscription, DeepL Pro Unlimited removes all limitations and allows you to translate without restrictions. Perfect for businesses, translators, developers, and any professional who needs high-quality translations.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <RelatedTools language={language as 'es' | 'en'} currentTool="/deepl-pro" />
    </div>
  );
} 