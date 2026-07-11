import * as bookService from "../services/books.service.js"

export const getBooks = async (req, res) => {
  const books = await bookService.getAllBooks()
  res.json({ success: true, data: books })
}

export const getBook = async (req, res) => {
  const book = await bookService.getBookById(req.params.id)
  if (!book) return res.status(404).json({ error: "Not found" })
  res.json({ success: true, data: book })
}

export const createBook = async (req, res) => {
  const book = await bookService.createBook(req.body)
  res.status(201).json({ success: true, data: book })
}