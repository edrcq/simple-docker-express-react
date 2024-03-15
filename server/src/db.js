import { Sequelize } from "sequelize";
import { config } from "./config.js"
import { Todo } from "./models/Todo.js";

export const sequelize = new Sequelize(
    config.MARIADB_DATABASE,
    config.MARIADB_USER,
    config.MARIADB_PASSWORD,
    {
        host: 'mariadb',
        dialect: 'mariadb',
    },
);

export async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection to MariaDB has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
