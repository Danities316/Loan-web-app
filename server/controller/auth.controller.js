const connection = require('../../database/connection')
const ejs = require('ejs');



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
