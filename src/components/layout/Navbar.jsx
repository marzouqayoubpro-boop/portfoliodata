"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personal } from "@/data/personal";

const navLinks = [
  { label: "Accueil", href: "/#accueil" },
  { label: "A propos", href: "/#a-propos" },
  { label: "Competences", href: "/#competences" },
  { label: "Projets", href: "/#projets" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-white/5 shadow-lg shadow-midnight-950/50"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="/"
          className="group flex items-center gap-2 text-lg font-bold tracking-tight text-neutral-100"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent-400 transition-shadow duration-300 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
          <span>{personal.name.split(" ")[0]}</span>
          <span className="text-accent-400">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:text-neutral-100"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-accent-400 transition-all duration-300 group-hover:w-3/4 group-hover:shadow-[0_1px_8px_rgba(56,189,248,0.4)]" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-neutral-300 transition-colors hover:bg-white/5 hover:text-neutral-100 md:hidden"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="glass mx-4 mb-4 rounded-xl border border-white/5 md:hidden"
        >
          <ul className="flex flex-col p-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/5 hover:text-neutral-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
