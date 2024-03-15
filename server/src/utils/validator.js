const Validator = require('fastest-validator')

const v = new Validator()

const addTodoSchema = {
    text: {
        type: "string",
        min: 1,
        max: 200
    },
}

const replaceTodoSchema = {
    text: {
        type: "string",
        min: 1,
        max: 200
    },
    is_done: "boolean"
}

const updateTodoSchema = {
    text: {
        type: "string",
        min: 1,
        max: 200,
        optional: true,
    },
    is_done: {
        type: "boolean",
        optional: true,
    }
}

export const checkAdd = v.compile(addTodoSchema)
export const checkReplace = v.compile(replaceTodoSchema)
export const checkUpdate = v.compile(updateTodoSchema)
