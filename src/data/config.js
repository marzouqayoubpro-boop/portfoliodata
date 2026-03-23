import { Database, Brain, BarChart3, BookOpen } from "lucide-react";

export { BookOpen };

export const typeIcons = {
  "Data Engineering": Database,
  "Data Science": Brain,
  "Intelligence Artificielle": Brain,
  "Data Analysis": BarChart3,
};

export const statusConfig = {
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
