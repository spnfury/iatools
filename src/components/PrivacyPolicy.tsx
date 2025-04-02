import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
      
      <div className="space-y-6 text-gray-600">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Información que recopilamos</h2>
          <p>En iatools.shop, recopilamos la siguiente información:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Información de contacto (nombre, correo electrónico)</li>
            <li>Información de pago (procesada de forma segura a través de nuestros proveedores de pago)</li>
            <li>Datos de uso de la plataforma</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Uso de la información</h2>
          <p>Utilizamos la información recopilada para:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Proporcionar y mejorar nuestros servicios</li>
            <li>Procesar pagos y suscripciones</li>
            <li>Enviar actualizaciones sobre nuestros servicios</li>
            <li>Responder a consultas y solicitudes de soporte</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Protección de datos</h2>
          <p>Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal, incluyendo:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Encriptación de datos en tránsito y en reposo</li>
            <li>Acceso restringido a la información personal</li>
            <li>Monitoreo regular de la seguridad</li>
            <li>Actualizaciones periódicas de nuestros sistemas de seguridad</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Compartir información</h2>
          <p>No vendemos ni compartimos su información personal con terceros, excepto:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Proveedores de servicios necesarios para el funcionamiento de nuestra plataforma</li>
            <li>Cuando sea requerido por ley</li>
            <li>Con su consentimiento explícito</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Sus derechos</h2>
          <p>Usted tiene derecho a:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Acceder a su información personal</li>
            <li>Corregir información inexacta</li>
            <li>Solicitar la eliminación de sus datos</li>
            <li>Oponerse al procesamiento de sus datos</li>
            <li>Exportar sus datos</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
          <p>Utilizamos cookies y tecnologías similares para:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Mejorar la experiencia del usuario</li>
            <li>Analizar el uso de nuestra plataforma</li>
            <li>Recordar sus preferencias</li>
          </ul>
          <p className="mt-2">Puede controlar el uso de cookies a través de su navegador.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Cambios en la política de privacidad</h2>
          <p>Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios significativos serán notificados a través de nuestra plataforma o por correo electrónico.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contacto</h2>
          <p>Para cualquier pregunta sobre esta política de privacidad o el tratamiento de sus datos personales, puede contactarnos en:</p>
          <p className="mt-2">Email: privacy@iatools.shop</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Legislación aplicable</h2>
          <p>Esta política de privacidad se rige por la legislación española y europea sobre protección de datos personales, incluyendo el Reglamento General de Protección de Datos (RGPD).</p>
        </section>
      </div>

      <div className="mt-12 text-sm text-gray-500">
        <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 