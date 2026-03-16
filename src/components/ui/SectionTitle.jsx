"use client";

import { motion } from "framer-motion";

export default function SectionTitle({ label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16 text-center"
    >
      {label && (
        <span className="mb-3 inline-block font-mono text-sm tracking-widest text-accent-400">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-neutral-100 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-xl text-base text-neutral-500">
          {description}
        </p>
      )}
    </motion.div>
  );
}
