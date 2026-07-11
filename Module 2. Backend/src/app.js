S
import express from "express";
import indexRoutes from "./routes/index.routes.js";
import moviesRoutes from "./routes/movies.routes.js";
import productsRoutes from "./routes/products.routes.js";
import usersRoutes from "./routes/users.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { logger } from "./middlewares/logger.middleware.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
 
const app = express();
 
// Middlewares globales (ANTES de las rutas)
app.use(express.json());
app.use(logger);
 
// Rutas — cada router se monta en su prefijo (una sola vez)
app.use("/",         indexRoutes);
app.use("/api/auth", authRoutes);
app.use("/movies",   moviesRoutes);
app.use("/products", productsRoutes);
app.use("/users",    usersRoutes);
 
// Manejador de errores: SIEMPRE al final
app.use(errorHandler);
 
export default app;