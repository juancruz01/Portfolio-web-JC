import miFoto from '../assets/perfil-me.png';

export const About = () => {
    return (
        <section id="about" className="py-20 px-6 md:px-20 bg-black text-white">
            {/* Titulo de la seccion */}
            <div className="mb-12 text-left">
                <h2 className="text-3xl md:text-4xl font-mono font-bold">
                    <span className="text-blue-400">{'{'}</span>
                    <span className="text-gray-500">/*</span>
                    <span className="text-white px-2">Sobre mi</span>
                    <span className="text-gray-500">*/</span>
                    <span className="text-blue-400">{'}'}</span>
                </h2>
            </div>

            {/* Contenedor principal que agrupa Imagen y Texto */}
            <div className="flex flex-col md:flex-row gap-10 items-center md:items-center">
                
                {/* Lado Izquierdo: Imagen (30%) */}
                <div className="w-full md:w-[30%]">
                    <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm relative">
                        <img 
                            src={miFoto} 
                            alt="Retrato de Juan cruz, Desarrollador de Software" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                </div>

                {/* Lado Derecho: Descripcion (70%) */}
                <div className="w-full md:w-[70%] flex flex-col justify-center">
                    {/* Contenedor interno limitado al 50% y alineado a la izquierda */}
                    <div className="max-w-full md:max-w-[50%] space-y-6">
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Hola, soy <span className="text-white font-semibold">Juan Cruz</span>, un apasionado desarrollador de 24 años que vive en Buenos Aires. Actualmente estoy cursando la Tecnicatura en Programación, lo que me permite combinar fundamentos sólidos con las últimas tecnologías del mercado.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Me especializo en el desarrollo <span className="text-blue-400">Fullstack</span>, con un enfoque particular en crear experiencias digitales fluidas y eficientes. Mi stack principal incluye tecnologías como React, TypeScript, .NET y Python.
                        </p>
                
                        {/* Datos rápidos - También limitados por el contenedor padre */}
                        <div className="grid grid-cols-1 gap-4 mt-4">
                            <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                                <span className="text-blue-400 font-mono text-sm block mb-1">Ubicación</span>
                                <span className="text-white">Buenos Aires, Argentina</span>
                            </div>
                            <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                                <span className="text-blue-400 font-mono text-sm block mb-1">Estudios</span>
                                <span className="text-white">Tecnicatura en Programación</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Fin del contenedor 70% */}

            </div>
        </section>
    );
}