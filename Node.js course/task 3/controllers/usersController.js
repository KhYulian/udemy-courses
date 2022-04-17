const bcrypt = require('bcrypt');

const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const User = require('../models/userModel');
const RegistrationCredentials = require('../models/registrationCredentialsModel');
const Credentials = require('../models/credentialsModel');

exports.getUsersInfo = catchAsync(async function (req, res, next) {
	const email = req.credentials.email;

	const user = await User.findOne({ email }).select('-__v');

	res.status(200).json(user);
});

exports.deleteUsersProfile = catchAsync(async function (req, res, next) {
	const email = req.credentials.email;

	if (!email) return next(new AppError('This user does not exist.', 400));

	await User.deleteOne({ email });
	await Credentials.deleteOne({ email });
	await RegistrationCredentials.deleteOne({ email });

	res.status(200).json({ message: 'Profile deleted successfully.' });
});

exports.changeUsersPassword = catchAsync(async function (req, res, next) {
	const { oldPassword, newPassword } = req.body;
	const email = req.credentials.email;

	if (!oldPassword || !newPassword)
		return next(new AppError('Enter old password and new password.', 400));

	const credentials = await Credentials.findOne({ email });

	if (!(await bcrypt.compare(oldPassword, credentials.password)))
		return next(new AppError('Wrong password.', 403));

	await Credentials.findOneAndUpdate(
		{ email },
		{ $set: { password: bcrypt.hashSync(newPassword, 12) } }
	);

	res.status(200).json({ message: 'Password changed successfully.' });
});
