# Portafolio Personal - Marco

Un portafolio web moderno y responsivo desarrollado con React, TypeScript y Tailwind CSS, con animaciones fluidas y un diseño minimalista profesional.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **Animaciones Fluidas**: Implementadas con Framer Motion para una experiencia visual atractiva
- **Navegación Intuitiva**: Header sticky con navegación suave entre secciones
- **Gestión de Proyectos**: Galería de proyectos con sistema de archivos adjuntos
- **Formulario de Contacto**: Validación completa y experiencia de usuario optimizada
- **Diseño Modular**: Arquitectura de componentes reutilizables y escalables

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19** - Biblioteca de JavaScript para interfaces de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Biblioteca de animaciones para React
- **Lucide React** - Iconos modernos y elegantes

### Herramientas de Desarrollo
- **Vite** - Build tool rápido y moderno
- **ESLint** - Linting para mantener código limpio
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Añade prefijos de navegador automáticamente

## 📱 Secciones del Portafolio

### 🏠 Inicio (Hero)
- Presentación personal con foto de perfil
- Enlaces a redes sociales
- Botones de navegación a secciones principales
- Animación de scroll indicator

### 👨‍💻 Sobre Mí
- Información personal y profesional
- Filosofía de desarrollo
- Intereses y actividades
- Cards con highlights de experiencia

### 🛠️ Habilidades
- Categorización por áreas (Frontend, Backend, Diseño, etc.)
- Barras de progreso animadas
- Herramientas adicionales
- Sección de aprendizaje continuo

### 💼 Experiencia
- Timeline interactivo de experiencia laboral
- Historial educativo
- Logros destacados por posición
- Tecnologías utilizadas en cada role

### 🚀 Proyectos
- Galería de proyectos destacados
- Filtros por categoría
- Modal con detalles completos
- **Sistema de archivos adjuntos**:
  - Subida de documentos
  - Vista previa de archivos
  - Descarga de recursos
  - Soporte para múltiples tipos de archivo

### 📧 Contacto
- Formulario de contacto con validación
- Información de contacto completa
- Enlaces a redes sociales
- Indicadores de disponibilidad

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/tulio67/PortafolioMarco.git

# Navegar al directorio
cd PortafolioMarco

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles
```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye para producción
npm run preview      # Vista previa de build de producción

# Calidad de Código
npm run lint         # Ejecuta ESLint
```

## 📁 Estructura del Proyecto

```
src/
├── Components/          # Componentes principales
│   ├── Header.tsx      # Navegación principal
│   └── HomePage.tsx    # Sección hero
├── modules/            # Módulos/secciones del portafolio
│   ├── About.tsx       # Sobre mí
│   ├── Skills.tsx      # Habilidades
│   ├── Experience.tsx  # Experiencia
│   ├── Projects.tsx    # Proyectos
│   └── Contact.tsx     # Contacto
├── utils/              # Utilidades
│   └── animations.ts   # Configuraciones de animaciones
├── App.tsx             # Componente principal
├── main.tsx           # Punto de entrada
└── index.css          # Estilos globales
```

## 🔧 Personalización

### Cambiar Información Personal
1. Editar `src/Components/HomePage.tsx` para información del hero
2. Actualizar `src/modules/About.tsx` para la sección sobre mí
3. Modificar `src/modules/Experience.tsx` para experiencia laboral
4. Ajustar `src/modules/Contact.tsx` para información de contacto

### Modificar Colores
Los colores están definidos en `tailwind.config.ts`:
```typescript
colors: {
  mono: {
    50: "#fafafa",   // Más claro
    // ... escala de grises
    900: "#171717",  // Más oscuro
  }
}
```

## 📞 Contacto

Marco - [marco.dev@email.com](mailto:marco.dev@email.com)

Link del Proyecto: [https://github.com/tulio67/PortafolioMarco](https://github.com/tulio67/PortafolioMarco)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!