/* ============================================================
   resourcesGenerator.js — Sistema de pestañas con tarjetas
   Importa: resources desde data/resources.js
   Exporta: resourcesGenerator (default)
   ============================================================ */

import { resources } from '../data/resources.js';

export default function resourcesGenerator() {
  const tabsContainer   = document.querySelector('#resources-tabs');
  const panelsContainer = document.querySelector('#resources-panels');
  if (!tabsContainer || !panelsContainer) return;

  /* ── Genera los botones de tabs — SIN iconos emoji ── */
  tabsContainer.innerHTML = resources
    .map((cat, i) => `
      <button
        class="tab-btn ${i === 0 ? 'active' : ''}"
        data-index="${i}"
        aria-selected="${i === 0}"
      >
        ${cat.category}
      </button>
    `)
    .join('');

  /* ── Genera los paneles con tarjetas ── */
  panelsContainer.innerHTML = resources
    .map((cat, i) => `
      <div
        class="tab-panel ${i === 0 ? 'active' : ''}"
        data-index="${i}"
        role="tabpanel"
      >
        <div class="resources-grid">
          ${cat.items
            .map(item => `
              <div class="resource-card">
                <a
                  class="resource-card-link"
                  href="${item.url}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ${item.title}
                  <span class="resource-card-ext">↗</span>
                </a>
                <p class="resource-card-note">${item.note}</p>
              </div>
            `)
            .join('')}
        </div>
      </div>
    `)
    .join('');

  /* ── Event listeners en los tabs ── */
  tabsContainer.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = btn.dataset.index;

      tabsContainer.querySelectorAll('.tab-btn').forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      panelsContainer.querySelectorAll('.tab-panel').forEach((p) =>
        p.classList.remove('active')
      );

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      panelsContainer
        .querySelector(`.tab-panel[data-index="${idx}"]`)
        .classList.add('active');
    });
  });
}
