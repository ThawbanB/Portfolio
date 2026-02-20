"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Code2 } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 inset-x-0 z-[100] flex justify-center px-4"
    >
      <nav className="flex items-center justify-between w-full max-w-4xl px-6 py-3 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl shadow-lg shadow-blue-500/5">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-1.5 bg-blue-600 rounded-lg group-hover:rotate-12 transition-transform">
            <Code2 size={18} className="text-white" />
          </div>
          <span className="text-lg font-black tracking-tighter dark:text-white">
            THAWBAN<span className="text-blue-600">.</span>
          </span>
        </Link>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-2 sm:gap-6">
          

          <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

          <div className="flex items-center gap-2">          
            {/* Bouton Contact */}
            <Link 
              href="/contact" 
              className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-sm font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-md shadow-blue-500/10"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}