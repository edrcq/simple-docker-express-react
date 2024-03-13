import { Router } from 'express'
import {
    getAll,
    getOne,
    insert,
    remove,
    replace,
    update,
} from './controllers'

export const router = Router()

/**
 * Basic CRUD router
 * 
 * GET / -> Get all todos
 * GET /:id -> Get one todo with id = :id
 * POST / -> Add one todo
 * PUT / -> Replace one todo with id = :id
 * PATCH /:id -> Modify one todo with id = :id
 * DELETE /:id -> Remove one todo with id = :id
 */
router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', insert)
router.put('/:id', replace)
router.patch('/:id', update)
router.delete('/:id', remove)
