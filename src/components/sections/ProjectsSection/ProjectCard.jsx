import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Lock } from "lucide-react";
import { SiGithub } from "react-icons/si";
import ProjectTechStack from "./ProjectTechStack";
import { PROJECT_CATEGORIES } from "@/lib/projectCategories";

const translations = {
  en: {
    viewProject: "View Project",
    soon: "Soon",
    confidential: "Confidential (NDA)",
  },
  pt: {
    viewProject: "Ver Projeto",
    soon: "Em Breve",
    confidential: "Confidencial (NDA)",
  },
};

const ProjectCard = ({ project, language }) => {
  const category = project.category && PROJECT_CATEGORIES[project.category];
  const showSourceButton =
    project.sourceUrl && project.sourceUrl !== project.projectUrl;
  const isLinkDisabled = project.disabled || project.confidential;

  return (
    <div className="relative h-full">
      <Card className="group h-full flex flex-col overflow-hidden bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-900/30 hover:border-blue-500/30 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.35)]">
        <div className="relative aspect-video overflow-hidden flex-shrink-0">
          {project.banner ? (
            <img
              src={project.banner}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800/80 to-zinc-900">
              <span className="text-4xl font-bold text-zinc-700">
                {project.title[0]}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/0 to-zinc-950/0" />

          <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
            {category ? (
              <span
                className={`px-2.5 py-1 text-xs font-medium rounded-full border backdrop-blur-sm ${category.className}`}
              >
                {category.label[language]}
              </span>
            ) : (
              <span />
            )}
            {project.badge && (
              <span className="px-2.5 py-1 text-xs font-medium bg-amber-500/15 text-amber-400 rounded-full border border-amber-500/30 backdrop-blur-sm whitespace-nowrap">
                {project.badge}
              </span>
            )}
          </div>
        </div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold text-zinc-50 mb-2 group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-zinc-400 mb-4 flex-1">{project.description[language]}</p>

          <div className="mt-auto">
            <ProjectTechStack techStack={project.techStack} />
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex gap-3 flex-shrink-0">
          <Button
            variant="ghost"
            className={`flex-1 border border-white/10 group/btn ${
              isLinkDisabled
                ? "bg-white/10 text-zinc-500 cursor-not-allowed"
                : "bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white"
            }`}
            onClick={() =>
              !isLinkDisabled && window.open(project.projectUrl, "_blank")
            }
            disabled={isLinkDisabled}
          >
            {project.confidential ? (
              <Lock className="mr-2 h-3.5 w-3.5" />
            ) : null}
            {project.confidential
              ? translations[language].confidential
              : project.disabled
              ? translations[language].soon
              : translations[language].viewProject}
            {!isLinkDisabled && (
              <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
            )}
          </Button>
          {showSourceButton && !isLinkDisabled && (
            <Button
              variant="ghost"
              size="icon"
              className="border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white flex-shrink-0"
              onClick={() => window.open(project.sourceUrl, "_blank")}
              aria-label="Source code"
            >
              <SiGithub className="h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
