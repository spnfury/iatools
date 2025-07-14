import { Metadata } from 'next';
import { generateServiceMetadata } from '@/lib/metadata';
import RelatedTools from '@/components/RelatedTools';

export const metadata: Metadata = generateServiceMetadata('chatbot-ai');

export default function ChatBotAIPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ChatBot AI Unlimited - Chatbot Todo en Uno Gratis
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Chatbot completo con Claude, generación de imágenes, análisis de PDFs y más. 
              Todo en una sola plataforma. Incluido en IA Tools.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Claude IA</h3>
              <p className="text-gray-400">
                Acceso completo a Claude, uno de los modelos de IA más avanzados. 
                Conversaciones inteligentes y análisis profundo.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Generación de Imágenes</h3>
              <p className="text-gray-400">
                Crea imágenes únicas con IA. Desde ilustraciones hasta fotos realistas 
                basadas en tus descripciones.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Análisis de PDFs</h3>
              <p className="text-gray-400">
                Sube PDFs y obtén análisis detallados, resúmenes y respuestas 
                basadas en el contenido del documento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Beneficios de ChatBot AI
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Todo en Uno</h3>
                <p className="text-gray-400">Múltiples herramientas IA en una sola plataforma</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Claude Avanzado</h3>
                <p className="text-gray-400">Acceso a uno de los mejores modelos de IA</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Análisis de Documentos</h3>
                <p className="text-gray-400">Procesa PDFs y documentos complejos</p>
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
                <p className="text-gray-400">Uso ilimitado de todas las funciones</p>
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
              <h3 className="text-xl font-bold mb-3">Asistente Personal</h3>
              <p className="text-gray-400">
                Usa Claude como tu asistente personal para tareas diarias, 
                investigación y resolución de problemas.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Análisis de Documentos</h3>
              <p className="text-gray-400">
                Sube contratos, informes y documentos para obtener análisis 
                detallados y resúmenes automáticos.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Creación de Contenido</h3>
              <p className="text-gray-400">
                Genera imágenes únicas para proyectos creativos, marketing 
                y contenido visual personalizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comienza a Usar ChatBot AI Hoy
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Accede a ChatBot AI y más de 40 herramientas premium por solo 25€/mes
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
      <RelatedTools currentService="chatbot-ai" />
    </div>
  );
} 