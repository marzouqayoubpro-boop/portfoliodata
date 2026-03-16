import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/personal";

const socialLinks = [
  { icon: Github, href: personal.github, label: "GitHub" },
  { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-midnight-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        {/* Left — Branding */}
        <div className="flex items-center gap-2 text-sm text-neutral-500">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-400" />
          <span>
            {new Date().getFullYear()} {personal.name}
          </span>
          <span className="hidden sm:inline">—</span>
          <span className="hidden sm:inline">{personal.title}</span>
        </div>

        {/* Right — Social */}
        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg p-2 text-neutral-500 transition-all hover:bg-white/5 hover:text-accent-400"
              aria-label={label}
            >
              <Icon size={18} className="transition-transform duration-200 group-hover:scale-110" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
