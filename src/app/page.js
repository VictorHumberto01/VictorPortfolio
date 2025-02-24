'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, ExternalLink, Code2, Briefcase, BookMarked, User, Terminal, ChevronDown, Calendar, HomeIcon } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedHero from '@/components/ui/Hero';
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
            transform: `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px)`
          }}
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-900/40 to-zinc-950"
          style={{
            backgroundPosition: `${100 - mousePosition.x}% ${100 - mousePosition.y}%`,
            backgroundSize: '150% 100%',
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
            opacity: 1,
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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/30 backdrop-blur-xl p-4 flex justify-between items-center">
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
      
      
      <div className={`${isMobile ? 'overflow-y-auto' : 'h-screen snap-y snap-mandatory overflow-y-scroll'}`}>
        
        {/* Hero Section */}
        <section 
        
          ref={el => sectionsRef.current[0] = el}
          className="h-screen snap-start flex items-center relative"
        >
         <AnimatedHero/>

    </section>
    <section 
            ref={el => sectionsRef.current[1] = el}
            className="min-h-screen snap-start flex items-center relative py-20 md:py-24"
        >
          <motion.div 
            className="container mx-auto px-4"
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
              <h2 className="text-3xl font-bold text-zinc-50 mb-2">About Me</h2>
              <p className="text-zinc-400 mb-8">My journey in tech</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={currentSection === 1 ? { 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 12
                  }
                } : {}}
                className="space-y-6"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm transform transition-all duration-300 hover:bg-zinc-800/30 hover:border-blue-500/30">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-zinc-50 mb-4">My Story</h3>
                      <p className="text-zinc-400 mb-4">
                        Born in Sete Lagoas, Brazil, I began my programming journey at the age of 15. 
                        What started as curiosity with a Discord bot project quickly evolved into a deep passion 
                        for software development.
                      </p>
                      <p className="text-zinc-400 mb-4">
                        As I continued studying and improving my programming skills, I delved into 
                        Data Science, Algorithms, and Machine Learning. This knowledge led me to explore 
                        Data Structures and essential concepts in Computer Science.
                      </p>
                      <p className="text-zinc-400 mb-4">
                        Today, as a Computer Science student at IFMG and a developer at Quantium Labs, 
                        I've transformed that early enthusiasm into professional expertise, specializing in 
                        web development and modern application architecture. During my studies at IFMG, 
                        I moved to Belo Horizonte, where I continue to grow both academically and professionally.
                      </p>
                      <p className="text-zinc-400">
                        My passion lies in creating intuitive, efficient solutions that make a real impact. 
                        Every project is an opportunity to learn, innovate, and push the boundaries of what’s possible.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={currentSection === 1 ? { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 12,
                      delay: 0.2
                    }
                  } : {}}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm transform transition-all duration-300 hover:bg-zinc-800/30 hover:border-blue-500/30">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <BookMarked className="h-5 w-5 text-blue-400" />
                        </motion.div>
                        <div>
                          <h4 className="text-zinc-200 font-medium">English Proficiency</h4>
                          <p className="text-zinc-400">C1 Advanced Level</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
              
              {/* Location Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={currentSection === 1 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <h3 className="text-xl font-semibold text-zinc-50 mb-4">Location & Availability</h3>
                      
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                            <HomeIcon className="h-5 w-5 text-blue-400" />
                          </div>
                          <div>
                            <h4 className="text-zinc-200 font-medium">Based in</h4>
                            <p className="text-zinc-400">Belo Horizonte, Minas Gerais, Brazil</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                            <Calendar className="h-5 w-5 text-blue-400" />
                          </div>
                          <div>
                            <h4 className="text-zinc-200 font-medium">Time Zone</h4>
                            <p className="text-zinc-400">UTC-3 (Brazil Time)</p>
                            <p className="text-zinc-500 text-sm">Flexible with international schedules</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                            <Briefcase className="h-5 w-5 text-blue-400" />
                          </div>
                          <div>
                            <h4 className="text-zinc-200 font-medium">Current Focus</h4>
                            <p className="text-zinc-400">Computer Science Student at IFMG</p>
                            <p className="text-zinc-500 text-sm">Open to work opportunities</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge className="bg-blue-500/20 text-blue-300">
                                Web Developer at Quantium Labs
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Skills Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={currentSection === 1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="col-span-1"
              >
                <Card className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <Code2 className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-center text-zinc-50 mb-2">Full Stack</h3>
                    <p className="text-zinc-400 text-center flex-grow">Specialized in modern web development with React and Node.js</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={currentSection === 1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="col-span-1"
              >
                <Card className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <Terminal className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-center text-zinc-50 mb-2">Problem Solver</h3>
                    <p className="text-zinc-400 text-center flex-grow">Strong focus on efficient and scalable solutions</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={currentSection === 1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="col-span-1"
              >
                <Card className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <BookMarked className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-center text-zinc-50 mb-2">Continuous Learner</h3>
                    <p className="text-zinc-400 text-center flex-grow">Always exploring new technologies and best practices</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={currentSection === 2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <h2 className="text-3xl font-bold text-zinc-50 mb-2">Skills & Expertise</h2>
            <p className="text-zinc-400 mb-8">My tech stack</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={currentSection === 2 ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                className="space-y-6"
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                animate={currentSection === 2 ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: categoryIndex * 0.3,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <h3 className="text-xl font-semibold text-zinc-50">{category.name}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      className="flex items-center gap-3 p-3 bg-zinc-800/30 rounded-lg backdrop-blur-sm hover:bg-zinc-700/30 transition-all duration-300"
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={currentSection === 2 ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          delay: categoryIndex * 0.3 + index * 0.1 + 0.2,
                          duration: 0.4,
                          type: "spring",
                          stiffness: 100
                        }
                      } : {}}
                      whileHover={{ scale: 1.05, y: -5 }}
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
            ref={el => sectionsRef.current[3] = el} 
            className="h-screen snap-start flex items-center relative"
        >
        <motion.div 
          className="container mx-auto px-4 py-24"
          initial={{ opacity: 0 }}
          animate={currentSection === 3 ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={currentSection === 3 ? { opacity: 1, y: 0 } : {}}
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
                animate={currentSection === 3 ? { opacity: 1, x: 0 } : {}}
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
        ref={el => sectionsRef.current[4] = el}
        className="h-screen snap-start relative overflow-y-auto"
      >
        <motion.div 
          className="container mx-auto px-4 py-16 min-h-screen"
          initial={{ opacity: 0 }}
          animate={currentSection === 4 ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={currentSection === 4 ? { opacity: 1, y: 0 } : {}}
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
                animate={currentSection === 4 ? { opacity: 1, y: 0 } : {}}
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
                  <CardContent className="p-6 flex-1 flex-col">
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
        <div className="text-center mb-10 text-1xl text-zinc-400 font-bold">
          Made with ❤️ by Victor.{' '}
          <a 
            href="https://github.com/VictorHumberto01/VictorPortfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Visit this website code on my GitHub page
          </a>
        </div>

        <ContactFooter />
        </section>
      </div>
    </motion.div>
  );
};


export default Portfolio;
