require('dotenv').config();
const mongoose = require('mongoose');

const app = require('./app');

const port = process.env.PORT || 8000;
const DB = process.env.DATABASE.replace(
	'<password>',
	process.env.DATABASE_PASSWORD
);

const server = app.listen(port, () => {
	console.log(`Server is running on port: ${port}.`);
});

mongoose.connect(
	DB,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	() => {
		console.log('Connection with MongoDB established.');
	}
);

process.on('unhandledRejection', err => {
	console.log('Unhandled Rejection. Shutting down...');
	console.log(`${err.name}: ${err.message}`);
	server.close(() => {
		process.exit(1);
	});
});
