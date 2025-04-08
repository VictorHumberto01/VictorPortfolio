import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { HomeIcon, BookMarked, Clock, GraduationCap } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

const translations = {
  en: {
    location: {
      title: "Location",
      description: "Belo Horizonte, Brazil"
    },
    education: {
      title: "Education",
      description: "Computer Science",
      subdescription: "IFMG"
    },
    languages: {
      title: "Languages",
      description: "English (C1 Advanced)"
    },
    timezone: {
      title: "Time Zone",
      description: "UTC-3 (Brazil Time)",
      subdescription: "Flexible schedule"
    }
  },
  pt: {
    location: {
      title: "Localização",
      description: "Belo Horizonte, Brasil"
    },
    education: {
      title: "Educação",
      description: "Ciência da Computação",
      subdescription: "IFMG"
    },
    languages: {
      title: "Idiomas",
      description: "Inglês (C1 Avançado)"
    },
    timezone: {
      title: "Fuso Horário",
      description: "UTC-3 (Horário de Brasília)",
      subdescription: "Horário flexível"
    }
  }
};

const LocationInfo = ({ currentSection }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={currentSection === 1 ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="space-y-4">
              <InfoItem 
                icon={<HomeIcon className="h-5 w-5 text-blue-400" />} 
                title={t.location.title}
                description={t.location.description}
              />
              <InfoItem 
                icon={<GraduationCap className="h-5 w-5 text-blue-400" />} 
                title={t.education.title}
                description={t.education.description}
                subdescription={t.education.subdescription}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="space-y-4">
              <InfoItem 
                icon={<BookMarked className="h-5 w-5 text-blue-400" />} 
                title={t.languages.title}
                description={t.languages.description}
              />
              <InfoItem 
                icon={<Clock className="h-5 w-5 text-blue-400" />} 
                title={t.timezone.title}
                description={t.timezone.description}
                subdescription={t.timezone.subdescription}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

const InfoItem = ({ icon, title, description, subdescription }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-zinc-200 font-medium text-sm">{title}</h4>
        <p className="text-zinc-400 text-sm">{description}</p>
        {subdescription && (
          <p className="text-zinc-500 text-xs mt-0.5">{subdescription}</p>
        )}
      </div>
    </div>
  );
};

export default LocationInfo;