module.exports = {
    HOST: 'localhost',
    USER: 'webapp',
    PASSWORD: 'Compaira@1234',
    DB: 'compaira_new',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};