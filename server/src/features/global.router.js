import { Router } from 'express'
import { router as todosRouter } from './todos/todos.router.js'

export const globalRouter = Router()

globalRouter.use('/todos', todosRouter)
