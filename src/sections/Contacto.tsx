// src/sections/Contact.tsx
import React, { useState } from 'react';
// Agregamos CheckCircle2 al import
import { Github, Linkedin, MessageCircle, Mail, Send, CheckCircle2 } from 'lucide-react';

export const Contacto = () => {
    const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

    const FORMSPREE_URL = "https://formspree.io/f/xvzwdqob";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-black text-white">
      {/* Título Estilo Comentario */}
      <div className="mb-16 text-left">
        <h2 className="text-3xl md:text-4xl font-mono font-bold">
          <span className="text-blue-400">{'{'}</span>
          <span className="text-gray-500">/*</span>
          <span className="text-white px-2">Contacto</span>
          <span className="text-gray-500">*/</span>
          <span className="text-blue-400">{'}'}</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-16">
        
        {/* LADO IZQUIERDO: Info Personal */}
        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <h3 className="text-4xl font-bold text-white mb-2">Juan Cruz</h3>
            <p className="text-blue-400 font-mono tracking-widest uppercase text-sm">
              Desarrollador de Software
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-400 text-xl leading-relaxed max-w-md">
              ¿Tenés una idea en mente o un proyecto que necesite un impulso? 
              <span className="text-white block mt-2">Hagamos que suceda.</span>
            </p>
            
            <div className="flex items-center gap-3 text-gray-300 group cursor-pointer">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-blue-500/50 transition-colors">
                <Mail size={20} className="text-blue-400" />
              </div>
              <span className="text-lg font-medium">juancruzc278@gmail.com</span>
            </div>
          </div>

          {/* Botones Redes Sociales */}
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/juancruz01" target='blank_' className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white hover:text-black transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="www.linkedin.com/in/juan-cruz-carisimo-bb106b231" target='blank_' className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white hover:text-black transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://www.tiktok.com/@jxwebdesign" target='blank_' className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white hover:text-black transition-all duration-300">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>

        {/* LADO DERECHO: Formulario Dinámico */}
        <div className="w-full md:w-1/2">
          {status === "SUCCESS" ? (
            <div className="h-full min-h-100 flex flex-col items-center justify-center bg-white/5 border border-blue-500/30 rounded-4xl p-8 text-center animate-in fade-in zoom-in duration-500">
              <CheckCircle2 size={64} className="text-blue-400 mb-4" />
              <h4 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h4>
              <p className="text-gray-400">Gracias, Juan se pondrá en contacto con vos pronto.</p>
              <button 
                onClick={() => setStatus("IDLE")}
                className="mt-6 text-blue-400 hover:underline font-mono text-sm"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-4xl border border-white/10 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase ml-1">Nombre</label>
                  <input name="name" type="text" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-400 outline-none text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase ml-1">Asunto</label>
                  <input name="subject" type="text" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-400 outline-none text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase ml-1">Tu Email</label>
                <input name="email" type="email" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-400 outline-none text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase ml-1">Consulta</label>
                <textarea name="message" required rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-400 outline-none resize-none text-white" />
              </div>

              <button 
                type="submit"
                disabled={status === "SENDING"}
                className="w-full py-4 bg-blue-700 hover:bg-blue-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                {status === "SENDING" ? "Enviando..." : <><Send size={18} /> Enviar Mensaje</>}
              </button>
              
              {status === "ERROR" && (
                <p className="text-red-400 text-sm text-center">Ocurrió un error. Intentá de nuevo.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};