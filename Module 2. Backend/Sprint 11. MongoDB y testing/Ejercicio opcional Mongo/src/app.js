// app.js
import express from 'express';
import fightersRoutes from './routes/fighters.routes.js';

const app = express();

app.use(express.json()); // la pista del middleware: sin esto, req.body es undefined

app.use('/api/fighters', fightersRoutes);

export default app;