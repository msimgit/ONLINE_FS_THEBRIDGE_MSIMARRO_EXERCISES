import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { users } from "./data/users.data.js";

// En un proyecto real esto vendría de variables de entorno (.env)
const JWT_SECRET = process.env.JWT_SECRET || "clave_secreta_de_desarrollo";
const JWT_EXPIRES_IN = "1h";
const SALT_ROUNDS = 10;

/**
 * Busca un usuario por su email.
 */
function findUserByEmail(email) {
  return users.find((user) => user.email === email);
}

/**
 * Crea un nuevo usuario, encriptando la contraseña antes de guardarla.
 * Lanza un error si el email ya existe.
 */
async function createUser(email, password) {
  const existingUser = findUserByEmail(email);
  if (existingUser) {
    throw new Error("El usuario ya existe");
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const newUser = {
    id: users.length + 1,
    email,
    password: hashedPassword,
  };

  users.push(newUser);

  return newUser;
}

/**
 * Compara una contraseña en texto plano con el hash guardado.
 */
async function comparePasswords(plainPassword, hashedPassword) {
  return bcrypt.compare(plainPassword, hashedPassword);
}

/**
 * Genera un token JWT a partir de los datos del usuario.
 */
function generateToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
}

/**
 * Verifica un token JWT. Lanza un error si no es válido o ha expirado.
 */
function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

/**
 * Lógica completa de login: busca usuario, compara contraseña y genera token.
 * Lanza un error con mensaje genérico si las credenciales no son válidas
 * (no se debe revelar si el fallo es el email o la contraseña).
 */
async function login(email, password) {
  const user = findUserByEmail(email);
  if (!user) {
    throw new Error("Credenciales inválidas");
  }

  const isMatch = await comparePasswords(password, user.password);
  if (!isMatch) {
    throw new Error("Credenciales inválidas");
  }

  const token = generateToken(user);
  return token;
}

export const authService = {
  findUserByEmail,
  createUser,
  comparePasswords,
  generateToken,
  verifyToken,
  login,
};
