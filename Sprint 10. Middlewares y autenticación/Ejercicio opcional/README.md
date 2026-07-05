# Ejercicio: Autenticación con JWT + Bcrypt (Node.js + Express)

## Antes de empezar

1. Forkea el repositorio  
2. Clónalo en tu ordenador:
   ```bash
   git clone URL_GITHUB
   ```

3. Abre el proyecto en Visual Studio Code (o tu IDE preferido)

---

## Configuración inicial del proyecto

1. Inicializa un proyecto de Node:

   ```bash
   npm init -y
   ```

2. Instala las dependencias necesarias:

   ```bash
   npm i express jsonwebtoken bcrypt
   ```

3. Abre el archivo `package.json` y añade:

   ```json
   "type": "module"
   ```

4. Añade un script de inicio:

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

Crear una API sencilla con autenticación basada en:

* Registro de usuario (con contraseña encriptada)
* Login (generación de token JWT)
* Ruta pública (acceso libre)
* Ruta privada (requiere token)

---

## Estructura del proyecto

```
├── app.js
├── server.js
│
├── routes/
│   └── auth.routes.js
│
├── controllers/
│   └── auth.controller.js
│
├── services/
│   └── auth.service.js
│
├── middlewares/
│   └── auth.middleware.js
│
├── data/
│   └── users.data.js
│
├── package.json
```

---

## ¿Qué debe hacer cada parte?

### server.js

* Levanta el servidor
* Escucha en un puerto

---

### app.js

* Configura Express
* Conecta rutas

---

### routes/

* Define endpoints:

  * `/register`
  * `/login`
  * `/public`
  * `/private`

---

### controllers/

* Maneja `req` y `res`
* Llama a services

---

### services/

* Lógica:

  * Crear usuario
  * Buscar usuario
  * Comparar contraseñas
  * Generar token

---

### middlewares/

* Verifica el token JWT
* Permite o bloquea acceso

---

### data/

* Array de usuarios (simula BBDD)

---

## Datos iniciales

Crea `data/users.data.js`:

```js
export const users = [];
```

---

## Requisitos

Debes implementar:

* POST `/register` → crear usuario
* POST `/login` → devolver token
* GET `/public` → acceso libre
* GET `/private` → acceso solo con token

---

## Pistas

* Necesitas un middleware para leer JSON en las peticiones
* Las contraseñas no se guardan en texto plano
* Hay funciones para encriptar y comparar contraseñas
* El token debe generarse en el login
* El token se envía en headers
* El middleware debe validar el token antes de acceder a la ruta privada

---

## Testing con Postman

### 1. Registrar usuario

**POST** `http://localhost:3000/register`

Body (JSON):

```json
{
  "email": "test@test.com",
  "password": "123456"
}
```

---

### 2. Login

**POST** `http://localhost:3000/login`

Body:

```json
{
  "email": "test@test.com",
  "password": "123456"
}
```

Respuesta esperada:

```json
{
  "token": "..."
}
```

Guarda ese token

---

### 3. Ruta pública

**GET** `http://localhost:3000/public`

Debe funcionar sin token

---

### 4. Ruta privada (sin token)

**GET** `http://localhost:3000/private`

Debe fallar (no autorizado)

---

### 5. Ruta privada (con token)

En Postman:

* Ir a **Headers**
* Añadir:

```
Authorization: Bearer TU_TOKEN
```

Ahora:

**GET** `http://localhost:3000/private`

Debe funcionar correctamente

---

## Importante

* No guardes contraseñas en texto plano
* Separa responsabilidades por capas
* No metas lógica en las rutas
* El middleware debe ser reutilizable

---

## Resultado esperado

Una API con autenticación básica:

* Usuarios registrados
* Login con JWT
* Protección de rutas privadas
* Probado completamente con Postman
