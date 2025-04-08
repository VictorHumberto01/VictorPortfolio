'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../../../context/LanguageContext';

// Add translations
const translations = {
  en: {
    title: "My Path in Tech",
    subtitle: "From first code to founding companies",
    viewProject: "View Related Project"
  },
  pt: {
    title: "Minha Jornada na Tecnologia",
    subtitle: "Do primeiro código à fundação de empresas",
    viewProject: "Ver Projeto Relacionado"
  },
  journey: {
    en: [
        {
          year: "2025",
          specificDate: "Apr",
          title: "Computer Science Student",
          location: "Instituto Federal de Minas Gerais (IFMG)",
          description: "Starting my degree in Computer Science at IFMG while living in Belo Horizonte. Focused on deepening my understanding of fundamental and advanced computer science concepts.",
          skills: ["Data Structures", "Algorithms", "Software Engineering", "Computer Science", "Operating Systems", "Computer Architecture"]
      },
      {
        year: "2025",
        specificDate: "Mar",
        title: "Backend concepts, OOP and good practices",
        location: "Self-taught",
        description: "Learning Java focusing on clean architecture, design patterns, and best practices for building scalable backend systems.",
        skills: ["Java", "Object-oriented programming", "Clean Architecture", "Design Patterns", "Enterprise Development"]
      },
      {
          year: "2025",
          specificDate: "Jan",
          title: "General Concepts",
          location: "Self-taught",
          description: "Prepared for Computer Science degree by studying core programming concepts and languages. Focused on algorithms, data structures, and system-level programming.",
          skills: ["C", "C++", "Algorithms", "Data Structures"]
      },
      {
          year: "2024",
          title: "Software Developer at Quantium Labs",
          location: "Quantium Labs",
          description: "Continuing my journey at Quantium Labs, working on various software projects while improving my technical and problem-solving skills.",
          skills: ["ReactJS", "TailwindCSS", "Project Management", "Team Leadership", "System Design"
          ]
      },
      {
          year: "2023",
          title: "Web Development Journey",
          location: "Self-taught",
          description: "Transitioned to web development, diving deep into modern technologies and frameworks. Focused on building practical applications and expanding my technical toolkit.",
          skills: ["JavaScript", "ReactJS", "TailwindCSS", "Modern Web Dev", "Typescript", "ExpressJS", "Database"]
      },
      {
          year: "2022",
          title: "Data Science Explorer",
          location: "Self-taught",
          description: "Discovered and explored data science, focusing on machine learning and deep learning frameworks. Learned to build and train neural networks.",
          skills: ["Neural Networks", "TensorFlow", "PyTorch", "Data Science", "Numpy"]
      },
      {
          year: "2021",
          title: "Programming Beginnings",
          location: "First Projects",
          description: "Started my programming journey at age 15. Created my first significant project: a Discord bot for playing YouTube music, which sparked my passion for development.",
          skills: ["Python", "Discord.js", "Basic Programming"]
      }
    ],
    pt: [
      {
        year: "2025",
        specificDate: "Abr",
        title: "Estudante de Ciência da Computação",
        location: "Instituto Federal de Minas Gerais (IFMG)",
        description: "Iniciando minha graduação em Ciência da Computação no IFMG enquanto moro em Belo Horizonte. Focado em aprofundar meu entendimento de conceitos fundamentais e avançados de ciência da computação.",
        skills: ["Estruturas de Dados", "Algoritmos", "Engenharia de Software", "Ciência da Computação", "Sistemas Operacionais", "Arquitetura de Computadores"]
      },
      {
        year: "2025",
        specificDate: "Mar",
        title: "Conceitos de Backend, POO e boas práticas",
        location: "Autodidata",
        description: "Aprendendo Java com foco em arquitetura limpa, padrões de projeto e melhores práticas para construir sistemas backend escaláveis.",
        skills: ["Java", "Programação Orientada a Objetos", "Arquitetura Limpa", "Padrões de Projeto", "Desenvolvimento Empresarial"]
      },
      {
        year: "2025",
        specificDate: "Jan",
        title: "Conceitos Gerais",
        location: "Autodidata",
        description: "Preparação para a graduação em Ciência da Computação estudando conceitos fundamentais de programação e linguagens. Foco em algoritmos, estruturas de dados e programação em nível de sistema.",
        skills: ["C", "C++", "Algoritmos", "Estruturas de Dados"]
      },
      {
        year: "2024",
        title: "Desenvolvedor de Software na Quantium Labs",
        location: "Quantium Labs",
        description: "Continuando minha jornada na Quantium Labs, trabalhando em vários projetos de software enquanto melhoro minhas habilidades técnicas e de resolução de problemas.",
        skills: ["ReactJS", "TailwindCSS", "Gestão de Projetos", "Liderança de Equipe", "Design de Sistemas"]
      },
      {
        year: "2023",
        title: "Jornada no Desenvolvimento Web",
        location: "Autodidata",
        description: "Transição para desenvolvimento web, mergulhando fundo em tecnologias e frameworks modernos. Foco na construção de aplicações práticas e expansão do meu conjunto de ferramentas técnicas.",
        skills: ["JavaScript", "ReactJS", "TailwindCSS", "Desenvolvimento Web Moderno", "Typescript", "ExpressJS", "Banco de Dados"]
      },
      {
        year: "2022",
        title: "Explorador de Ciência de Dados",
        location: "Autodidata",
        description: "Descobri e explorei ciência de dados, focando em frameworks de machine learning e deep learning. Aprendi a construir e treinar redes neurais.",
        skills: ["Redes Neurais", "TensorFlow", "PyTorch", "Ciência de Dados", "Numpy"]
      },
      {
        year: "2021",
        title: "Início na Programação",
        location: "Primeiros Projetos",
        description: "Comecei minha jornada na programação aos 15 anos. Criei meu primeiro projeto significativo: um bot do Discord para tocar música do YouTube, que despertou minha paixão pelo desenvolvimento.",
        skills: ["Python", "Discord.js", "Programação Básica"]
      }
    ]
  }
};

const JourneySection = ({ 
  journey, 
  currentSection, 
  sectionsRef, 
  journeyRef, 
  isScrolled, 
  isMobile 
}) => {
  const { language } = useLanguage();

  return (
    <section 
      id='journey'
      ref={el => sectionsRef.current[3] = el} 
      className="min-h-screen snap-start relative py-20 md:py-24"
    >
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={currentSection === 3 ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <SectionHeader currentSection={currentSection} language={language} />
        <JourneyCards 
          journey={translations.journey[language]} 
          currentSection={currentSection}
          language={language}
        />
      </motion.div>
    </section>
  );
};

// Update JourneyCards to remove scrollable container
const JourneyCards = ({ journey, currentSection, language }) => {
  return (
    <div className="space-y-8 py-4">
      {journey.map((item, index) => (
        <JourneyCard 
          key={`${item.year}-${item.title.replace(/\s+/g, '-').toLowerCase()}`}
          item={item}
          index={index}
          currentSection={currentSection}
        />
      ))}
    </div>
  );
};

const SectionHeader = ({ currentSection, language }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={currentSection === 3 ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative z-10"
    >
      <h2 className="text-3xl font-bold text-zinc-50 mb-2">{translations[language].title}</h2>
      <p className="text-zinc-400 mb-8">{translations[language].subtitle}</p>
    </motion.div>
  );
};

const JourneyCard = ({ item, index, currentSection }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={currentSection === 3 ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm hover:bg-zinc-900/30 transition-all duration-300 group">
        <CardContent className="p-6">
          <div className="flex items-start gap-6">
            <YearBadge year={item.year} specificDate={item.specificDate} />
            <JourneyDetails item={item} />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const YearBadge = ({ year, specificDate }) => {
  return (
    <div className="flex-shrink-0 relative">
      <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
        <Calendar className="h-5 w-5 text-blue-400 absolute opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <div className="flex flex-col items-center justify-center group-hover:opacity-0 transition-all duration-300">
          <span className="text-blue-400 font-semibold">{year}</span>
          {specificDate && <span className="text-xs text-blue-300/70">{specificDate}</span>}
        </div>
      </div>
    </div>
  );
};

const JourneyDetails = ({ item }) => {
  return (
    <div className="space-y-4 flex-1">
      <div>
        <h3 className="text-xl font-semibold text-zinc-50 group-hover:text-blue-400 transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-zinc-400">{item.location}</p>
      </div>
      <p className="text-zinc-300 leading-relaxed">{item.description}</p>
      
      <SkillBadges skills={item.skills} />
      
      {item.projectLink && (
        <ProjectLink projectLink={item.projectLink} />
      )}
    </div>
  );
};

const SkillBadges = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge 
          key={skill}
          variant="secondary"
          className="bg-zinc-800/50 text-zinc-300 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300"
        >
          {skill}
        </Badge>
      ))}
    </div>
  );
};

const ProjectLink = ({ projectLink }) => {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <Button 
        variant="ghost" 
        size="sm" 
        className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 group/btn"
        onClick={() => {
          const element = document.querySelector(projectLink);
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {translations[language].viewProject}
        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
      </Button>
    </motion.div>
  );
};

export default JourneySection;