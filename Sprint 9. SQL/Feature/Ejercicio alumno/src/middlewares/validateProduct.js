export function validateProduct(req, res, next) {
  const { name, price, stock } = req.body;

  const errors = [];

  if (!name || typeof name !== "string" || name.trim() === "") {
    errors.push("El campo 'name' es obligatorio y debe ser texto.");
  }

  if (price === undefined || typeof price !== "number" || price < 0) {
    errors.push("El campo 'price' es obligatorio y debe ser un número positivo.");
  }

  if (stock === undefined || typeof stock !== "number" || !Number.isInteger(stock) || stock < 0) {
    errors.push("El campo 'stock' es obligatorio y debe ser un número entero positivo.");
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
}