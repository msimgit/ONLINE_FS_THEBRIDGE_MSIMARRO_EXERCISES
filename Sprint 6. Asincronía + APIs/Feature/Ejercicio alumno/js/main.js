/* ============================================================
   main.js — Punto de entrada (type="module") — Sprint 6
   ============================================================ */

import { header, footer } from './templates/template.js';
import darkMode           from './utils/darkMode.js';
import menu               from './utils/menu.js';

/* ── 1. Inyecta header y footer ── */
const headerEl = document.querySelector('#site-header');
const footerEl = document.querySelector('#site-footer');
if (headerEl) headerEl.innerHTML = header;
if (footerEl) footerEl.innerHTML = footer;

/* ── 2. Marca enlace activo ── */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach((link) => {
  const href = link.getAttribute('href');
  if (href.includes('#')) return;
  if (href.split('/').pop() === currentPage) link.classList.add('active');
});

/* ── 3. Core ── */
darkMode();
menu();

/* ── 4. Widget del clima ── */
import('./utils/weather.js')
  .then(m => m.default())
  .catch(e => console.warn('weather:', e));

/* ── 5. Skills ── */
if (document.querySelector('#skills-list')) {
  import('./utils/skillsList.js')
    .then(m => m.default())
    .catch(e => console.warn('skillsList:', e));
}

/* ── 6. Cheatsheets ── */
if (document.querySelector('#cheatsheets-list')) {
  import('./utils/cheatsheetsList.js')
    .then(m => m.default())
    .catch(e => console.warn('cheatsheetsList:', e));
}

/* ── 7. Recursos ── */
if (document.querySelector('#resources-tabs')) {
  import('./utils/resourcesGenerator.js')
    .then(m => m.default())
    .catch(e => console.warn('resourcesGenerator:', e));
}

/* ── 8. Títulos con scroll ── */
const sectionTitles = document.querySelectorAll('.section-title');
if (sectionTitles.length > 0) {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('title-visible'); obs.unobserve(e.target); }
    }),
    { threshold: 0.8 }
  );
  sectionTitles.forEach(t => obs.observe(t));
}

/* ── 9. Timeline dots ── */
const timelineItems = document.querySelectorAll('.timeline-item');
if (timelineItems.length > 0) {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      const dot = e.target.querySelector('.timeline-dot');
      if (dot) e.isIntersecting ? dot.classList.add('active') : dot.classList.remove('active');
    }),
    { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' }
  );
  timelineItems.forEach(i => obs.observe(i));
}
