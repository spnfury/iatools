import { Metadata } from 'next';
import { generateServiceMetadata } from '@/lib/metadata';
import RelatedTools from '@/components/RelatedTools';

export const metadata: Metadata = generateServiceMetadata('play-ht');

export default function PlayHTPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Play.HT Unlimited - Text to Speech IA Gratis
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Alternativa económica a ElevenLabs. Generador de texto a voz con voces naturales 
              y expresivas. Incluido en IA Tools.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Voces Naturales</h3>
              <p className="text-gray-400">
                Más de 600 voces en 60+ idiomas con entonación natural y expresiva. 
                Calidad de estudio sin sonido robótico.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Velocidad Ultra</h3>
              <p className="text-gray-400">
                Genera audio en segundos. Tecnología IA avanzada para conversión 
                rápida de texto a voz de alta calidad.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Control Avanzado</h3>
              <p className="text-gray-400">
                Ajusta velocidad, tono, pausas y énfasis. Control total sobre 
                la expresión y entonación del audio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            ¿Por qué elegir Play.HT?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Alternativa Económica</h3>
                <p className="text-gray-400">Más barato que ElevenLabs con calidad similar</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Múltiples Idiomas</h3>
                <p className="text-gray-400">Soporte para más de 60 idiomas</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Sin Límites</h3>
                <p className="text-gray-400">Generación ilimitada de audio</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Fácil Integración</h3>
                <p className="text-gray-400">API y herramientas para desarrolladores</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-800/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Casos de Uso
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Audiolibros</h3>
              <p className="text-gray-400">
                Convierte libros electrónicos en audiolibros con voces naturales 
                y expresivas para diferentes géneros.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Videos Educativos</h3>
              <p className="text-gray-400">
                Crea narraciones para cursos online, tutoriales y contenido 
                educativo con voces claras y profesionales.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Aplicaciones</h3>
              <p className="text-gray-400">
                Integra voces IA en aplicaciones móviles, juegos y 
                sistemas de navegación por voz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comienza a Crear Audio con IA Hoy
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Accede a Play.HT y más de 40 herramientas premium por solo 25€/mes
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
      <RelatedTools currentTool="/play-ht" />
    </div>
  );
} 