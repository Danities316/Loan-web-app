const express = require('express');

const router = express.Router();
const { Createlogin, getLogin, registerForm, createRegister } = require('../controller/auth.controller');

router.route('/login').post(Createlogin)
router.route('/login').get(getLogin)

router.route('/register').get(registerForm)
router.route('/register').post(createRegister)

module.exports = router;
