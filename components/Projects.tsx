"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "RANKEDUP",
    description: "Vente de comptes League of Legends (Laravel, Vue, MySQL).",
    image: "/images/rankedup.png", // Tu changeras avec ton image
    link: "https://ton-site.com",
    github: "https://github.com/ThawbanB/E-comm_cloudcampus_Laravel",
  },
  {
    title: "Portfolio Next.js",
    description: "Portfolio moderne avec Next.js, Tailwind, Framer Motion.",
    image: "/images/portfolio.png",
    link: "#",
    github: "#",
  },
  {
    title: "API Node.js",
    description: "API sécurisée avec authentification JWT.",
    image: "/images/api.png",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Mes Projets
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition cursor-pointer bg-white dark:bg-gray-900"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {project.description}
              </p>

              <div className="mt-4 flex gap-4">
                {project.link !== "#" && (
                  <Link
                    href={project.link}
                    className="text-blue-600 hover:underline"
                  >
                    Voir le site →
                  </Link>
                )}
                {project.github !== "#" && (
                  <Link
                    href={project.github}
                    className="text-gray-700 dark:text-gray-300 hover:underline"
                  >
                    GitHub →
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
