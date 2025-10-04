import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Experiencia",
      description: "3+ años desarrollando aplicaciones web modernas"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Pasión",
      description: "Me apasiona crear soluciones elegantes y funcionales"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Enfoque",
      description: "Centrado en la experiencia del usuario y código limpio"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Calidad",
      description: "Comprometido con las mejores prácticas de desarrollo"
    }
  ];

  return (
    <motion.section 
      id="about" 
      className="min-h-screen bg-mono-800 py-16 sm:py-20 px-4 sm:px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-mono-white mb-4">
            Sobre Mí
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-mono-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-mono-white">
                Desarrollador Full Stack con Visión Creativa
              </h3>
              <p className="text-base sm:text-lg text-mono-200 leading-relaxed">
                Soy un desarrollador apasionado por crear experiencias digitales excepcionales. 
                Mi enfoque combina sólidos fundamentos técnicos con un ojo creativo para el diseño 
                y la usabilidad.
              </p>
              <p className="text-base sm:text-lg text-mono-200 leading-relaxed">
                Especializado en tecnologías modernas como React, TypeScript, Node.js y bases de datos 
                tanto SQL como NoSQL. Me mantengo constantemente actualizado con las últimas tendencias 
                y mejores prácticas del desarrollo web.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-mono-700/50 p-4 rounded-lg border border-mono-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-mono-400">
                      {item.icon}
                    </div>
                    <h4 className="font-medium text-mono-white">{item.title}</h4>
                  </div>
                  <p className="text-mono-300 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Additional Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-mono-700/30 p-8 rounded-xl border border-mono-600">
              <h4 className="text-xl font-medium text-mono-white mb-4">
                Filosofía de Desarrollo
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-mono-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-mono-200">
                    <strong className="text-mono-white">Código limpio:</strong> Escribo código mantenible y bien documentado
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-mono-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-mono-200">
                    <strong className="text-mono-white">UX primero:</strong> Priorizo la experiencia del usuario en cada decisión
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-mono-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-mono-200">
                    <strong className="text-mono-white">Aprendizaje continuo:</strong> Siempre explorando nuevas tecnologías
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-mono-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-mono-200">
                    <strong className="text-mono-white">Colaboración:</strong> Trabajo efectivo en equipos multidisciplinarios
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-mono-700/30 p-8 rounded-xl border border-mono-600">
              <h4 className="text-xl font-medium text-mono-white mb-4">
                Cuando No Estoy Programando
              </h4>
              <p className="text-mono-200 leading-relaxed">
                Disfruto explorando nuevas tecnologías, leyendo sobre diseño y arquitectura de software, 
                y contribuyendo a proyectos open source. También me gusta la fotografía y viajar para 
                encontrar inspiración en diferentes culturas y perspectivas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;