"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { personal } from "@/data/personal";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp } from "@/lib/animations";

const socialLinks = [
  {
    icon: Github,
    href: personal.github,
    label: "GitHub",
    handle: "marzouqayoubpro-boop",
  },
  {
    icon: Linkedin,
    href: personal.linkedin,
    label: "LinkedIn",
    handle: "Ayoub Marzouq",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          label="// Contact"
          title="Travaillons ensemble"
          description="Un projet data, une opportunite ou simplement envie d'echanger ? N'hesitez pas."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="mx-auto max-w-2xl"
        >
          {/* Email card */}
          <motion.a
            variants={fadeInUp}
            href={`mailto:${personal.email}`}
            className="glass-card group mb-4 flex items-center gap-5 rounded-xl p-6 transition-all duration-300 hover:border-accent-400/30 hover:shadow-[0_8px_40px_rgba(56,189,248,0.1)]"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-400/10">
              <Mail size={22} className="text-accent-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-neutral-100">
                M'envoyer un email
              </p>
              <p className="mt-0.5 text-sm text-neutral-500">
                {personal.email}
              </p>
            </div>
            <ArrowUpRight
              size={18}
              className="text-neutral-500 transition-all duration-200 group-hover:text-accent-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>

          {/* Social links */}
          {socialLinks.map(({ icon: Icon, href, label, handle }) => (
            <motion.a
              key={label}
              variants={fadeInUp}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group mb-4 flex items-center gap-5 rounded-xl p-6 transition-all duration-300 hover:border-white/10 last:mb-0"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/[0.04]">
                <Icon size={22} className="text-neutral-300" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-neutral-100">
                  {label}
                </p>
                <p className="mt-0.5 text-sm text-neutral-500">{handle}</p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-neutral-500 transition-all duration-200 group-hover:text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
