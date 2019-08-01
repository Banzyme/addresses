import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    database: 'Addresses',
    dialect: 'sqlite',
    username: 'root',
    password: '',
    storage: 'address.db'
});