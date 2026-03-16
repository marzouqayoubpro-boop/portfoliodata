"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Database,
  BarChart3,
  Wrench,
  Megaphone,
  Bot,
  TrendingUp,
  Briefcase,
} from "lucide-react";
import { dataSkills, marketingSkills } from "@/data/skills";
import SectionTitle from "@/components/ui/SectionTitle";

const dataCategoryIcons = {
  "Langages & Librairies": Terminal,
  "Data Engineering": Database,
  "Data Visualization": BarChart3,
  "Outils & Méthodes": Wrench,
};

const marketingCategoryIcons = {
  "Marketing Digital": Megaphone,
  "Automatisation & IA": Bot,
  "Analytics & Tracking": TrendingUp,
  "Stratégie & Gestion": Briefcase,
};

const tabs = [
  { id: "data", label: "Tech & Data" },
  { id: "marketing", label: "Stratégie & Marketing" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.04,
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
  }),
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("data");
  const [direction, setDirection] = useState(0);

  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return;
    setDirection(tabId === "marketing" ? 1 : -1);
    setActiveTab(tabId);
  };

  const categories = activeTab === "data" ? dataSkills : marketingSkills;
  const icons =
    activeTab === "data" ? dataCategoryIcons : marketingCategoryIcons;

  return (
    <section id="competences" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          label="// Competences"
          title="Ma boite a outils"
          description="Les technologies et methodes que j'utilise au quotidien pour concevoir des pipelines data, analyser et visualiser."
        />

        {/* Toggle Pilule */}
        <div className="flex items-center p-1.5 bg-midnight-900 border border-white/10 rounded-full w-fit mx-auto relative mb-12 shadow-inner">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 outline-none ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  className="absolute inset-0 bg-accent-600 rounded-full shadow-md"
                  style={{ zIndex: -1 }}
                  layoutId="active-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid with slide animation */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeTab}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-6 sm:grid-cols-2"
              >
                {categories.map((category) => {
                  const Icon = icons[category.name] || Terminal;
                  return (
                    <motion.div
                      key={category.name}
                      variants={cardVariants}
                      className="glass-card group rounded-xl p-6"
                    >
                      {/* Category header */}
                      <div className="mb-5 flex items-center gap-2.5">
                        <Icon size={18} className="text-accent-400" />
                        <h3 className="text-sm font-semibold tracking-wide text-accent-400">
                          {category.name}
                        </h3>
                      </div>

                      {/* Skills as text badges */}
                      <div className="flex flex-wrap gap-2.5">
                        {category.skills.map((skill, i) => (
                          <motion.span
                            key={skill.name}
                            custom={i}
                            variants={skillVariants}
                            initial="hidden"
                            animate="visible"
                            className="rounded-lg border border-white/[0.06] bg-midnight-800/60 px-3.5 py-1.5 text-sm font-medium text-neutral-300 transition-all duration-200 hover:border-accent-400/20 hover:text-accent-400"
                          >
                            {skill.name}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
