import express from 'express';
import usersRouter from "../routes/users.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", usersRouter);
app.use(express.json());
app.use((req, res) => {
  res.status(404).json({ ok: false, error: "Route not found" });
});

export default app;