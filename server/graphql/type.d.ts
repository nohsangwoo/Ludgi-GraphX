import { Request, Response } from 'express'

export default interface CustomUserTypeForSession {
  name?: string | null
  email?: string | null
  role?: string | null
  userId?: number | null
}

export type Context = {
  req: Request
  res: Response
}
