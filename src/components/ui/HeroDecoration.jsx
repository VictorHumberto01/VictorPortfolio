import React from 'react';
import { motion } from 'framer-motion';

const HeroDecoration = () => {
  return (
    <div className="relative w-full h-full min-h-[600px] flex items-center justify-center">
      {/* Large glowing orb */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-2xl"
      />
      
      {/* Geometric shapes container */}
      <div className="relative">
        {/* Central cube */}
        <motion.div
          initial={{ rotateY: 0, rotateX: 0 }}
          animate={{ rotateY: 360, rotateX: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="relative w-64 h-64 transform-gpu"
        >
          {/* Cube faces */}
          <div className="absolute inset-0 border-2 border-blue-400/20 backdrop-blur-sm bg-zinc-900/30" />
          <div className="absolute inset-0 border-2 border-blue-400/20 backdrop-blur-sm bg-zinc-900/30 transform rotate-45" />
          <div className="absolute inset-0 border-2 border-blue-400/20 backdrop-blur-sm bg-zinc-900/30 transform -rotate-45" />
        </motion.div>

        {/* Orbiting spheres */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ rotate: (i * 120) }}
            animate={{ rotate: (i * 120) + 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2
            }}
            className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div
              className="absolute top-0 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-full h-full rounded-full bg-blue-400/40 backdrop-blur-sm border border-blue-400/20" />
            </motion.div>
          </motion.div>
        ))}

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            initial={{
              x: 0,
              y: 0,
              scale: 0.5,
              opacity: 0.3
            }}
            animate={{
              x: Math.sin(i * 30) * 150,
              y: Math.cos(i * 30) * 150,
              scale: 1,
              opacity: 0.8
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.2
            }}
            className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-blue-400/30"
          />
        ))}
      </div>

      {/* Background grid */}
    </div>
  );
};

export default HeroDecoration;
