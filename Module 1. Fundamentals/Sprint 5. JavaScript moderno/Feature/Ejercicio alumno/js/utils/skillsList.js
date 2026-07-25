/* ============================================================
   skillsList.js — Renderizado dinámico de habilidades con filtro
   Importa: skills desde data/skills.js
   Exporta: skillsList (default)
   ============================================================ */

import { skills } from '../data/skills.js';

function renderCard(skill) {
  return `
    <article class="skill-card">
      <div class="skill-header">
        <img class="skill-icon" src="${skill.icon}" alt="${skill.name}" />
        <div class="skill-meta">
          <h3 class="skill-name">${skill.name}</h3>
          <span class="skill-level">${skill.level}</span>
        </div>
      </div>
      <p class="skill-desc">${skill.description}</p>
      <div class="skill-tags">
        ${skill.tags.map((tag) => `<span class="skill-tag">${tag}</span>`).join('')}
      </div>
    </article>
  `;
}

function render(container, state) {
  const filtered = skills.filter((s) => s.state === state);
  container.innerHTML = filtered.map(renderCard).join('');
}

export default function skillsList() {
  const container = document.querySelector('#skills-list');
  const filterBtns = document.querySelectorAll('.skills-filter-btn');
  if (!container || filterBtns.length === 0) return;

  /* Estado inicial: muestra dominadas */
  render(container, 'dominada');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      render(container, btn.dataset.state);
    });
  });
}
