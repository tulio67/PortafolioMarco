import React, { useState } from 'react';
import { ExternalLink, Github, FolderOpen, Image, FileText, Download, X, Upload, Eye, Zap, BookOpen } from 'lucide-react';

interface ProjectFile {
  id: string;
  name: string;
  type: 'image' | 'document' | 'code';
  url: string;
  size?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured: boolean;
  files: ProjectFile[];
}

// INTERFAZ PARA LAS TAREAS DE SQA
interface SQATask {
  id: string;
  title: string;
  description: string;
  how: string;
  learned: string;
  files?: ProjectFile[];
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // NUEVO ESTADO PARA LA TAREA SQA SELECCIONADA
  const [selectedSQATask, setSelectedSQATask] = useState<SQATask | null>(null);
  const [fileUploadProject, setFileUploadProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de comercio electrónico con panel de administración',
      longDescription: 'Una plataforma de comercio electrónico completa construida con React, Node.js y MongoDB. Incluye gestión de productos, carrito de compras, procesamiento de pagos, y un panel de administración completo.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT', 'Tailwind CSS'],
      githubUrl: 'https://github.com/marco/ecommerce',
      liveUrl: 'https://ecommerce-demo.com',
      category: 'fullstack',
      featured: true,
      files: [
        { id: '1', name: 'Arquitectura del Sistema.pdf', type: 'document', url: '/files/architecture.pdf', size: '2.3 MB' },
        { id: '2', name: 'Demo Screenshots', type: 'image', url: '/files/screenshots.zip', size: '5.1 MB' },
        { id: '3', name: 'API Documentation.md', type: 'document', url: '/files/api-docs.md', size: '45 KB' }
      ]
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con colaboración en tiempo real',
      longDescription: 'Una aplicación web para gestión de proyectos y tareas con funcionalidades de colaboración en tiempo real, notificaciones push, y sincronización offline.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'Redis'],
      githubUrl: 'https://github.com/marco/task-manager',
      liveUrl: 'https://taskmanager-demo.com',
      category: 'frontend',
      featured: true,
      files: [
        { id: '4', name: 'User Manual.pdf', type: 'document', url: '/files/user-manual.pdf', size: '1.8 MB' },
        { id: '5', name: 'Database Schema.png', type: 'image', url: '/files/db-schema.png', size: '150 KB' }
      ]
    },
    {
      id: '3',
      title: 'Weather API Service',
      description: 'Servicio de API REST para datos meteorológicos con cache inteligente',
      longDescription: 'Un servicio de API escalable que agrega datos de múltiples fuentes meteorológicas, implementa cache inteligente y proporciona endpoints optimizados para diferentes tipos de aplicaciones.',
      image: '/api/placeholder/400/300',
      technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'OpenAPI'],
      githubUrl: 'https://github.com/marco/weather-api',
      category: 'backend',
      featured: false,
      files: [
        { id: '6', name: 'API Specification.yaml', type: 'code', url: '/files/api-spec.yaml', size: '12 KB' },
        { id: '7', name: 'Performance Report.pdf', type: 'document', url: '/files/performance.pdf', size: '892 KB' }
      ]
    },
    {
      id: '4',
      title: 'Mobile Banking App',
      description: 'Aplicación móvil para banca digital con React Native',
      longDescription: 'Una aplicación móvil segura para banca digital que incluye transferencias, pagos, gestión de cuentas y análisis financiero personal.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Biometric Auth'],
      githubUrl: 'https://github.com/marco/banking-app',
      category: 'mobile',
      featured: true,
      files: [
        { id: '8', name: 'Security Audit.pdf', type: 'document', url: '/files/security-audit.pdf', size: '3.2 MB' },
        { id: '9', name: 'App Store Assets.zip', type: 'image', url: '/files/app-assets.zip', size: '8.7 MB' }
      ]
    }
  ];

  // NUEVOS DATOS PARA LAS TAREAS DE SQA (MODIFICADO para incluir imagen de ejemplo)
  const sqaTasks: SQATask[] = [
    {
      id: 'sqa-1',
      title: 'Pruebas Unitarias y Cobertura (Jest & TS)',
      description: 'Implementación de pruebas unitarias exhaustivas en **TypeScript** y **Jest** para la lógica de negocio central (evaluación de solicitudes).',
      how: 'Utilicé **Jest** y **TypeScript** para escribir suites de pruebas cubriendo casos de éxito, errores de validación, límites (Boundary Value Analysis) y condiciones complejas. Se configuró la herramienta de cobertura para asegurar un mínimo del **90%** en las funciones críticas.',
      learned: 'Comprendí la importancia del **Desarrollo Guiado por Pruebas (TDD)** y cómo la alta cobertura previene regresiones. Aprendí a utilizar *mocks* de manera efectiva y a escribir aserciones claras para casos de prueba complejos.',
      files: [
        { id: 't1-1', name: 'Pruebas12.pdf', type: 'document', url: '/files/Pruebas12.pdf', size: '1.5 MB' },
        // AGREGADO PARA DEMOSTRACIÓN DE GALERÍA
        { id: 't1-3', name: 'Cobertura Jest.png', type: 'image', url: '/api/placeholder/300/200?text=90%25+Cobertura', size: '100 KB' }, 
        { id: 't1-2', name: 'Repo GitHub', type: 'code', url: 'https://github.com/tulio67/Prueba12', size: 'N/A' },
      ]
    },
    {
      id: 'sqa-2',
      title: 'Análisis y Demostración de Inyección SQL (SQLi)',
      description: 'Análisis crítico y demostración práctica de la vulnerabilidad de **Inyección SQL (SQLi)** utilizando un entorno de laboratorio controlado.',
      how: 'Se utilizó el laboratorio de **PortSwigger Web Security Academy** para ejecutar un ataque de omisión de autenticación. El *payload* principal fue `\' OR 1=1--` para modificar una cláusula `WHERE` y recuperar datos no autorizados (todos los productos).',
      learned: 'Descubrí la profunda vulnerabilidad de la falta de **validación de entrada**. Aprendí sobre estrategias de defensa por capas del **Modelo OSI**, como el uso de **Prepared Statements** (Capa 7) y la función de un **WAF** (Capa 3/4).',
      files: [
        { id: 't2-1', name: 'VULNERABILIDAD.pdf', type: 'document', url: '/files/VULNERABILIDAD.pdf', size: '3.2 MB' },
        { id: 't2-2', name: 'Análisis Crítico.pdf', type: 'document', url: '/files/Analisis Critico del aseguramiento de la calidad de software.pdf', size: '892 KB' },
      ]
    },
    {
      id: 'sqa-3',
      title: 'Diseño de Casos de Prueba (BVA y EP)',
      description: 'Creación de un conjunto de casos de prueba óptimo para la validación de un campo de edad, aplicando metodologías de Pruebas de Caja Negra.',
      how: 'Se aplicó **Análisis de Valores Límite (BVA)** y **Particionamiento por Equivalencia (EP)** para seleccionar un conjunto de datos mínimo que cubriera los límites críticos (17, 18, 19) y los rangos, además de casos inválidos (negativos, nulos, no numéricos).',
      learned: 'Dominé las técnicas de **BVA y EP** como métodos sistemáticos para reducir el número de pruebas sin comprometer la cobertura. Esto optimiza el tiempo de ejecución y garantiza que se prueben los puntos más propensos a errores.',
      files: [
        { id: 't3-1', name: 'Casos de Prueba.csv', type: 'document', url: '/files/Calidad.xlsx - Hoja1.csv', size: '1 KB' },
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  const handleFileUpload = (projectId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // En una aplicación real, aquí subirías el archivo a un servidor
      console.log(`Uploading files for project ${projectId}:`, files);
      // Simular la adición del archivo
      const newFile: ProjectFile = {
        id: Date.now().toString(),
        name: files[0].name,
        type: files[0].type.startsWith('image/') ? 'image' : 'document',
        url: URL.createObjectURL(files[0]),
        size: `${(files[0].size / 1024 / 1024).toFixed(1)} MB`
      };
      
      // Aquí actualizarías el estado de los proyectos para incluir el nuevo archivo
      console.log('New file added:', newFile);
    }
    setFileUploadProject(null);
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image': return <Image size={16} />;
      case 'document': return <FileText size={16} />;
      case 'code': return <FolderOpen size={16} />;
      default: return <FileText size={16} />;
    }
  };
  
  // MODAL ESPECÍFICO PARA LA TAREA SQA SELECCIONADA
  const SQATaskDetailModal: React.FC = () => {
    if (!selectedSQATask) return null;

    const presentationFiles = selectedSQATask.files || [];
    const imageFiles = presentationFiles.filter(file => file.type === 'image');
    const docFiles = presentationFiles.filter(file => file.type !== 'image');

    return (
      <div className="fixed inset-0 bg-mono-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-mono-800 rounded-xl border border-mono-600 max-w-5xl w-full max-h-[95vh] overflow-y-auto transform scale-100 transition-transform duration-300 ease-out">
          <div className="p-5 sm:p-8">
            {/* Encabezado del Modal */}
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-mono-white pr-4 leading-snug">
                {selectedSQATask.title}
              </h3>
              <button 
                onClick={() => setSelectedSQATask(null)}
                className="text-mono-400 hover:text-red-400 transition-colors flex-shrink-0 p-1"
              >
                <X size={28} />
              </button>
            </div>

            {/* Descripción principal */}
            <p className="text-xl text-mono-300 mb-6 border-b border-mono-700 pb-4">
              {selectedSQATask.description}
            </p>

            {/* Detalles (How and Learned) */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Cómo se Realizó */}
              <div className="p-4 bg-mono-700/50 rounded-lg border border-mono-700">
                <h5 className="text-lg font-bold text-mono-white mb-2 flex items-center gap-2">
                  <Zap size={20} className="text-green-400" />
                  Cómo se Realizó
                </h5>
                <p className="text-mono-300 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedSQATask.how }}></p>
              </div>

              {/* Conocimiento Adquirido */}
              <div className="p-4 bg-mono-700/50 rounded-lg border border-mono-700">
                <h5 className="text-lg font-bold text-mono-white mb-2 flex items-center gap-2">
                  <BookOpen size={20} className="text-yellow-400" />
                  Conocimiento Adquirido
                </h5>
                <p className="text-mono-300 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedSQATask.learned }}></p>
              </div>
            </div>
            
            {/* Galería de Imágenes de Presentación */}
            {imageFiles.length > 0 && (
              <div className="mb-8 p-5 bg-mono-700/30 rounded-lg border border-mono-700">
                <h4 className="text-xl font-semibold text-mono-white mb-4 flex items-center gap-2">
                  <Image size={24} className="text-mono-400"/> Imágenes de Presentación
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {imageFiles.map((file) => (
                    <a 
                      key={file.id} 
                      href={file.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block group relative overflow-hidden rounded-lg shadow-lg aspect-video"
                    >
                      <img 
                        src={file.url} 
                        alt={file.name} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-mono-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Eye size={24} className="text-mono-white" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Archivos de Referencia (Documentos y Código) */}
            {docFiles.length > 0 && (
              <div className="p-5 bg-mono-700/30 rounded-lg border border-mono-700">
                <h4 className="text-xl font-semibold text-mono-white mb-4 flex items-center gap-2">
                  <FileText size={24} className="text-mono-400"/> Documentos y Referencias
                </h4>
                <div className="space-y-3">
                  {docFiles.map((file) => (
                    <a 
                      key={file.id} 
                      href={file.url} 
                      download={file.type !== 'code'}
                      target={file.type === 'code' ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-mono-700/80 hover:bg-mono-700 rounded-lg transition-colors border border-mono-600"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-mono-400">
                          {getFileIcon(file.type)}
                        </div>
                        <div>
                          <p className="text-mono-200 text-sm font-medium">{file.name}</p>
                          {file.size && (
                            <p className="text-mono-400 text-xs">{file.size}</p>
                          )}
                        </div>
                      </div>
                      <Download size={18} className="text-mono-400 hover:text-mono-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // COMPONENTE DE TAREAS SQA (MODIFICADO)
  const SQATasks: React.FC = () => {
    return (
      <div className="mt-20 pt-16 border-t border-mono-700/50">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-mono-white mb-4 text-center">
          Tareas de Aseguramiento de Calidad de Software 🛡️
        </h2>
        <div className="w-16 h-1 bg-mono-400 mx-auto mb-10"></div>
        <p className="text-lg sm:text-xl text-mono-200 max-w-3xl mx-auto px-4 text-center mb-12">
          Prácticas y demostraciones clave realizadas en el curso de **SQA**, detallando el proceso y el aprendizaje.
        </p>

        <div className="space-y-12">
          {sqaTasks.map((task) => (
            <div 
              key={task.id} 
              // AÑADIDO: Click handler y estilos de hover para interactividad
              onClick={() => setSelectedSQATask(task)}
              className="bg-mono-800/50 rounded-xl p-6 sm:p-8 border border-mono-700 shadow-xl cursor-pointer hover:bg-mono-700/50 transition-colors"
            >
              <h4 className="text-2xl font-semibold text-mono-white mb-3 flex justify-between items-center">
                {task.title}
                <Eye size={20} className="text-mono-400" />
              </h4>
              <p className="text-mono-200 mb-6">{task.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Columna: Como lo hice */}
                <div className="p-4 bg-mono-700/50 rounded-lg border border-mono-700">
                  <h5 className="text-lg font-bold text-mono-white mb-2 flex items-center gap-2">
                    <FileText size={20} className="text-mono-400" />
                    Cómo se Realizó
                  </h5>
                  <p className="text-mono-300 text-sm leading-relaxed line-clamp-3" dangerouslySetInnerHTML={{ __html: task.how }}></p>
                  <p className="text-mono-400 text-xs mt-2 italic">Click para ver detalles...</p>
                </div>

                {/* Columna: Qué Aprendí */}
                <div className="p-4 bg-mono-700/50 rounded-lg border border-mono-700">
                  <h5 className="text-lg font-bold text-mono-white mb-2 flex items-center gap-2">
                    <FolderOpen size={20} className="text-mono-400" />
                    Conocimiento Adquirido
                  </h5>
                  <p className="text-mono-300 text-sm leading-relaxed line-clamp-3" dangerouslySetInnerHTML={{ __html: task.learned }}></p>
                  <p className="text-mono-400 text-xs mt-2 italic">Click para ver detalles...</p>
                </div>
              </div>
              {/* Se remueve la sección de archivos de la vista principal, ahora va al modal */}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="min-h-screen bg-mono-900 py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-mono-white mb-4">
            Mis Proyectos
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-mono-400 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-mono-200 max-w-3xl mx-auto px-4">
            Una selección de proyectos que demuestran mis habilidades y experiencia en desarrollo
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-mono-white mb-6 sm:mb-8 text-center">
            Proyectos Destacados
          </h3>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
            {featuredProjects.slice(0, 2).map((project) => (
              <div key={project.id} className="bg-mono-800/50 rounded-xl border border-mono-700 overflow-hidden hover:border-mono-600 transition-all duration-300 hover:transform hover:scale-105">
                <div className="aspect-video bg-mono-700 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-mono-900/20"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-mono-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-mono-200 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span key={index} className="bg-mono-700 text-mono-200 px-3 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-mono-400 text-xs py-1">
                        +{project.technologies.length - 4} más
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-mono-400 hover:text-mono-white transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-mono-400 hover:text-mono-white transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="bg-mono-600 hover:bg-mono-500 text-mono-white px-4 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2"
                    >
                      <Eye size={16} />
                      Ver Detalles
                    </button>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                selectedCategory === category.id
                  ? 'bg-mono-600 text-mono-white'
                  : 'bg-mono-800 text-mono-300 hover:text-mono-white hover:bg-mono-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-mono-800/50 rounded-xl border border-mono-700 overflow-hidden hover:border-mono-600 transition-all duration-300">
              <div className="aspect-video bg-mono-700 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-mono-white mb-2">
                  {project.title}
                </h4>
                <p className="text-mono-200 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="bg-mono-700 text-mono-200 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mono-400 hover:text-mono-white transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mono-400 hover:text-mono-white transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="text-mono-400 hover:text-mono-white text-sm font-medium transition-colors"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* MÓDULO DE TAREAS DE SQA AGREGADO AQUÍ */}
        <SQATasks />

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-mono-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-mono-800 rounded-xl border border-mono-600 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-mono-white pr-4">
                    {selectedProject.title}
                  </h3>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-mono-400 hover:text-mono-white transition-colors flex-shrink-0 p-1"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full aspect-video object-cover rounded-lg mb-4"
                    />
                    <p className="text-mono-200 leading-relaxed mb-4">
                      {selectedProject.longDescription}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="bg-mono-700 text-mono-200 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {selectedProject.githubUrl && (
                        <a 
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-mono-700 hover:bg-mono-600 text-mono-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2"
                        >
                          <Github size={18} />
                          Código
                        </a>
                      )}
                      {selectedProject.liveUrl && (
                        <a 
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-mono-600 hover:bg-mono-500 text-mono-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2"
                        >
                          <ExternalLink size={18} />
                          Demo Live
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-semibold text-mono-white">
                        Archivos del Proyecto
                      </h4>
                      <button 
                        onClick={() => setFileUploadProject(selectedProject.id)}
                        className="bg-mono-600 hover:bg-mono-500 text-mono-white px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2"
                      >
                        <Upload size={16} />
                        Subir
                      </button>
                    </div>

                    <div className="space-y-3 mb-6">
                      {selectedProject.files.map((file) => (
                        <div key={file.id} className="bg-mono-700/50 p-3 rounded-lg border border-mono-600 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="text-mono-400">
                              {getFileIcon(file.type)}
                            </div>
                            <div>
                              <p className="text-mono-200 text-sm font-medium">{file.name}</p>
                              {file.size && (
                                <p className="text-mono-400 text-xs">{file.size}</p>
                              )}
                            </div>
                          </div>
                          <a 
                            href={file.url}
                            download
                            className="text-mono-400 hover:text-mono-white transition-colors"
                          >
                            <Download size={16} />
                          </a>
                        </div>
                      ))}
                    </div>

                    {/* File Upload */}
                    {fileUploadProject === selectedProject.id && (
                      <div className="border-2 border-dashed border-mono-600 rounded-lg p-6 text-center">
                        <input
                          type="file"
                          multiple
                          onChange={(e) => handleFileUpload(selectedProject.id, e)}
                          className="hidden"
                          id={`file-upload-${selectedProject.id}`}
                        />
                        <label 
                          htmlFor={`file-upload-${selectedProject.id}`}
                          className="cursor-pointer"
                        >
                          <Upload className="mx-auto mb-2 text-mono-400" size={24} />
                          <p className="text-mono-300 text-sm">
                            Haz clic para seleccionar archivos o arrastra aquí
                          </p>
                        </label>
                        <button 
                          onClick={() => setFileUploadProject(null)}
                          className="mt-2 text-mono-400 hover:text-mono-white text-xs"
                        >
                          Cancelar
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* NUEVO: SQA Task Detail Modal */}
        <SQATaskDetailModal />
      </div>
    </section>
  );
};

export default Projects;