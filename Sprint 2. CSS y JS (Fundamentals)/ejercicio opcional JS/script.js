// 1. Escribe una función llamada 'calcularMedia' que tome un array de números como parámetro y calcule la media de los números. La función debe devolver la media. Imprime el resultado en consola.

function calcularMedia(numeros) {
  let media = 0;
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  media = sum / arguments.length;
  return media;
}

let resultado1 = calcularMedia(1, 123, 500, 115, 44, 88);
console.log(resultado1);

// 2. Escribe un programa que calcule la suma de los números pares del 1 al 100 y la imprima en la consola.

function sumarPares(rango) {
  let suma = 0;
  let inicio = rango[0];
  let fin = rango[1];

  for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
      suma += i;
    }
  }
  return suma;
}

let rangoSumar = [1, 100];
console.log(sumarPares(rangoSumar));

// 3. Escribe una función que tome un string como parámetro y devuelva un nuevo string que sea la versión invertida del string original (si el parámetro es 'The Bridge', debe devolver 'egdirB ehT')

function invertirString(str) {
  return str.split('').reverse().join('');
}

console.log(invertirString('The Bridge'));

// 4. Declara una variable de tipo string y cuenta cuantas veces aparece la letra "a" en el string.

let contador = 0;
let frase = 'En un lugar de la Mancha de cuyo nombre no quiero acordarme';
let letra = 'a';

function vecesLetra(str, letter) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === letter) {
      contador++;
    }
  }
  return contador;
}

resultado4 = vecesLetra(frase, letra);
console.log(resultado4);

// 5. Asigna a una variable con nombre "names" un array de al menos 5 nombres. Crea una función llamada "findLongestName" que encuentre y devuelva el nombre más largo del array.

let names = ['Juan', 'María', 'Enriqueta', 'Paula', 'Luisito'];

function findLongestName(group) {
  let longestOne = '';
  for (let i = 0; i < group.length; i++) {
    if (group[i].length > longestOne.length) {
      longestOne = group[i];
    }
  }
  return longestOne;
}

let resultado5 = findLongestName(names);
console.log(resultado5);

// 6. Declara un array de 10 números y realiza lo siguiente:

let arrayNumber = [34, 45, 2, 32, 7, 99, 5, 11, 39, 60];

arrayNumber.unshift(100); // Añadir un número al principio
console.log(arrayNumber);

console.log(arrayNumber.length); // Imprimir la longitud

arrayNumber.reverse(); // Invertir el orden
console.log(arrayNumber);

// 7. Declara un array de 10 frutas y realiza lo siguiente:
frutas = [
  'pera',
  'piña',
  'limón',
  'naranja',
  'kiwi',
  'mandarina',
  'papaya',
  'uva',
  'melón',
  'sandía',
];

frutas.sort(); // Ordena las frutas en orden alfabético.
console.log(frutas);

let caracteres = 4;
function fruticas(frutasNum, caracteres) {
  // Crea un nuevo array que contenga solo las frutas que tengan exactamente 4 caracteres.
  let newFrutas = [];
  for (let i = 0; i < frutasNum.length; i++) {
    if (frutasNum[i].length === caracteres) {
      newFrutas.push(frutasNum[i]);
    }
  }
  return newFrutas;
}
let frutas2 = fruticas(frutas, caracteres);
console.log(frutas2);

// Concatena todas las frutas en una sola cadena separadas por comas.
let frutasJuntas = frutas.join(', ');
console.log(frutasJuntas);
