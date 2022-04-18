const mongoose = require('mongoose');

const AppError = require('../utils/AppError');

module.exports = function (err, req, res, next) {
	console.log(err);

	if (err.code === 11000) err = new AppError('This user already exists.', 400);

	if (err instanceof mongoose.Error.ValidationError)
		err = new AppError('You have entered invalid data.', 400);

	err.statusCode ||= 500;

	res.status(err.statusCode).json({ message: err.message });
};
