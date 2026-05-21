/* ============================================================
   main.js — Punto de entrada (type="module")
   Sprint 5 — imports dinámicos para evitar fallos en cadena
   ============================================================ */

import { header, footer } from './templates/template.js';
import darkMode           from './utils/darkMode.js';
import menu               from './utils/menu.js';

/* ── 1. Inyecta header y footer — CRÍTICO, va primero ── */
const headerEl = document.querySelector('#site-header');
const footerEl = document.querySelector('#site-footer');
if (headerEl) headerEl.innerHTML = header;
if (footerEl) footerEl.innerHTML = footer;

/* ── 2. Marca enlace activo según URL ── */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach((link) => {
  const href = link.getAttribute('href');
  if (href.includes('#')) return;
  const linkPage = href.split('/').pop();
  if (linkPage === currentPage) link.classList.add('active');
});

/* ── 3. Funcionalidades core — siempre disponibles ── */
darkMode();
menu();

/* ── 4. Módulos opcionales — import dinámico, no rompen si fallan ── */

// Skills (index.html)
if (document.querySelector('#skills-list')) {
  import('./utils/skillsList.js')
    .then(m => m.default())
    .catch(e => console.warn('skillsList no disponible:', e));
}

// Cheatsheets cards (index.html)
if (document.querySelector('#cheatsheets-list')) {
  import('./utils/cheatsheetsList.js')
    .then(m => m.default())
    .catch(e => console.warn('cheatsheetsList no disponible:', e));
}

// Recursos con tabs (recursos.html)
if (document.querySelector('#resources-tabs')) {
  import('./utils/resourcesGenerator.js')
    .then(m => m.default())
    .catch(e => console.warn('resourcesGenerator no disponible:', e));
}

/* ── 5. Títulos: subrayado crece con scroll ── */
const sectionTitles = document.querySelectorAll('.section-title');
if (sectionTitles.length > 0) {
  const titleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('title-visible');
          titleObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.8 }
  );
  sectionTitles.forEach((t) => titleObserver.observe(t));
}

/* ── 6. Timeline dots con scroll (about.html) ── */
const timelineItems = document.querySelectorAll('.timeline-item');
if (timelineItems.length > 0) {
  const dotObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const dot = entry.target.querySelector('.timeline-dot');
        if (!dot) return;
        entry.isIntersecting
          ? dot.classList.add('active')
          : dot.classList.remove('active');
      });
    },
    { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' }
  );
  timelineItems.forEach((item) => dotObserver.observe(item));
}
