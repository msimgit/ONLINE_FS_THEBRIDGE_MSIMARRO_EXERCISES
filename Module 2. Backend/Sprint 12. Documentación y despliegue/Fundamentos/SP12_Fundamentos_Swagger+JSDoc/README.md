# Products API con Swagger

API REST de productos con arquitectura en capas y documentación interactiva generada con **swagger-jsdoc** + **swagger-ui-express**.

## Estructura

```
├── server.js                 ← Punto de entrada (arranca el servidor)
├── app.js                    ← Configuración de Express + montaje de Swagger UI
├── swagger.js                ← Configuración de swagger-jsdoc (info, servers, apis)
├── routes/
│   └── products.routes.js    ← Rutas + anotaciones @swagger (JSDoc)
├── controllers/
│   └── products.controller.js
├── services/
│   └── products.service.js
└── data/
    └── products.data.js      ← Datos mock en memoria
```

## Instalación y arranque

```bash
npm install
npm run dev
```

- API: http://localhost:3000/api/products
- **Documentación Swagger UI: http://localhost:3000/api-docs**
- Spec OpenAPI en JSON: http://localhost:3000/api-docs.json

## Endpoints

| Método | Ruta                 | Descripción              |
| ------ | -------------------- | ------------------------ |
| GET    | `/api/products`      | Lista todos los productos |
| GET    | `/api/products/:id`  | Obtiene un producto      |
| POST   | `/api/products`      | Crea un producto         |
| PUT    | `/api/products/:id`  | Actualiza un producto    |
| DELETE | `/api/products/:id`  | Elimina un producto      |

## Cómo funciona Swagger aquí

1. `swagger.js` define la especificación base (título, versión, servidor) y le dice a `swagger-jsdoc` que busque anotaciones en `./routes/*.js`.
2. En `products.routes.js`, cada ruta lleva un comentario `@swagger` en formato YAML (OpenAPI 3.0) que describe parámetros, body y respuestas.
3. Los esquemas reutilizables (`Product`, `ProductInput`, `Error`) se definen una vez en `components/schemas` y se referencian con `$ref`.
4. `app.js` monta Swagger UI en `/api-docs` con `swaggerUi.serve` + `swaggerUi.setup(swaggerSpec)`.

Desde Swagger UI puedes probar todos los endpoints con el botón **"Try it out"** sin necesidad de Postman.
