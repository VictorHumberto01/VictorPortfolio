import React from 'react';
import { motion } from 'framer-motion';

const TechBadge = ({ icon, name }) => (
  <motion.div 
    className="flex items-center gap-2 p-2 bg-zinc-800/50 rounded-md hover:bg-zinc-700/50 transition-all duration-300"
    whileHover={{ scale: 1.05 }}
  >
    <img src={icon} className="w-4 h-4" alt={name} />
    <span className="text-xs text-zinc-300">{name}</span>
  </motion.div>
);

const ProjectTechStack = ({ projectTitle }) => {
  const getTechStack = () => {
    switch(projectTitle) {
      case "My Personal Porfolio":
        return [
          { icon: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/da046048091a791b72ee3ed1751c85d9598445f9/main/next.svg", name: "Next.js" },
          { icon: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/da046048091a791b72ee3ed1751c85d9598445f9/main/react.svg", name: "React" },
          { icon: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/da046048091a791b72ee3ed1751c85d9598445f9/main/tailwind.svg", name: "Tailwind CSS" }
        ];
        
      case "Aline Nery Portfolio":
        return [
          { icon: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/da046048091a791b72ee3ed1751c85d9598445f9/main/javascript.svg", name: "JavaScript" },
          { icon: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/da046048091a791b72ee3ed1751c85d9598445f9/main/react.svg", name: "React" },
          { icon: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/f399628e99a19c1c6480ad95aace0e3a41b51dbe/main/sqlite.svg", name: "SQLite" }
        ];
        
      case "Céus":
        return [
          { icon: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/da046048091a791b72ee3ed1751c85d9598445f9/main/react.svg", name: "React" },
          { icon: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/da046048091a791b72ee3ed1751c85d9598445f9/main/next.svg", name: "Next.js" },
          { icon: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/da046048091a791b72ee3ed1751c85d9598445f9/main/tailwind.svg", name: "Tailwind CSS" },
          { icon: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/6a09879637bc9c4096c092081c5b7036558c0de2/main/mysql.svg", name: "MySQL" },
          { icon: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/da046048091a791b72ee3ed1751c85d9598445f9/main/typescript.svg", name: "TypeScript" },
          { icon: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/6a09879637bc9c4096c092081c5b7036558c0de2/main/express.svg", name: "Express" }
        ];
        
      case "LlamaBridge":
        return [
          { icon: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/014b5e80bd75eff6fbca52f0bf2c10b43e3e1709/main/python.svg", name: "Python" },
          { icon: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/014b5e80bd75eff6fbca52f0bf2c10b43e3e1709/main/flask.svg", name: "Flask" },
          { icon: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/014b5e80bd75eff6fbca52f0bf2c10b43e3e1709/main/swift.svg", name: "Swift" }
        ];
        
      case "Music Discord Bot":
        return [
          { icon: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/014b5e80bd75eff6fbca52f0bf2c10b43e3e1709/main/python.svg", name: "Python" },
          { icon: "https://raw.githubusercontent.com/VictorHumberto01/portfolio-icons/014b5e80bd75eff6fbca52f0bf2c10b43e3e1709/main/python.svg", name: "Pycord" }
        ];
        
      default:
        return [];
    }
  };

  const techStack = getTechStack();

  return (
    <div className="flex flex-wrap gap-2">
      {techStack.map((tech, index) => (
        <TechBadge key={index} icon={tech.icon} name={tech.name} />
      ))}
    </div>
  );
};

export default ProjectTechStack;