/* ============================================================
   resources.js — Recursos curados por categoría
   Exporta: resources (array de objetos)
   ============================================================ */

export const resources = [
  {
    category: "Documentación Oficial",
    icon: "📖",
    items: [
      { title: "MDN Web Docs", url: "https://developer.mozilla.org", note: "La referencia más completa para HTML, CSS y JS. Primera parada para cualquier duda." },
      { title: "W3C Specifications", url: "https://www.w3.org/TR/", note: "Especificaciones oficiales de los estándares web. Nivel avanzado." },
      { title: "Can I Use", url: "https://caniuse.com", note: "Compatibilidad de CSS y JS entre navegadores. Imprescindible antes de usar nuevas features." },
      { title: "DevDocs", url: "https://devdocs.io", note: "Documentación de múltiples tecnologías en un solo lugar, con búsqueda offline." },
      { title: "Form Submit", url: "https://formsubmit.co", note: "Backend gratuito para formularios HTML sin necesidad de servidor propio." }
    ]
  },
  {
    category: "Aprendizaje",
    icon: "🎓",
    items: [
      { title: "freeCodeCamp", url: "https://www.freecodecamp.org", note: "Cursos gratuitos y certificaciones en desarrollo web. Ideal para empezar desde cero." },
      { title: "JavaScript.info", url: "https://javascript.info", note: "El tutorial de JavaScript más completo y bien escrito. Desde básico hasta avanzado." },
      { title: "CSS-Tricks", url: "https://css-tricks.com", note: "Artículos, guías y ejemplos prácticos de CSS. Especialmente útil para Flexbox y Grid." },
      { title: "Web.dev", url: "https://web.dev", note: "Guías de Google sobre rendimiento, accesibilidad y mejores prácticas modernas." },
      { title: "Frontend Masters", url: "https://frontendmasters.com", note: "Cursos en profundidad impartidos por expertos del sector. De pago, alta calidad." }
    ]
  },
  {
    category: "Herramientas",
    icon: "🛠️",
    items: [
      { title: "VS Code", url: "https://code.visualstudio.com", note: "El editor de código más usado. Extensiones para todo, integración con Git." },
      { title: "GitHub", url: "https://github.com", note: "Control de versiones y colaboración. Portfolio técnico visible para reclutadores." },
      { title: "CodePen", url: "https://codepen.io", note: "Editor online para prototipar HTML/CSS/JS. Ideal para experimentar y compartir snippets." },
      { title: "Figma", url: "https://www.figma.com", note: "Diseño de interfaces y prototipado colaborativo. Gratis para uso personal." },
      { title: "Netlify", url: "https://www.netlify.com", note: "Despliegue de sitios estáticos gratis con integración Git. Deploy en segundos." }
    ]
  },
  {
    category: "Accesibilidad",
    icon: "♿",
    items: [
      { title: "WCAG Guidelines", url: "https://www.w3.org/WAI/WCAG21/quickref/", note: "Pautas de accesibilidad al contenido web. Estándar internacional AA/AAA." },
      { title: "WebAIM", url: "https://webaim.org", note: "Recursos prácticos sobre accesibilidad web. Incluye checklist y herramientas de contraste." },
      { title: "WAVE Tool", url: "https://wave.webaim.org", note: "Extensión que analiza visualmente los problemas de accesibilidad de cualquier página." },
      { title: "Axe DevTools", url: "https://www.deque.com/axe/devtools/", note: "Extensión de Chrome/Firefox para auditorías de accesibilidad automatizadas en DevTools." }
    ]
  },
  {
    category: "Blogs & Comunidades",
    icon: "💬",
    items: [
      { title: "Smashing Magazine", url: "https://www.smashingmagazine.com", note: "Artículos en profundidad sobre diseño web, UX y desarrollo frontend." },
      { title: "A List Apart", url: "https://alistapart.com", note: "Publicación sobre diseño, desarrollo y el significado del contenido web." },
      { title: "Dev.to", url: "https://dev.to", note: "Comunidad de desarrolladores. Artículos, tutoriales y debates. Muy activa." },
      { title: "Stack Overflow", url: "https://stackoverflow.com", note: "La mayor comunidad Q&A de programación. Si tienes un error, ya tiene respuesta." },
      { title: "Frontend Focus", url: "https://frontendfoc.us", note: "Newsletter semanal con lo mejor del frontend: artículos, herramientas y demos." }
    ]
  },
  {
    category: "Inspiración & Design",
    icon: "✨",
    items: [
      { title: "Awwwards", url: "https://www.awwwards.com", note: "Los mejores diseños web del mundo, premiados por un jurado de expertos." },
      { title: "Dribbble", url: "https://dribbble.com", note: "Comunidad de diseñadores. Ideal para inspirarse en UI, iconos y paletas de color." },
      { title: "Behance", url: "https://www.behance.net", note: "Portfolio de proyectos creativos. Casos de estudio completos de UX/UI." },
      { title: "Coolors", url: "https://coolors.co", note: "Generador de paletas de colores armoniosas. Exporta en todos los formatos." },
      { title: "Google Fonts", url: "https://fonts.google.com", note: "Librería gratuita de tipografías web optimizadas. Más de 1.400 familias." }
    ]
  }
];
