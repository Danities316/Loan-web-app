const connection = require('../../database/connection')
const ejs = require('ejs');
const moment =  require('moment');


exports.register = async (req, res) => {
    const time = moment().format('MMMM Do YYYY, h:mm:ss a');
    const email = req.body.email;
    const data = {
        "legalname": req.body.name,
        "email": req.body.email,
        "password": req.body.password,
        "cPassword":req.body.confirm_password,
        time
    }
    try {
        await connection.query("SELECT * FROM users WHERE email = `${email}`", data, (err, result, field) => {
            if(err){
                throw(err)
            }else{
                if(result[0]){
                    const msg = "Email already exists";
                    const data = {
                        msg
                    }
                    res.redirect("/notifi/" + msg)
                }else{
                    connection.query('INSERT INTO user SET ?', data, (err, result, field) => {
                        if(err) throw res.redirect('/register');
                        
                        res.redirect('/login')
                })
                }
            }
        })
        
    } catch (error) {
        console.log(error)
    }
};

exports.getRegister = async (req, res) => {
    res.render('register.ejs')

}