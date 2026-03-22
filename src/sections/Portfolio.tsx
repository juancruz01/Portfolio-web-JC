import React from "react";
import {Github} from "lucide-react";
import {projectsData} from "../data/projects";

export const Portfolio = () => {
    return(
        <section id="projects" className="py-20 px-6 md:px20 bg-black text-white flex flex-col items-center">
            {/* Titulo section */}
            <div className="w-full max-w[80%] mb-16 text-left">
                <h2 className="text-3xl md:text-4xl font-mono font-bold">
                    <span className="text-blue-400">{'{'}</span>
                    <span className="text-gray-500">/*</span>
                    <span className="text-white px-2">Portfolio</span>
                    <span className="text-gray-500">*/</span>
                    <span className="text-blue-400">{'}'}</span>
                </h2>
            </div>

            <div className="w-full max-w[80%] space-y-20">
                {projectsData.map((proyecto, index) => (
                    <React.Fragment key={proyecto.id}>
                        <div className="flex flex-col md:flex-row gap-10 items-center">
                            {/*lada izquierdo */}
                            <div className="w-full md:w-[35%] relative group aspect-video rounded-2xl overflow-hidden border border-white/10">
                                <img 
                                    src={proyecto.image}
                                    alt={proyecto.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {proyecto.github && (
                                    <a
                                        href={proyecto.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-4 left-4 p-3 bg-black/60 backdrop-blur-md border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 z-20 "
                                    >
                                        <Github size={20}/>
                                    </a>
                                )}
                            </div>

                            {/* lado derecho */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <h3 className="text-3xl font-bold tracking-tight">{proyecto.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">{proyecto.description}</p>

                                <div className="flex flex-wrap gap-3">
                                    {
                                        proyecto.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-1.5 bg-[#1a1a1a] text-white border-2 border-white rounded-full text-xs transtion-all duration-300 hover:bg-white hover:text-black cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        {/* linea separadora */}
                            {
                                index !== projectsData.length - 1 && (
                                    <div className="w-full h-px bg-white/10 my-10"></div>
                                )}
                    </React.Fragment>
                ))}
            </div>

        </section>        
    )
}