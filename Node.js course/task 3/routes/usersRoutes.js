const express = require('express');

const authController = require('../controllers/authController');
const usersController = require('../controllers/usersController');

const router = express.Router();

router
	.route('/')
	.get(authController.protect, usersController.getUsersInfo)
	.delete(authController.protect, usersController.deleteUsersProfile);
router
	.route('/password')
	.patch(authController.protect, usersController.changeUsersPassword);

module.exports = router;
