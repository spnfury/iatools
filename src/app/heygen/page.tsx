import { Metadata } from 'next';
import { generateServiceMetadata } from '@/lib/metadata';
import RelatedTools from '@/components/RelatedTools';

export const metadata: Metadata = generateServiceMetadata('heygen');

export default function HeyGenPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              HeyGen Unlimited - Creación y Traducción de Videos IA
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Crea, traduce y personaliza videos en minutos con inteligencia artificial avanzada. 
              Incluido en IA Tools con acceso ilimitado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://whop.com/checkout/plan_tNnm4kX0PhWAD?d2c=true&a=usere6d0672893"
                className="bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition text-lg font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Obtener Acceso Ahora
              </a>
              <a 
                href="#caracteristicas"
                className="border border-gray-600 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition text-lg font-medium"
              >
                Ver Características
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-20 bg-gray-800/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Características Principales
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Creación de Videos IA</h3>
              <p className="text-gray-400">
                Genera videos profesionales con avatares AI, voces naturales y scripts automáticos. 
                Crea contenido en minutos sin necesidad de equipos costosos.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Traducción Automática</h3>
              <p className="text-gray-400">
                Traduce videos a múltiples idiomas manteniendo la sincronización de labios y 
                expresiones naturales. Soporte para más de 40 idiomas.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Personalización Avanzada</h3>
              <p className="text-gray-400">
                Personaliza avatares, voces, gestos y expresiones. Crea videos únicos que 
                reflejen tu marca y mensaje específico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Beneficios de HeyGen
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Ahorro de Tiempo</h3>
                <p className="text-gray-400">Crea videos en minutos en lugar de horas o días</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Reducción de Costos</h3>
                <p className="text-gray-400">Elimina la necesidad de actores, estudios y equipos costosos</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Escalabilidad Global</h3>
                <p className="text-gray-400">Llega a audiencias internacionales con traducción automática</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Calidad Profesional</h3>
                <p className="text-gray-400">Videos de alta calidad con avatares y voces realistas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comienza a Crear Videos con IA Hoy
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Accede a HeyGen y más de 40 herramientas premium por solo 25€/mes
          </p>
          <a 
            href="https://whop.com/checkout/plan_tNnm4kX0PhWAD?d2c=true&a=usere6d0672893"
            className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition text-lg font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Obtener Acceso Ahora
          </a>
        </div>
      </section>

      {/* Related Tools */}
      <RelatedTools currentTool="/heygen" />
    </div>
  );
} 