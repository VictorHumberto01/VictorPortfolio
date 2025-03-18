'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Timeline = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetPath, setTargetPath] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  
  const versions = [
    { version: "v2.0", date: "Feb 2025", path: "/v2", features: "More polished sections, loading screen and new Hero Decoration element" },
    { version: "v1.0", date: "Jan 2025", path: "/v1", features: "Basic portfolio, First design of the Hero, Skills and Projects" }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTimeTravel = (path) => {
    setIsOpen(false);
    setTargetPath(path);
    setIsTransitioning(true);
    
    // Extended delay for the longer animation
    setTimeout(() => {
      router.push(path);
    }, 3500); // Extended from 1.5s to 3.5s
  };

  return (
    <>
      {/* Time machine transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div 
            className="fixed inset-0 z-[100] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Dark background with stars effect */}
            <motion.div 
              className="absolute inset-0 bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 1.2 }}
            />
            
            {/* Stars background */}
            {[...Array(150)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, Math.random() * 0.3 + 0.7, 0],
                  scale: [1, 1.5, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            <motion.div 
              className="absolute inset-0 flex items-center justify-center perspective-[1500px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Time vortex tunnel effect - more spiral rings */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`tunnel-${i}`}
                  className="absolute rounded-full border-2"
                  style={{ 
                    width: `${(i + 1) * 100}px`, 
                    height: `${(i + 1) * 100}px`,
                    borderColor: i % 3 === 0 ? '#3B82F6' : (i % 3 === 1 ? '#60A5FA' : '#93C5FD'),
                    borderWidth: `${Math.max(1, 4 - i * 0.25)}px`,
                    boxShadow: `0 0 ${15 - i}px ${i % 3 === 0 ? '#3B82F6' : (i % 3 === 1 ? '#60A5FA' : '#93C5FD')}`,
                  }}
                  initial={{ 
                    rotateX: 0,
                    rotateZ: 0, 
                    scale: 0, 
                    opacity: 0,
                    z: -1000
                  }}
                  animate={{ 
                    rotateX: i % 2 === 0 ? 360 : 0,
                    rotateZ: i % 2 === 0 ? 360 : -360, 
                    scale: [0, 1.5, 3],
                    opacity: [0, 0.9, 0],
                    z: [500, 0, -2000]
                  }}
                  transition={{ 
                    duration: 3.5, 
                    delay: i * 0.05,
                    ease: "easeInOut",
                    times: [0, 0.5, 1]
                  }}
                />
              ))}
              
              {/* Floating clocks and time symbols */}
              {[...Array(15)].map((_, i) => {
                // Random time symbols: clock numbers, gears, hourglasses
                const symbols = ['⏰', '🕰️', '⏱️', '⌛', '⏳', '⚙️'];
                const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
                
                return (
                  <motion.div
                    key={`symbol-${i}`}
                    className="absolute text-blue-200 text-4xl font-bold pointer-events-none"
                    style={{
                      left: `${Math.random() * 70 + 15}%`,
                      top: `${Math.random() * 70 + 15}%`,
                      textShadow: '0 0 10px rgba(59, 130, 246, 0.8)',
                    }}
                    initial={{ 
                      opacity: 0, 
                      scale: 0.2, 
                      z: -2000,
                      rotateY: 0,
                      filter: 'blur(8px)'
                    }}
                    animate={{ 
                      opacity: [0, 1, 0], 
                      scale: [0.2, 1.8, 0.5], 
                      z: 1000,
                      rotateY: 360,
                      filter: ['blur(8px)', 'blur(0px)', 'blur(12px)']
                    }}
                    transition={{ 
                      duration: 3, 
                      delay: Math.random() * 1.5,
                      ease: "easeInOut",
                      times: [0, 0.6, 1]
                    }}
                  >
                    {randomSymbol}
                  </motion.div>
                );
              })}
              
              {/* Digital number effect */}
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={`digit-${i}`}
                  className="absolute font-mono text-3xl font-bold pointer-events-none"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    color: i % 4 === 0 ? '#3B82F6' : (i % 4 === 1 ? '#60A5FA' : (i % 4 === 2 ? '#93C5FD' : '#BFDBFE')),
                    textShadow: '0 0 8px rgba(59, 130, 246, 0.7)',
                  }}
                  initial={{ 
                    opacity: 0, 
                    scale: 0, 
                    z: -500,
                    filter: 'blur(5px)'
                  }}
                  animate={{ 
                    opacity: [0, 0.8, 0], 
                    scale: [0.5, 2, 0.5], 
                    z: 2000,
                    filter: ['blur(5px)', 'blur(0px)', 'blur(10px)']
                  }}
                  transition={{ 
                    duration: 3, 
                    delay: 0.5 + Math.random() * 2,
                    ease: "easeInOut",
                    times: [0, 0.5, 1]
                  }}
                >
                  {Math.floor(Math.random() * 10)}
                </motion.div>
              ))}
              
              {/* Central light effect with multiple expanding rings */}
              <motion.div
                className="absolute w-24 h-24 rounded-full bg-blue-200 bg-opacity-80 pointer-events-none"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 4, 20], 
                  opacity: [0, 0.8, 0],
                  filter: ['blur(0px)', 'blur(5px)', 'blur(20px)']
                }}
                transition={{ 
                  duration: 3,
                  times: [0, 0.3, 1],
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div
                className="absolute w-32 h-32 rounded-full bg-blue-500 bg-opacity-50 pointer-events-none"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 3, 15], 
                  opacity: [0, 0.6, 0],
                  filter: ['blur(0px)', 'blur(8px)', 'blur(25px)']
                }}
                transition={{ 
                  duration: 3,
                  delay: 0.2,
                  times: [0, 0.3, 1],
                  ease: "easeInOut" 
                }}
              />
              
              {/* Time travel message */}
              <motion.div
                className="absolute text-center pointer-events-none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: [0, 1, 0], y: [30, 0, -30] }}
                transition={{ duration: 3, times: [0, 0.4, 1] }}
              >
                <motion.h2
                  className="text-4xl font-bold text-white mb-3"
                  initial={{ letterSpacing: "normal" }}
                  animate={{ letterSpacing: "0.2em" }}
                  transition={{ duration: 3 }}
                >
                  TIME TRAVEL INITIATED
                </motion.h2>
                <motion.p
                  className="text-blue-200 text-xl"
                  animate={{ 
                    opacity: [1, 0.7, 1],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: 1,
                    repeatType: "reverse"
                  }}
                >
                  Traveling to {targetPath.replace("/", "")} version...
                </motion.p>
              </motion.div>
              
              {/* Year markers flying past */}
              <motion.div
                className="text-blue-400 font-mono text-6xl font-bold absolute pointer-events-none"
                initial={{ y: 300, z: -1000, opacity: 0, filter: 'blur(8px)' }}
                animate={{ 
                  y: -300, 
                  z: 1000, 
                  opacity: [0, 1, 0],
                  filter: ['blur(8px)', 'blur(0px)', 'blur(8px)']
                }}
                transition={{ duration: 3, delay: 0.8, times: [0, 0.5, 1] }}
              >
                Mar
              </motion.div>
              
              <motion.div
                className="text-blue-300 font-mono text-6xl font-bold absolute pointer-events-none"
                initial={{ y: 300, z: -1000, opacity: 0, filter: 'blur(8px)' }}
                animate={{ 
                  y: -300, 
                  z: 1000, 
                  opacity: [0, 1, 0],
                  filter: ['blur(8px)', 'blur(0px)', 'blur(8px)']
                }}
                transition={{ duration: 3, delay: 1.5, times: [0, 0.5, 1] }}
              >
                Jan
              </motion.div>
            </motion.div>
            
            {/* Final white flash at end of transition */}
            <motion.div 
              className="absolute inset-0 bg-white pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, times: [0, 0.1, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Regular timeline UI - Now with responsive positioning */}
      <div className={`absolute z-20 ${isMobile ? ' z-40 top-4 right-16' : 'top-6 right-10'}`}>
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full border border-blue-500/30 hover:border-blue-400/40 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-white">Timeline</span>
          </motion.button>

          {/* Timeline dropdown - Adjusted position for mobile */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.2 }}
                className={`absolute ${isMobile ? 'right-0' : 'right-0'} mt-2 bg-zinc-900/90 backdrop-blur-sm rounded-lg border border-zinc-800/50 shadow-xl w-64 overflow-hidden`}
                style={{ top: isMobile ? '100%' : '100%' }}
              >
                <div className="p-3">
                  <div className="text-xs text-zinc-400 mb-2 flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> Website version history
                  </div>
                  <div className="space-y-2">
                    {versions.map((item, index) => (
                      <motion.div
                        key={index}
                        className="block"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div 
                          onClick={() => handleTimeTravel(item.path)}
                          className="relative pl-6 py-2 border-l border-blue-500/30 group hover:bg-blue-500/10 rounded-r-lg transition-colors cursor-pointer"
                        >
                          {/* Timeline dot with pulse effect */}
                          <div className="absolute left-[-5px] top-3 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform" />
                          <div className="absolute left-[-5px] top-3 w-2.5 h-2.5 rounded-full bg-blue-400/50 animate-ping" />
                          
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-white text-sm">{item.version}</span>
                            <span className="text-xs text-zinc-400">{item.date}</span>
                          </div>
                          <p className="text-xs text-zinc-300">{item.features}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default Timeline;