import prisma from "../config/prismaClient.js";

export async function getAllProducts() {
  return prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function getProductById(id) {
  return prisma.product.findUnique({
    where: { id: Number(id) },
  });
}

export async function updateProduct(id, data) {
  return prisma.product.update({
    where: { id: Number(id) },
    data,
  });
}

export async function deleteProduct(id) {
  return prisma.product.delete({
    where: { id: Number(id) },
  });
}

export async function createProduct(data) {
  return prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      stock: data.stock,
      imageUrl: data.imageUrl,
    },
  });
}