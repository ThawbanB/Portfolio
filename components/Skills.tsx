"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ShieldCheck } from "lucide-react";

const devSkills = [
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];

const cyberSkills = [
  { 
    name: "Linux", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" 
  },
  { 
    name: "Windows", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" 
  },
  { 
    name: "Nmap", 
    logo: "https://www.vectorlogo.zone/logos/nmap/nmap-ar21.svg" 
  },
  { 
    name: "Metasploit", 
    logo: "https://www.vectorlogo.zone/logos/metasploit/metasploit-icon.svg" 
  },
  { 
    name: "Burp Suite", 
    logo: "https://user-images.githubusercontent.com/2153075/193214534-11883b58-038c-4235-9615-56543b353163.png" 
  },
];

export default function Skills() {
  const [category, setCategory] = useState("dev"); // 'dev' ou 'cyber'

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        
        {/* Titre dynamique */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            Mes Compétences
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Sélecteur de catégorie (Le "petit point" / Toggle) */}
        <div className="flex justify-center mb-16">
          <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center shadow-lg relative">
            
            {/* Background animé du bouton actif */}
            <motion.div 
              layoutId="activeTab"
              animate={{ x: category === "dev" ? 0 : "100%" }}
              className="absolute left-1.5 w-[48%] h-[85%] bg-blue-600 rounded-xl z-0"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            <button
              onClick={() => setCategory("dev")}
              className={`relative z-10 px-6 py-2 flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-colors ${category === "dev" ? "text-white" : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"}`}
            >
              <Code2 size={18} />
              Développement
            </button>

            <button
              onClick={() => setCategory("cyber")}
              className={`relative z-10 px-6 py-2 flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-colors ${category === "cyber" ? "text-white" : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"}`}
            >
              <ShieldCheck size={18} />
              Cybersécurité
            </button>
          </div>
        </div>

        {/* Grille de compétences animée */}
        <motion.div 
          key={category}
          initial={{ opacity: 0, x: category === "dev" ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: category === "dev" ? 20 : -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {(category === "dev" ? devSkills : cyberSkills).map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col items-center justify-center transition-all hover:shadow-xl hover:shadow-blue-500/10 dark:hover:border-blue-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative z-10 w-16 h-16 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className={`w-full h-full object-contain filter ${category === 'dev' ? 'grayscale group-hover:grayscale-0' : ''} transition-all duration-300`}
                />
              </div>
              
              <p className="relative z-10 mt-4 text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}