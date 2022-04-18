const express = require('express');

const authController = require('../controllers/authController');
const trucksController = require('../controllers/trucksController');

const router = express.Router();

router
	.route('/')
	.get(
		authController.protect,
		authController.allowAccessFor('DRIVER'),
		trucksController.getTrucks
	)
	.post(
		authController.protect,
		authController.allowAccessFor('DRIVER'),
		trucksController.addTruck
	);
router
	.route('/:id/assign')
	.post(
		authController.protect,
		authController.allowAccessFor('DRIVER'),
		trucksController.assignTruck
	);
router
	.route('/:id')
	.get(
		authController.protect,
		authController.allowAccessFor('DRIVER'),
		trucksController.getTruck
	)
	.put(
		authController.protect,
		authController.allowAccessFor('DRIVER'),
		trucksController.updateTruck
	)
	.delete(
		authController.protect,
		authController.allowAccessFor('DRIVER'),
		trucksController.deleteTruck
	);

module.exports = router;
