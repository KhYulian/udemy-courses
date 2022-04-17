const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	role: {
		type: String,
		required: [true, 'Enter your role.'],
		enum: ['DRIVER', 'SYSTEM', 'USER', 'SHIPPER'],
		default: 'USER'
	},
	email: {
		type: String,
		required: [true, 'Enter your email.'],
		index: { unique: true },
		validate: {
			validator: function () {
				return true;
			},
			message: 'Wrong email format. Please enter valid email.'
		}
	},
	created_date: {
		type: String,
		default: new Date().toLocaleDateString()
	}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
