import { Todo } from "../../../models/Todo.js";

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export async function getOne(req, res) {
    const todo = await Todo.findById(req.params.id)
    res.json(todo)
}
