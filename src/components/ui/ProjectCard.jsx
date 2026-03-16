"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Database,
  Brain,
  BarChart3,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

const typeIcons = {
  "Data Engineering": Database,
  "Data Science": Brain,
  "Intelligence Artificielle": Brain,
  "Data Analysis": BarChart3,
};

const statusConfig = {
  "Terminé": {
    badge: "border-glow-emerald/30 bg-glow-emerald/10 text-glow-emerald",
    glow: "group-hover:shadow-[0_8px_40px_rgba(52,211,153,0.1)]",
    hoverBorder: "group-hover:border-glow-emerald/30",
  },
  "En cours": {
    badge: "border-amber-400/30 bg-amber-500/10 text-amber-400",
    glow: "group-hover:shadow-[0_8px_40px_rgba(245,158,11,0.1)]",
    hoverBorder: "group-hover:border-amber-400/30",
  },
};

export default function ProjectCard({ project }) {
  const Icon = typeIcons[project.type] || BookOpen;
  const status = statusConfig[project.status] || statusConfig["En cours"];
  const description =
    project.status === "Terminé" ? project.summary : project.objective;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-midnight-800/40 backdrop-blur-sm transition-all duration-300 ${status.glow} ${status.hoverBorder} hover:bg-midnight-800/60`}
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-midnight-800 to-midnight-900">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Icon
              size={40}
              strokeWidth={1.2}
              className="text-neutral-500/40 transition-colors duration-300 group-hover:text-neutral-500/60"
            />
          </div>
        )}
        {/* Type label */}
        <span className="absolute left-4 top-4 z-10 rounded-md bg-midnight-950/70 px-2.5 py-1 text-xs font-medium text-neutral-400 backdrop-blur-sm">
          {project.type}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Header */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-neutral-100">
              {project.title}
            </h3>
            <p className="mt-0.5 text-sm text-neutral-500">
              {project.subtitle}
            </p>
          </div>
          <span
            className={`flex-shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${status.badge}`}
          >
            {project.status}
          </span>
        </div>

        {/* Description */}
        <p className="mb-5 flex-1 text-sm leading-relaxed text-neutral-400">
          {description}
        </p>

        {/* Tools */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md bg-midnight-900/80 px-2 py-0.5 text-xs text-neutral-500"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 transition-colors hover:text-accent-300"
        >
          Voir le projet
          <ArrowUpRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </motion.article>
  );
}
