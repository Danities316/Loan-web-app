const express = require('express');

const router = express.Router();
const { homePage } = require('../controller/homeview.controller');

router.route('/').get(homePage)

module.exports = router;