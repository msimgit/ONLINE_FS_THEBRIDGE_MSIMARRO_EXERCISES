import swaggerJSDoc from 'swagger-jsdoc';

// swagger-jsdoc lee los comentarios @swagger de los archivos indicados en `apis`
// y genera la especificación OpenAPI completa.

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Products API',
      version: '1.0.0',
      description:
        'API REST de productos con arquitectura en capas (routes → controllers → services → data) y documentación generada con swagger-jsdoc.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desarrollo',
      },
    ],
  },
  // Rutas de los archivos donde están las anotaciones @swagger
  apis: ['./routes/*.js'],
};

export const swaggerSpec = swaggerJSDoc(options);
