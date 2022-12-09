const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const ejs = require('ejs');
const connection = require('./database/connection');


const options = {
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}
app.use(session(options));

// set up routing and view 
app.set('view-engine', 'ejs');

app.get('/', (req, res) => {

    // const obj = { print: result}
    res.render('app.ejs')
})

const port =  process.env.port || 3000;
const host = process.env.HOST || 'localhost';

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});


