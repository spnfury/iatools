'use client';

import { useState } from 'react';
import { MessageSquare, Check, ArrowRight, Languages, Zap, Brain, Sparkles } from 'lucide-react';
import Link from 'next/link';
import RelatedTools from '@/components/RelatedTools';

export default function ChatGPTProPage() {
  const [language, setLanguage] = useState('es');

  const content = {
    es: {
      title: "ChatGPT Pro Unlimited - IA Gratis",
      description: "Accede a ChatGPT Pro con uso ilimitado, sin límites de mensajes. La mejor IA conversacional en español.",
      hero: {
        title: "ChatGPT Pro Unlimited",
        subtitle: "IA Gratis",
        description: "Accede a ChatGPT Pro con uso ilimitado, sin límites de mensajes y acceso a GPT-4. Incluido en tu suscripción IA Tools.",
        cta: "Acceder Ahora"
      },
      features: [
        {
          title: "Uso Ilimitado",
          description: "Sin límites de mensajes mensuales",
          icon: Zap
        },
        {
          title: "GPT-4 Incluido",
          description: "Acceso completo a la IA más avanzada",
          icon: Brain
        },
        {
          title: "Plugins Premium",
          description: "Todos los plugins y herramientas",
          icon: Sparkles
        }
      ],
      benefits: [
        "Chat ilimitado sin restricciones",
        "Acceso completo a GPT-4",
        "Todos los plugins incluidos",
        "Generación de código avanzada",
        "Análisis de datos complejos",
        "Actualizaciones automáticas"
      ],
      seo: {
        title: "ChatGPT Pro Unlimited - IA Gratis | IA Tools",
        description: "Accede a ChatGPT Pro con uso ilimitado, sin límites de mensajes. La mejor IA conversacional en español. Incluido en IA Tools.",
        keywords: "chatgpt, gpt-4, ai, unlimited, free, gratis, chat, conversación, español, inglés"
      }
    },
    en: {
      title: "ChatGPT Pro Unlimited - Free AI",
      description: "Access ChatGPT Pro with unlimited usage, no message limits. The best conversational AI in English.",
      hero: {
        title: "ChatGPT Pro Unlimited",
        subtitle: "Free AI",
        description: "Access ChatGPT Pro with unlimited usage, no message limits and GPT-4 access. Included in your IA Tools subscription.",
        cta: "Access Now"
      },
      features: [
        {
          title: "Unlimited Usage",
          description: "No monthly message limits",
          icon: Zap
        },
        {
          title: "GPT-4 Included",
          description: "Complete access to the most advanced AI",
          icon: Brain
        },
        {
          title: "Premium Plugins",
          description: "All plugins and tools included",
          icon: Sparkles
        }
      ],
      benefits: [
        "Unlimited chat without restrictions",
        "Complete GPT-4 access",
        "All plugins included",
        "Advanced code generation",
        "Complex data analysis",
        "Automatic updates"
      ],
      seo: {
        title: "ChatGPT Pro Unlimited - Free AI | IA Tools",
        description: "Access ChatGPT Pro with unlimited usage, no message limits. The best conversational AI in English. Included in IA Tools.",
        keywords: "chatgpt, gpt-4, ai, unlimited, free, chat, conversation, english, spanish"
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
                <MessageSquare className="w-5 h-5" />
                {language === 'es' ? 'Probar Chat' : 'Try Chat'}
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
                ? '¿Listo para conversar sin límites?' 
                : 'Ready to chat without limits?'
              }
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              {language === 'es'
                ? 'Únete a millones de usuarios que ya usan ChatGPT Pro Unlimited'
                : 'Join millions of users already using ChatGPT Pro Unlimited'
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
              {language === 'es' ? 'ChatGPT Pro Unlimited - La Mejor IA Conversacional' : 'ChatGPT Pro Unlimited - The Best Conversational AI'}
            </h2>
            <p className="text-gray-400 mb-4">
              {language === 'es'
                ? 'ChatGPT Pro Unlimited te ofrece acceso completo a la IA conversacional más avanzada del mercado. Con GPT-4, plugins premium y uso ilimitado, podrás realizar cualquier tarea conversacional con la máxima calidad y sin restricciones.'
                : 'ChatGPT Pro Unlimited gives you complete access to the most advanced conversational AI on the market. With GPT-4, premium plugins, and unlimited usage, you can perform any conversational task with maximum quality and without restrictions.'
              }
            </p>
            <p className="text-gray-400">
              {language === 'es'
                ? 'Incluido en tu suscripción IA Tools, ChatGPT Pro Unlimited elimina todas las limitaciones y te permite usar la IA sin restricciones. Perfecto para desarrolladores, escritores, estudiantes y cualquier profesional que necesite asistencia conversacional avanzada.'
                : 'Included in your IA Tools subscription, ChatGPT Pro Unlimited removes all limitations and allows you to use AI without restrictions. Perfect for developers, writers, students, and any professional who needs advanced conversational assistance.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <RelatedTools language={language as 'es' | 'en'} currentTool="/chatgpt-pro" />
    </div>
  );
} 