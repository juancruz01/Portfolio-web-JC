import {SpotlightCard} from '../components/ui/spotlightcard';

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-black text-white">
      {/* Título de la sección (Igual al About) */}
      <div className="mb-12 text-left">
        <h2 className="text-3xl md:text-4xl font-mono font-bold">
          <span className="text-blue-400">{'{'}</span>
          <span className="text-gray-500">/*</span>
          <span className="text-white px-2">Skills</span>
          <span className="text-gray-500">*/</span>
          <span className="text-blue-400">{'}'}</span>
        </h2>
      </div>

      {/* Contenido: Grid de 2 columnas y 2 filas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Contenedor 1: Front-End */}
        
            <SpotlightCard spotlightColor='59, 130, 246' className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-6">Front-End</h3>
              <div className="flex flex-wrap gap-3">
             {/* Aquí irán tus tecnologías después */}
                <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">React</span>
                <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">TypeScript</span>
                <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">Vite</span>
                <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">Astro</span>
                <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">Zustand</span>
                <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">Redux Toolkit</span>
              </div>
            </SpotlightCard>
        

        {/* Contenedor 2: Back-End */}
        <SpotlightCard className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 transition-colors group">
          <h3 className="text-xl font-bold text-white mb-6">Back-End</h3>
          <div className="flex flex-wrap gap-3">
             <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">.NET / C#</span>
             <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">Python</span>
             <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">Node</span>
             <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">PostgreSQL</span>
             <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">MySQL</span>
          </div>
        </SpotlightCard>

        {/* Contenedor 3: Styles */}
        <SpotlightCard className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 transition-colors group">
          <h3 className="text-xl font-bold text-white mb-6">Styles</h3>
          <div className="flex flex-wrap gap-3">
             <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">Tailwind CSS</span>
             <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">CSS3</span>
             <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">Sass</span>
             <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">Bootstrap</span>
             <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">Styled Components</span>
          </div>
        </SpotlightCard>

        {/* Contenedor 4: Herramientas */}
        <SpotlightCard className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 transition-colors group">
          <h3 className="text-xl font-bold text-white mb-6">Herramientas</h3>
          <div className="flex flex-wrap gap-3">
             <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">Git / GitHub</span>
             <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">Firebase</span>
             <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">Figma</span>
             <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">Notion</span>
             <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">IA</span>
             <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-400">Google Workspace</span>
          </div>
        </SpotlightCard>

      </div>
    </section>
  );
};