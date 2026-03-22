import type { Project } from '../types';
import imgPantu from '../assets/img-project-1.png';
import imgTurnify from '../assets/img-project-2.jpg';
import imgEditor from '../assets/img-project-3.png';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Pantu-wallet",
    description: "Una billetera digital integral diseñada para gestionar transacciones en tiempo real, con un enfoque en la seguridad y una interfaz de usuario intuitiva.",
    technologies: ["React", "Javascript", "Tailwind, Supabase"],
    image: imgPantu,
    github:"https://github.com/juancruz01/Pantu-Wallet",
  },
  {
    id: 2,
    title: "Turnify API",
    description:"Backend robusto para la gestión de turnos profesionales. Permite la reserva, cancelación y seguimiento de citas con una arquitectura escalable en .NET.",
    technologies: [".NET", "C#", "SQL Server", "Entity Framework"],
    image: imgTurnify,
    github: "https://github.com/juancruz01/Turnify-API"
  },
  {
    id: 3,
    title: "Steve Editor",
    description:"Plataforma orientada a la conversión para editores de video. Incluye gestión de servicios, propuesta de valor y planes de suscripción con un diseño minimalista y moderno.",
    technologies: ["Astro", "Vite", "Tailwind", "Figma"],
    image: imgEditor,
    github: ""
  }

];