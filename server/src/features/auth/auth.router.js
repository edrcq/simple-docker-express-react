import { Router } from 'express'
import {
    getMe,
    postRegister,
    postLogin,
} from './auth.controllers.js'
import { validate } from '../../middleware/validator.js'
// import {
//     checkAdd,
//     checkReplace,
//     checkUpdate
// } from '../../utils/validator.js'

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

router.get('/me', getMe)
router.post('/register', postRegister)
router.post('/login', postLogin)
