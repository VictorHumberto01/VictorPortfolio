'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = ({ skills, currentSection, sectionsRef }) => {
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
        <SkillsHeader currentSection={currentSection} />
        <SkillsGrid skills={skills} currentSection={currentSection} />
      </motion.div>
    </section>
  );
};

const SkillsHeader = ({ currentSection }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={currentSection === 2 ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative z-10"
    >
      <h2 className="text-3xl font-bold text-zinc-50 mb-2">Skills & Expertise</h2>
      <p className="text-zinc-400 mb-8">My tech stack</p>
    </motion.div>
  );
};

const SkillsGrid = ({ skills, currentSection }) => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      initial={{ opacity: 0 }}
      animate={currentSection === 2 ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {skills.map((category, categoryIndex) => (
        <SkillCategory 
          key={category.name} 
          category={category} 
          categoryIndex={categoryIndex} 
          currentSection={currentSection} 
        />
      ))}
    </motion.div>
  );
};

const SkillCategory = ({ category, categoryIndex, currentSection }) => {
  return (
    <motion.div
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
          <SkillItem 
            key={item.name} 
            item={item} 
            index={index} 
            categoryIndex={categoryIndex} 
            currentSection={currentSection} 
          />
        ))}
      </div>
    </motion.div>
  );
};

const SkillItem = ({ item, index, categoryIndex, currentSection }) => {
  return (
    <motion.div
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
  );
};

export default SkillsSection;