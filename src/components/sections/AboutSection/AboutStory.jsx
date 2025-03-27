// AboutStory.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const AboutStory = ({ currentSection }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="h-full"
    >
      <Card className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm transform transition-all duration-300 hover:bg-zinc-800/30 hover:border-blue-500/30 h-full">
        <CardContent className="p-6 h-full flex flex-col">
          <h3 className="text-xl font-semibold text-zinc-50 mb-4">My Story</h3>
          <p className="text-zinc-400 mb-5">
            Born in <strong>Sete Lagoas, Brazil</strong>, I started my programming journey at the age of <strong>15</strong>.  
            What began as a curiosity with a <strong>Discord bot project</strong> soon evolved into a deep passion  
            for <strong>software development</strong>.
          </p>
          <p className="text-zinc-400 mb-4">
            As I honed my skills, I explored <strong>Data Science</strong>, <strong>Algorithms</strong>, and <strong>Machine Learning</strong>,  
            which led me to dive deeper into <strong>Data Structures</strong> and core <strong>Computer Science</strong> concepts.  
          </p>
          <p className="text-zinc-400 mb-4">
            While studying, I co-founded <strong>Quantium Labs</strong> with three friends—a <strong>development company </strong>  
            dedicated to delivering <strong>innovative products and experiences</strong>. As a <strong>full-stack developer</strong>,  
            I worked with <strong>React</strong>, <strong>Next.js</strong>, and <strong>Vite</strong> for the frontend, and <strong>TypeScript</strong> for backend solutions.  
            Although I'm no longer actively involved, I remain connected to the team as a <strong>code maintainer</strong>.    

          </p>
          <p className="text-zinc-400 mb-4">
            Today, as a <strong>Computer Science student at IFMG</strong>,  
            I've transformed my early enthusiasm into <strong>professional expertise</strong>, specializing in  
            <strong> web development</strong> and <strong>modern application architecture</strong>. My studies led me to move to  
            <strong> Belo Horizonte</strong>, where I continue to grow both academically and professionally.  
          </p>
          <p className="text-zinc-400">
            My passion lies in building <strong>intuitive, efficient solutions</strong> that make a real impact.  
            Every project is an opportunity to <strong>learn, innovate</strong>, and push the boundaries of what’s possible.  
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AboutStory;