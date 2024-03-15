import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Todo = sequelize.define('todo', {
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    is_done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
    },
})
