import { Metadata } from 'next';
import { generateServiceMetadata } from '@/lib/metadata';
import RelatedTools from '@/components/RelatedTools';

export const metadata: Metadata = generateServiceMetadata('cramly');

export default function CramlyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cramly Unlimited - Asistente de Estudio IA Gratis
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Asistente de estudio potenciado por IA para aprendizaje eficiente, parafraseo 
              y detección de plagio. Incluido en IA Tools.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Asistente de Estudio IA</h3>
              <p className="text-gray-400">
                Obtén ayuda personalizada para tus estudios con explicaciones claras, 
                resúmenes y respuestas a preguntas complejas.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Parafraseo Inteligente</h3>
              <p className="text-gray-400">
                Reescribe textos manteniendo el significado original pero con palabras 
                diferentes. Ideal para evitar plagio.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Detección de Plagio</h3>
              <p className="text-gray-400">
                Analiza textos para detectar contenido duplicado y asegurar 
                la originalidad de tus trabajos académicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Beneficios de Cramly
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Aprendizaje Eficiente</h3>
                <p className="text-gray-400">Optimiza tu tiempo de estudio con IA</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Mejores Calificaciones</h3>
                <p className="text-gray-400">Obtén mejores resultados académicos</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Contenido Original</h3>
                <p className="text-gray-400">Evita problemas de plagio automáticamente</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">24/7 Disponible</h3>
                <p className="text-gray-400">Asistencia de estudio en cualquier momento</p>
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
              <h3 className="text-xl font-bold mb-3">Estudiantes</h3>
              <p className="text-gray-400">
                Obtén ayuda con tareas, ensayos, investigaciones y preparación 
                para exámenes de cualquier materia.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Investigadores</h3>
              <p className="text-gray-400">
                Analiza papers, genera resúmenes y verifica la originalidad 
                de tus trabajos de investigación.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Profesores</h3>
              <p className="text-gray-400">
                Crea contenido educativo, verifica trabajos de estudiantes 
                y genera materiales de enseñanza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Potencia tu Aprendizaje con IA Hoy
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Accede a Cramly y más de 40 herramientas premium por solo 25€/mes
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
      <RelatedTools currentService="cramly" />
    </div>
  );
} 