import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HomeIcon, Calendar, Briefcase } from 'lucide-react';

const LocationInfo = ({ currentSection }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={currentSection === 1 ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm h-full">
        <CardContent className="p-6">
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-semibold text-zinc-50 mb-4">Location & Availability</h3>
            
            <div className="space-y-6">
              <InfoItem 
                icon={<HomeIcon className="h-5 w-5 text-blue-400" />} 
                title="Based in"
                description="Belo Horizonte, Minas Gerais, Brazil"
              />

              <InfoItem 
                icon={<Calendar className="h-5 w-5 text-blue-400" />} 
                title="Time Zone"
                description="UTC-3 (Brazil Time)"
                subdescription="Flexible with international schedules"
              />

              <InfoItem 
                icon={<Briefcase className="h-5 w-5 text-blue-400" />} 
                title="Current Focus"
                description="Computer Science Student at IFMG"
                subdescription="Open to work opportunities"
                badge="Web Developer at Quantium Labs"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const InfoItem = ({ icon, title, description, subdescription, badge }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-zinc-200 font-medium">{title}</h4>
        <p className="text-zinc-400">{description}</p>
        {subdescription && <p className="text-zinc-500 text-sm">{subdescription}</p>}
        {badge && (
          <div className="flex items-center gap-2 mt-1">
            <Badge className="bg-blue-500/20 text-blue-300">
              {badge}
            </Badge>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationInfo;