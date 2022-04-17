const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const registrationCredentialsSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, 'Enter your email.'],
		unique: [true, 'This email is already used.'],
		validate: {
			validator: function () {
				return true;
			},
			message: 'Wrong email format. Enter valid email.'
		}
	},
	password: {
		type: String,
		required: [true, 'Enter your password.'],
		validate: {
			validator: function () {
				return true;
			},
			message: 'Password must...'
		}
	},
	role: {
		type: String,
		required: [true, 'Enter your role'],
		enum: ['DRIVER', 'SYSTEM', 'USER'],
		default: 'USER'
	}
});

registrationCredentialsSchema.pre('save', async function () {
	this.password = await bcrypt.hash(this.password, 12);
});

const RegistrationCredentials = mongoose.model(
	'RegistrationCredentials',
	registrationCredentialsSchema
);

module.exports = RegistrationCredentials;
