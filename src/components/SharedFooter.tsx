interface SharedFooterProps {
  currentProject: string;
}

export default function SharedFooter({ currentProject }: SharedFooterProps) {
  const projects = [
    { name: 'iatools.shop', url: 'https://iatools.shop' },
    { name: 'webcraft.solutions', url: 'https://webcraft.solutions' },
    { name: 'aiwriter.pro', url: 'https://aiwriter.pro' },
    // Añade aquí más proyectos según necesites
  ];

  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-bold mb-4 text-gray-400">Otros Proyectos</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {projects.map((project) => (
              <a 
                key={project.name}
                href={project.url}
                className={`text-sm hover:text-white transition-colors ${
                  currentProject === project.name ? 'text-blue-400' : 'text-gray-400'
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 