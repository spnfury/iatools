import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-white/10 p-2 rounded-lg">
              <img 
                src="https://i.imgur.com/FWblcQ5.png" 
                alt="iatools.shop logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white">iatools.shop</span>
          </Link>
          <nav className="flex space-x-8">
            <Link to="/" className="text-gray-400 hover:text-white">Inicio</Link>
            <Link to="/terms" className="text-white">Términos</Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-4xl pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-8">Términos y Condiciones</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar iatools.shop, usted acepta estar sujeto a estos términos y condiciones. 
              Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Descripción del Servicio</h2>
            <p>
              iatools.shop proporciona acceso a una colección de herramientas de IA y software premium 
              a través de una suscripción. Nos reservamos el derecho de modificar, suspender o 
              discontinuar cualquier parte del servicio en cualquier momento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Suscripción y Pagos</h2>
            <p>
              • Los precios están sujetos a cambios con previo aviso.<br />
              • Las suscripciones se renuevan automáticamente.<br />
              • Puede cancelar su suscripción en cualquier momento.<br />
              • No se realizan reembolsos por suscripciones parciales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Uso del Servicio</h2>
            <p>
              Usted se compromete a:<br />
              • No utilizar el servicio para fines ilegales.<br />
              • No compartir sus credenciales de acceso.<br />
              • No intentar acceder a áreas restringidas del servicio.<br />
              • No interferir con el funcionamiento del servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Propiedad Intelectual</h2>
            <p>
              Todo el contenido, características y funcionalidad del servicio son propiedad de 
              iatools.shop y están protegidos por las leyes de derechos de autor, marcas registradas 
              y otras leyes de propiedad intelectual.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitación de Responsabilidad</h2>
            <p>
              iatools.shop no será responsable por daños directos, indirectos, incidentales, 
              especiales o consecuentes que resulten del uso o la imposibilidad de usar el servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. 
              Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Ley Aplicable</h2>
            <p>
              Estos términos se rigen por las leyes de España. Cualquier disputa se someterá 
              a la jurisdicción exclusiva de los tribunales de España.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre estos términos, puede contactarnos en:<br />
              Email: support@iatools.shop
            </p>
          </section>
        </div>

        <div className="mt-12 text-center text-gray-400">
          <p>Última actualización: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Terms; 