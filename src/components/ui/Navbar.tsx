import { Menu } from 'lucide-react'; // Importamos el icono de hamburguesa
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu'; // Ajustá la ruta según tu archivo

export const Navbar = () => {
  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center mt-5 px-4">
      {/* CONTENEDOR PRINCIPAL ESTILO CÁPSULA */}
      <div className="flex items-center justify-between md:justify-center gap-8 px-6 py-3 border border-white/10 bg-white/5 backdrop-blur-md rounded-full transition-colors hover:bg-white/10 min-w-70 md:min-w-150">
        
        {/* NOMBRE O LOGO (Visible en mobile para dar equilibrio) */}
        <span className="text-white font-bold text-2xl md:hidden">JC</span>

        {/* LINKS PARA DESKTOP (Se ocultan en mobile con 'hidden md:flex') */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* MENÚ PARA MOBILE (Se oculta en desktop con 'md:hidden') */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2 text-white outline-none">
              <Menu size={24} />
            </DropdownMenuTrigger>
            
            {/* El contenido del menú con el estilo oscuro de tu portfolio */}
            <DropdownMenuContent className="bg-black/90 border-white/10 backdrop-blur-xl text-white">
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.name} asChild>
                  <a 
                    href={link.href} 
                    className="w-full h-full px-4 py-2 hover:text-blue-400 transition-colors font-bold"
                  >
                    {link.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};