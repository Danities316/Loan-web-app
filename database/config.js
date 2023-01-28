module.exports = {
    HOST: 'localhost',
    USER: 'webapp',
    port:3304,
    PASSWORD: 'Compaira@1234',
    DB: 'loanapp',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};