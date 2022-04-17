const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

const Truck = require('../models/truckModel');

exports.getTrucks = catchAsync(async function (req, res, next) {
	const trucks = await Truck.find({ created_by: req.credentials.userID });

	res.status(200).json({ trucks });
});

exports.addTruck = catchAsync(async function (req, res, next) {
	const { type } = req.body;

	const currentUserID = req.credentials.userID;

	await Truck.create({
		created_by: currentUserID,
		type
	});

	res.status(200).json({ message: 'Truck created successfully.' });
});

exports.getTruck = catchAsync(async function (req, res, next) {
	const truckID = req.params.id;

	const truck = await Truck.findById(truckID);
	if (!truck)
		return next(new AppError('Truck with this ID does not exist.', 404));
	if (truck.created_by != req.credentials.userID) {
		console.log(req.credentials.userID);
		console.log(truck.created_by);
		return next(
			new AppError("You are not allowed to see this truck's details.", 403)
		);
	}

	res.status(200).json(truck);
});

exports.updateTruck = catchAsync(async function (req, res, next) {
	const truckID = req.params.id;
	const { type } = req.body;

	Truck.findOneAndUpdate({ _id: truckID }, { $set: { type } }, (err, truck) => {
		if (!truck) return next(new AppError('This truck does not exist.', 404));
		if (err) return next(err);
		if (truck.created_by != req.credentials.userID)
			return next(
				new AppError('You are not allowed to updated this truck.', 403)
			);

		res.status(200).json({ message: `Truck's details updated successfully.` });
	});
});

exports.deleteTruck = catchAsync(async function (req, res, next) {
	const truckID = req.params.id;

	Truck.findOneAndDelete({ _id: truckID }, (err, truck) => {
		if (!truck) return next(new AppError('This truck does not exist.', 404));
		if (err) return next(err);
		if (truck.created_by != req.credentials.userID)
			return next(
				new AppError('You are not allowed to delete this truck.', 403)
			);
		if (truck.assigned_to == req.credentials.userID)
			return next(
				new AppError(
					'You are not allowed to delete assigned to you trucks.',
					403
				)
			);
		res.status(200).json({ message: 'Truck deleted successfully.' });
	});
});

exports.assignTruck = catchAsync(async function (req, res, next) {
	const truckID = req.params.id;

	Truck.findOneAndUpdate(
		{ _id: truckID },
		{ $set: { assigned_to: req.credentials.userID } },
		(err, truck) => {
			if (!truck) return next(new AppError('This truck does not exist.', 404));
			if (err) return next(err);

			res.status(200).json({ message: 'Truck assigned successfully.' });
		}
	);
});
