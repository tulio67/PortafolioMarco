import { useState, useEffect } from 'react';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import About from './modules/About';
import Skills from './modules/Skills';
import Experience from './modules/Experience';
import Projects from './modules/Projects';
import Contact from './modules/Contact';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const headerHeight = 80;
      const offsetTop = element.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-mono-900">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="relative">
        <HomePage onNavigate={handleNavigate} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-mono-900 border-t border-mono-700 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-mono-400 text-sm">
            © 2025 Marco. Diseñado y desarrollado con ❤️ usando React y Tailwind CSS.
          </p>
          <p className="text-mono-500 text-xs mt-2">
            ¿Te gusta el diseño? Puedes ver el código en mi GitHub.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;