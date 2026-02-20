"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "RANKEDUP",
    description: "Projet de Fin d'Études : développement d'une plateforme e-commerce complète avec une architecture MVC sécurisée et optimisée.",
    image: "/images/rankedup.png",
    tags: ["Laravel", "Vue", "MySQL"],
    link: "https://rankedup.alwaysdata.net/",
    github: "https://github.com/ThawbanB/E-comm_cloudcampus_Laravel",
  },
  {
    title: "AMITIGO",
    description: "Conception et développement d'une landing page optimisée pour le lancement marketing d'une application mobile.",
    image: "/images/amitigo.png",
    tags: ["HTML", "CSS", "JS"],
    link: "https://amitigo.com/",
    github: "#",
  },
  {
    title: "GUIDE DU GOLFE",
    description: "Optimisation de l'interface utilisateur : Refonte complète du responsive design.",
    image: "/images/guidedugolfe.png",
    tags: ["CSS", "Responsive Design"],
    link: "https://guidedugolfe.com/",
    github: "#",
  },
  {
    title: "ICOME",
    description: "Mission d'investigation numérique suite à une cyber-malveillance. Utilisation de techniques d'OSINT pour identifier l'empreinte numérique de l'attaquant.",
    image: "/images/icome.png",
    tags: ["OSINT", "CYBERSECURITE"],
    link: "https://icome.fr/",
    github: "#",
  },
  {
    title: "AIRBYLOC",
    description: "Développement d'une plateforme métier dédiée à la planification et au suivi en temps réel des prestations de maintenance locative.",
    image: "/images/airbyloc.png",
    tags: ["LARAVEL", "TAILWIND"],
    link: "https://www.airbyloc.fr/",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        
        {/* Titre identique au style Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            Projets Sélectionnés
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all hover:shadow-xl hover:shadow-blue-500/10 dark:hover:border-blue-500/50"
            >
              {/* Effet de lueur interne au survol (Identique Skills) */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Container Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.github !== "#" && (
                    <Link href={project.github} className="p-2 bg-white rounded-full text-slate-900 hover:scale-110 transition">
                      <Github size={20} />
                    </Link>
                  )}
                  <Link href={project.link} className="p-2 bg-blue-600 rounded-full text-white hover:scale-110 transition">
                    <ExternalLink size={20} />
                  </Link>
                </div>
              </div>

              {/* Contenu de la carte */}
              <div className="p-6 relative z-10">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md group-hover:bg-blue-600/10 group-hover:text-blue-500 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Détails</span>
                  <Link 
                    href={project.link} 
                    className="text-sm font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 group/link"
                  >
                    Visiter <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}