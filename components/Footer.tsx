"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/ThawbanB", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Mail size={20} />, href: "mailto:ton-email@exemple.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-white dark:bg-slate-950 pt-20 pb-10 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Logo ou Prénom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-8 text-2xl font-black tracking-tighter dark:text-white"
        >
          THAWBAN<span className="text-blue-600">.</span>
        </motion.div>

        {/* Liens Sociaux */}
        <div className="flex gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="p-3 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-full hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-transparent hover:border-blue-500/30 shadow-sm"
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright & Navigation rapide */}
        <div className="w-full pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 dark:text-slate-500 font-medium">
            © {new Date().getFullYear()} — Conçu avec passion par Thawban
          </p>

          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projets</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Stack</a>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 group text-slate-900 dark:text-white"
            >
              Retour en haut 
              <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Dégradé de fond subtil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-blue-600/5 blur-[100px] pointer-events-none" />
    </footer>
  );
}