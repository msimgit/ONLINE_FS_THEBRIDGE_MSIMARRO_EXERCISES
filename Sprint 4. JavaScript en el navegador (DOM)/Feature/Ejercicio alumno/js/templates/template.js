/* ============================================================
   template.js — Componentes HTML reutilizables
   Exporta: header, footer (template strings)
   ============================================================ */

export const header = `
  <nav class="site-nav">
    <div class="container">
      <a class="nav-logo" href="index.html">MS</a>

      <ul class="nav-list">
        <li><a class="nav-link" href="about.html">About</a></li>
        <li><a class="nav-link" href="index.html#skills">Skills</a></li>
        <li><a class="nav-link" href="index.html#cheatsheets">Cheatsheets</a></li>
        <li><a class="nav-link" href="#">Recursos</a></li>
        <li><a class="nav-link" href="form.html">Contacto</a></li>
      </ul>

      <!-- Controles siempre visibles: yin-yang + hamburguesa -->
      <div class="nav-controls">
        <button class="dark-mode-toggle" aria-label="Cambiar modo oscuro" title="Cambiar modo">
          ☯
        </button>
        <button class="nav-toggle" aria-label="Abrir menú">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
`;

export const footer = `
  <footer class="site-footer">
    <div class="container">
      <p class="footer-text">© 2026 Mario Simarro — Aspirante a FullStack Developer</p>
    </div>
  </footer>
`;
