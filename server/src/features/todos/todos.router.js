import { Router } from 'express'
import {
    getAll,
    getOne,
    insert,
    remove,
    replace,
    update,
} from './controllers/index.js'
import { validate } from '../../middleware/validator.js'
import {
    checkAdd,
    checkReplace,
    checkUpdate
} from '../../utils/validator.js'

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
router.post('/', validate(checkAdd),insert)
router.put('/:id', validate(checkReplace), replace)
router.patch('/:id', validate(checkUpdate) ,update)
router.delete('/:id', remove)
