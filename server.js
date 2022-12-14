const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const expressLayout = require('express-ejs-layouts');
const ejs = require('ejs');
const connection = require('./database/connection');
const Createlogin = require('./server/routes/login.route');
const getLogin  = require('./server/routes/login.route');
const register = require('./server/routes/users.route');
const getRegister = require('./server/routes/users.route');
const homePage = require('./server/routes/home.route');
const expressEjsLayouts = require('express-ejs-layouts');


const options = {
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}
app.use(session(options));

// set up routing and view 
app.set('view engine', 'ejs');
app.use(express.json())

// body perser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


app.use(expressEjsLayouts)
app.use('/', homePage);

app.use('/', Createlogin);
app.use('/', getLogin);

app.use('/', register);
app.use('/', getRegister);

const port =  process.env.port || 3000;
const host = process.env.HOST || 'localhost';

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});


