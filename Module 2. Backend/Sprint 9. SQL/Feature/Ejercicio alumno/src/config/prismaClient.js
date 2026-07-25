// const prisma = new PrismaClient()
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Instancia única de Prisma para toda la app.
// Usamos DATABASE_URL (pooler, modo transacción, puerto 6543) para runtime.
const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaPg({ connectionString });

const prisma = new PrismaClient({ adapter });

export default prisma;