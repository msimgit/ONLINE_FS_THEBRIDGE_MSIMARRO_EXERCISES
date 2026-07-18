# Ejercicio React — Redux Toolkit + React Router (Modo oscuro)

---

## Objetivo

Crear una aplicación en React que permita cambiar entre **modo claro y modo oscuro** usando Redux y navegar entre páginas.

Trabajarás con:

- Redux Toolkit  
- React Router  
- estado global  
- useSelector  
- useDispatch  

El objetivo es entender cómo **compartir estado global entre diferentes páginas**.

---

## Antes de empezar (instalación)

Este repositorio viene vacío, así que tendrás que preparar el proyecto.

### 1. Crear proyecto con Vite

En la terminal:

npm create vite@latest

Selecciona:

- Nombre del proyecto  
- React  
- JavaScript  

---

### 2. Entrar en el proyecto

cd nombre-del-proyecto

---

### 3. Instalar dependencias base

npm install

---

### 4. Instalar Redux y Router

npm install @reduxjs/toolkit react-redux react-router-dom

---

### 5. Arrancar el proyecto

npm run dev

---

## Qué tienes que construir

Una aplicación con:

- 2 páginas:
  - Home  
  - About  

- Un botón para cambiar el modo (claro / oscuro)  

- El modo debe mantenerse al cambiar de página  

---

## Requisitos

Tu aplicación debe:

- Usar React Router para navegar entre páginas  
- Crear un store con Redux Toolkit  
- Crear un slice para el tema (theme)  
- Tener un estado global (ej: isDark)  
- Usar useSelector para leer el estado  
- Usar useDispatch para modificar el estado  
- Aplicar estilos según el modo en TODA la app  

---

## Ejemplo de comportamiento esperado

- Modo claro → fondo blanco → texto negro  
- Modo oscuro → fondo negro → texto blanco  

Al hacer click:

- cambia el modo  
- navegas a otra página → el modo se mantiene  

---

## Estructura sugerida

src/

store/  
└ store.js  

features/  
└ theme/  
   └ themeSlice.js  

pages/  
├ Home.jsx  
└ About.jsx  

App.jsx  
main.jsx  

---

## Pistas

- Usa BrowserRouter para envolver la app  

---

- Define rutas:

/ → Home  
/about → About  

---

- Puedes usar Link para navegar  

---

- Estado global:

isDark → true / false  

---

- Acción:

state.isDark = !state.isDark  

---

- Selector:

useSelector(state => state.theme.isDark)

---

- Dispatch:

dispatch(toggleTheme())

---

- Aplica el estilo en un contenedor global (App o Layout)

---

## Cosas a tener en cuenta

- El estado debe estar en Redux (no en useState)  
- El cambio de página NO debe resetear el tema  
- No duplicar lógica entre páginas  
- Mantener el slice simple  

---

## Flujo de la aplicación

Usuario hace click  
↓  
dispatch(action)  
↓  
slice cambia estado  
↓  
store se actualiza  
↓  
useSelector detecta cambio  
↓  
React re-renderiza en TODAS las páginas  

---

## Objetivo final

Entender cómo:

- usar Redux para estado global  
- compartir estado entre páginas  
- integrar React Router con Redux  
- construir una app más realista  
