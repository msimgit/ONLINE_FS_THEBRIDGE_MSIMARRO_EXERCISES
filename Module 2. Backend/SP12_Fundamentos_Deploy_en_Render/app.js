import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger.js';
import productsRoutes from './routes/products.routes.js';

const app = express();

// Middleware para parsear JSON en el body
app.use(express.json());

// Rutas de la API
app.use('/api/products', productsRoutes);

// Documentación interactiva de Swagger UI
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Endpoint que expone la especificación OpenAPI en JSON crudo
app.get('/api-docs.json', (req, res) => {
  res.json(swaggerSpec);
});

// Ruta raíz con información básica
app.get('/', (req, res) => {
  res.json({
    ok: true,
    message: 'Products API',
    docs: '/api-docs',
  });
});

export default app;
