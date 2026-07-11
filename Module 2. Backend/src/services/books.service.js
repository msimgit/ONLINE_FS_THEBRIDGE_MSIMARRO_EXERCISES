import prisma from "../config/prisma.js"

// GET ALL — obtener todos los libros
export const getAllBooks = async () => {
  return await prisma.book.findMany()
}

// GET BY ID — obtener un libro por su id
export const getBookById = async (id) => {
  return await prisma.book.findUnique({
    where: { id: Number(id) }
  })
}

// CREATE — crear un nuevo libro
export const createBook = async (data) => {
  return await prisma.book.create({ data })
}

// UPDATE — actualizar un libro
export const updateBook = async (id, data) => {
  return await prisma.book.update({
    where: { id: Number(id) },
    data
  })
}

// DELETE — eliminar un libro
export const deleteBook = async (id) => {
  return await prisma.book.delete({
    where: { id: Number(id) }
  })
}