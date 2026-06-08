import express from "express";
import indexRouter from "./routes/index.routes.js";
import productsRouter from "./routes/products.routes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/health", indexRouter);
app.use("/api/products", productsRouter);

// 404 handler — must be last
app.use((req, res) => {
  res.status(404).json({ ok: false, error: { message: "Route not found" } });
});

export default app;
