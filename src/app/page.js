'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, ExternalLink, Code2, Briefcase, BookMarked, User, Terminal, ChevronDown, Calendar, HomeIcon } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import AnimatedHero from '@/components/sections/HeroSection/Hero';
import AboutSection from '@/components/sections/AboutSection/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection/SkillsSection';
import JourneySection from '@/components/sections/JourneySection/JourneySection';
import ProjectsSection from '@/components/sections/ProjectsSection/ProjectsSection';
import Timeline from '@/components/ui/Timeline';
import Footer from '@/components/ui/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import ContactFooter from '@/components/ui/ContactFooter';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [currentSection, setCurrentSection] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionsRef = useRef([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const journeyRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Add scroll listener for journey section
  useEffect(() => {
    const handleScroll = () => {
      if (journeyRef.current) {
        const scrollPosition = journeyRef.current.scrollTop;
        setIsScrolled(scrollPosition > 20);
      }
    };

    const journeyElement = journeyRef.current;
    if (journeyElement) {
      journeyElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (journeyElement) {
        journeyElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const sections = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'about', label: 'About', icon: User }, 
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'journey', label: 'Journey', icon: BookMarked },
    { id: 'projects', label: 'Projects', icon: Briefcase }
  ];
  
  const journey = [
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
];

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Use requestAnimationFrame for smoother cursor updates
      requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setMousePosition({ x, y });
      });
    };

    // Add passive flag to improve scroll performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Add a scroll event listener to update cursor position during scroll
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const e = { clientX: mousePosition.x * window.innerWidth / 100, clientY: mousePosition.y * window.innerHeight / 100 };
        handleMouseMove(e);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mousePosition]);

  // Improved scroll detection using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = sectionsRef.current.findIndex(section => section === entry.target);
          if (index !== -1) {
            setCurrentSection(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sectionsRef.current.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);


  const skills = [
    { 
      name: "Frontend", 
      items: [
        { name: "React", svgUrl: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/da046048091a791b72ee3ed1751c85d9598445f9/main/react.svg" },
        { name: "Next.js", svgUrl: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/da046048091a791b72ee3ed1751c85d9598445f9/main/next.svg" },
        { name: "TypeScript", svgUrl: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/da046048091a791b72ee3ed1751c85d9598445f9/main/typescript.svg" },
        { name: "Tailwind CSS", svgUrl: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/da046048091a791b72ee3ed1751c85d9598445f9/main/tailwind.svg" },
        { name: "HTML5/CSS3", svgUrl: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/da046048091a791b72ee3ed1751c85d9598445f9/main/html-css.svg" },
        { name: "JavaScript", svgUrl: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/da046048091a791b72ee3ed1751c85d9598445f9/main/javascript.svg" }
      ]
    },
    { 
      name: "Backend", 
      items: [
        { name: "TypeScript", svgUrl: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/da046048091a791b72ee3ed1751c85d9598445f9/main/typescript.svg" },
        { name: "Express", svgUrl: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/6a09879637bc9c4096c092081c5b7036558c0de2/main/express.svg" },
        { name: "MySql", svgUrl: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/6a09879637bc9c4096c092081c5b7036558c0de2/main/mysql.svg" },
        { name: "MongoDB", svgUrl: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/6a09879637bc9c4096c092081c5b7036558c0de2/main/mongodb.svg" },
        { name: "PostgreSQL", svgUrl: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/6a09879637bc9c4096c092081c5b7036558c0de2/main/postgresql.svg" },
        { name: "Sqlite", svgUrl: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/f399628e99a19c1c6480ad95aace0e3a41b51dbe/main/sqlite.svg" }
      ]
    },
    { 
      name: "Tools", 
      items: [
        { name: "Git", svgUrl: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/f399628e99a19c1c6480ad95aace0e3a41b51dbe/main/git.svg" },
        { name: "Docker", svgUrl: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/f399628e99a19c1c6480ad95aace0e3a41b51dbe/main/docker.svg" },
        { name: "CI/CD", svgUrl: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/f399628e99a19c1c6480ad95aace0e3a41b51dbe/main/cicd.svg" },
        { name: "Jest", svgUrl: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/f399628e99a19c1c6480ad95aace0e3a41b51dbe/main/jest.svg" },
      ]
    },
  ];

  const projects = [
    {
      title: "Gustavo Portfolio",
      description:
        "A law school themed portfolio page developed with NextJS and TailwindCSS. Features a clean and professional design to showcase Gustavo’s achievements and work.",
      banner: "/images/gustavo.png",
      projectUrl: "https://github.com/VictorHumberto01/gustavoportfolio",
      disabled: true,
    },
    {
      title: "My Personal Porfolio",
      description: "My personal portfolio page. It was made using NextJS and TailwindCSS. It is a simple and elegant page that shows my skills and projects. It is a work in progress and will be updated as I progress in my career.",
      banner: "/images/portfolio.png",
      projectUrl: "https://github.com/VictorHumberto01/VictorPortfolio"
    },
    {
      title: "Céus",
      description: "A groundbreaking location based game developed for a client under Quantium Labs with ReactJS and TailwindCSS. Features a story system that storage messages and a map system that shows to the player where to go to see the stories.",
      banner: "/images/ceus.png",
      projectUrl: "https://ceusgame.com",
    },
    {
      title: "Aline Nery Portfolio",
      description: "A personal Portfolio page and event ticket selling system developed for a executive coach under Quantium Labs with NextJS. Features a complete admin dashboard for managing events and tickets.",
      banner: "/images/aline.png",
      projectUrl: "https://alinenery.com.br",
    },
    {
      title: "LlamaBridge",
      description: "A server and client interface to host your own instance of the Llama model. Uses Ollama to generate the model and a server to host the model. The client is built using Swift for MacOS and commmunicate to local server run in the same network.",
      banner: "/images/llama.png",
      projectUrl: "https://github.com/VictorHumberto01/LlamaBridge",
    },
    {
      title: "Music Discord Bot",
      description: "My first project. I started as most youtube discord bots were seizing from existing. Can play music from YouTube videos. Developed using Python and Pycord. Features a queue system, loop, playlist support and slash commands. It was made as a experiment and was never used in production.",
      banner: "/images/music.png",
      projectUrl: "https://github.com/VictorHumberto01/Tubetinho",
    }
  ];

const scrollToSection = (index) => {
  if (isMobile) {
    setIsMobileMenuOpen(false);
  }
  const section = sectionsRef.current[index];
  if (section) {
    section.scrollIntoView({
      block: 'start',
      inline: 'start'
    });
  }
};
// Scroll hint function
const scrollToContent = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
};

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-zinc-950 text-zinc-50 overflow-hidden [&]:cursor-none [&_*]:cursor-none [&_button]:cursor-none [&_a]:cursor-none"
    >
      {!isMobile && <CustomCursor />}
      <Timeline />
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 bg-cover bg-fixed"
          style={{ 
            backgroundImage: "url('/background.jpg')",
            opacity: 0.3,
          }}
        />

        <motion.div 
          className="relative h-full"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { 
              opacity: 1, 
              scale: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }
          }}
        >
        </motion.div>
      </div>
    
          {/* Mobile Navigation */}
          {isMobile && (
        <nav className="fixed top-0 left-0 right-0 z-[60] bg-zinc-900/30 backdrop-blur-xl p-4 flex justify-between items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>
      )}

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-zinc-950/90 backdrop-blur-md"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <Button 
                    key={section.id}
                    variant="ghost"
                    size="lg"
                    onClick={() => scrollToSection(index)}
                    className="text-xl text-white w-full max-w-xs"
                  >
                    <Icon className="mr-4 h-6 w-6" /> {section.label}
                  </Button>
                );
              })}
              <div className="flex gap-4 pt-8">
                <Button 
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white"
                  onClick={() => window.open('https://github.com/VictorHumberto01', '_blank')}
                >
                  <SiGithub className="mr-2 h-4 w-4" /> GitHub
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white"
                  onClick={() => window.open('https://www.linkedin.com/in/victor-gonçalves-98708a349/', '_blank')}
                >
                  <SiLinkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        
      {/* Enhanced Animated Navigation */}
      {!isMobile && (
        <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="flex flex-col items-center gap-6 bg-zinc-900/30 backdrop-blur-sm p-3 rounded-full border border-zinc-800/30"
        >
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div 
                key={section.id} 
                className="relative group"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + (index * 0.1) }}
              >
                <motion.button
                  onClick={() => scrollToSection(index)}
                  className={`p-2 rounded-full transition-all duration-300 relative ${
                    currentSection === index 
                      ? 'text-blue-400' 
                      : 'text-zinc-400 hover:text-blue-400'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 relative z-10" />
                  {currentSection === index && (
                    <motion.div
                      layoutId="nav-background"
                      className="absolute inset-0 bg-blue-500/20 rounded-full ring-2 ring-blue-500/50"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
                <motion.div 
                  className="absolute right-full top-1/2 -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100"
                  initial={{ x: 10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-sm text-zinc-300 whitespace-nowrap bg-zinc-900/90 px-3 py-1.5 rounded-full border border-zinc-800/50">
                    {section.label}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </nav>
      )}
      
      
      <div 
        className={`
          ${isMobile ? 'overflow-y-auto' : 'h-screen snap-y snap-mandatory overflow-y-scroll'}
          overflow-x-hidden
        `}
        style={{
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        
        {/* Hero Section */}
        <section 
          ref={el => sectionsRef.current[0] = el}
          id='home'
          className="h-screen snap-start flex items-center relative"
        >
         <AnimatedHero/>

        </section>
        <AboutSection 
            currentSection={currentSection} 
            sectionsRef={sectionsRef} 
            id='about'
          />

        {/* Skills Section */}
        <SkillsSection
          skills={skills}
          currentSection={currentSection}
          sectionsRef={sectionsRef}
          id='skills'
        />

        {/* Journey Section */}
        <JourneySection
            journey={journey}
            currentSection={currentSection}
            sectionsRef={sectionsRef}
            journeyRef={journeyRef}
            isScrolled={isScrolled}
            isMobile={isMobile}
            id='journey'
          />

    {/* Projects Section */}
    <ProjectsSection 
        currentSection={currentSection} 
        sectionsRef={sectionsRef} 
        projects={projects} 
        isMobile={isMobile}
        id='projects'
      />
      </div>
      
      {/* Scroll Hint */}
      <AnimatePresence>
        {currentSection === 0 && (
          <motion.div 
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1, duration: 0.2 }}
          >
            <motion.div
              onClick={scrollToContent}
              className="cursor-pointer p-2 rounded-full bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                y: [0, 8, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <ChevronDown className="h-5 w-5 text-blue-400" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isMobile && <ContactFooter />}
    </motion.div>
  );
};


export default Portfolio;
