import { Todo } from "../../../models/Todo.js";

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export async function insert(req, res) {
    const todo = await Todo.create({
        text: req.body.text,
        is_done: false
    })
    console.log(todo)
    res.json(todo)
}
