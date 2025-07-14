'use client';

import Link from 'next/link';
import { ArrowRight, Volume2, Star, Check, Globe, Shield, MessageSquare, Brain, Image, Palette, TrendingUp, Download, Video, FileText, GraduationCap, Presentation, Bot } from 'lucide-react';

interface RelatedTool {
  name: string;
  path: string;
  icon: any;
  color: string;
  description: {
    es: string;
    en: string;
  };
}

interface RelatedToolsProps {
  currentService: string;
}

const allTools: RelatedTool[] = [
  {
    name: 'ChatGPT Pro',
    path: '/chatgpt-pro',
    icon: MessageSquare,
    color: 'blue',
    description: {
      es: 'IA conversacional ilimitada con GPT-4',
      en: 'Unlimited conversational AI with GPT-4'
    }
  },
  {
    name: 'ElevenLabs',
    path: '/elevenlabs',
    icon: Volume2,
    color: 'purple',
    description: {
      es: 'Text to Speech AI ilimitado',
      en: 'Unlimited Text to Speech AI'
    }
  },
  {
    name: 'HeyGen',
    path: '/heygen',
    icon: Video,
    color: 'red',
    description: {
      es: 'Creación y traducción de videos con IA',
      en: 'AI video creation and translation'
    }
  },
  {
    name: 'Fish Audio',
    path: '/fish-audio',
    icon: Volume2,
    color: 'cyan',
    description: {
      es: 'Alternativa realista a ElevenLabs',
      en: 'Realistic alternative to ElevenLabs'
    }
  },
  {
    name: 'Turboscribe',
    path: '/turboscribe',
    icon: FileText,
    color: 'emerald',
    description: {
      es: 'Transcripción de audio y video ilimitada',
      en: 'Unlimited audio and video transcription'
    }
  },
  {
    name: 'Cramly',
    path: '/cramly',
    icon: GraduationCap,
    color: 'indigo',
    description: {
      es: 'Asistente de estudio con IA',
      en: 'AI-powered study assistant'
    }
  },
  {
    name: 'Gamma',
    path: '/gamma',
    icon: Presentation,
    color: 'violet',
    description: {
      es: 'Diseño de presentaciones y sitios web con IA',
      en: 'AI-powered presentation and website design'
    }
  },
  {
    name: 'Play.HT',
    path: '/play-ht',
    icon: Volume2,
    color: 'teal',
    description: {
      es: 'Generador de texto a voz económico',
      en: 'Affordable text to speech generator'
    }
  },
  {
    name: 'ChatBot AI',
    path: '/chatbot-ai',
    icon: Bot,
    color: 'rose',
    description: {
      es: 'Chatbot todo en uno con Claude',
      en: 'All-in-one chatbot with Claude'
    }
  },
  {
    name: 'Midjourney',
    path: '/midjourney',
    icon: Image,
    color: 'pink',
    description: {
      es: 'Generación de imágenes con IA ilimitada',
      en: 'Unlimited AI image generation'
    }
  },
  {
    name: 'DeepL Pro',
    path: '/deepl-pro',
    icon: Globe,
    color: 'green',
    description: {
      es: 'Traducción IA ilimitada en 29 idiomas',
      en: 'Unlimited AI translation in 29 languages'
    }
  },
  {
    name: 'Canva Pro',
    path: '/canva-pro',
    icon: Palette,
    color: 'blue',
    description: {
      es: 'Diseño ilimitado con plantillas premium',
      en: 'Unlimited design with premium templates'
    }
  },
  {
    name: 'SEMrush',
    path: '/semrush',
    icon: TrendingUp,
    color: 'orange',
    description: {
      es: 'Análisis SEO ilimitado',
      en: 'Unlimited SEO analysis'
    }
  },
  {
    name: 'Freepik',
    path: '/freepik',
    icon: Download,
    color: 'yellow',
    description: {
      es: 'Recursos gráficos ilimitados',
      en: 'Unlimited graphic resources'
    }
  }
];

const colorClasses = {
  blue: 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30',
  purple: 'bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30',
  pink: 'bg-pink-500/20 text-pink-400 group-hover:bg-pink-500/30',
  green: 'bg-green-500/20 text-green-400 group-hover:bg-green-500/30',
  orange: 'bg-orange-500/20 text-orange-400 group-hover:bg-orange-500/30',
  yellow: 'bg-yellow-500/20 text-yellow-400 group-hover:bg-yellow-500/30',
  red: 'bg-red-500/20 text-red-400 group-hover:bg-red-500/30',
  cyan: 'bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30',
  emerald: 'bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/30',
  indigo: 'bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/30',
  violet: 'bg-violet-500/20 text-violet-400 group-hover:bg-violet-500/30',
  teal: 'bg-teal-500/20 text-teal-400 group-hover:bg-teal-500/30',
  rose: 'bg-rose-500/20 text-rose-400 group-hover:bg-rose-500/30'
};

const textColorClasses = {
  blue: 'group-hover:text-blue-400',
  purple: 'group-hover:text-purple-400',
  pink: 'group-hover:text-pink-400',
  green: 'group-hover:text-green-400',
  orange: 'group-hover:text-orange-400',
  yellow: 'group-hover:text-yellow-400',
  red: 'group-hover:text-red-400',
  cyan: 'group-hover:text-cyan-400',
  emerald: 'group-hover:text-emerald-400',
  indigo: 'group-hover:text-indigo-400',
  violet: 'group-hover:text-violet-400',
  teal: 'group-hover:text-teal-400',
  rose: 'group-hover:text-rose-400'
};

export default function RelatedTools({ currentService }: RelatedToolsProps) {
  // Filtrar herramientas relacionadas (excluir la actual)
  const relatedTools = allTools.filter(tool => tool.path !== `/${currentService}`).slice(0, 3);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Otras Herramientas de IA Premium
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedTools.map((tool) => (
              <Link key={tool.path} href={tool.path} className="group">
                <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${colorClasses[tool.color as keyof typeof colorClasses]}`}>
                    <tool.icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 transition-colors ${textColorClasses[tool.color as keyof typeof textColorClasses]}`}>
                    {tool.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {tool.description.es}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/#planes"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-bold text-lg"
            >
              Ver Todas las Herramientas
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 