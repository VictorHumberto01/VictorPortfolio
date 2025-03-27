// AboutSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import AboutStory from './AboutStory';
import LocationInfo from './LocationInfo';
import SkillsOverview from './SkillsOverview';

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          <div className="h-full">
            <AboutStory currentSection={currentSection} />
          </div>
          <div className="flex flex-col gap-8 h-full">
            <LocationInfo currentSection={currentSection} />
            <div className="flex-grow h-full">
              <SkillsOverview currentSection={currentSection} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;