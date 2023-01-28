const sequelize = require('../../database/connection');

const db = {};
db.sequelize = sequelize;
db.user = require('./user.model');

module.exports = db;