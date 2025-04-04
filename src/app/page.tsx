'use client';

import { Brain, ChevronDown, Plus, Check, ArrowRight } from 'lucide-react';
import { useState, useRef, RefObject } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import SharedFooter from '@/components/SharedFooter';

interface Tool {
  name: string;
  price: string;
}

interface ToolCategories {
  [key: string]: Tool[];
}

export default function Home() {
  const whopCheckoutUrl = "https://whop.com/checkout/plan_tNnm4kX0PhWAD?d2c=true&a=usere6d0672893";
  const whopCheckoutUrla = "https://whop.com/checkout/plan_QfbHBxoZh4Skr?d2c=true&a=usere6d0672893";
  
  const [activeTab, setActiveTab] = useState('ai');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isAnnual, setIsAnnual] = useState(true);
  
  // Referencias para las secciones
  const herramientasRef = useRef<HTMLDivElement>(null);
  const opinionesRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const planesRef = useRef<HTMLDivElement>(null);
  
  const toolCategories: ToolCategories = {
    ai: [
      { name: "ChatGPT Plus", price: "20€/mes" },
      { name: "BypassGPT", price: "49€/mes" },
      { name: "Perplexity Pro", price: "25€/mes" },
      { name: "Play.ht", price: "99€/mes" },
      { name: "ElevenLabs", price: "20€/mes" },
      { name: "QuillBot", price: "19,95€/mes" },
      { name: "DeepL Pro", price: "39,99€/mes" },
      { name: "Midjourney", price: "30€/mes" },
      { name: "Runway", price: "95€/mes" },
      { name: "Mokker AI", price: "45€/mes" },
      { name: "Submagic", price: "150€/mes" },
      { name: "insMind", price: "Gratis" }
    ],
    ecommerce: [
      { name: "Helium 10", price: "279€/mes" },
      { name: "AMZScout", price: "149,99€/mes" },
      { name: "SmartScout", price: "97€/mes" },
      { name: "ZonBase", price: "83€/mes" },
      { name: "NicheScraper", price: "15€/mes" },
      { name: "Zik Analytics", price: "44,99€/mes" },
      { name: "Pexda", price: "99,95€/mes" },
      { name: "PPSpy", price: "299€/mes" },
      { name: "Peeksta", price: "49€/mes" },
      { name: "Dropship.io", price: "79€/mes" },
      { name: "WinningHunter", price: "90€/mes" },
      { name: "ShopHunter", price: "60€/mes" },
      { name: "Adsparo", price: "70€/mes" },
      { name: "AdSpy", price: "150€/mes" },
      { name: "Dropispy", price: "249€/mes" },
      { name: "OnlyAds", price: "150€/mes" },
      { name: "PinSpy", price: "49€/mes" },
      { name: "Adnosaur", price: "99€/mes" },
      { name: "FutureLib", price: "99€/mes" }
    ],
    design: [
      { name: "Canva Pro", price: "15€/mes" },
      { name: "Clipchamp", price: "12€/mes" },
      { name: "Envato Elements", price: "33€/mes" },
      { name: "Freepik", price: "36€/mes" },
      { name: "PicsArt", price: "10€/mes" },
      { name: "PhotoRoom", price: "20€/mes" },
      { name: "InVideo", price: "30€/mes" },
      { name: "Pacdora", price: "29€/mes" },
      { name: "Prezi", price: "25€/mes" },
      { name: "CapCut Pro", price: "25,99€/mes" },
      { name: "DesignBeast", price: "69€/mes" },
      { name: "Fomo Clips", price: "67€/mes" },
      { name: "Loom", price: "12€/mes" }
    ],
    seo: [
      { name: "HaloScan", price: "399€/mes" },
      { name: "SpyFu", price: "79€/mes" },
      { name: "WooRank", price: "199€/mes" },
      { name: "SEOScout", price: "199€/mes" },
      { name: "Spin Rewriter", price: "47€/mes" },
      { name: "Majestic SEO", price: "99€/mes" },
      { name: "Semrush (Business)", price: "499€/mes" },
      { name: "Mangools", price: "129€/mes" },
      { name: "SpamZilla", price: "37€/mes" },
      { name: "Seoptimer", price: "59€/mes" },
      { name: "SEOZoom", price: "569€/mes" },
      { name: "SearchAtlas", price: "99€/mes" },
      { name: "Keysearch", price: "17€/mes" },
      { name: "DomCop", price: "99€/mes" },
      { name: "YourText.Guru", price: "99€/mes" },
      { name: "Quetext Pro", price: "10€/mes" },
      { name: "Rank Math PRO", price: "7€/mes" },
      { name: "Article Builder", price: "22€/mes" }
    ],
    other: [
      { name: "Surfshark VPN", price: "13€/mes" },
      { name: "FlutterFlow", price: "30€/mes" },
      { name: "Tutor LMS", price: "Licencia" },
      { name: "Bricks Builder", price: "Licencia" },
      { name: "CreativeSea", price: "Recurso" },
      { name: "Cromur", price: "Recurso" },
      { name: "ThemeinWP", price: "Recurso" },
      { name: "Foro de Affiliate Marketing", price: "99€/mes" },
      { name: "Ultimate Affiliate Programs", price: "Gratis" },
      { name: "Hunter.io", price: "49€/mes" },
      { name: "Brain.fm", price: "9,99€/mes" },
      { name: "Foreplay", price: "99€/mes" },
      { name: "CreativeOS", price: "99€/mes" }
    ]
  };

  // Calcular el valor total de todas las herramientas
  const calculateTotalValue = () => {
    let total = 0;
    
    Object.values(toolCategories).forEach(category => {
      category.forEach(tool => {
        if (tool.price !== "Gratis" && tool.price !== "Licencia" && tool.price !== "Recurso") {
          const priceString = tool.price.replace('€/mes', '').replace(',', '.');
          const price = parseFloat(priceString);
          if (!isNaN(price)) {
            total += price;
          }
        }
      });
    });
    
    return Math.round(total);
  };

  const totalValue = calculateTotalValue();
  
  // Función para desplazarse a una sección
  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Datos para el slider de herramientas con URLs actualizadas
  const toolLogos = [
    { name: "ChatGPT Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
    { name: "Runway", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQx_65omIQIfN-todQNSMT3cwxxcxgcVjJuQ&s" },
    { name: "Elevenlabs", logo: "/images/logos/elevenlabs.png" },
    { name: "Canva", logo: "https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg" },
    { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
    { name: "Semrush", logo: "/images/logos/semrush.png" },
    { name: "Deepl", logo: "https://static.deepl.com/img/logo/DeepL_Logo_darkBlue_v2.svg" },
    { name: "Freepik", logo: "/images/logos/freepik.png" },
    { name: "Midjourney", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png" },
    { name: "Perplexity", logo: "https://www.perplexity.ai/favicon.ico" },
    { name: "Helium 10", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Helium_logo.svg" },
    { name: "Envato", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Envato_logo.svg" }
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Consigue <span className="text-blue-400">+40 Herramientas</span>
            <br />de IA, Automatización y Diseño
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Ahora • <span className="text-pink-500">3000€</span> en herramientas premium como ChatGPT Pro, Runway, y más. Incluye templates, scripts, y recursos para la automatización.
          </p>
          <a 
            href="#planes"
            onClick={(e) => { e.preventDefault(); scrollToSection(planesRef); }}
            className="inline-block bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition text-lg font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Registrarse ahora →
          </a>
          
          {/* Tool Logos Slider - Improved version */}
          <div className="mt-16 overflow-hidden">
            <div className="flex flex-nowrap animate-scroll">
              {[...toolLogos, ...toolLogos].map((tool, index) => (
                <div key={index} className="flex-none w-1/3 md:w-1/4 lg:w-1/6 px-4">
                  <div className="text-center">
                    <div className="h-16 flex items-center justify-center bg-gray-800/30 rounded-lg p-2">
                      <img 
                        src={tool.logo} 
                        alt={tool.name} 
                        className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition mx-auto"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback a un icono genérico si la imagen falla
                          e.currentTarget.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                          e.currentTarget.onerror = null; // Evitar bucle infinito
                        }}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-400">{tool.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Descubre el Poder de Nuestras Herramientas
            </h2>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/I58NjXVz7o8"
                title="Video demostración de iatools.shop"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-gray-400 text-center mt-6 text-lg">
              Mira cómo nuestras herramientas de IA pueden transformar tu flujo de trabajo
            </p>
          </div>
        </div>
      </section>

      {/* Complete Tool List Section */}
      <section ref={herramientasRef} id="herramientas" className="py-20 bg-gray-800/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Catálogo Completo de Herramientas
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Más de 80 herramientas premium para potenciar tu negocio y creatividad
          </p>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              { id: 'ai', label: 'Inteligencia Artificial' },
              { id: 'ecommerce', label: 'Ecommerce' },
              { id: 'design', label: 'Diseño' },
              { id: 'seo', label: 'SEO' },
              { id: 'other', label: 'Otros' }
            ].map(category => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === category.id 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {/* Tool Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {toolCategories[activeTab].map((tool: Tool, index: number) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                <span className="font-medium">{tool.name}</span>
                <span className="text-sm bg-blue-500/20 text-blue-300 px-2 py-1 rounded">{tool.price}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="mb-4">
              <p className="text-lg">
                <span className="text-gray-400">Valor total:</span> 
                <span className="line-through text-gray-500 ml-2">{totalValue}€/mes</span>
                <span className="text-green-400 font-bold ml-3">¡Ahorra {totalValue - 25}€!</span>
              </p>
            </div>
            <a 
              href="#planes"
              onClick={(e) => { e.preventDefault(); scrollToSection(planesRef); }}
              className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition text-lg font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accede a todas por solo 25€/mes
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Todo lo necesario para escalar tu
            <br />negocio, en una simple suscripción
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Acceso a herramientas premium de IA, integración y automatización sin complicaciones
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">IAs Premium</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>ChatGPT Pro</li>
                <li>Perplexity Pro</li>
                <li>Midjourney</li>
                <li>Runway</li>
                <li>ElevenLabs</li>
                <li>Play.ht</li>
                <li>QuillBot</li>
                <li>Submagic</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ecommerce</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Helium 10</li>
                <li>AMZScout</li>
                <li>Zik Analytics</li>
                <li>Dropship.io</li>
                <li>AdSpy</li>
                <li>Y más...</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Diseño y SEO</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Canva Pro</li>
                <li>Envato Elements</li>
                <li>Freepik</li>
                <li>Semrush Business</li>
                <li>SpyFu</li>
                <li>Y más...</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Productividad</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>DeepL Pro</li>
                <li>Loom</li>
                <li>Brain.fm</li>
                <li>Hunter.io</li>
                <li>Actualizaciones semanales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={opinionesRef} id="opiniones" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">¿Qué opinan nuestros suscriptores?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                  alt="User"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold">Usuario Premium</h4>
                  <p className="text-gray-400">@usuario</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Las herramientas de IA son increíbles. He podido automatizar gran parte de mi trabajo con ChatGPT Pro y Runway."
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                  alt="User"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold">Usuario Premium</h4>
                  <p className="text-gray-400">@usuario</p>
                </div>
              </div>
              <p className="text-gray-300">
                "El acceso a todas las herramientas premium como Elevenlabs y Canva en un solo lugar es increíble."
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
                  alt="User"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold">Usuario Premium</h4>
                  <p className="text-gray-400">@usuario</p>
                </div>
              </div>
              <p className="text-gray-300">
                "La combinación de herramientas de IA y diseño me permite crear contenido de calidad en minutos."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section ref={planesRef} id="planes" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Escoge tu suscripción</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Plan Selector */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Mensual</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>Anual</span>
            </div>

            <div className="bg-blue-600 p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-blue-800 text-sm px-3 py-1 rounded-full">
                {isAnnual ? 'Mejor valor' : 'Popular'}
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Plan Premium</h3>
                <p className="text-blue-200">Acceso completo a todas las herramientas</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold">{isAnnual ? '18,91€' : '25€'}</span>
                <span className="text-blue-200">/mes</span>
                {isAnnual && (
                  <div className="text-sm text-blue-200 mt-1">Facturado anualmente (227€/año)</div>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>Acceso a +80 herramientas premium</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>Soporte prioritario 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>Actualizaciones semanales</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>Templates y recursos exclusivos</span>
                </li>
              </ul>
              <a 
                href={isAnnual ? whopCheckoutUrla : whopCheckoutUrl}
                className="block w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Suscribirse ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} id="faq" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Preguntas Frecuentes</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "¿Cómo puedo acceder a las herramientas?",
                answer: "Una vez que te suscribas, recibirás acceso inmediato a todas las herramientas a través de tu panel de control personal. Cada herramienta incluye instrucciones detalladas de configuración y uso."
              },
              {
                question: "¿Necesito conocimientos técnicos?",
                answer: "No, la mayoría de las herramientas están diseñadas para ser intuitivas y fáciles de usar. Además, proporcionamos guías paso a paso y soporte técnico para ayudarte a aprovechar al máximo cada herramienta."
              },
              {
                question: "¿Puedo cancelar en cualquier momento?",
                answer: "Sí, puedes cancelar tu suscripción en cualquier momento. No hay compromiso a largo plazo y no te cobraremos nada adicional después de la cancelación."
              },
              {
                question: "¿Ofrecen soporte técnico?",
                answer: "Sí, ofrecemos soporte técnico prioritario 24/7 para todos nuestros suscriptores. Puedes contactarnos a través de email o nuestro sistema de tickets para recibir ayuda inmediata."
              },
              {
                question: "¿Las herramientas se actualizan?",
                answer: "Sí, actualizamos regularmente nuestras herramientas para incluir las últimas características y mejoras. Los suscriptores reciben acceso automático a todas las actualizaciones sin costo adicional."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-xl">
                <button 
                  className="w-full flex justify-between items-center"
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                >
                  <span className="font-medium text-left">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-200 ${
                      expandedFaq === i ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === i && (
                  <div className="mt-4 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer normal */}
      <Footer />

      {/* Footer compartido */}
      <SharedFooter currentProject="iatools.shop" />

      {/* Webcraft.ai Badge - Updated to match Gamma style */}
      <a
        href="https://webcraft.solutions"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-3 py-1.5 rounded-md text-xs font-medium shadow-lg flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity"
      >
        <Brain className="w-3.5 h-3.5" />
        Create Websites with AI
      </a>
    </main>
  );
} 