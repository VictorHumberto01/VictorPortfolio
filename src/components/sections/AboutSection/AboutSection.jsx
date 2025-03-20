// AboutSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import AboutStory from './AboutStory';
import LocationInfo from './LocationInfo';
import SkillsOverview from './SkillsOverview';
import EnglishProficiency from './EnglishProficiency';

const AboutSection = ({ currentSection, sectionsRef }) => {
  return (
    <section 
      id='about'
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
          <p className="text-zinc-400 mb-8">Turning passion into innovation, one line of code at a time</p>
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
            <AboutStory currentSection={currentSection} />
            <EnglishProficiency currentSection={currentSection} />
          </motion.div>
          
          <LocationInfo currentSection={currentSection} />
        </div>

        <SkillsOverview currentSection={currentSection} />
      </motion.div>
    </section>
  );
};

export default AboutSection;