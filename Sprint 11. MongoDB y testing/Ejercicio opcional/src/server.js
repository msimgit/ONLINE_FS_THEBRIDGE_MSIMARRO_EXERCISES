// Arranque del servidor: conexión a Mongo antes de levantar Express
import connectMongo from "./config/db.js";
import app from "./app.js";

// Carga las variables del .env
import 'dotenv/config';

const PORT = process.env.PORT || 3000;

async function start() {
  await connectMongo(); // Si falla, hace process.exit(1)

  app.listen(PORT, () => {
    console.log(`[Server] Escuchando en http://localhost:${PORT}`);
  });
}

start();