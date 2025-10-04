// src/Components/HomePage.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';

interface HomePageProps {
  onNavigate: (section: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <motion.section 
      id="home" 
      className="min-h-screen bg-mono-900 text-mono-50 flex items-center justify-center p-4 sm:p-6 pt-20 sm:pt-24"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
        {/* Bloque de la foto */}
        <motion.div 
          className="flex-shrink-0 flex items-center justify-center w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80" 
          variants={fadeInLeft}
        >
          <motion.img
            src="/FotoPerfil.png"
            alt="Marco - Desarrollador Full Stack"
            className="object-cover h-full w-full rounded-xl shadow-2xl border border-mono-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        
        {/* Línea vertical gris */}
        <motion.div 
          className="h-1 w-32 lg:h-80 lg:w-1 bg-mono-400"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>
        
        {/* Text Section */}
        <motion.div 
          className="flex-1 flex flex-col items-center lg:items-start space-y-4 sm:space-y-6 max-w-lg text-center lg:text-left"
          variants={fadeInRight}
        >
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg lg:text-xl text-mono-400 font-medium">¡Hola! Soy</h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-mono-white">
              Marco
            </h1>
            <h3 className="text-xl sm:text-2xl lg:text-3xl text-mono-300 font-medium">
              Desarrollador Full Stack
            </h3>
          </div>
          
          <div className="w-12 sm:w-16 h-1 bg-mono-400"></div>
          
          <p className="text-base sm:text-lg lg:text-xl text-mono-200 leading-relaxed max-w-xl">
            Desarrollador apasionado especializado en crear aplicaciones web modernas y funcionales. 
            Me enfoco en construir interfaces limpias y experiencias de usuario excepcionales utilizando 
            las últimas tecnologías y mejores prácticas del desarrollo.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-3 sm:gap-4 pt-2 justify-center lg:justify-start">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-mono-400 hover:text-mono-white transition-colors duration-200 p-2"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-mono-400 hover:text-mono-white transition-colors duration-200 p-2"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a 
              href="mailto:marco@example.com"
              className="text-mono-400 hover:text-mono-white transition-colors duration-200 p-2"
            >
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
            <button 
              onClick={() => onNavigate('projects')}
              className="bg-mono-700 hover:bg-mono-600 text-mono-white font-medium py-3 px-6 sm:px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Ver Proyectos
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="border-2 border-mono-400 hover:border-mono-white text-mono-200 hover:text-mono-white font-medium py-3 px-6 sm:px-8 rounded-lg transition-all duration-200 text-sm sm:text-base"
            >
              Contáctame
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.button 
          onClick={() => onNavigate('about')}
          className="text-mono-400 hover:text-mono-white transition-colors duration-200"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={24} />
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default HomePage;