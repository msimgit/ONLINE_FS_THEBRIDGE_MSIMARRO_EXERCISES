import express from "express";
import productRoutes from "./routes/productRoutes.js";
import { notFound } from "./middlewares/notFound.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;