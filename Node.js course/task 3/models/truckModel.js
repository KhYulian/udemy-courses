const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema({
	created_by: {
		type: String,
		required: [true, 'Enter who created this truck (id).']
	},
	assigned_to: {
		type: String,
		default: null
	},
	type: {
		type: String,
		required: [true, 'Enter the type of the truck.']
	},
	status: {
		type: String,
		required: [true, 'Enter the status.'],
		enum: ['IS', 'OL'],
		default: 'IS'
	},
	created_date: {
		type: String,
		default: new Date().toLocaleDateString()
	}
});

const Truck = mongoose.model('Truck', truckSchema);

module.exports = Truck;
