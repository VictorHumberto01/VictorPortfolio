'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Database, Server } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '../../../context/LanguageContext';
import TechIcon from '@/components/ui/TechIcon';

// Add translations
const translations = {
  en: {
    title: "Skills & Expertise",
    subtitle: "My tech stack",
    categories: {
      Frontend: "Frontend",
      Backend: "Backend",
      Database: "Database & Queues",
      DevOps: "DevOps & Tools"
    }
  },
  pt: {
    title: "Habilidades & Experiência",
    subtitle: "Minha stack tecnológica",
    categories: {
      Frontend: "Frontend",
      Backend: "Backend",
      Database: "Banco de Dados & Filas",
      DevOps: "DevOps & Ferramentas"
    }
  }
};

const CATEGORY_ICONS = {
  Frontend: Code2,
  Backend: Terminal,
  Database: Database,
  DevOps: Server,
};

const SkillsSection = ({ skills, currentSection, sectionsRef }) => {
  const { language } = useLanguage();

  return (
    <section
      id='skills'
      ref={el => sectionsRef.current[2] = el}
      className="h-screen snap-start flex items-center relative"
    >
      <motion.div
        className="container mx-auto px-4 py-24"
        initial={{ opacity: 0 }}
        animate={currentSection === 2 ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <SkillsHeader currentSection={currentSection} language={language} />
        <SkillsGrid skills={skills} currentSection={currentSection} language={language} />
      </motion.div>
    </section>
  );
};

const SkillsHeader = ({ currentSection, language }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={currentSection === 2 ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative z-10"
    >
      <h2 className="text-3xl font-bold text-zinc-50 mb-2">{translations[language].title}</h2>
      <p className="text-zinc-400 mb-8">{translations[language].subtitle}</p>
    </motion.div>
  );
};

const SkillsGrid = ({ skills, currentSection, language }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((category, categoryIndex) => (
        <SkillCategory
          key={category.name}
          category={category}
          categoryIndex={categoryIndex}
          currentSection={currentSection}
          language={language}
        />
      ))}
    </div>
  );
};

const SkillCategory = ({ category, categoryIndex, currentSection, language }) => {
  const CategoryIcon = CATEGORY_ICONS[category.name] ?? Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={currentSection === 2 ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: categoryIndex * 0.1, ease: "easeOut" }}
    >
      <Card className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm hover:bg-zinc-900/30 hover:border-blue-500/30 transition-colors duration-300 h-full">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 flex-shrink-0">
              <CategoryIcon className="h-4 w-4 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-50">
              {translations[language].categories[category.name]}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.items.map((item) => (
              <SkillPill key={item.name} item={item} />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SkillPill = ({ item }) => {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/50 rounded-full text-zinc-300 hover:bg-zinc-700/50 hover:text-zinc-50 transition-colors duration-200">
      <TechIcon icon={item.icon} name={item.name} className="w-4 h-4 text-zinc-300 flex-shrink-0" />
      <span className="text-xs font-medium">{item.name}</span>
    </div>
  );
};

export default SkillsSection;
