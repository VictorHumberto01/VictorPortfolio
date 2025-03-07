import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const SkillCard = ({ icon, title, description, currentSection, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={currentSection === 1 ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="col-span-1"
    >
      <Card className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm h-full">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center text-zinc-50 mb-2">{title}</h3>
          <p className="text-zinc-400 text-center flex-grow">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillCard;