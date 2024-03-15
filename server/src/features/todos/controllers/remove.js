import { Todo } from "../../../models/Todo.js";

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export async function remove(req, res) {
    const result = await Todo.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json(result)
}
