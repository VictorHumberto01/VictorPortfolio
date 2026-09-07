import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ContactFooter from '@/components/ui/ContactFooter';
import Footer from '@/components/ui/Footer';
import { useLanguage } from '../../../context/LanguageContext';
import { PROJECT_CATEGORIES } from '@/lib/projectCategories';

const translations = {
  en: {
    title: "My Work",
    subtitle: "Featured projects",
    all: "All",
    empty: "No projects in this category yet.",
  },
  pt: {
    title: "Meu Trabalho",
    subtitle: "Projetos em destaque",
    all: "Todos",
    empty: "Ainda não há projetos nessa categoria.",
  }
};

const ProjectsSection = ({ currentSection, sectionsRef, projects, isMobile }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeFilter, setActiveFilter] = useState('all');

  const availableCategories = useMemo(
    () => Array.from(new Set(projects.map((p) => p.category).filter(Boolean))),
    [projects]
  );

  const filteredProjects = useMemo(
    () =>
      activeFilter === 'all'
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [projects, activeFilter]
  );

  return (
    <section
      ref={el => sectionsRef.current[4] = el}
      id='projects'
      className={`h-screen snap-start relative ${!isMobile ? 'overflow-y-auto themed-scrollbar' : ''}`}
    >
      <motion.div
        className={`container mx-auto px-4 py-16 ${isMobile ? '' : 'min-h-screen'}`}
        initial={{ opacity: 0 }}
        animate={currentSection === 4 ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={currentSection === 4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="sticky top-0 pt-4 pb-6 backdrop-blur-sm z-10">
              <h2 className="text-3xl font-bold text-zinc-50">{t.title}</h2>
              <div className="flex items-center mb-4">
                <Briefcase className="mr-2 h-4 w-4 text-zinc-400" />
                <span className="text-zinc-400">{t.subtitle}</span>
              </div>

              {availableCategories.length > 1 && (
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveFilter('all')}
                    className={`px-3.5 py-1.5 text-sm rounded-full border transition-colors duration-200 ${
                      activeFilter === 'all'
                        ? 'bg-blue-500/20 text-blue-400 border-blue-500/40'
                        : 'bg-white/5 text-zinc-400 border-white/10 hover:text-zinc-200 hover:border-white/20'
                    }`}
                  >
                    {t.all}
                  </button>
                  {availableCategories.map((key) => {
                    const category = PROJECT_CATEGORIES[key];
                    if (!category) return null;
                    const isActive = activeFilter === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setActiveFilter(key)}
                        className={`px-3.5 py-1.5 text-sm rounded-full border transition-colors duration-200 ${
                          isActive
                            ? category.className
                            : 'bg-white/5 text-zinc-400 border-white/10 hover:text-zinc-200 hover:border-white/20'
                        }`}
                      >
                        {category.label[language]}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={currentSection === 4 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} language={language} />
                </motion.div>
              ))}
              {filteredProjects.length === 0 && (
                <p className="text-zinc-500 col-span-full text-center py-12">{t.empty}</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <ContactFooter />
      <Footer/>
    </section>
  );
};

export default ProjectsSection;
