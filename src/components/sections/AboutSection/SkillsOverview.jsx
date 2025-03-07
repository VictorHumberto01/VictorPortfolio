import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { Code2, Terminal, BookMarked } from 'lucide-react';

const SkillsOverview = ({ currentSection }) => {
  const skills = [
    {
      icon: <Code2 className="h-6 w-6 text-blue-400" />,
      title: "Full Stack",
      description: "Specialized in modern web development with React and Node.js",
      delay: 0.1
    },
    {
      icon: <Terminal className="h-6 w-6 text-blue-400" />,
      title: "Problem Solver",
      description: "Strong focus on efficient and scalable solutions",
      delay: 0.2
    },
    {
      icon: <BookMarked className="h-6 w-6 text-blue-400" />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices",
      delay: 0.3
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <SkillCard 
          key={index}
          icon={skill.icon}
          title={skill.title}
          description={skill.description}
          currentSection={currentSection}
          delay={skill.delay}
        />
      ))}
    </div>
  );
};

export default SkillsOverview;