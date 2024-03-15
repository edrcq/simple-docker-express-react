import { Todo } from "../../../models/Todo.js";

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export async function getAll(req, res) {
    const todos = await Todo.findAll()
    res.json(todos)
}
