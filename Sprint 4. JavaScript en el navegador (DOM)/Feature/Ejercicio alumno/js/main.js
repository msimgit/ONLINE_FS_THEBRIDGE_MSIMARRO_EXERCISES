/* ============================================================
   main.js — Punto de entrada (type="module")
   ============================================================ */

import { header, footer } from './templates/template.js';
import darkMode           from './utils/darkMode.js';
import menu               from './utils/menu.js';
import skillsList         from './utils/skillsList.js';

/* ── 1. Inyecta header y footer ── */
const headerEl = document.querySelector('#site-header');
const footerEl = document.querySelector('#site-footer');
if (headerEl) headerEl.innerHTML = header;
if (footerEl) footerEl.innerHTML = footer;

/* ── 2. Marca enlace activo según URL ── */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach((link) => {
  const linkPage = link.getAttribute('href').split('/').pop().split('#')[0];
  if (linkPage === currentPage) link.classList.add('active');
});

/* ── 3. Inicializa funcionalidades ── */
darkMode();
menu();
skillsList();

/* ── 4. Títulos: subrayado crece con scroll ── */
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

/* ── 5. Timeline dots con scroll (about.html) ── */
const timelineItems = document.querySelectorAll('.timeline-item');
if (timelineItems.length > 0) {
  const dotObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const dot = entry.target.querySelector('.timeline-dot');
        if (!dot) return;
        entry.isIntersecting ? dot.classList.add('active') : dot.classList.remove('active');
      });
    },
    { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' }
  );
  timelineItems.forEach((item) => dotObserver.observe(item));
}
