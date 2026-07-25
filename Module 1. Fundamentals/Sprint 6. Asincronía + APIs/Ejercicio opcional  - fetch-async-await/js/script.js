const app = document.getElementById("app");
const bug = document.getElementById("bug");
const range = document.getElementById("range");

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const resetBtn = document.getElementById("resetBtn");

const LIMIT = 10;
let offset = 0;
let selectedPokemon = null;

// =======================
// Obtener lista de Pokémon (10 en 10)
// =======================
const getPokemonList = async () => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`
    );
    if (!response.ok) {
      throw new Error("Error al obtener la lista de Pokémon");
    }
    const data = await response.json();
    renderPokemonList(data.results);
    renderRange()
  } catch (error) {
    console.error(error);
    app.innerHTML = "<p>Error al obtener la lista de Pokémon</p>";
  }
};

// =======================
// Obtener detalles de un Pokémon
// =======================
const getPokemonDetails = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener los detalles del Pokémon");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// =======================
// Renderizar lista de Pokémon
// =======================
const renderPokemonList = async (pokemonList) => {
  app.innerHTML = "";
  for (const pokemon of pokemonList) {
    const data = await getPokemonDetails(pokemon.url);
    if (!data) continue;
    const card = document.createElement("div");
    card.className = "pokemon-card";
    card.innerHTML = `
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <h3>${data.name}</h3>
        `;
    app.appendChild(card);
  }
};

// =======================
// Renderizamos la posición actual en la lista de Pokémon
// =======================
const renderRange = () => {
  const start = offset + 1;
  const end = offset + LIMIT;
  range.innerHTML = `Pokemon ${start} al ${end}`;
};

// =======================
// Navegación por la lista de Pokémon
// =======================
// Botón Next
nextBtn.addEventListener("click", () => {
  offset += LIMIT;
  getPokemonList();
});

// Botón Previous
prevBtn.addEventListener("click", () => {
  if (offset >= LIMIT) {
    offset -= LIMIT;
    getPokemonList();
  }
});

// Carga inicial
getPokemonList();


// =======================
// Reseteo de la lista y búsqueda
// =======================
resetBtn.addEventListener("click", () => {
  offset = 0;
  searchInput.value = "";
  bug.innerHTML = "";
  getPokemonList();
});


// =======================
// Búsqueda de Pokémon
// =======================

const searchPokemon = async (name) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    if (!response.ok) {
      throw new Error("Pokémon no encontrado");
    }
    const pokemon = await response.json();
    // Extraemos sprites disponibles
    const sprites = [
      pokemon.sprites.front_default,
      pokemon.sprites.back_default,
      pokemon.sprites.front_shiny,
      pokemon.sprites.back_shiny
    ].filter(Boolean);
    bug.innerHTML = `
      <div class="pokemon-search-card">
          <!-- Header -->
          <div class="card-header">
              <h2>${pokemon.name}</h2>
              <span class="hp">HP ${pokemon.stats[0].base_stat}</span>
          </div>
          <!-- Imágenes -->
          <div class="card-images">
              ${sprites.map(src => `<img src="${src}" alt="${pokemon.name}">`).join("")}
          </div>
          <!-- Tipos -->
          <div class="card-types">
             ${pokemon.types
        .map(
          t => `<span class="type ${t.type.name}">${t.type.name}</span>`
        )
        .join("")}
          </div>
          <!-- Información -->
          <div class="card-features">
               <div class="feature-card">
                    <span class="feature-title">Altura</span>
                    <span class="feature-value">${pokemon.height}</span>
              </div>
              <div class="feature-card">
                  <span class="feature-title">Peso</span>
                  <span class="feature-value">${pokemon.weight}</span>
              </div>
              <div class="feature-card wide">
                  <span class="feature-title">Habilidades</span>
                  <span class="feature-value">
                  ${pokemon.abilities.map(a => a.ability.name).join(", ")}
                  </span>
              </div>
          </div>

        <!-- Stats -->
        <div class="card-stats">
          ${pokemon.stats
        .map(
          stat => `
                <div>
                  <span>${stat.stat.name}</span>
                  <span>${stat.base_stat}</span>
                </div>
              `
        )
        .join("")}
        </div>

      </div>
    `;
  } catch (error) {
    bug.innerHTML = `<p class="search-error">Pokémon no encontrado</p>`;
  }
};

searchBtn.addEventListener("click", () => {
  const value = searchInput.value.trim();
  if (value) {
    searchPokemon(value);
  }
});