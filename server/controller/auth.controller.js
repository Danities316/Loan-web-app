const db = require('../model');
const sequelize = require('../../database/connection');
const { Op, Sequelize } = require("sequelize");
const ejs = require('ejs');
const dateFormat = require('dateformat');
const user = db.user;


exports.Createlogin = async (req,res) => {
    const email =  req.body.lemail;
    const password = req.body.lpass;
    console.log(email, password)
    try {
        connection.query('SELECT * FROM users WHERE email = ?', [email], function (err, result, field){
            if(err){
                //console.log("error occurred", err)
                res.send({
                    "code": 400,
                    "failed": "error Ocurred"
                })
            }else{
                // console.log('The solution is: ', result)
                if(result.length > 0){
                    if(result[0].pass == password){
                        req.session.user = 'yes';
                        req.session.admin = true;
                        res.redirect('/app')
                    }else{
                        const msg = "password not match"
                        res.redirect('/notifi' + msg)
                    }
                }else{
                    const msg = "email not exists"
                    res.redirect('/notifi' + msg)
                }
            }
        });
        
    } catch (error) {
        console.log(error)
    }
};


exports.registerForm = async (req, res) => {
    res.render('register.ejs')
    // console.log("hello")
}

exports.getLogin = async (req, res) => {
    res.send("This is the login pagw")
    console.log('hi');
};


exports.createRegister = async (req, res) => {
    // const time = dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT");
    const time = dateFormat();
    const email = req.body.email;
    const username = req.body.username;

    const data = {
         "firstName": req.body.firstName,
         "lastName": req.body.lastName,
         "email":  req.body.email,
         "username" : req.body.username,
         "phone": req.body.phone,
         "dob": req.body.date_of_birth,
         "password": req.body.password,
         time
    };

    try {
        const checkIfUserExist = await user.findAll({where : { [Op.or]:[
            {email},
            {username}
        ] }});
        // console.log(checkIfUserExist)
        if(checkIfUserExist.length === 0){
            let result = await user.create(data)
            // console.log(result)
            return res.redirect("/login")
   
        }else{
            let msg = "email or username already exist"
            // console.log(msg)
            res.redirect('/notifi/' + msg)
        }
    } catch (error) {
        
    }
   

}