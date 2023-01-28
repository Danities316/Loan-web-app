var mysql = require('mysql');
const Sequelize = require("sequelize");
const dbConfig = require('./config');


const sequelizeInstance = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    define: {
        // stop the auto-pluralization performed by Sequelize
        freezeTableName: true,
        // stop the timestamps performed by Sequelize we are using the one created by mysql
        timestamps: false
    },
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

module.exports = sequelizeInstance;







// var connection = mysql.createConnection({
//     host: dbConfig.HOST,
//     user: dbConfig.USER,
//     password: dbConfig.PASSWORD,
//     database: dbConfig.DB
// })

// module.exports = connection;