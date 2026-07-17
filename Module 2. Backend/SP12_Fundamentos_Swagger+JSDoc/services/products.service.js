import { products } from '../data/products.data.js';

// La capa de servicio contiene la lógica de negocio.
// No sabe nada de req/res: recibe y devuelve datos puros.

const getAll = () => products;

const getById = (id) => products.find((p) => p.id === id);

const create = ({ name, brand, price, stock }) => {
  const newId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
  const newProduct = { id: newId, name, brand, price, stock: stock ?? 0 };
  products.push(newProduct);
  return newProduct;
};

const update = (id, data) => {
  const product = products.find((p) => p.id === id);
  if (!product) return null;
  Object.assign(product, data, { id }); // el id nunca se sobreescribe
  return product;
};

const remove = (id) => {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return false;
  products.splice(index, 1);
  return true;
};

export const productsService = { getAll, getById, create, update, remove };
