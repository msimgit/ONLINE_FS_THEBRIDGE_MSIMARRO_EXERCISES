import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prisma from '../db/prisma.js'

export const register = async (req, res) => {
  const { email, password } = req.body
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({
    data: { email, password: hashedPassword }
  })
  res.status(201).json({ success: true, data: user })
}

export const login = async (req, res) => {
  const { email, password } = req.body
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) return res.status(401).json({ error: 'Credenciales inválidas' })
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return res.status(401).json({ error: 'Credenciales inválidas' })
  const token = jwt.sign(
    { userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' }
  )
  res.json({ token })
}