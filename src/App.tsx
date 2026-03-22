import './App.css'
import {Navbar} from './components/ui/Navbar';
import {HeroSection} from './sections/HeroSection';
import {About}from './sections/Aboutme';
import {Skills} from './sections/Skills';
import {Works} from './sections/Works';
import {Portfolio} from './sections/Portfolio';
import {Contacto} from './sections/Contacto';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Skills/>
        <Works />
        <Portfolio />
        <Contacto />
        
        <footer className="py-10 text-center bg-black text-gray-600 text-xs border-t border-white/5">
        © 2026 Juan Cruz. Buenos Aires, Argentina.
        </footer>

      </main>
    </div>
  )
}

export default App;
    