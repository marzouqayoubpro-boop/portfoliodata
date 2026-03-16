"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Brain } from "lucide-react";
import { personal } from "@/data/personal";
import SectionTitle from "@/components/ui/SectionTitle";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
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

export default function AboutSection() {
  return (
    <section id="a-propos" className="relative py-28 sm:py-36">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 bg-midnight-900/50" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionTitle
          label="// A propos"
          title="Qui suis-je ?"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="group relative">
              {/* Glow behind photo — visible on hover only */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent-400/0 via-glow-cyan/0 to-glow-purple/0 opacity-0 blur-xl transition-all duration-500 group-hover:from-accent-400/20 group-hover:via-glow-cyan/10 group-hover:to-glow-purple/20 group-hover:opacity-100" />

              {/* Photo container */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 group-hover:border-accent-400/30">
                <Image
                  src="/images/profil/20250628_142007204_iOS.jpg"
                  alt={`Photo de ${personal.name}`}
                  width={420}
                  height={420}
                  className="h-auto w-full max-w-[420px] object-cover"
                  priority={false}
                />

                {/* Subtle overlay gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-midnight-950/60 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <div className="flex flex-col gap-8">
            {/* Bio */}
            <motion.div
              custom={0}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="text-lg leading-relaxed text-neutral-300">
                {personal.bio}
              </p>
            </motion.div>

            {/* AI Philosophy Card */}
            <motion.div
              custom={1}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="group/ai relative overflow-hidden rounded-xl border border-glow-purple/20 bg-gradient-to-br from-midnight-800/80 via-midnight-800/60 to-glow-purple/[0.04] p-5 transition-all duration-500 hover:border-glow-purple/40 hover:shadow-[0_0_30px_rgba(167,139,250,0.08)]"
            >
              {/* Subtle glow orb */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-glow-purple/5 blur-2xl transition-all duration-500 group-hover/ai:bg-glow-purple/10" />

              <div className="relative">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-glow-purple">
                  <Brain size={16} />
                  Ma philosophie IA
                </div>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {personal.aiPhilosophy}
                </p>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              custom={2}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex items-center gap-2 text-sm text-neutral-500"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-glow-emerald" />
              {personal.location}
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              custom={3}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-neutral-100">
                <Sparkles size={16} className="text-glow-purple" />
                Soft Skills
              </div>
              <div className="flex flex-wrap gap-2">
                {personal.softSkills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + i * 0.06,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="rounded-lg border border-white/[0.06] bg-midnight-800/50 px-3.5 py-1.5 text-sm text-neutral-300 transition-colors hover:border-glow-purple/20 hover:text-neutral-100"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
