/* ============================================================
   menu.js — Toggle menú hamburguesa
   Exporta: menu (default)
   ============================================================ */

export default function menu() {
  const navToggle = document.querySelector('.nav-toggle');
  const navList   = document.querySelector('.nav-list');
  if (!navToggle || !navList) return;

  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navToggle.classList.toggle('open');
    navList.classList.toggle('open');
  });

  /* Cierra al pulsar un enlace */
  navList.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navList.classList.remove('open');
    });
  });

  /* Cierra al hacer clic fuera */
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
      navToggle.classList.remove('open');
      navList.classList.remove('open');
    }
  });
}
