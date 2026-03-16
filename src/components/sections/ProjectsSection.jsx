"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function ProjectsSection() {
  return (
    <section id="projets" className="relative py-28 sm:py-36">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-midnight-900/50" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionTitle
          label="// Projets"
          title="Ce que j'ai construit"
          description="Des pipelines data aux modeles predictifs, chaque projet repond a une problematique business concrete."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
