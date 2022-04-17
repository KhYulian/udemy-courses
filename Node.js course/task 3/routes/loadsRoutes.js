const express = require('express');

const loadsController = require('../controllers/loadsController');

const router = express.Router();

router.route('/').get(loadsController.getLoads).post(loadsController.addLoad);
router.route('/active/state').patch(loadsController.changeLoadState);
router.route('/active').get(loadsController.getActiveLoad);
router.route('/:id/shipping_info').get(loadsController.getLoadShippingInfo);
router.route('/:id/post').post(loadsController.postLoad);
router
	.route('/:id')
	.get(loadsController.getLoad)
	.put(loadsController.updateLoad)
	.delete(loadsController.deleteLoad);

module.exports = router;
