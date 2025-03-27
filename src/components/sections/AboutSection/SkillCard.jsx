import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const SkillCard = ({ icon, title, description, currentSection, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={currentSection === 1 ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <Card className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm transform transition-all duration-300 hover:bg-zinc-800/30 hover:border-blue-500/30">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              {icon}
            </div>
            <div>
              <h4 className="text-zinc-200 font-medium text-sm">{title}</h4>
              <p className="text-zinc-400 text-xs">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillCard;