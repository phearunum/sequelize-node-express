const { Sequelize, Model, DataTypes } = require("sequelize");
const logger = require('../config/logger');

const connect = () => {

    const hostName = 'localhost';
    const userName = 'postgres';
    const password = '123';
    const database = 'crm_db';
    const dialect = 'postgres'
    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect: dialect,
        port:5433,
        operatorsAliases: false,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.Users = require("../models/User")(sequelize, DataTypes, Model);

    return db;

}

module.exports = {
    connect
}