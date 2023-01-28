const Sequelize = require('sequelize');
const sequelize = require('../../database/connection');

const user = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        isEmail: true
    },
    phone: {
        type: Sequelize.STRING
    },
    dob: {
        type: Sequelize.DATE
    },
    password: {
        type: Sequelize.STRING
    },
    createdOn: {
        type: Sequelize.DATE
    },
    updatedOn: {
        type: Sequelize.DATE
    },
});
    module.exports = user;