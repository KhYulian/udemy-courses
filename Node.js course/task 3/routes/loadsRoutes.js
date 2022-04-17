const express = require('express');

const authController = require('../controllers/authController');
const loadsController = require('../controllers/loadsController');

const router = express.Router();

router
	.route('/')
	.get(authController.protect, loadsController.getLoads)
	.post(
		authController.protect,
		authController.allowAccessFor('SHIPPER'),
		loadsController.addLoad
	);
router
	.route('/active/state')
	.patch(
		authController.protect,
		authController.allowAccessFor('DRIVER'),
		loadsController.changeLoadState
	);
router
	.route('/active')
	.get(
		authController.protect,
		authController.allowAccessFor('DRIVER'),
		loadsController.getActiveLoad
	);
router
	.route('/:id/shipping_info')
	.get(
		authController.protect,
		authController.allowAccessFor('SHIPPER'),
		loadsController.getLoadShippingInfo
	);
router
	.route('/:id/post')
	.post(
		authController.protect,
		authController.allowAccessFor('SHIPPER'),
		loadsController.postLoad
	);
router
	.route('/:id')
	.get(authController.protect, loadsController.getLoad)
	.put(
		authController.protect,
		authController.allowAccessFor('SHIPPER'),
		loadsController.updateLoad
	)
	.delete(
		authController.protect,
		authController.allowAccessFor('SHIPPER'),
		loadsController.deleteLoad
	);

module.exports = router;
