import { CardFlip, CardFlipFront, CardFlipBack, CardFlipHeader, CardFlipTitle, CardFlipDescription, CardFlipContent } from "../components/ui/card-flip";

export const Works = () => {
    return(
        <section id="experience" className="py-20 px-6 md:px-20 bg-black text-white">
            <div className="mb-12 text-left">
                <h2 className="text-3xl md:text-4xl font-mono font-bold">
                    <span className="text-blue-400">{'{'}</span>
                    <span className="text-gray-500">/*</span>
                    <span className="text-white px-2">Experiencia</span>
                    <span className="text-gray-500">*/</span>
                    <span className="text-blue-400">{'}'}</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <CardFlip className="cursor-pointer">
                {/* FRENTE DE LA CARD */}
                    <CardFlipFront className="border-white/10 bg-white/5 backdrop-blur-sm p-2">
                        <CardFlipHeader>
                        <div className="flex justify-between items-start">
                            <div>
                            <CardFlipTitle className="text-2xl text-white">Desarrollador Full Stack</CardFlipTitle>
                            <CardFlipDescription className="text-blue-400 font-medium">Distribuidora Marini (Freelance / Contractor)</CardFlipDescription>
                            </div>
                            <span className="text-xs text-gray-500 font-mono">Jun 2024 - Presente</span>
                        </div>
                        </CardFlipHeader>
                        <CardFlipContent>
                        <p className="text-gray-400 text-sm">
                            Desarrollo integral de un catálogo mayorista e-commerce y panel de administración en tiempo real, optimizado para operaciones de alta frecuencia en el rubro alimenticio.
                        </p>
                        <div className="flex gap-2 mt-4 flex-wrap">
                            <span className="text-[10px] px-2 py-1 bg-white/10 rounded text-gray-300">Next.js</span>
                            <span className="text-[10px] px-2 py-1 bg-white/10 rounded text-gray-300">TypeScript</span>
                            <span className="text-[10px] px-2 py-1 bg-white/10 rounded text-gray-300">Tailwind CSS</span>
                            <span className="text-[10px] px-2 py-1 bg-white/10 rounded text-gray-300">Supabase</span>
                            <span className="text-[10px] px-2 py-1 bg-white/10 rounded text-gray-300">Cloudflare R2</span>
                            <span className="text-[10px] px-2 py-1 bg-white/10 rounded text-gray-300">Vercel</span>
                        </div>
                        </CardFlipContent>
                    </CardFlipFront>

                {/* DORSO DE LA CARD */}
                    <CardFlipBack className="border-blue-500/30 bg-blue-950/20 backdrop-blur-md p-2">
                        <CardFlipHeader>
                        <CardFlipTitle className="text-lg text-white">Detalles del Proyecto</CardFlipTitle>
                        </CardFlipHeader>
                        <CardFlipContent>
                        <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                            <li>Diseñé un sistema de catálogo mayorista dinámico con múltiples listas de precios y filtrado en tiempo real según la categoría del comercio.</li>
                            <li>Implementé la arquitectura de almacenamiento de medios en Cloudflare R2 utilizando URL firmadas (presigned URLs) mediante Server Actions para garantizar carga rápida e invulnerabilidad de credenciales.</li>
                            <li>Desarrollé el panel de administración privado con autenticación protegida por Middleware de Next.js, permitiendo gestión de productos, stock y clientes.</li>
                            <li>Diseñé la solución técnica para sincronización e integración futura mediante API REST/Webhooks con el sistema de gestión ERP de la empresa.</li>
                        </ul>
                        </CardFlipContent>
                    </CardFlipBack>
                </CardFlip>

                <CardFlip className="cursor-pointer">
                {/* FRENTE DE LA CARD */}
                    <CardFlipFront className="border-white/10 bg-white/5 backdrop-blur-sm p-2">
                        <CardFlipHeader>
                        <div className="flex justify-between items-start">
                            <div>
                            <CardFlipTitle className="text-2xl text-white">Python Developer</CardFlipTitle>
                            <CardFlipDescription className="text-blue-400 font-medium">Cognition</CardFlipDescription>
                            </div>
                            <span className="text-xs text-gray-500 font-mono">Jun 2025 - Ago 2025</span>
                        </div>
                        </CardFlipHeader>
                        <CardFlipContent>
                        <p className="text-gray-400 text-sm">
                            Desarrollo de soluciones inteligentes para la gestión de entornos costeros.
                        </p>
                        <div className="flex gap-2 mt-4">
                            <span className="text-[10px] px-2 py-1 bg-white/10 rounded text-gray-300">Python</span>
                            <span className="text-[10px] px-2 py-1 bg-white/10 rounded text-gray-300">Flask</span>
                            <span className="text-[10px] px-2 py-1 bg-white/10 rounded text-gray-300">SQL</span>
                            <span className="text-[10px] px-2 py-1 bg-white/10 rounded text-gray-300">Twilio</span>
                            <span className="text-[10px] px-2 py-1 bg-white/10 rounded text-gray-300">Chatbots</span>
                        </div>
                        </CardFlipContent>
                    </CardFlipFront>

                {/* DORSO DE LA CARD */}
                    <CardFlipBack className="border-blue-500/30 bg-blue-950/20 backdrop-blur-md p-2">
                        <CardFlipHeader>
                        <CardFlipTitle className="text-lg text-white">Detalles del Proyecto</CardFlipTitle>
                        </CardFlipHeader>
                        <CardFlipContent>
                        <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                            <li>Desarrollo de un Chatbot de WhatsApp para "Smart Beaches".</li>
                            <li>Automatización de respuestas y reportes en tiempo real.</li>
                            <li>Integración de APIs para datos meteorológicos y de ocupación.</li>
                            <li>Colaboración en equipo bajo metodologías ágiles.</li>
                        </ul>
                        </CardFlipContent>
                    </CardFlipBack>
                </CardFlip>
            </div>
        </section>
    )
}