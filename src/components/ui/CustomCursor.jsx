'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverTarget, setHoverTarget] = useState(null);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e) => {
      const interactiveElement = e.target.closest('button, a');
      
      if (interactiveElement) {
        setIsHovering(true);
        setHoverTarget(interactiveElement);
      } else {
        setIsHovering(false);
        setHoverTarget(null);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const springConfig = {
    type: "spring",
    stiffness: 400,
    damping: 28,
    mass: 0.5
  };

  const getTargetProperties = () => {
    if (!hoverTarget) return null;
    const rect = hoverTarget.getBoundingClientRect();
    const computed = window.getComputedStyle(hoverTarget);
    
    return {
      width: rect.width,
      height: rect.height,
      x: rect.left,
      y: rect.top,
      borderRadius: computed.borderRadius
    };
  };

  const targetProps = isHovering ? getTargetProperties() : null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        initial={false}
        animate={{
          x: targetProps ? targetProps.x : mousePosition.x - 8,
          y: targetProps ? targetProps.y : mousePosition.y - 8,
          width: targetProps ? targetProps.width : 16,
          height: targetProps ? targetProps.height : 16,
          borderRadius: targetProps ? targetProps.borderRadius : '100%'
        }}
        transition={springConfig}
      >
        <motion.div 
          className="w-full h-full"
          style={{
            borderRadius: 'inherit',
            border: isHovering ? '2px solid white' : 'none',
            backgroundColor: isHovering ? 'transparent' : 'white'
          }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {!isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999] mix-blend-difference"
          initial={false}
          animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
          }}
          transition={springConfig}
        >
          <div className="w-full h-full rounded-full bg-white/20" />
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;