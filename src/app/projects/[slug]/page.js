"use client";

import { useState, useCallback, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Database,
  Brain,
  BarChart3,
  BookOpen,
  ImageIcon,
  Monitor,
  X,
  ZoomIn,
  Sparkles,
} from "lucide-react";
import { projects } from "@/data/projects";

const typeIcons = {
  "Data Engineering": Database,
  "Data Science": Brain,
  "Intelligence Artificielle": Brain,
  "Data Analysis": BarChart3,
};

const statusConfig = {
  "Terminé": {
    badge: "border-glow-emerald/30 bg-glow-emerald/10 text-glow-emerald",
  },
  "En cours": {
    badge: "border-amber-400/30 bg-amber-500/10 text-amber-400",
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* ------------------------------------------------------------------ */
/*  Image placeholder (when no image is provided)                     */
/* ------------------------------------------------------------------ */
function ImagePlaceholder({ label }) {
  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-white/[0.06] bg-midnight-900/80">
      <div className="flex flex-col items-center gap-2 text-neutral-500">
        <ImageIcon size={32} />
        <span className="text-sm">{label}</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Project image with glass frame — clickable                        */
/* ------------------------------------------------------------------ */
function ProjectImage({ src, alt, onOpen }) {
  if (!src) return <ImagePlaceholder label={alt || "Image à venir"} />;
  return (
    <button
      type="button"
      onClick={() => onOpen(src, alt)}
      className="group relative w-full cursor-zoom-in overflow-hidden rounded-lg border border-white/[0.06] transition-colors hover:border-accent-400/30"
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="mx-auto h-auto max-h-[400px] w-auto max-w-full object-contain"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-midnight-950/0 transition-colors group-hover:bg-midnight-950/40">
        <ZoomIn size={24} className="text-white opacity-0 transition-opacity group-hover:opacity-80" />
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Lightbox                                                          */
/* ------------------------------------------------------------------ */
function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-midnight-950/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full border border-white/10 bg-midnight-900/80 p-2 text-neutral-400 transition-colors hover:text-white"
      >
        <X size={20} />
      </button>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          className="h-auto max-h-[90vh] w-auto max-w-[90vw] rounded-lg object-contain"
        />
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Power BI embed placeholder                                        */
/* ------------------------------------------------------------------ */
function PowerBIPlaceholder() {
  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-accent-400/20 bg-midnight-900/80">
      <div className="flex flex-col items-center gap-3 text-neutral-500">
        <Monitor size={40} className="text-accent-400/50" />
        <span className="text-sm font-medium">
          Démonstration Power BI interactive
        </span>
        <span className="text-xs text-neutral-600">
          Iframe disponible prochainement
        </span>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  PAGE                                                              */
/* ================================================================== */
export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [lightbox, setLightbox] = useState(null);
  const openLightbox = useCallback((src, alt) => setLightbox({ src, alt }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-100">404</h1>
          <p className="mt-4 text-neutral-500">Projet introuvable.</p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 text-sm text-accent-400 hover:text-accent-300"
          >
            <ArrowLeft size={16} />
            Retour au portfolio
          </Link>
        </div>
      </main>
    );
  }

  const Icon = typeIcons[project.type] || BookOpen;
  const status = statusConfig[project.status] || statusConfig["En cours"];
  const content = project.detailedContent;

  return (
    <main className="min-h-screen pb-20 pt-28">
      <AnimatePresence>
        {lightbox && (
          <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />
        )}
      </AnimatePresence>
      <div className="mx-auto max-w-4xl px-6">
        {/* Back button */}
        <motion.div
          custom={0}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <Link
            href="/#projets"
            className="group mb-10 inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-accent-400"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            Retour au portfolio
          </Link>
        </motion.div>

        {/* ============================================================
            PROJECT HERO
            ============================================================ */}
        <motion.header
          custom={1}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          {/* Type + Status */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-sm text-neutral-500">
              <Icon size={16} />
              {project.type}
            </span>
            <span
              className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${status.badge}`}
            >
              {project.status}
            </span>
          </div>

          {/* Title */}
          <div className="flex items-center gap-4">
            {project.logo && (
              <Image
                src={project.logo}
                alt={`Logo ${project.title}`}
                width={160}
                height={160}
                className="h-32 w-32 object-contain sm:h-40 sm:w-40"
              />
            )}
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-100 sm:text-5xl">
              {project.title}
            </h1>
          </div>
          <p className="mt-2 text-lg text-neutral-500">{project.subtitle}</p>

          {/* Tools */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-white/[0.06] bg-midnight-800/60 px-3 py-1.5 text-sm font-medium text-neutral-300"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Summary / Objective */}
          <p className="mt-8 text-base leading-relaxed text-neutral-400">
            {project.summary || project.objective}
          </p>
        </motion.header>

        {/* ============================================================
            AI APPROACH BANNER
            ============================================================ */}
        {content?.aiApproach && (
          <motion.div
            custom={2}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12 overflow-hidden rounded-xl border border-glow-purple/20 bg-gradient-to-r from-accent-500/[0.06] via-glow-purple/[0.08] to-accent-500/[0.06] p-[1px]"
          >
            <div className="flex items-start gap-4 rounded-xl bg-midnight-950/80 px-6 py-5 backdrop-blur-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-glow-purple/20 bg-glow-purple/10">
                <Sparkles size={20} className="text-glow-purple" />
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold text-glow-purple">
                  Approche augmentée par l&apos;IA
                </p>
                <p className="text-sm leading-relaxed text-neutral-300">
                  {content.aiApproach}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* ============================================================
            DETAILED CONTENT — New rich structure
            ============================================================ */}
        {content ? (
          <div className="space-y-12">
            {/* --- Intro / Storytelling --- */}
            {content.intro && (
              <motion.section
                custom={2}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="glass rounded-xl p-8"
              >
                <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-neutral-100">
                  <span className="inline-block h-1 w-5 rounded-full bg-accent-400" />
                  {content.intro.title}
                </h2>
                <p className="text-base leading-relaxed text-neutral-300">
                  {content.intro.storytelling}
                </p>
              </motion.section>
            )}

            {/* --- Stack technique --- */}
            {content.stack && (
              <motion.section
                custom={3}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-neutral-100">
                  <span className="inline-block h-1 w-5 rounded-full bg-glow-purple" />
                  La Stack Technique
                </h2>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {content.stack.map((item) => (
                    <div
                      key={item.tool}
                      className="glass rounded-lg px-4 py-3 text-center"
                    >
                      <p className="font-mono text-sm font-semibold text-accent-400">
                        {item.tool}
                      </p>
                      <p className="mt-1 text-xs text-neutral-500">
                        {item.role}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* --- Pipeline image --- */}
            {content.pipelineImage && (
              <motion.section
                custom={3.5}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-neutral-100">
                  <span className="inline-block h-1 w-5 rounded-full bg-accent-400" />
                  Architecture Globale
                </h2>
                <ProjectImage
                  src={content.pipelineImage}
                  alt="Architecture globale du pipeline"
                  onOpen={openLightbox}
                />
              </motion.section>
            )}

            {/* --- Steps (Étapes) --- */}
            {content.steps && content.steps.length > 0 && (
              <div className="space-y-8">
                {content.steps.map((step, i) => (
                  <motion.section
                    key={i}
                    custom={4 + i}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="glass rounded-xl p-8"
                  >
                    {/* Step header with accent border */}
                    <div className="mb-4 flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent-400/30 bg-accent-400/10">
                        <span className="font-mono text-xs font-bold text-accent-400">
                          {i + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-neutral-100">
                        {step.label}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mb-6 border-l-2 border-accent-400/30 pl-4 text-base leading-relaxed text-neutral-300">
                      {step.description}
                    </p>

                    {/* Main image */}
                    {(step.image || step.imageAlt) && (
                      <div className="mb-4">
                        <ProjectImage src={step.image} alt={step.imageAlt} onOpen={openLightbox} />
                      </div>
                    )}

                    {/* Extra images */}
                    {step.extraImages && step.extraImages.length > 0 && (
                      <div className="grid gap-4 sm:grid-cols-2">
                        {step.extraImages.map((img, j) => (
                          <ProjectImage
                            key={j}
                            src={img.src}
                            alt={img.alt}
                            onOpen={openLightbox}
                          />
                        ))}
                      </div>
                    )}

                    {/* Before / After comparison */}
                    {step.comparison && (
                      <div className="grid gap-6 sm:grid-cols-2">
                        {/* Before */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                            <span className="text-sm font-semibold text-neutral-200">
                              {step.comparison.before.label}
                            </span>
                          </div>
                          <ProjectImage
                            src={step.comparison.before.image}
                            alt={step.comparison.before.label}
                            onOpen={openLightbox}
                          />
                        </div>
                        {/* After */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-glow-emerald" />
                            <span className="text-sm font-semibold text-neutral-200">
                              {step.comparison.after.label}
                            </span>
                          </div>
                          <ProjectImage
                            src={step.comparison.after.image}
                            alt={step.comparison.after.label}
                            onOpen={openLightbox}
                          />
                        </div>
                      </div>
                    )}
                  </motion.section>
                ))}
              </div>
            )}

            {/* --- Perspectives --- */}
            {content.perspectives && (
              <motion.section
                custom={8}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="glass rounded-xl p-8"
              >
                <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-neutral-100">
                  <span className="inline-block h-1 w-5 rounded-full bg-glow-emerald" />
                  Perspectives
                </h2>
                <p className="text-base leading-relaxed text-neutral-300">
                  {content.perspectives}
                </p>
              </motion.section>
            )}

            {/* --- Power BI Embed --- */}
            <motion.section
              custom={9}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-neutral-100">
                <span className="inline-block h-1 w-5 rounded-full bg-accent-400" />
                Démonstration Interactive
              </h2>
              {content.powerbiEmbed ? (
                <div className="overflow-hidden rounded-lg border border-white/[0.06]">
                  <iframe
                    title="Power BI Dashboard"
                    src={content.powerbiEmbed}
                    className="aspect-video w-full"
                    allowFullScreen
                  />
                </div>
              ) : (
                <PowerBIPlaceholder />
              )}
            </motion.section>
          </div>
        ) : (
          /* -----------------------------------------------------------
             LEGACY / FALLBACK for projects without detailedContent
             ----------------------------------------------------------- */
          <motion.div
            custom={2}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="glass rounded-xl p-10 text-center"
          >
            <p className="text-neutral-500">
              Le contenu détaillé de ce projet sera disponible prochainement.
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
