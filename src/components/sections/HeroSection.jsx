"use client";

import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import { personal } from "@/data/personal";
import NetworkBackground from "@/components/animations/NetworkBackground";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const glowPulse = {
  initial: { opacity: 0.4 },
  animate: {
    opacity: [0.4, 0.7, 0.4],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Ambient glow orbs */}
      <motion.div
        {...glowPulse}
        className="pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-accent-500/[0.07] blur-[120px]"
      />
      <motion.div
        {...glowPulse}
        className="pointer-events-none absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-glow-purple/[0.06] blur-[100px]"
        style={{ animationDelay: "2s" }}
      />

      {/* Canvas network */}
      <NetworkBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Status badge */}
        <motion.div
          custom={0}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-400/20 bg-accent-400/[0.08] px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-glow-emerald opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-glow-emerald" />
          </span>
          <span className="text-xs font-medium tracking-wide text-accent-400">
            Disponible pour une opportunite
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-5xl font-extrabold leading-tight tracking-tight text-neutral-100 sm:text-6xl lg:text-7xl"
        >
          {personal.name.split(" ")[0]}{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent font-extrabold">
              {personal.name.split(" ").slice(1).join(" ")}
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent blur-xl opacity-70"
            >
              {personal.name.split(" ").slice(1).join(" ")}
            </span>
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          custom={2}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-4 text-xl font-medium text-neutral-300 md:text-2xl"
        >
          {personal.title}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          custom={3}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projets"
            className="group glass-hover relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-accent-400/30 bg-accent-500/10 px-7 py-3.5 text-sm font-semibold text-accent-400 transition-all duration-300 hover:border-accent-400/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
          >
            <span className="relative z-10">Voir mes projets</span>
            <ChevronRight
              size={16}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
            <span className="absolute inset-0 -z-0 bg-gradient-to-r from-accent-500/0 via-accent-500/10 to-accent-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-100"
          >
            Me contacter
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#a-propos"
          className="flex flex-col items-center gap-2 text-neutral-500 transition-colors hover:text-accent-400"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
