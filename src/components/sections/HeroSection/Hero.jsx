import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, ArrowRight, Send, GraduationCap, MapPin, ChevronDown, Languages } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';

// translation object
const translations = {
  en: {
    phrases: [
      "I help turn ideas",
      "I transform concepts",
      "I bring visions",
      "I mold possibilities",
      "I turn creativity",
      "I shape innovation",
      "I convert challenges"
    ],
    education: "Computer Science - IFMG",
    location: "Belo Horizonte - MG",
    greeting: "Hello 👋, I'm",
    role: "a Full Stack Developer",
    seamless: "into seamless",
    digitalExp: "digital experiences"
  },
  pt: {
    phrases: [
      "Eu ajudo a transformar ideias",
      "Eu transformo conceitos",
      "Eu trago visões",
      "Eu moldo possibilidades",
      "Eu transformo criatividade",
      "Eu formato inovação",
      "Eu converto desafios"
    ],
    education: "Ciência da Computação - IFMG",
    location: "Belo Horizonte - MG",
    greeting: "Olá 👋, eu sou",
    role: "um Desenvolvedor Full Stack",
    seamless: "em experiências",
    digitalExp: "digitais incríveis"
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const Tag = ({ icon: Icon, text }) => (
  <motion.div 
    className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-lg border border-blue-500/20 hover:border-blue-400/30 transition-colors"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
    <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">{text}</span>
  </motion.div>
);


const AnimatedHero = () => {
  const { language, toggleLanguage } = useLanguage();
  const phrases = translations[language].phrases;
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timer;

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 1000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        }, typingSpeed / 2);
      } else {
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex, phrases, typingSpeed]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-col items-center justify-center text-center relative">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8 md:space-y-12 relative z-10 w-full max-w-4xl"
      >
        {/* Tags */}
        <motion.div 
          className="flex flex-row justify-center gap-2 sm:gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Tag icon={GraduationCap} text={translations[language].education} />
          <Tag icon={MapPin} text={translations[language].location} />
        </motion.div>

        {/* Main Heading */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            <span className="inline-block">
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-1"
              >
                |
              </motion.span>
            </span>
            <br />
            <span className="text-zinc-400">{translations[language].seamless}</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {translations[language].digitalExp}
            </span>
          </motion.h1>
        </div>

        {/* Introduction Text with Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 text-base sm:text-lg md:text-xl text-zinc-400"
        >
          <span>{translations[language].greeting}</span>
          <span className="text-white">Victor Humberto</span>
          <div className="w-8 sm:w-16 md:w-20 h-8 sm:h-8 md:h-10 bg-blue-500/10 hover:bg-blue-500/20 rounded-full border border-blue-500/20 transition-all duration-300 overflow-hidden">
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <span>{translations[language].role}</span>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-4 md:gap-6"
        >
          <div className="flex flex-row gap-3 sm:gap-4">
            {/* GitHub Button */}
            <motion.button
              onClick={() => window.open('https://github.com/VictorHumberto01', '_blank')}
              className="relative w-24 sm:w-32 px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-white border border-blue-500/20 overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-blue-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
              
              <motion.div
                className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-300 group-hover:blur-sm"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">GitHub</span>
              </motion.div>
              
              <motion.div
                className="absolute inset-0 z-20 flex items-center justify-center gap-1.5 sm:gap-2"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Github className="h-4 w-4 sm:h-6 sm:w-6" />
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.div>
            </motion.button>

            {/* Email Button */}
            <motion.button
              onClick={() => window.location.href = 'mailto:victor.humberto.dev@gmail.com'}
              className="relative px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-white border border-white/10 overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
              
              <motion.div
                className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-300 group-hover:blur-sm"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base truncate max-w-[180px] sm:max-w-none">victor.humberto.dev@gmail.com</span>
              </motion.div>
              
              <motion.div
                className="absolute inset-0 z-20 flex items-center justify-center gap-1.5 sm:gap-2"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="h-4 w-4 sm:h-6 sm:w-6" />
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

  
    </div>
  );
};

export default AnimatedHero;