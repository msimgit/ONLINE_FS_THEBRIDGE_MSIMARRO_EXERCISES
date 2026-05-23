/* ============================================================
   cheatsheetsList.js — Renderizado dinámico de cheatsheet cards
   Importa: cheatsheets desde data/cheatsheets.js
   Exporta: cheatsheetsList (default)
   ============================================================ */

import { cheatsheets } from '../data/cheatsheets.js';

function renderCard(cs) {
  return `
    <a class="cheatsheet-card" href="${cs.link}">
      <img class="cheatsheet-card-icon" src="${cs.icon}" alt="${cs.name}" />
      <h3 class="cheatsheet-card-name">${cs.name}</h3>
      <p class="cheatsheet-card-desc">Guía rápida de referencia</p>
    </a>
  `;
}

export default function cheatsheetsList() {
  const container = document.querySelector('#cheatsheets-list');
  if (!container) return;
  container.innerHTML = cheatsheets.map(renderCard).join('');
}
