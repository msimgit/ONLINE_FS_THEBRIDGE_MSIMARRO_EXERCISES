/* ============================================================
   darkMode.js — Toggle modo claro / oscuro con yin-yang
   Exporta: darkMode (default)
   ============================================================ */

export default function darkMode() {
  const btn = document.querySelector('.dark-mode-toggle');
  if (!btn) return;

  /* Aplica el tema guardado en localStorage al arrancar */
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }

  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}
