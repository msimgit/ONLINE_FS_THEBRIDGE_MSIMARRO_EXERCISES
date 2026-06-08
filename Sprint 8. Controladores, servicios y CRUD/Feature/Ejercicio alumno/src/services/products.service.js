import { products } from "../db/products.js";

// Devuelve todos los productos
export const getAllProducts = () => {
  return products;
};

// Busca por id — devuelve el producto o undefined si no existe
export const getProductById = (id) => {
  return products.find(p => p.id === Number(id));
};

// CREATE
// Crea un producto nuevo, lo añade al array y lo devuelve
export const createProduct = (data) => {
  const newProduct = {
    id: products.length + 1,
    ...data
  };
  products.push(newProduct);
  return newProduct;
};

// PUT
// Actualiza un producto existente — devuelve el producto actualizado o null
export const updateProduct = (id, data) => {
  const product = products.find(p => p.id === Number(id));
  if (!product) return null;
  Object.assign(product, data);
  return product;
};

// DELETE
// Elimina un producto — devuelve el producto eliminado o null
export const deleteProduct = (id) => {
  const index = products.findIndex(p => p.id === Number(id));
  if (index === -1) return null;
  return products.splice(index, 1)[0];
};