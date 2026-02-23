"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, Code2, ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "RANKEDUP",
    category: "dev",
    description: "Projet de Fin d'Études : développement d'une plateforme e-commerce complète avec une architecture MVC sécurisée et optimisée.",
    image: "/images/rankedup.png",
    tags: ["PFE", "Laravel", "Vue", "MySQL"],
    link: "https://rankedup.alwaysdata.net/",
    github: "https://github.com/ThawbanB/E-comm_cloudcampus_Laravel",
  },
  {
    title: "AMITIGO",
    category: "dev",
    description: "Conception et développement d'une landing page optimisée pour le lancement marketing d'une application mobile.",
    image: "/images/amitigo.png",
    tags: ["HTML", "CSS", "JS"],
    link: "https://amitigo.com/",
    github: "#",
  },
  {
    title: "GUIDE DU GOLFE",
    category: "dev",
    description: "Optimisation de l'interface utilisateur : Refonte complète du responsive design pour une navigation multi-supports.",
    image: "/images/guidedugolfe.png",
    tags: ["CSS", "Responsive Design"],
    link: "https://guidedugolfe.com/",
    github: "#",
  },
  {
    title: "INVESTIGATION OSINT",
    category: "cyber",
    description: "Mission d'investigation numérique suite à une cyber-malveillance. Identification de l'empreinte numérique de l'attaquant et rapport d'audit.",
    image: "/images/icome.png",
    tags: ["OSINT", "Cybersécurité", "Investigation"],
    link: "https://icome.fr/",
    github: "#",
  },
  {
    title: "AIRBYLOC",
    category: "dev",
    description: "Développement d'une plateforme métier dédiée à la planification et au suivi en temps réel des prestations de maintenance locative.",
    image: "/images/airbyloc.png",
    tags: ["Laravel", "Tailwind", "AWS S3"],
    link: "https://www.airbyloc.fr/",
    github: "#",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("dev");

  const filteredProjects = projects.filter(p => p.category === filter);

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent uppercase">
            Projets Sélectionnés
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Sélecteur de catégorie */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center relative shadow-inner">
            <motion.div 
              layoutId="projectTab"
              animate={{ x: filter === "dev" ? 0 : "100%" }}
              className="absolute left-1.5 w-[48%] h-[85%] bg-blue-600 rounded-xl z-0"
              transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }} // Transition fluide sans rebond
            />

            <button
              onClick={() => setFilter("dev")}
              className={`relative z-10 px-6 py-2 flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-colors ${filter === "dev" ? "text-white" : "text-slate-500"}`}
            >
              <Code2 size={18} /> Dev
            </button>

            <button
              onClick={() => setFilter("cyber")}
              className={`relative z-10 px-6 py-2 flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-colors ${filter === "cyber" ? "text-white" : "text-slate-500"}`}
            >
              <ShieldCheck size={18} /> Cyber
            </button>
          </div>
        </div>

        {/* Grille */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }} // Animation plus rapide et directe
                className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:border-blue-500/50 flex flex-col h-full"
              >
                {/* Lueur au survol */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                    {project.github !== "#" && (
                      <Link href={project.github} className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition shadow-lg">
                        <Github size={20} />
                      </Link>
                    )}
                    <Link href={project.link} className="p-3 bg-blue-600 rounded-full text-white hover:scale-110 transition shadow-lg shadow-blue-600/20">
                      <ExternalLink size={20} />
                    </Link>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6 flex flex-col flex-grow relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 uppercase">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      {project.category === "cyber" ? "Audit" : "Software"}
                    </span>
                    <Link href={project.link} className="text-sm font-black text-blue-600 dark:text-blue-400 flex items-center gap-1 group/link">
                      Détails <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}