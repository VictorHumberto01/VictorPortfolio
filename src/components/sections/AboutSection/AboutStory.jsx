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
            Every project is an opportunity to learn, innovate, and push the boundaries of what's possible.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AboutStory;