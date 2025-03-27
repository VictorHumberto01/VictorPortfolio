import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { Card, CardContent } from '@/components/ui/card';
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
      title: "Technical Leader",
      description: "Combining programming expertise with team leadership and management skills to deliver efficient, scalable solutions",
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
    <Card className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm h-full transform transition-all duration-300 hover:bg-zinc-800/30 hover:border-blue-500/30">
      <CardContent className="p-6 h-full bg-transparent">
        <div className="flex flex-col h-full">
          <h3 className="text-xl font-semibold text-zinc-50 mb-4">Core Competencies</h3>
          <div className="grid grid-cols-1 gap-4 flex-grow">
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
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsOverview;