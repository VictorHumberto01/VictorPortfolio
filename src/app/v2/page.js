'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Github, Linkedin, Mail, ArrowRight, ArrowLeft, Menu, Loader2, X, ExternalLink, Code2, BookOpen, Briefcase, BookMarked, User, Terminal, ChevronDown, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import HeroDecoration from '@/components/ui/HeroDecoration';
import ScrollHint from '@/components/ui/ScrollHint';
import Link from 'next/link';



// Deterministic pseudo-random number generator based on a seed
const deterministicRandom = (seed) => {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const LoadingScreen = () => {
  const particles = Array(40).fill();
  const lines = Array(20).fill();

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-zinc-950 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { 
          duration: 0.6, 
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2 
        }
      }}
    >
      {/* Subtle grid foundation */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 gap-px opacity-5">
        {Array(96).fill().map((_, i) => (
          <div key={i} className="bg-blue-500/10" />
        ))}
      </div>

      {/* Main loader container */}
      <div className="relative z-20 flex flex-col items-center gap-8 p-8">
        {/* Floating cube with particle halo */}
        <motion.div 
          className="relative w-40 h-40"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Particle halo */}
          {particles.map((_, i) => {
            const x1 = deterministicRandom(i) * 100 - 50;
            const x2 = deterministicRandom(i + 1000) * 100 - 50;
            const y1 = deterministicRandom(i + 2000) * 100 - 50;
            const y2 = deterministicRandom(i + 3000) * 100 - 50;
            const duration = 3 + deterministicRandom(i + 4000) * 2;
            const delay = deterministicRandom(i + 5000) * 2;

            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  x: "-50%",
                  y: "-50%"
                }}
                animate={{
                  x: [`${x1}%`, `${x2}%`],
                  y: [`${y1}%`, `${y2}%`],
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </motion.div>

        {/* Dynamic line network */}
        <div className="absolute inset-0 pointer-events-none">
          {lines.map((_, i) => {
            const left = deterministicRandom(i) * 100;
            const top = deterministicRandom(i + 100) * 100;
            const width = deterministicRandom(i + 200) * 20 + 10;
            const rotate = deterministicRandom(i + 300) * 360;
            const x1 = deterministicRandom(i + 400) * 100 - 50;
            const x2 = deterministicRandom(i + 500) * 100 - 50;
            const duration = 4 + deterministicRandom(i + 600) * 4;

            return (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-blue-400/20 to-transparent"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${width}%`,
                  rotate: `${rotate}deg`
                }}
                animate={{
                  opacity: [0, 0.3, 0],
                  x: [`${x1}%`, `${x2}%`]
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </div>

        {/* Modern progress indicator */}
        <div className="relative w-64 h-1 bg-zinc-800/50 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-blue-400 to-blue-600 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.5, ease: [0.83, 0, 0.17, 1] }}
          />
          <motion.div
            className="absolute right-0 w-1 h-full bg-blue-400"
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Abstract pattern display */}
        <motion.div
          className="flex gap-2 text-blue-400/60 text-xl"
          animate={{
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          {Array(6).fill().map((_, i) => (
            <motion.span
              key={i}
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                repeat: Infinity
              }}
            >
            </motion.span>
          ))}
        </motion.div>

        {/* Light pulse effect */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"
          animate={{
            opacity: [0, 0.3, 0],
            scale: [1, 1.5, 2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
        />
      </div>

      {/* Dynamic light streaks */}
      <div className="absolute inset-0 overflow-hidden">
        {Array(10).fill().map((_, i) => {
          const left = deterministicRandom(i + 7000) * 100;
          const top = deterministicRandom(i + 8000) * 100;
          const rotate = deterministicRandom(i + 9000) * 360;
          const duration = 4 + deterministicRandom(i + 10000) * 4;
          const delay = deterministicRandom(i + 11000) * 2;

          return (
            <motion.div
              key={i}
              className="absolute w-1/2 h-px bg-gradient-to-r from-blue-400/20 to-transparent"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                rotate: `${rotate}deg`
              }}
              animate={{
                x: ['-100%', '200%'],
                opacity: [0, 0.4, 0]
              }}
              transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

const PortfolioV2 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionsRef = useRef([]);
  const [isLoading, setIsLoading] = useState(true);
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


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);
  
  const sections = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'journey', label: 'Journey', icon: BookMarked },
    { id: 'projects', label: 'Projects', icon: Terminal }
  ];
  
  const journey = [
    {
        year: "2025",
        title: "Computer Science Student",
        location: "Instituto Federal de Minas Gerais (IFMG) – Ibirité",
        description: "Currently pursuing my degree in Computer Science at IFMG campus Ibirité while still living in Belo Horizonte. Focused on deepening my understanding of fundamental and advanced computer science concepts.",
        skills: ["Data Structures", "Algorithms", "Software Engineering", "Computer Science", "Operating Systems", "Computer Architecture"]
    },
    {
        year: "2024",
        title: "Software Developer at Quantium Labs",
        location: "Quantium Labs",
        description: "Continuing my journey at Quantium Labs, working on various software projects while improving my technical and problem-solving skills.",
        skills: ["ReactJS", "TailwindCSS", "Project Management", "Team Leadership", "System Design"]
    },
    {
        year: "2023",
        title: "Web Development Journey",
        location: "Self-taught",
        description: "Transitioned to web development, diving deep into modern technologies and frameworks. Focused on building practical applications and expanding my technical toolkit.",
        skills: ["JavaScript", "ReactJS", "TailwindCSS", "Modern Web Dev"]
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
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    // Improved scroll detection using Intersection Observer
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

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
      title: "Aline Nery Portfolio",
      description: "A personal Portfolio page and event ticket selling system developed for a executive coach under Quantium Labs with NextJS. Features a complete admin dashboard for managing events and tickets.",
      banner: "/images/aline.png",
      projectUrl: "https://alinenery.com.br",

    },
    {
      title: "Céus",
      description: "A groundbreaking location based game developed for a client under Quantium Labs with ReactJS and TailwindCSS. Features a story system that storage messages and a map system that shows to the player where to go to see the stories.",
      banner: "/images/ceus.png",
      projectUrl: "https://ceusgame.com",

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
    sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-zinc-950 text-zinc-50 overflow-x-hidden"
    >
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent transition-all duration-200"
          style={{
            backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
            opacity: isHovering ? 1 : 0.5,
          }}
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-900/40 to-zinc-950"
          style={{
            backgroundPosition: `${100 - mousePosition.x}% ${100 - mousePosition.y}%`,
            backgroundSize: '120% 120%',
          }}
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute w-[800px] h-[800px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            opacity: isHovering ? 1 : 0.5,
          }}
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(59 130 246 / 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(59 130 246 / 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px)`,
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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/30 backdrop-blur-sm p-4 flex justify-between items-center">
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
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white"
                  onClick={() => window.open('https://www.linkedin.com/in/victor-gonçalves-98708a349/', '_blank')}
                >
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
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
      
      <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="fixed z-50 top-4 right-1 md:top-6 md:right-auto md:left-10"
        >
            <Link href="/">
            <motion.button
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full border border-blue-500/30 hover:border-blue-400/40 transition-colors backdrop-blur-sm"
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
            >
                <ArrowLeft className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium text-white">Back to Current Version</span>
            </motion.button>
            </Link>
        </motion.div>
      
      <div className={`${isMobile ? 'overflow-y-auto' : 'h-screen snap-y snap-mandatory overflow-y-scroll'}`}>
        {/* Hero Section */}
        <section 
          ref={el => sectionsRef.current[0] = el}
          className="h-screen snap-start flex items-center relative"
        >
         <motion.div 
        className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-20 md:pt-0"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.5
            }
          }
        }}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column - Content */}
        <motion.div 
          className="space-y-6"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {/* Badges */}
          <motion.div 
            className="flex flex-wrap gap-3"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <Badge variant="secondary" className="bg-zinc-900/50 text-zinc-300 hover:bg-blue-500/20 border-zinc-700/50 px-4 py-1.5">
              Co-founder at Quantium Labs
            </Badge>

            <Badge variant="secondary" className="bg-zinc-900/50 text-zinc-300 hover:bg-blue-500/20 border-zinc-700/50 px-4 py-1.5">
              <MapPin className="w-4 h-4 mr-1 inline" />
              Belo Horizonte, MG
            </Badge>
          </motion.div>
          
          {/* Name */}
          <motion.h1 
            className="text-5xl lg:text-7xl font-bold font-serif tracking-tight text-zinc-50"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Victor Humberto
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-lg text-zinc-400 max-w-xl leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Full-stack developer passionate about building innovative solutions. 
            Currently co-leading Quantium Labs's technical initiatives and pursuing my degree in Computer Science.
          </motion.p>
          
          {/* Social Links */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-zinc-900/50 hover:bg-zinc-800/50 text-zinc-300 border-zinc-700/50 transition-colors duration-300"
              onClick={() => window.open('https://github.com/VictorHumberto01', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" /> GitHub
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-zinc-900/50 hover:bg-zinc-800/50 text-zinc-300 border-zinc-700/50 transition-colors duration-300"
              onClick={() => window.open('https://www.linkedin.com/in/victor-gonçalves-98708a349/', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-zinc-900/50 hover:bg-zinc-800/50 text-zinc-300 border-zinc-700/50 transition-colors duration-300"
              onClick={() => window.location.href = 'mailto:victorestanislau2005@gmail.com'}
            >
              <Mail className="mr-2 h-5 w-5" /> Contact
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Right Column - Decoration */}
        <motion.div 
         className="hidden lg:block h-full w-full relative"  // Updated className
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
          <HeroDecoration />
        </motion.div>
      </motion.div>
      <ScrollHint />

    </section>

        {/* Skills Section */}
        <section 
          ref={el => sectionsRef.current[1] = el}
          className="h-screen snap-start flex items-center relative"
        >
          <motion.div 
            className="container mx-auto px-4 py-24"
            initial={{ opacity: 0 }}
            animate={currentSection === 1 ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={currentSection === 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <h2 className="text-3xl font-bold text-zinc-50 mb-2">Skills & Expertise</h2>
              <p className="text-zinc-400 mb-8">My technical toolbox</p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={currentSection === 1 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
          {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-zinc-50">{category.name}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      className="flex items-center gap-3 p-3 bg-zinc-800/30 rounded-lg backdrop-blur-sm hover:bg-zinc-700/30 transition-all duration-300"
                      initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -30 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotate: 0,
                        transition: {
                          delay: index * 0.1,
                          duration: 0.2,
                          ease: "easeOut" // Add a bounce effect
                        }
                      }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src={item.svgUrl}
                        alt={item.name}
                        className="w-6 h-6 object-contain"
                        loading="lazy"
                      />
                      <span className="text-zinc-50">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Journey Section */}
        <section 
          ref={el => sectionsRef.current[2] = el}
          className="h-screen snap-start flex items-center relative"
        >
          <motion.div 
            className="container mx-auto px-4 py-24"
            initial={{ opacity: 0 }}
            animate={currentSection === 2 ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={currentSection === 2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >

              <h2 className="text-3xl font-bold text-zinc-50 mb-2">My Path in Tech</h2>
              <p className="text-zinc-400 mb-8">From first code to founding companies</p>
            </motion.div>

            {/* Scroll Hint */}
            {!isMobile && (
            <AnimatePresence>
              {!isScrolled && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-1/2 -translate-x-1/2 top-32 z-20 flex flex-col items-center gap-2"
                >
                  <span className="text-zinc-400 text-sm">Scroll to explore</span>
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronDown className="h-5 w-5 text-blue-400" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            )} 


            {/* Journey Cards */}
            <div 
              ref={journeyRef}
              className="space-y-8 overflow-y-auto max-h-[65vh] pr-4 pt-4 pb-8 scroll-smooth"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
              }}
            >
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -50 }}
                  animate={currentSection === 2 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm hover:bg-zinc-900/30 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        {/* Year Circle with Pulse Effect */}
                        <div className="flex-shrink-0 relative">
                          <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                            <Calendar className="h-5 w-5 text-blue-400 absolute opacity-0 group-hover:opacity-100 transition-all duration-300" />
                            <span className="text-blue-400 font-semibold group-hover:opacity-0 transition-all duration-300">{item.year}</span>
                          </div>
                        </div>

                        <div className="space-y-4 flex-1">
                          <div>
                            <h3 className="text-xl font-semibold text-zinc-50 group-hover:text-blue-400 transition-colors duration-300">
                              {item.title}
                            </h3>
                            <p className="text-zinc-400">{item.location}</p>
                          </div>
                          <p className="text-zinc-300 leading-relaxed">{item.description}</p>
                          
                          {/* Skills with improved styling */}
                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill) => (
                              <Badge 
                                key={skill}
                                variant="secondary"
                                className="bg-zinc-800/50 text-zinc-300 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>

                          {/* Project Link with Animation */}
                          {item.projectLink && (
                            <motion.div
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 group/btn"
                                onClick={() => {
                                  const element = document.querySelector(item.projectLink);
                                  element?.scrollIntoView({ behavior: 'smooth' });
                                }}
                              >
                                View Related Project
                                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                              </Button>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Scroll Progress Indicator */}
            <motion.div
              className="absolute right-4 top-1/2 -translate-y-1/2 w-1 h-32 bg-zinc-800/50 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: isScrolled ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-full bg-blue-500 rounded-full"
                style={{
                  height: journeyRef.current 
                    ? `${(journeyRef.current.scrollTop / (journeyRef.current.scrollHeight - journeyRef.current.clientHeight)) * 100}%` 
                    : "0%"
                }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section 
          ref={el => sectionsRef.current[3] = el}
          className="h-screen snap-start relative overflow-y-auto"
        >
          <motion.div 
            className="container mx-auto px-4 py-16 min-h-screen"
            initial={{ opacity: 0 }}
            animate={currentSection === 3 ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={currentSection === 3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="sticky top-0 pt-4 pb-6  backdrop-blur-sm z-10">
                <h2 className="text-3xl font-bold text-zinc-50">My Work</h2>
                <Briefcase className="mr-2 h-4 w-4 inline mb-2 text-zinc-400 mt-1" /> 
                <h1 className='mr-2 h-4 w-4 inline mb-2 text-zinc-400'>Featured projects</h1>

              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={currentSection === 3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="group h-full flex flex-col overflow-hidden bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm hover:bg-zinc-900/30 transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
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
                      <p className="text-zinc-400 flex-1">
                        {project.description}
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 flex gap-4">
                      <Button 
                        variant="ghost" 
                        className="flex-1 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 group/btn"
                        onClick={() => window.open(project.projectUrl, '_blank')}
                      >
                        View Project <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <h1 className='text-center mb-10 text-1xl text-zinc-400 font-bold'>Made with ❤️ by Victor</h1>

        </section>
      </div>
    </motion.div>
  );
};

export default PortfolioV2;