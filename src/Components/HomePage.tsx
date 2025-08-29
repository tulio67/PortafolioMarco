// src/Components/HomePage.tsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white">
            Hola
          </h1>
          
          <div className="w-16 h-1 bg-blue-500"></div>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Mi nombre es <span className="text-blue-400 font-medium">Marco Tulio Lara</span>, Desarrollador de software con amplia experiencia en la creación de soluciones robustas y 
            escalables. Mi expertise abarca todo el ciclo de vida del desarrollo, desde la arquitectura hasta el despliegue. Me apasiona el aprendizaje continuo y estoy en constante
           evolución, explorando nuevas tecnologías para expandir mis habilidades.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded transition-colors duration-200">
              Ver Proyectos
            </button>
            <button className="border border-gray-500 hover:border-white text-gray-300 hover:text-white font-medium py-3 px-8 rounded transition-colors duration-200">
              Contáctame
            </button>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
            <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-xl"></div>
            <img
              src="src\assets\13001257.png"
              alt="Web Developer Illustration"
              className="relative z-10 w-full"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;