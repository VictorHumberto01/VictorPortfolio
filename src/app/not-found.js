"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    title: "404",
    message: "This page doesn't exist or is unavailable",
    subMessage: "The page you're looking for might have been moved or deleted",
    action: "Return to homepage",
  },
  pt: {
    title: "404",
    message: "Esta página não existe ou está indisponível",
    subMessage:
      "A página que você está procurando pode ter sido movida ou excluída",
    action: "Voltar para o início",
  },
};

export default function NotFound() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Add subtle background animation
    const interval = setInterval(() => {
      const hue = Math.floor(Math.random() * 10) - 5;
      document.documentElement.style.setProperty("--hue-rotate", `${hue}deg`);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Sophisticated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#08080c]" />

        {/* Subtle gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-[40vh] bg-blue-900/5 blur-[160px] filter hue-rotate-[var(--hue-rotate,0deg)] transition-all duration-2000" />
        <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-indigo-900/5 blur-[160px] filter hue-rotate-[var(--hue-rotate,0deg)] transition-all duration-2000" />

        {/* Fine grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 sm:px-6 mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* 404 Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 sm:mb-8 overflow-hidden"
          >
            <div
              className="text-[120px] sm:text-[180px] md:text-[220px] font-bold leading-none tracking-tighter"
              style={{
                fontFamily: "var(--font-expletus-sans)",
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              {translations[language].title}
            </div>
          </motion.div>

          {/* Messages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 sm:mb-16 space-y-2"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white/80">
              {translations[language].message}
            </h2>
            <p className="text-base sm:text-lg text-white/50 font-light">
              {translations[language].subMessage}
            </p>
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={() => (window.location.href = "/")}
              className="group flex items-center gap-2 text-white/70 hover:text-white/90 transition-colors duration-300"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                <ArrowLeft size={16} className="text-white/80" />
              </span>
              <span className="text-base sm:text-lg border-b border-white/20 group-hover:border-white/40 pb-1 transition-colors duration-300">
                {translations[language].action}
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-[10%] left-[10%] w-1 h-1 bg-blue-400/40 rounded-full shadow-[0_0_40px_12px_rgba(59,130,246,0.2)]" />
      <div className="absolute top-[15%] right-[20%] w-1 h-1 bg-indigo-400/40 rounded-full shadow-[0_0_30px_10px_rgba(99,102,241,0.15)]" />
      <div className="absolute bottom-[25%] left-[30%] w-1 h-1 bg-white/40 rounded-full shadow-[0_0_30px_6px_rgba(255,255,255,0.1)]" />
      <div className="absolute bottom-[10%] right-[25%] w-1 h-1 bg-blue-400/40 rounded-full shadow-[0_0_40px_12px_rgba(59,130,246,0.15)]" />
    </motion.div>
  );
}
