const express = require('express');

const controller = require('../controllers/controller');

const router = express.Router();

router.route('/').get(controller.getFiles).post(controller.createFile);

router
	.route('/:id')
	.get(controller.getFile)
	.delete(controller.deleteFile)
	.put(controller.editFileContent);

module.exports = router;
