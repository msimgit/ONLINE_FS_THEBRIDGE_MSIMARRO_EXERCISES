
# Ejercicio: CRUD de Videojuegos con Node.js y Express

## Antes de empezar

Recuerda seguir estos pasos:

1. Forkea el repositorio
2. Clónalo en tu ordenador:
   ```bash
   git clone URL_GITHUB
   ```

3. Abre el proyecto en Visual Studio Code (o tu IDE preferido)

---

## Configuración inicial del proyecto

Antes de comenzar con el ejercicio, prepara tu entorno:

1. Inicializa un proyecto de Node:

   ```bash
   npm init -y
   ```

2. Instala Express:

   ```bash
   npm i express
   ```

3. Abre el archivo `package.json` y añade:

   ```json
   "type": "module"
   ```

4. Añade un script de inicio en `package.json`:

   ```json
   "scripts": {
     "start": "node --watch server.js"
   }
   ```

5. Arranca el proyecto:

   ```bash
   npm start
   ```

---

## Objetivo

Construir una API REST completa utilizando Node.js + Express que permita realizar un CRUD de videojuegos.

El proyecto debe estar modularizado y organizado por capas:

* routes
* controllers
* services
* data

Se trabajará con una base de datos local en memoria (array).

---

## Estructura del proyecto


```
├── app.js
├── server.js
│
├── routes/
│   └── videogames.routes.js
│
├── controllers/
│   └── videogames.controller.js
│
├── services/
│   └── videogames.service.js
│
├── data/
│   └── videogames.data.js
│
├── package.json
```

---

## ¿Qué debe hacer cada parte?

### server.js

* Levanta el servidor
* Escucha en un puerto (ej: 3000)
* Importa la app

---

### app.js

* Configura Express
* Conecta las rutas

---

### routes/

* Define las rutas del CRUD
* No debe contener lógica
* Solo redirige al controller

---

### controllers/

* Recibe `req` y `res`
* Maneja la entrada y salida
* Llama a los services

---

### services/

* Contiene la lógica del negocio
* Trabaja directamente con los datos
* No sabe nada de Express

---

### data/

* Simula una base de datos
* Contiene un array de videojuegos

---

## Datos iniciales

Crea un archivo en `data/videogames.data.js` con este array:

```js
export const videogames = [
  { id: 1, name: "The Legend of Zelda", year: 1986, genre: "Adventure" },
  { id: 2, name: "Super Mario Bros", year: 1985, genre: "Platform" },
  { id: 3, name: "Minecraft", year: 2011, genre: "Sandbox" },
  { id: 4, name: "The Witcher 3", year: 2015, genre: "RPG" },
  { id: 5, name: "Fortnite", year: 2017, genre: "Battle Royale" },
  { id: 6, name: "Call of Duty", year: 2003, genre: "Shooter" },
  { id: 7, name: "FIFA 23", year: 2022, genre: "Sports" },
  { id: 8, name: "Elden Ring", year: 2022, genre: "RPG" },
  { id: 9, name: "Cyberpunk 2077", year: 2020, genre: "RPG" },
  { id: 10, name: "God of War", year: 2018, genre: "Action" }
];
```

---

## Requisitos del CRUD

Debes implementar:

* GET → obtener todos los videojuegos
* GET → obtener uno por ID
* POST → crear un videojuego
* PUT o PATCH → actualizar un videojuego
* DELETE → eliminar un videojuego

---

## Pistas

* Para poder leer el body de las peticiones necesitas un middleware de Express. `express.json()` 
* ¿Qué pasa si el ID no existe?
* Usa import/export (ES Modules)

---

## Testing

Utiliza Postman para probar tu API

Debes comprobar:

* Crear un videojuego correctamente
* Obtener la lista
* Obtener un elemento concreto
* Actualizar datos
* Eliminar un elemento

---
