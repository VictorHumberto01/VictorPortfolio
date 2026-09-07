import React from "react";
import { motion } from "framer-motion";
import { TECH_ICONS } from "@/lib/techIcons";
import TechIcon from "@/components/ui/TechIcon";

const TechBadge = ({ icon, name }) => (
  <motion.div
    className="flex items-center gap-2 px-2.5 py-1.5 bg-zinc-800/50 rounded-md text-zinc-300 hover:bg-zinc-700/50 transition-all duration-300"
    whileHover={{ scale: 1.05 }}
  >
    <TechIcon icon={icon} name={name} className="w-4 h-4 text-zinc-300" />
    <span className="text-xs text-zinc-300">{name}</span>
  </motion.div>
);

const ProjectTechStack = ({ techStack = [] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {techStack.map((name) => (
        <TechBadge key={name} icon={TECH_ICONS[name]} name={name} />
      ))}
    </div>
  );
};

export default ProjectTechStack;
