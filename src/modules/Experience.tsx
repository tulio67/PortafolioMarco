import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const workExperience = [
    {
      title: "Desarrollador Full Stack Senior",
      company: "TechInnovate Solutions",
      location: "Remoto",
      period: "2023 - Presente",
      type: "work",
      description: "Liderando el desarrollo de aplicaciones web escalables utilizando React, Node.js y AWS. Responsable de la arquitectura de microservicios y mentoring de desarrolladores junior.",
      achievements: [
        "Mejoré el rendimiento de la aplicación principal en un 40%",
        "Implementé sistema de CI/CD que redujo deployment time en 60%",
        "Lideré equipo de 4 desarrolladores en proyecto crítico"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "MongoDB"]
    },
    {
      title: "Desarrollador Frontend",
      company: "Digital Creative Agency",
      location: "Ciudad de México",
      period: "2022 - 2023",
      type: "work",
      description: "Desarrollo de interfaces de usuario modernas y responsivas para clientes de diversas industrias. Especializado en React y Vue.js con enfoque en experiencia de usuario.",
      achievements: [
        "Desarrollé 15+ sitios web y aplicaciones cliente",
        "Implementé design system usado por todo el equipo",
        "Reduje tiempo de carga promedio en 35%"
      ],
      technologies: ["React", "Vue.js", "Tailwind CSS", "Figma", "JavaScript", "SASS"]
    },
    {
      title: "Desarrollador Junior",
      company: "StartupTech",
      location: "Guadalajara",
      period: "2021 - 2022",
      type: "work",
      description: "Desarrollo de funcionalidades frontend y backend para aplicación SaaS. Colaboración estrecha con el equipo de design y product management.",
      achievements: [
        "Implementé módulo de autenticación y autorización",
        "Desarrollé dashboard administrativo completo",
        "Contribuí a la migración de JavaScript a TypeScript"
      ],
      technologies: ["JavaScript", "React", "Express.js", "MySQL", "Git", "REST APIs"]
    }
  ];

  const education = [
    {
      title: "Ingeniería en Sistemas Computacionales",
      company: "Instituto Tecnológico de Monterrey",
      location: "México",
      period: "2017 - 2021",
      type: "education",
      description: "Especialización en desarrollo de software y sistemas distribuidos. Proyecto de tesis enfocado en aplicaciones web progresivas.",
      achievements: [
        "Promedio general: 9.2/10",
        "Tesis: 'PWAs para comercio electrónico'",
        "Presidente del club de programación competitiva"
      ],
      technologies: ["Java", "Python", "C++", "Algoritmos", "Estructuras de Datos", "BD"]
    },
    {
      title: "Certificación AWS Solutions Architect",
      company: "Amazon Web Services",
      location: "Online",
      period: "2023",
      type: "education",
      description: "Certificación profesional en arquitectura de soluciones en la nube, enfocada en diseño de sistemas escalables y seguros.",
      achievements: [
        "Certificación nivel Associate",
        "Especialización en microservicios",
        "Conocimiento avanzado en seguridad cloud"
      ],
      technologies: ["AWS", "CloudFormation", "Lambda", "S3", "EC2", "RDS"]
    },
    {
      title: "Full Stack Web Development",
      company: "freeCodeCamp",
      location: "Online",
      period: "2020",
      type: "education",
      description: "Certificación completa en desarrollo web full stack con más de 300 horas de práctica hands-on.",
      achievements: [
        "5 proyectos certificados completados",
        "Especialización en JavaScript moderno",
        "Contribuciones a la comunidad open source"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "React", "MongoDB"]
    }
  ];

  const allExperience = [...workExperience, ...education].sort((a, b) => {
    const yearA = parseInt(a.period.split(' - ')[0]);
    const yearB = parseInt(b.period.split(' - ')[0]);
    return yearB - yearA;
  });

  return (
    <section id="experience" className="min-h-screen bg-mono-800 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-mono-white mb-4">
            Experiencia & Educación
          </h2>
          <div className="w-16 h-1 bg-mono-400 mx-auto mb-6"></div>
          <p className="text-xl text-mono-200 max-w-3xl mx-auto">
            Mi trayectoria profesional y académica en el mundo del desarrollo de software
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-mono-600"></div>

          {allExperience.map((item, index) => (
            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
              {/* Timeline dot */}
              <div className={`absolute w-6 h-6 bg-mono-400 rounded-full border-4 border-mono-800 ${
                index % 2 === 0 
                  ? 'left-5 md:left-auto md:-right-3' 
                  : 'left-5 md:-left-3'
              }`}></div>

              {/* Experience card */}
              <div className={`bg-mono-700/30 p-6 rounded-xl border border-mono-600 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-mono-400 mt-1">
                    {item.type === 'work' ? <Briefcase size={24} /> : <GraduationCap size={24} />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-mono-white mb-1">
                      {item.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-mono-300 mb-2">
                      <span className="font-medium">{item.company}</span>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-mono-200 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-mono-white font-medium mb-2">Logros destacados:</h4>
                  <ul className="space-y-1">
                    {item.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-mono-200 text-sm">
                        <div className="w-1.5 h-1.5 bg-mono-400 rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-mono-white font-medium mb-2 text-sm">Tecnologías:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-mono-600/50 text-mono-200 px-2 py-1 rounded text-xs border border-mono-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 bg-mono-700/30 p-8 rounded-xl border border-mono-600">
          <h3 className="text-2xl font-semibold text-mono-white mb-4">
            ¿Interesado en trabajar juntos?
          </h3>
          <p className="text-mono-200 mb-6 max-w-2xl mx-auto">
            Siempre estoy abierto a nuevas oportunidades y desafíos interesantes. 
            Si tienes un proyecto en mente, ¡hablemos!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/CV_Marco_Desarrollador.pdf" 
              download
              className="bg-mono-600 hover:bg-mono-500 text-mono-white font-medium py-3 px-6 rounded-lg transition-all duration-200 inline-flex items-center gap-2 justify-center"
            >
              <ExternalLink size={18} />
              Descargar CV
            </a>
            <button className="border-2 border-mono-400 hover:border-mono-white text-mono-200 hover:text-mono-white font-medium py-3 px-6 rounded-lg transition-all duration-200">
              Ver Proyectos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;