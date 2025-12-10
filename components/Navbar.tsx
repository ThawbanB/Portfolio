"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/50 dark:bg-black/30 z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold">Thawban.dev</Link>

        <div className="flex items-center gap-6">
          <Link href="#skills">Compétences</Link>
          <Link href="#projects">Projets</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
