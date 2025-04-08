'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin} from 'react-icons/si';
import { Mail, ExternalLink, ChevronUp, Code } from 'lucide-react';
import { Button } from '@/components/ui/button'; 
import { useLanguage } from '@/context/LanguageContext';

const translations = {
  en: {
    about: "Building digital experiences with a focus on clean code, beautiful design, and exceptional user experience.",
    quickLinks: "Quick Links",
    links: {
      home: "Home",
      about: "About Me",
      skills: "Skills & Tools",
      journey: "My Journey",
      projects: "Projects"
    },
    contact: {
      title: "Get In Touch",
      description: "Interested in working together? Feel free to reach out for collaborations or just a friendly hello.",
      button: "Contact Me"
    },
    copyright: {
      rights: "All rights reserved.",
      built: "Built with Love❤️, Next.js, TailwindCSS, and Framer Motion"
    },
    viewSource: "View Source"
  },
  pt: {
    about: "Construindo experiências digitais com foco em código limpo, design bonito e experiência excepcional do usuário.",
    quickLinks: "Links Rápidos",
    links: {
      home: "Início",
      about: "Sobre Mim",
      skills: "Habilidades & Ferramentas",
      journey: "Minha Jornada",
      projects: "Projetos"
    },
    contact: {
      title: "Entre em Contato",
      description: "Interessado em trabalhar junto? Sinta-se à vontade para entrar em contato para colaborações ou apenas um olá amigável.",
      button: "Contate-me"
    },
    copyright: {
      rights: "Todos os direitos reservados.",
      built: "Feito com Amor❤️, Next.js, TailwindCSS e Framer Motion"
    },
    viewSource: "Ver Código"
  }
};

const Footer = ({ sectionsRef }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  const scrollToSectionById = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-zinc-800/30 backdrop-blur-sm bg-zinc-950/60">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-zinc-50">Victor Humberto</h3>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              {t.about}
            </p>
            
            <div className="flex space-x-4">
              <SocialButton icon={<SiGithub className="h-5 w-5" />} href="https://github.com/VictorHumberto01" label="GitHub" />
              <SocialButton icon={<SiLinkedin className="h-5 w-5" />} href="https://www.linkedin.com/in/victor-gonçalves-98708a349/" label="LinkedIn" />
              <SocialButton icon={<Mail className="h-5 w-5" />} href="mailto:victor.humberto.dev@gmail.com" label="Email" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-zinc-50">{t.quickLinks}</h4>
            <ul className="space-y-3">
              <FooterLink onClick={() => scrollToSectionById('home')} label={t.links.home} />
              <FooterLink onClick={() => scrollToSectionById('about')} label={t.links.about} />
              <FooterLink onClick={() => scrollToSectionById('skills')} label={t.links.skills} />
              <FooterLink onClick={() => scrollToSectionById('journey')} label={t.links.journey} />
              <FooterLink onClick={() => scrollToSectionById('projects')} label={t.links.projects} />
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-zinc-50">{t.contact.title}</h4>
            <p className="text-zinc-300">
              {t.contact.description}
            </p>
            <Button 
              className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 hover:text-blue-200 border border-blue-500/30 hover:border-blue-500/50 group"
              onClick={() => window.location.href = 'mailto:victor.humberto.dev@gmail.com'}
            >
              {t.contact.button}
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>

        {/* Copyright and Source */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-zinc-800/30 flex flex-col md:flex-row md:justify-between items-center"
        >
          <div className="text-center md:text-left">
            <p className="text-zinc-400 text-sm">
              © {currentYear} Victor Gonçalves. {t.copyright.rights}
            </p>
            <p className="text-zinc-500 text-xs mt-1">
              {t.copyright.built}
            </p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0 space-x-4">
            <motion.a 
              href="https://github.com/VictorHumberto01/VictorPortfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm flex items-center group transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              <SiGithub className="h-4 w-4 mr-2" />
              <span>{t.viewSource}</span>
              <ExternalLink className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

const SocialButton = ({ icon, href, label }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-zinc-900/50 hover:bg-blue-500/20 text-zinc-400 hover:text-blue-300 border border-zinc-800/30 hover:border-blue-500/30 transition-all duration-300"
      whileHover={{ y: -3 }}
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
};

const FooterLink = ({ onClick, label }) => {
  return (
    <li>
      <motion.button
        onClick={onClick}
        className="text-zinc-400 hover:text-blue-300 transition-colors duration-300 inline-block"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.button>
    </li>
  );
};

export default Footer;