"use client";

import { motion } from "framer-motion";



const skills = [

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



export default function Skills() {

  return (

    <section className="py-24 px-6 relative overflow-hidden bg-slate-50 dark:bg-slate-950">

      <div className="max-w-6xl mx-auto">

       

        <motion.div

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          className="text-center mb-16"

        >

          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">

            Ma Stack Technique

          </h2>

          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full" />

        </motion.div>



        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {skills.map((skill, index) => (

            <motion.div

              key={skill.name}

              initial={{ opacity: 0, y: 20 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ duration: 0.4, delay: index * 0.1 }}

              whileHover={{ y: -5, transition: { duration: 0.2 } }}

              className="group relative p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col items-center justify-center transition-all hover:shadow-xl hover:shadow-blue-500/10 dark:hover:border-blue-500/50"

            >

              {/* Effet de lueur interne au survol */}

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

             

              <div className="relative z-10 w-16 h-16 transition-transform duration-300 group-hover:scale-110">

                <img

                  src={skill.logo}

                  alt={skill.name}

                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"

                />

              </div>

             

              <p className="relative z-10 mt-4 text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">

                {skill.name}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}