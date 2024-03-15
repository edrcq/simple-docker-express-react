import { Todo } from "../../../models/Todo.js";

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export async function replace(req, res) {
    const todo = Todo.update({
        text: req.body.text,
        is_done: req.body.is_done
    })
    res.json(todo)
}
