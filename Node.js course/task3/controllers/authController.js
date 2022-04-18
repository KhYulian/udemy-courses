const crypto = require('crypto');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

const RegistrationCredentials = require('../models/registrationCredentialsModel');
const Credentials = require('../models/credentialsModel');
const User = require('../models/userModel');

exports.registerUser = catchAsync(async function (req, res, next) {
	const { email, password, role } = req.body;

	await User.create({ role, email });
	await RegistrationCredentials.create({ email, password, role });
	await Credentials.create({ email, password });

	res.status(200).json({ message: 'Profile created successfully.' });
});

exports.loginUser = catchAsync(async function (req, res, next) {
	const { email, password } = req.body;

	const credentials = await Credentials.findOne({ email: email });

	if (!credentials || !(await bcrypt.compare(password, credentials.password)))
		return next(new AppError('Wrong email or password', 403));

	const jwt_token = jwt.sign(
		{ userID: credentials._id },
		process.env.ACCESS_TOKEN_SECRET
	);

	res.status(200).json({ jwt_token });
});

exports.forgotPassword = catchAsync(async function (req, res, next) {
	const { email } = req.body;
	if (!email) return next(new AppError('Please enter your email.', 400));

	const credentials = await Credentials.findOne({ email });
	if (!credentials) return next(new AppError('This user does not exist', 404));

	const newPassword = crypto.randomBytes(16).toString('hex');

	await Credentials.findOneAndUpdate(
		{ email },
		{ $set: { password: bcrypt.hashSync(newPassword, 12) } }
	);

	res.status(200).json({ message: 'New password sent to your email address.' });
});

exports.protect = catchAsync(async function (req, res, next) {
	const authHeader = req.headers['authorization'];
	const jwt_token = authHeader && authHeader.split(' ')[1];
	if (!jwt_token)
		return next(new AppError('You are not authorized. Plese log in.', 401));

	jwt.verify(jwt_token, process.env.ACCESS_TOKEN_SECRET);

	const userID = jwt.decode(jwt_token).userID;

	const credentials = await Credentials.findById(userID);

	if (!credentials) return next(new AppError('This user does not exist.', 404));

	const user = await User.findOne({ email: credentials.email });

	req.credentials = {
		userID: credentials._id,
		email: credentials.email,
		role: user.role
	};

	next();
});

exports.allowAccessFor = function (...allowedRoles) {
	return function (req, res, next) {
		if (!allowedRoles.includes(req.credentials.role))
			return next(
				new AppError('You are not allowed to perform this action.', 403)
			);

		next();
	};
};
