'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const JourneySection = ({ 
  journey, 
  currentSection, 
  sectionsRef, 
  journeyRef, 
  isScrolled, 
  isMobile 
}) => {
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
        <SectionHeader currentSection={currentSection} />
        <JourneyCards 
          journey={journey} 
          currentSection={currentSection} 
        />
      </motion.div>
    </section>
  );
};

// Update JourneyCards to remove scrollable container
const JourneyCards = ({ journey, currentSection }) => {
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

const SectionHeader = ({ currentSection }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={currentSection === 3 ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative z-10"
    >
      <h2 className="text-3xl font-bold text-zinc-50 mb-2">My Path in Tech</h2>
      <p className="text-zinc-400 mb-8">From first code to founding companies</p>
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
        View Related Project
        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
      </Button>
    </motion.div>
  );
};

export default JourneySection;