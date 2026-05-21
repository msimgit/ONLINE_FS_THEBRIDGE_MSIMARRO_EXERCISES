 // Aquí tu código
document.getElementById("agregar").addEventListener("click", function() {
    const nuevoElemento = prompt('Inserta un nuevo elemento:');
    const li = document.createElement("li");
    li.textContent = nuevoElemento;
    document.getElementById("lista").appendChild(li);
});