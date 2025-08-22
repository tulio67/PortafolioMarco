// src/Components/HomePage.tsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white">
            Welcome.
          </h1>
          
          <div className="w-16 h-1 bg-blue-500"></div>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            My name is <span className="text-blue-400 font-medium">Ian Dunkerley</span>, a front-end developer based in Torquay, Devon, UK. I have worked on a wide range of front-end projects, from DJ applications to eCommerce booking platforms, with a focus on creating clean, well-crafted interfaces that not only look great but also provide a seamless user experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded transition-colors duration-200">
              View Projects
            </button>
            <button className="border border-gray-500 hover:border-white text-gray-300 hover:text-white font-medium py-3 px-8 rounded transition-colors duration-200">
              Contact Me
            </button>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
            <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-xl"></div>
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-5594204-4664362.png"
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