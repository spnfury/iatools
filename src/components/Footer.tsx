import Link from 'next/link';

interface FooterProps {
  currentProject: string;
}

export default function Footer({ currentProject }: FooterProps) {
  const projects = [
    { name: 'iatools.shop', url: 'https://iatools.shop' },
    { name: 'webcraft.solutions', url: 'https://webcraft.solutions' },
    { name: 'aiwriter.pro', url: 'https://aiwriter.pro' },
    // Añade aquí más proyectos según necesites
  ];

  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
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
              <li><a href="#" className="hover:text-white">Integraciones</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Otros Proyectos</h3>
            <ul className="space-y-2 text-gray-400">
              {projects.map((project) => (
                <li key={project.name}>
                  <a 
                    href={project.url}
                    className={`hover:text-white ${currentProject === project.name ? 'text-blue-400' : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/terms" className="hover:text-white">Términos y Condiciones</Link></li>
              <li><a href="#" className="hover:text-white">Privacidad</a></li>
              <li><a href="#" className="hover:text-white">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 iatools.shop. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 