const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();

router.route('/register').post(authController.registerUser);
router.route('/login').post(authController.loginUser);
router.route('/forgot_password').post(authController.forgotPassword);

module.exports = router;
