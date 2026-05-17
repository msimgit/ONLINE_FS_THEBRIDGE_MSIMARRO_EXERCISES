/* ============================================================
   main.js — Lógica global del sitio
   ============================================================ */

/* ── Menú hamburguesa ── */
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navList.classList.toggle('open');
});

/* Cierra el menú al pulsar cualquier enlace */
navList.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navList.classList.remove('open');
  });
});

/* Cierra el menú al hacer clic fuera */
document.addEventListener('click', (e) => {
  if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
    navToggle.classList.remove('open');
    navList.classList.remove('open');
  }
});

/* ── Títulos de sección: subrayado rojo crece con scroll ── */
const sectionTitles = document.querySelectorAll('.section-title');

if (sectionTitles.length > 0) {
  const titleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('title-visible');
          /* Una vez animado no hace falta seguir observando */
          titleObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.8 }
  );

  sectionTitles.forEach((title) => titleObserver.observe(title));
}

/* ── Timeline: dots con scroll ── */
const timelineItems = document.querySelectorAll('.timeline-item');

if (timelineItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const dot = entry.target.querySelector('.timeline-dot');
        if (!dot) return;

        if (entry.isIntersecting) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    },
    {
      /* El dot se activa cuando el item ocupa al menos el 30% del viewport */
      threshold: 0.3,
      /* Margen negativo: el trigger ocurre en la zona central de la pantalla */
      rootMargin: '-10% 0px -10% 0px',
    }
  );

  timelineItems.forEach((item) => observer.observe(item));
}
