import { Router } from 'express'
import { router as todosRouter } from './todos/todos.router.js'
import { router as authRouter } from './auth/auth.router.js'

export const globalRouter = Router()

globalRouter.use('/todos', todosRouter)
globalRouter.use('/auth', authRouter)
