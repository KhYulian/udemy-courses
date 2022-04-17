const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const Load = require('../models/loadModel');
const User = require('../models/userModel');

exports.getLoads = catchAsync(async function (req, res, next) {
	const { role, userID } = req.credentials;

	if (role === 'DRIVER') {
		const loads = await Load.find({ assigned_to: userID });

		res.status(200).json({ loads });
	}
	if (role === 'SHIPPER') {
		const loads = await Load.find({ created_by: userID });

		res.status(200).json({ loads });
	}
});

exports.addLoad = catchAsync(async function (req, res, next) {
	const { name, payload, pickup_address, delivery_address, dimensions } =
		req.body;

	await Load.create({
		created_by: req.credentials.userID,
		name,
		payload,
		pickup_address,
		delivery_address,
		dimensions,
		logs: [{ message: 'Load created.' }]
	});

	res.status(200).json({ message: 'Load created successfully.' });
});

// What is active load?

exports.getActiveLoad = catchAsync(async function (req, res, next) {
	const loads = await Load.findOne({ assigned_to: req.credentials.userID });

	res.status(200).json({ loads });
});

// What is active load?

exports.changeLoadState = catchAsync(async function (req, res, next) {
	const availableStatus = [
		'En route to Pick Up',
		'Arrived to Pick Up',
		'En route to delivery',
		'Arrived to delivery'
	];

	const load = await Load.findById(req.params.id);

	const newStatus =
		availableStatus[availableStatus.findIndex(el => el === load.status) + 1] ||
		load.status;

	Load.findOneAndUpdate(
		{ assigned_to: req.credentials.userID },
		{ $set: { status: newStatus } },
		(err, data) => {
			if (err) return next(err);

			res.status(200).json({ message: 'Status updated successfully.' });
		}
	);
});

exports.getLoad = catchAsync(async function (req, res, next) {
	const loadID = req.params.id;
	const { role, userID } = req.credentials;

	if (role === 'DRIVER') {
		Load.findById(loadID, (err, load) => {
			if (err) return next(err);
			if (!load) return next(new AppError('This load does not exist', 404));
			if (load.assigned_to != userID)
				return next(new AppError('You are not allowed to see this load.', 403));

			res.status(200).json({ load });
		});
	}
	if (role === 'SHIPPER') {
		Load.findById(loadID, (err, load) => {
			if (err) return next(err);
			if (!load) return next(new AppError('This load does not exist', 404));
			if (load.created_by != userID)
				return next(new AppError('You are not allowed to see this load.', 403));

			res.status(200).json({ load });
		});
	}
});

exports.updateLoad = catchAsync(async function (req, res, next) {
	const loadID = req.params.id;
	const { userID } = req.credentials;
	const { name, payload, pickup_address, delivery_address, dimensions } =
		req.body;

	if (!name || !payload || !pickup_address || !delivery_address || !dimensions)
		return next(new AppError('You have entered wrong data.'));

	Load.findOneAndUpdate(
		{ _id: loadID },
		{ $set: { name, payload, pickup_address, delivery_address, dimensions } },
		(err, load) => {
			if (err) return next(err);
			if (!load) return next(new AppError('This load does not exist.', 404));
			if (load.created_by != userID)
				return next(
					new AppError('You are not allowed to perform this action.')
				);

			res.status(200).json({ message: 'Load updated successfully.' });
		}
	);
});

exports.deleteLoad = catchAsync(async function (req, res, next) {
	const { loadID } = req.params;
	const { userID } = req.credentials;

	Load.findOneAndDelete({ _id: loadID }, (err, load) => {
		if (err) return next(err);
		if (!load) return next(new AppError('This load does not exist', 404));
		if (load.created_by != userID)
			return next(
				new AppError('You are not allowed to delete this load.', 403)
			);
		res.status(200).json({ message: 'Load deleted successfully.' });
	});
});

exports.postLoad = catchAsync(async function (req, res, next) {
	const loadID = req.params.id;
	const { userID } = req.credentials;

	Load.findById(loadID, (err, load) => {
		if (err) return next(err);
		if (!load) return next(new AppError('This load does not exist', 404));
		if (load.created_by != userID)
			return next(
				new AppError('You are not allowed to perform this action.', 403)
			);

		res
			.status(200)
			.json({ message: 'Load posted successfully.', driver_found: true });
	});
});

exports.getLoadShippingInfo = catchAsync(async function () {
	const loadID = req.params.id;
	const { userID } = req.credentials;

	Load.findById(loadID, (err, load) => {
		if (err) return next(err);
		if (!load) return next(new AppError('This load does not exist', 404));
		if (load.created_by != userID)
			return next(new AppError("You are not allowed to see this load's info."));

		res.status(200).json({ load });
	});
});
