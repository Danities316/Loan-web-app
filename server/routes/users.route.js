const express = require('express');

const router = express.Router();
const { register, getRegister } = require('../controller/users.controller');

router.route('/register').post(register)
router.route('/register').get(getRegister)

module.exports = router