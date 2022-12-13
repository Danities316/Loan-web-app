const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const ejs = require('ejs');
const connection = require('./database/connection');
const Createlogin = require('./server/routes/login.route');
const getLogin  = require('./server/routes/login.route');
const register = require('./server/routes/users.route');
const getRegister = require('./server/routes/users.route')


const options = {
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}
app.use(session(options));

// set up routing and view 
app.set('view-engine', 'ejs');
app.use(express.json())

app.use('/', Createlogin);
app.use('/', getLogin);

app.use('/', register);
app.use('/', getRegister);

const port =  process.env.port || 3000;
const host = process.env.HOST || 'localhost';

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});


