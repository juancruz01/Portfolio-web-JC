// src/sections/Hero.tsx
import { DotWave } from '../components/ui/dot-wave';
import LustreText from '../components/ui/lustretext';
import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="home" className="w-full h-screen overflow-hidden">
      {/* El componente oficial ya maneja la animación de fondo */}
      <DotWave 
        dotGap={30} 
        dotRadiusMax={2.5} 
        expansionSpeed={200} 
        lightIntensity={0.7}  
        bgColor='#000000'
        dotColor='#ffffff'
        className='w-full h-full'
      >
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-8xl tracking-tighter leading-tight">
            <LustreText 
              text="JUAN CRUZ" 
              className="lustre-dark" 
            />
          </h1>
          <p className="mt-4 text-gray-400 text-lg md:text-xl font-medium tracking-widest uppercase">
            Desarrollador de Software
          </p>
          
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <a href="#projects" className="px-8 py-4 bg-btn-primary text-brand-dark font-bold rounded-full hover:scale-105 transition-transform">
              Ver Proyectos
            </a>
            <button className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full font-bold text-white hover:bg-white/10 transition-colors">
              Descargar CV
            </button>
          </div>
        </div>

        <div className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer'>
            <span className='text-[18px] tracking-[0.3em] font-bold text-white uppercase'>
                Scroll
            </span>
            <ChevronDown size={20} className="text-white"/>
        </div>
      </DotWave>
    </section>
  );
};