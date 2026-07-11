import { products } from "../db/products.db.js"

export const getAllProducts = () => products
export const getProductById = (id) => products.find(p => p.id === Number(id))

export const createProduct = (data) => {
  const newProduct = { id: products.length + 1, ...data }
  products.push(newProduct)
  return newProduct
}

export const updateProduct = (id, data) => {
  const index = products.findIndex(p => p.id === Number(id))
  if (index === -1) return null
  products[index] = { ...products[index], ...data }
  return products[index]
}

export const deleteProduct = (id) => {
  const index = products.findIndex(p => p.id === Number(id))
  if (index === -1) return null
  return products.splice(index, 1)[0]
}
// Productos con precio < 500
export const getCheapProducts = () => products.filter(p => p.price < 500)

// Solo los nombres
export const getNamesProducts = () => products.map(p => p.name)