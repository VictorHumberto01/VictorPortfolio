import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import ProjectTechStack from "./ProjectTechStack";

const translations = {
  en: {
    viewProject: "View Project",
    soon: "Soon"
  },
  pt: {
    viewProject: "Ver Projeto",
    soon: "Em Breve"
  }
};

const ProjectCard = ({ project, language }) => {
  return (
    <div className="relative h-full">
      {project.badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
            {project.badge}
          </span>
        </div>
      )}
      <Card className="group h-full flex flex-col overflow-hidden bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm hover:bg-zinc-900/30 transition-all duration-300">
        <div className="relative aspect-video overflow-hidden flex-shrink-0">
          <img
            src={project.banner}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold text-zinc-50 mb-2 group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-zinc-400 mb-4 flex-1">{project.description[language]}</p>
           
          <div className="mt-auto">
            <ProjectTechStack projectTitle={project.title} />
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex gap-4 flex-shrink-0">
          <Button
            variant="ghost"
            className={`flex-1 border border-white/10 group/btn ${
              project.disabled
                ? "bg-white/10 text-zinc-500 cursor-not-allowed"
                : "bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white"
            }`}
            onClick={() =>
              !project.disabled && window.open(project.projectUrl, "_blank")
            }
            disabled={project.disabled}
          >
            {project.disabled ? translations[language].soon : translations[language].viewProject}
            {!project.disabled && (
              <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;