import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollHint = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 flex justify-center items-center h-32 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="flex flex-col items-center gap-3 group cursor-pointer pointer-events-auto"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
      >
        <motion.span 
          className="text-zinc-400 text-sm tracking-wide uppercase"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
        </motion.span>
        
        <motion.div
          className="relative"
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <motion.div
            className="absolute -top-6 left-1/2 -translate-x-1/2 w-[1px] h-6 bg-gradient-to-b from-transparent to-blue-500/50"
            animate={{ 
              scaleY: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <ChevronDown className="h-6 w-6 text-blue-400" />
        </motion.div>
        
        {/* Ripple effect */}
        <motion.div
          className="absolute -inset-4 rounded-full border border-blue-500/20"
          animate={{ 
            scale: [1, 1.5],
            opacity: [0.15, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      </motion.div>
    </div>
  );
};

export default ScrollHint;