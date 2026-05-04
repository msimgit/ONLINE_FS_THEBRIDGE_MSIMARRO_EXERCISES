const btnFetchJoke = document.getElementById("fetchJoke");
const jokeList = document.getElementById("jokeList");
const btnEliminarTodos = document.getElementById("byebyeJokes");

let chistes = cargarChistes();
renderizarChistes();

btnFetchJoke.addEventListener("click", obtenerChiste);
btnEliminarTodos.addEventListener("click", eliminarTodosLosChistes);


// =======================
// Funciones
// =======================

function cargarChistes() {
  return JSON.parse(localStorage.getItem("chistes")) || [];
}

function guardarChistes() {
  localStorage.setItem("chistes", JSON.stringify(chistes));
}

function renderizarChistes() {
  jokeList.innerHTML = "";

  chistes.forEach((chiste, index) => {
    const li = document.createElement("li");

    // Texto del chiste
    const p = document.createElement("p");
    p.textContent = chiste;

    // Botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener("click", () => eliminarChiste(index));

    // Estructura
    li.appendChild(p);
    li.appendChild(btnEliminar);
    jokeList.appendChild(li);
  });
}

function obtenerChiste() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then(data => {
      chistes.push(data.value);
      guardarChistes();
      renderizarChistes();
    });
}


function eliminarChiste(index) {
  chistes.splice(index, 1);
  guardarChistes();
  renderizarChistes();
}


function eliminarTodosLosChistes() {
  chistes = [];
  localStorage.removeItem("chistes");
  renderizarChistes();
}
