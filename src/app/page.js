'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, ArrowLeft, ExternalLink, Code2, BookOpen, Briefcase, BookMarked, User, Terminal, ChevronDown, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const journeyRef = useRef(null);

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
    { id: 'journey', label: 'Journey', icon: BookMarked },
    { id: 'projects', label: 'Projects', icon: Terminal }
  ];

  const journey = [
    {
      year: "2025",
      title: "Computer Science Student",
      location: "IFMG Ibirité & Uork",
      description: "Starting my CS degree at IFMG Ibirité while living in Belo Horizonte. Continuing as CTO at Uork and co-founder at Quantium Labs, balancing academic pursuits with professional development.",
      skills: ["Computer Science", "Leadership", "Technical Architecture"]
    },
    {
      year: "2024",
      title: "Founder & CTO",
      location: "Quantium Labs & Uork",
      description: "Co-founded Quantium Labs with two partners, focusing on innovative tech solutions. Later appointed as CTO of Uork, a company founded by a friend and Quantium Labs co-founder.",
      skills: ["ReactJS", "TailwindCSS", "Project Management", "Team Leadership"]
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
      skills: ["Python", "Discord.js", "Basic Programming"],
      projectLink: "#discord-bot" // Link to project section
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
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "JavaScript"]
    },
    { 
      name: "Backend", 
      items: ["Node.js", "Python", "AWS", "MongoDB", "PostgreSQL", "Express"]
    },
    { 
      name: "Tools", 
      items: ["Git", "Docker", "CI/CD", "Agile", "Jest", "Webpack"]
    }
  ];

  const projects = [
    {
      title: "Quantium Labs",
      subtitle: "Technology Innovation Hub",
      description: `A multi-founder technology company focused on developing innovative solutions 
        and creative technology projects. As one of the founders, I lead the technical development 
        and architectural decisions, ensuring scalable and maintainable solutions.`,
      role: "Co-Founder & Lead Developer",
      tech: ["Next.js", "React", "Node.js", "AWS", "MongoDB"],
      year: "2023",
      stats: [
        { label: "Team Size", value: "8 developers" },
        { label: "Projects Completed", value: "12+" },
        { label: "Client Satisfaction", value: "98%" }
      ]
    },
    {
      title: "Céus",
      subtitle: "Immersive Gaming Experience",
      description: `A groundbreaking game project developed under Quantium Labs, featuring unique 
        gameplay mechanics and stunning visuals. The game explores celestial themes with innovative 
        interaction patterns and real-time multiplayer capabilities.`,
      role: "Lead Developer",
      tech: ["Unity", "C#", "3D Modeling", "Game Design", "Blender"],
      year: "2023",
      stats: [
        { label: "Development Time", value: "8 months" },
        { label: "Active Users", value: "5K+" },
        { label: "Rating", value: "4.8/5" }
      ]
    }
  ];

  const scrollToSection = (index) => {
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
    </div>

    {/* Enhanced Animated Navigation */}
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

    {/* Content Sections */}
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      {/* Hero Section */}
      <section 
        ref={el => sectionsRef.current[0] = el}
        className="h-screen snap-start flex items-center relative"
      >
        <motion.div 
          className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 1.5
              }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="space-y-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Badge className="text-sm border-zinc-800/50 text-zinc-300 bg-zinc-900/50">
                Full Stack Developer
              </Badge>
              <Badge className="text-sm border-zinc-800/50 text-zinc-300 bg-zinc-900/50">
                Co-founder at Quantium Labs
              </Badge>
            </motion.div>
              
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-zinc-50"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Victor Humberto
            </motion.h1>
            
            <motion.p 
              className="text-lg text-zinc-400 max-w-xl"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Full-stack developer passionate about building innovative solutions. 
              Currently co-leading Quantium Labs' technical initiatives and serving 
              as CTO at Uork Tecnologia.
            </motion.p>
            
            <motion.div 
              className="flex gap-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Button variant="ghost" size="lg" className="bg-white/10 hover:bg-white/20 text-white">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
              <Button variant="ghost" size="lg" className="bg-white/10 hover:bg-white/20 text-white">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
              <Button variant="ghost" size="lg" className="bg-white/10 hover:bg-white/20 text-white">
                <Mail className="mr-2 h-4 w-4" /> Contact
              </Button>
            </motion.div>
          </motion.div>
          
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
            <img
              src="/images/profile.png"
              alt="Profile"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      </section>

      <section 
    ref={el => sectionsRef.current[1] = el}
    className="h-screen snap-start flex items-center relative bg-zinc-900/50"
  >
    <motion.div 
      className="container mx-auto px-4 py-24"
      initial={{ opacity: 0 }}
      animate={currentSection === 1 ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={currentSection === 1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
          <BookMarked className="mr-1 h-4 w-4 inline mb-5" /> My Journey
        <h2 className="text-3xl font-bold text-zinc-50 mb-2">My Path in Tech</h2>
        <p className="text-zinc-400 mb-8">From first code to founding companies</p>
      </motion.div>

      {/* Scroll Hint */}
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

      {/* Timeline Track */}
      <div className="absolute left-[3.5rem] top-48 bottom-24 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent" />

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
            animate={currentSection === 1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm hover:bg-zinc-900/30 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  {/* Year Circle with Pulse Effect */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300 relative z-10">
                      <Calendar className="h-5 w-5 text-blue-400 absolute opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <span className="text-blue-400 font-semibold group-hover:opacity-0 transition-all duration-300">{item.year}</span>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping opacity-0 group-hover:opacity-100 transition-all duration-300" />
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
          >
              <Briefcase className="mr-2 font-bold h-4 w-4 inline ml-5 mb-2" /> Featured Projects

          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm">
                  <CardContent className="p-6 space-y-6">
                    <div className="flex items-center gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-zinc-50">
                          {projects[currentProject].title}
                        </h3>
                        <p className="text-zinc-300">
                          {projects[currentProject].subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-zinc-400 font-light leading-relaxed">
                      {projects[currentProject].description}
                    </p>

                    <div className="grid grid-cols-3 gap-4">
                      {projects[currentProject].stats.map((stat) => (
                        <div key={stat.label} className="space-y-2">
                          <p className="text-sm text-zinc-500">{stat.label}</p>
                          <p className="text-xl font-semibold text-zinc-200">
                            {stat.value}
                          </p>
                        </div>
                      ))}
                    </div>

  
                      <div className="flex flex-wrap gap-2">
                        {projects[currentProject].tech.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary"
                            className="bg-zinc-800/50 text-zinc-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
  
                    <CardFooter className="p-6 border-t border-zinc-800/30">
                      <div className="flex justify-between items-center w-full">
                        <p className="text-sm text-zinc-500">
                          {projects[currentProject].role} • {projects[currentProject].year}
                        </p>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-zinc-400 hover:text-zinc-200"
                        >
                          View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              </AnimatePresence>
  
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  onClick={() => setCurrentProject((prev) => 
                    prev === 0 ? projects.length - 1 : prev - 1
                  )}
                  className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-800/50"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setCurrentProject((prev) => 
                    prev === projects.length - 1 ? 0 : prev + 1
                  )}
                  className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-800/50"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );};

export default Portfolio;