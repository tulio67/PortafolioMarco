import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Server, Smartphone, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend",
      description: "Interfaces modernas y responsivas",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript ES6+", level: 90 }
      ]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend",
      description: "APIs robustas y escalables",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 70 }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Bases de Datos",
      description: "Gestión eficiente de datos",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Redis", level: 70 },
        { name: "Firebase", level: 80 }
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Diseño & UX",
      description: "Experiencias visuales atractivas",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 75 },
        { name: "UI/UX Design", level: 80 },
        { name: "Responsive Design", level: 95 },
        { name: "Animation", level: 70 }
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "DevOps & Tools",
      description: "Despliegue y gestión de proyectos",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Netlify/Vercel", level: 85 },
        { name: "CI/CD", level: 75 }
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile",
      description: "Aplicaciones móviles nativas",
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "Progressive Web Apps", level: 85 },
        { name: "Mobile UI", level: 80 },
        { name: "App Store Deploy", level: 75 }
      ]
    }
  ];

  const tools = [
    "VS Code", "Postman", "Chrome DevTools", "Slack", "Trello", "Notion", 
    "Adobe Creative Suite", "Sketch", "Webpack", "Vite", "ESLint", "Prettier"
  ];

  return (
    <motion.section 
      id="skills" 
      className="min-h-screen bg-mono-900 py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-mono-white mb-4">
            Habilidades & Tecnologías
          </h2>
          <div className="w-16 h-1 bg-mono-400 mx-auto mb-6"></div>
          <p className="text-xl text-mono-200 max-w-3xl mx-auto">
            Domino una amplia gama de tecnologías modernas para crear soluciones completas y escalables
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-mono-800/50 p-6 rounded-xl border border-mono-700 hover:border-mono-600 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-mono-400">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-mono-white">{category.title}</h3>
                  <p className="text-mono-300 text-sm">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-mono-200 text-sm">{skill.name}</span>
                      <span className="text-mono-400 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-mono-700 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-mono-500 to-mono-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Technologies */}
        <div className="bg-mono-800/30 p-8 rounded-xl border border-mono-700">
          <h3 className="text-2xl font-semibold text-mono-white mb-6 text-center">
            Herramientas y Tecnologías Adicionales
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool, index) => (
              <span 
                key={index}
                className="bg-mono-700/50 text-mono-200 px-4 py-2 rounded-full text-sm border border-mono-600 hover:border-mono-500 hover:text-mono-white transition-all duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Learning Section */}
        <div className="mt-12 text-center bg-mono-800/30 p-8 rounded-xl border border-mono-700">
          <h3 className="text-2xl font-semibold text-mono-white mb-4">
            Siempre Aprendiendo
          </h3>
          <p className="text-mono-200 mb-6 max-w-2xl mx-auto">
            La tecnología evoluciona constantemente, y yo evoluciono con ella. Actualmente estoy explorando:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="bg-mono-600/50 text-mono-200 px-4 py-2 rounded-full text-sm border border-mono-500">
              🚀 Web3 & Blockchain
            </span>
            <span className="bg-mono-600/50 text-mono-200 px-4 py-2 rounded-full text-sm border border-mono-500">
              🤖 Machine Learning
            </span>
            <span className="bg-mono-600/50 text-mono-200 px-4 py-2 rounded-full text-sm border border-mono-500">
              ⚡ Serverless Architecture
            </span>
            <span className="bg-mono-600/50 text-mono-200 px-4 py-2 rounded-full text-sm border border-mono-500">
              🎯 Microservices
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;