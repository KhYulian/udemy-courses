const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const credentialsSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, 'Enter your email.'],
		unique: [true, 'This email is already used.'],
		validate: {
			validator: function () {
				return true;
			},
			message: 'Wrong email format. Please enter valid email.'
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
	}
});

credentialsSchema.pre('save', async function () {
	this.password = await bcrypt.hash(this.password, 12);
});

const Credentials = mongoose.model('Credentials', credentialsSchema);

module.exports = Credentials;
