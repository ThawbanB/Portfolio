"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Salut, moi c’est <span className="text-blue-600">Thawban</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-lg text-gray-600 max-w-xl"
      >
        Développeur web & passionné de cybersécurité.
        Je crée des applications modernes, rapides et sécurisées.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8 flex gap-4"
      >
        <a href="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg">
          Voir mes projets
        </a>
        <a href="/contact" className="px-6 py-3 border border-gray-400 rounded-lg">
          Me contacter
        </a>
      </motion.div>
    </section>
  );
}
