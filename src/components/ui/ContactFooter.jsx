import React, { useState, useEffect } from 'react';
import { Command } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const translations = {
  en: {
    searchPlaceholder: "Search contact info...",
    sectionTitle: "Contact Information",
    pressToOpen: "Press to open",
    contactItems: [
      { 
        icon: '📧', 
        label: 'Email',
        value: 'victor.humberto.dev@gmail.com',
        action: () => window.open('mailto:victor.humberto.dev@gmail.com')
      },
      { 
        icon: '🌎', 
        label: 'Location',
        value: 'Belo Horizonte, MG - Brazil'
      },
      { 
        icon: '💼', 
        label: 'LinkedIn',
        value: 'Victor Gonçalves',
        action: () => window.open('https://www.linkedin.com/in/victor-gonçalves-98708a349/')
      },
      { 
        icon: '💻', 
        label: 'GitHub',
        value: 'VictorHumberto01',
        action: () => window.open('https://github.com/VictorHumberto01')
      }
    ]
  },
  pt: {
    searchPlaceholder: "Buscar informações de contato...",
    sectionTitle: "Informações de Contato",
    pressToOpen: "Pressione para abrir",
    contactItems: [
      { 
        icon: '📧', 
        label: 'Email',
        value: 'victor.humberto.dev@gmail.com',
        action: () => window.open('mailto:victor.humberto.dev@gmail.com')
      },
      { 
        icon: '🌎', 
        label: 'Localização',
        value: 'Belo Horizonte, MG - Brasil'
      },
      { 
        icon: '💼', 
        label: 'LinkedIn',
        value: 'Victor Gonçalves',
        action: () => window.open('https://www.linkedin.com/in/victor-gonçalves-98708a349/')
      },
      { 
        icon: '💻', 
        label: 'GitHub',
        value: 'VictorHumberto01',
        action: () => window.open('https://github.com/VictorHumberto01')
      }
    ]
  }
};

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredItems = t.contactItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.value.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 p-2 rounded-lg bg-zinc-800/30 hover:bg-zinc-700/30 backdrop-blur-xl border border-zinc-700/30 transition-all duration-200"
      >
        <Command className="w-5 h-5 text-zinc-400" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg mx-4"
            >
              <div className="overflow-hidden rounded-xl bg-zinc-900/80 border border-zinc-800/50 backdrop-blur-xl shadow-2xl">
                {/* Blended title bar */}
                <div className="flex items-center px-4 h-8 border-b border-zinc-800/50">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors duration-200 group relative mr-2"
                  >
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-red-900 text-xs">
                      ×
                    </span>
                  </button>
                </div>

                <div className="flex items-center px-4 border-b border-zinc-800/50">
                  <Command className="w-4 h-4 text-zinc-400 mr-3" />
                  <input
                    type="text"
                    placeholder={t.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-4 bg-transparent text-zinc-200 placeholder-zinc-400 outline-none text-sm"
                    autoFocus
                  />
                </div>

                <div className="py-2">
                  <div className="px-3 py-2 text-xs text-zinc-400">{t.sectionTitle}</div>
                  {filteredItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => {
                        if (item.action) {
                          item.action();
                          setIsOpen(false);
                        }
                      }}
                      className={`w-full px-3 py-2.5 flex items-center text-left hover:bg-zinc-800/50 transition-colors duration-200 ${item.action ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      <span className="text-lg mr-3">{item.icon}</span>
                      <div className="flex-1">
                        <div className="text-sm text-zinc-400">{item.label}</div>
                        <div className="text-sm text-zinc-200">{item.value}</div>
                      </div>
                      {item.action && (
                        <div className="ml-3 text-xs text-zinc-500">{t.pressToOpen}</div>
                      )}
                    </button>
                  ))}
                </div>

                <div className="px-4 py-3 border-t border-zinc-800/50 flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <kbd className="px-2 py-1 bg-zinc-800 rounded-md text-xs">⌘</kbd>
                    <span>+</span>
                    <kbd className="px-2 py-1 bg-zinc-800 rounded-md text-xs">K</kbd>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;