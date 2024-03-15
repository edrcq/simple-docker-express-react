import { Todo } from "../../../models/Todo.js";

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export async function update(req, res) {
    const todo = Todo.update({
        ...req.body
    })
    res.json(todo)
}
