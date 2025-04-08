// AboutStory.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '../../../context/LanguageContext';

const translations = {
  en: {
    title: "My Story",
    paragraph1: "Born in <strong>Sete Lagoas, Brazil</strong>, I started my programming journey at the age of <strong>15</strong>. What began as a curiosity with a <strong>Discord bot project</strong> soon evolved into a deep passion for <strong>software development</strong>.",
    paragraph2: "As I honed my skills, I explored <strong>Data Science</strong>, <strong>Algorithms</strong>, and <strong>Machine Learning</strong>, which led me to dive deeper into <strong>Data Structures</strong> and core <strong>Computer Science</strong> concepts.",
    paragraph3: "While studying, I co-founded <strong>Quantium Labs</strong> with three friends—a <strong>development company </strong> dedicated to delivering <strong>innovative products and experiences</strong>. As a <strong>full-stack developer</strong>, I worked with <strong>React</strong>, <strong>Next.js</strong>, and <strong>Vite</strong> for the frontend, and <strong>TypeScript</strong> for backend solutions. Although I'm no longer actively involved, I remain connected to the team as a <strong>code maintainer</strong>.",
    paragraph4: "Today, as a <strong>Computer Science student at IFMG</strong>, I've transformed my early enthusiasm into <strong>professional expertise</strong>, specializing in <strong>web development</strong> and <strong>modern application architecture</strong>. My studies led me to move to <strong>Belo Horizonte</strong>, where I continue to grow both academically and professionally.",
    paragraph5: "My passion lies in building <strong>intuitive, efficient solutions</strong> that make a real impact. Every project is an opportunity to <strong>learn, innovate</strong>, and push the boundaries of what's possible."
  },
  pt: {
    title: "Minha História",
    paragraph1: "Nascido em <strong>Sete Lagoas, Brasil</strong>, comecei minha jornada na programação aos <strong>15</strong> anos. O que começou como uma curiosidade com um <strong>projeto de bot do Discord</strong> logo se transformou em uma paixão profunda pelo <strong>desenvolvimento de software</strong>.",
    paragraph2: "Conforme aprimorava minhas habilidades, explorei <strong>Ciência de Dados</strong>, <strong>Algoritmos</strong> e <strong>Machine Learning</strong>, o que me levou a mergulhar mais fundo em <strong>Estruturas de Dados</strong> e conceitos fundamentais de <strong>Ciência da Computação</strong>.",
    paragraph3: "Durante os estudos, co-fundei a <strong>Quantium Labs</strong> com três amigos—uma <strong>empresa de desenvolvimento</strong> dedicada a entregar <strong>produtos e experiências inovadoras</strong>. Como <strong>desenvolvedor full-stack</strong>, trabalhei com <strong>React</strong>, <strong>Next.js</strong> e <strong>Vite</strong> para o frontend, e <strong>TypeScript</strong> para soluções backend. Embora não esteja mais ativamente envolvido, permaneço conectado à equipe como <strong>mantenedor de código</strong>.",
    paragraph4: "Hoje, como <strong>estudante de Ciência da Computação no IFMG</strong>, transformei meu entusiasmo inicial em <strong>expertise profissional</strong>, especializando-me em <strong>desenvolvimento web</strong> e <strong>arquitetura moderna de aplicações</strong>. Meus estudos me levaram a me mudar para <strong>Belo Horizonte</strong>, onde continuo crescendo tanto academicamente quanto profissionalmente.",
    paragraph5: "Minha paixão está em construir <strong>soluções intuitivas e eficientes</strong> que causam um impacto real. Cada projeto é uma oportunidade de <strong>aprender, inovar</strong> e expandir os limites do possível."
  }
};

const AboutStory = ({ currentSection }) => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <motion.div
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm transform transition-all duration-300 hover:bg-zinc-800/30 hover:border-blue-500/30 h-full">
        <CardContent className="p-6 h-full flex flex-col">
          <h3 className="text-xl font-semibold text-zinc-50 mb-4">{content.title}</h3>
          <div className="text-zinc-400">
            <p className="mb-5" dangerouslySetInnerHTML={{ __html: content.paragraph1 }} />
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: content.paragraph2 }} />
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: content.paragraph3 }} />
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: content.paragraph4 }} />
            <p dangerouslySetInnerHTML={{ __html: content.paragraph5 }} />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AboutStory;