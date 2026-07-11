import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prisma from '../config/prisma.js'

export const registerUser = async ({ email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10)
  return await prisma.user.create({
    data: { email, password: hashedPassword }
  })
}

export const loginUser = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) return null

  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) return null

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  )
  return token
}