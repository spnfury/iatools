import Link from 'next/link';
import EmailDiscountForm from './EmailDiscountForm';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white/10 p-1.5 rounded-lg">
                <img 
                  src="https://i.imgur.com/FWblcQ5.png" 
                  alt="iatools.shop logo" 
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400">
              La plataforma líder en herramientas de IA
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Producto</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#herramientas" className="hover:text-white">Características</a></li>
              <li><a href="#planes" className="hover:text-white">Precios</a></li>
              <li><a href="#opiniones" className="hover:text-white">Opiniones</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:soporte@iatools.shop" className="hover:text-white">soporte@iatools.shop</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/terms" className="hover:text-white">Términos y Condiciones</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacidad</Link></li>
            </ul>
          </div>
        </div>
        {/* Email Discount Form */}
        <div className="max-w-md mx-auto">
          <EmailDiscountForm variant="compact" />
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 iatools.shop. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 