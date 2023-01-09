const express = require('express');

const router = express.Router();
const { Createlogin, getLogin, registerForm } = require('../controller/auth.controller');

router.route('/register').post(Createlogin)
router.route('/register').get(registerForm)
router.route('/login').get(getLogin)

module.exports = router;
