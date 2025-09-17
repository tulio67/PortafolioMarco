// src/Components/HomePage.tsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-mono-900 text-mono-50 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-5 md:gap-8">
        {/* Bloque de la foto */}
        <div className="flex-shrink-0 flex items-center justify-center" style={{ height: "18rem", width: "18rem" }}>
          <img
            src="/FotoPerfil.png"
            alt="Foto de perfil"
            className="object-cover h-full w-full rounded-xl shadow-lg"
          />
        </div>
        {/* Línea vertical gris */}
        <div className="h-72 w-1 bg-mono-400"></div>
        {/* Text Section */}
        <div className="flex-1 flex flex-col items-start space-y-6 max-w-md ml-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-mono-white">
            Bienvenido.
          </h1>
          
          <div className="w-16 h-1 bg-mono-400"></div>
          
          <p className="text-lg md:text-xl text-mono-200 leading-relaxed text-left">
            My name is <span className="text-mono-100 font-medium">Ian Dunkerley</span>, a front-end developer based in Torquay, Devon, UK. I have worked on a wide range of front-end projects, from DJ applications to eCommerce booking platforms, with a focus on creating clean, well-crafted interfaces that not only look great but also provide a seamless user experience.
          </p>
          
          <div className="flex flex-row gap-4 pt-4">
            <button className="bg-mono-700 hover:bg-mono-800 text-mono-white font-medium py-3 px-8 rounded transition-colors duration-200">
              View Projects
            </button>
            <button className="border border-mono-400 hover:border-mono-white text-mono-200 hover:text-mono-white font-medium py-3 px-8 rounded transition-colors duration-200">
              Contact Me
            </button>
          </div>
        </div>
        
        {/* Image Section - Removed */}
        
      </div>
    </div>
  );
};

export default HomePage;