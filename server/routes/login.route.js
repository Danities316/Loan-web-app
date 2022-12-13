const express = require('express');

const router = express.Router();
const { Createlogin, getLogin } = require('../controller/auth.controller');

router.route('/login').post(Createlogin)
router.route('/login').get(getLogin)

module.exports = router;
