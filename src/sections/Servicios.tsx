import { Monitor, Code2, Zap } from 'lucide-react'; // Iconos para cada servicio
import { CardTilt, CardTiltContent } from '../components/ui/card-tilt';

export const Servicios = () =>{
    const servicios = [
    {
      icon: <Monitor className="text-blue-400 w-10 h-10" />,
      title: "Desarrollo de páginas web",
      description: "Diseño y desarrollo páginas web modernas, optimizadas para SEO y adaptadas a todo tipo de dispositivos."
    },
    {
      icon: <Code2 className="text-blue-400 w-10 h-10" />,
      title: "Aplicaciones web a medida",
      description: "Creo aplicaciones web con React y Next.js, enfocadas en rendimiento, escalabilidad y buena experiencia de usuario."
    },
    {
      icon: <Zap className="text-blue-400 w-10 h-10" />,
      title: "Optimización y rendimiento",
      description: "Mejoro la velocidad y estructura de sitios web existentes para lograr mejores resultados en buscadores."
    }
  ];

    return(
        <section id="servicios" className="py-20 px-6 md:px-20 bg-black text-white">
            {/* Titulo de la seccion */}
            <div className="mb-12 text-left">
                <h2 className="text-3xl md:text-4xl font-mono font-bold">
                    <span className="text-blue-400">{'{'}</span>
                    <span className="text-gray-500">/*</span>
                    <span className="text-white px-2">Servicios</span>
                    <span className="text-gray-500">*/</span>
                    <span className="text-blue-400">{'}'}</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {servicios.map((servicio, index) => (
                <CardTilt key={index} className="w-full group">
                    {/* Quitamos el borde dashed por defecto del componente y aplicamos el nuestro */}
                    <CardTiltContent className="h-full p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center md:items-start text-center md:text-left transition-all group-hover:border-blue-500/50">
                    
                    {/* Icono */}
                    <div className="mb-6 p-4 bg-blue-500/10 rounded-xl">
                        {servicio.icon}
                    </div>

                    {/* Contenido */}
                    <h3 className="text-2xl font-bold mb-4 text-white">
                        {servicio.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                        {servicio.description}
                    </p>

                    {/* Detalle decorativo (Efecto de profundidad 3D) */}
                    <div 
                        style={{ transform: 'translateZ(50px)' }} 
                        className="mt-6 text-blue-400 font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        &lt;getStarted /&gt;
                    </div>
                    </CardTiltContent>
                </CardTilt>
                ))}
            </div>
        </section>
    )
}