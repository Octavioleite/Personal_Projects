const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

router.get('/Login', loginController.loginView);

module.exports = router;