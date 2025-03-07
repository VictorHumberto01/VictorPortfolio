import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { BookMarked } from 'lucide-react';

const EnglishProficiency = ({ currentSection }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={currentSection === 1 ? { 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 12,
          delay: 0.2
        }
      } : {}}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <Card className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm transform transition-all duration-300 hover:bg-zinc-800/30 hover:border-blue-500/30">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <motion.div 
              className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <BookMarked className="h-5 w-5 text-blue-400" />
            </motion.div>
            <div>
              <h4 className="text-zinc-200 font-medium">English Proficiency</h4>
              <p className="text-zinc-400">C1 Advanced Level</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EnglishProficiency;
