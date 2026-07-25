import peliculas from './peliculas.js'

const generosID = peliculas.reduce((generos, pelicula) => {
    pelicula.genre_ids.forEach(id => {
        if (!generos.includes(id)) {
            generos.push(id);
            }
        });
        return generos;
    }, []
);
console.log(generosID);

const urlOrigen = 'https://image.tmdb.org/t/p/w500';

const contenedor28 = document.getElementById('genero-28');
const contenedor53 = document.getElementById('genero-53');
const contenedor12 = document.getElementById('genero-12');

// Aplicamos filtros por genero
const peliculasAccion   = peliculas.filter(p => p.genre_ids.includes(28));
const peliculasThriller = peliculas.filter(p => p.genre_ids.includes(53));
const peliculasAventura = peliculas.filter(p => p.genre_ids.includes(12));

// Función para crear y añadir una card al contenedor
function crearCard(pelicula, contenedor) {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = urlOrigen + pelicula.poster_path;
  img.alt = pelicula.title;

  const titulo = document.createElement('p');
  titulo.textContent = pelicula.title;

  card.appendChild(img);
  card.appendChild(titulo);
  contenedor.appendChild(card);
}

// Recorremos cada grupo y creamos sus cards
peliculasAccion.forEach(pelicula   => crearCard(pelicula, contenedor28));
peliculasThriller.forEach(pelicula => crearCard(pelicula, contenedor53));
peliculasAventura.forEach(pelicula => crearCard(pelicula, contenedor12));