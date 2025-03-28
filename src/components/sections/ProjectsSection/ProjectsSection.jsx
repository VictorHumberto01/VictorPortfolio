import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import ProjectCard from './ProjectCard';
import Footer from '@/components/ui/Footer';

const ProjectsSection = ({ currentSection, sectionsRef, projects, isMobile }) => {
  return (
    <section 
      ref={el => sectionsRef.current[4] = el}
      id='projects'
      className={`h-screen snap-start relative ${!isMobile ? 'overflow-y-auto' : ''}`}
    >
      <motion.div 
        className={`container mx-auto px-4 py-16 ${isMobile ? '' : 'min-h-screen'}`}
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
          <div className="sticky top-0 pt-4 pb-6 backdrop-blur-sm z-10">
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
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <Footer/>
    </section>
  );
};

export default ProjectsSection;