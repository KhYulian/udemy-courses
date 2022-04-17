const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
	message: String,
	time: {
		type: String,
		default: new Date().toLocaleDateString()
	}
});

const loadSchema = new mongoose.Schema({
	created_by: {
		type: String,
		required: [true, 'Enter who created this load.']
	},
	assigned_to: {
		type: String,
		required: [true, 'Enter to whom this load is assigned.']
	},
	status: {
		type: String,
		required: [true, 'Enter the status of the load.'],
		enum: ['NEW', 'POSTED', 'ASSIGNED', 'SHIPPED']
	},
	state: {
		type: String,
		required: [true, 'Enter the state of the load.'],
		enum: ['En route to Pick Up', 'Arrived to Pick Up', 'En route to delivery', 'Arrived to delivery']
	},
	name: {
		type: String,
		required: [true, 'Enter the name of the load.']
	},
	payload: {
		type: Number,
		required: [true, 'Enter the payload of the load.']
	},
	pickup_address: {
		type: String,
		required: [true, 'Enter the pickup address.']
	},
	delivery_address: {
		type: String,
		required: [true, 'Enter the delivery address.']
	},
	dimensions: {
		width: {
			type: Number,
			required: [true, 'Enter width.']
		},
		length: {
			type: Number,
			required: [true, 'Enter length.']
		},
		height: {
			type: Number,
			required: [true, 'Enter height.']
		}
	},
	logs: [logSchema],
	created_date: {
		type: String,
		default: new Date().toLocaleDateString()
	}
});

const Load = mongoose.model('Load', loadSchema);

module.exports = Load;
