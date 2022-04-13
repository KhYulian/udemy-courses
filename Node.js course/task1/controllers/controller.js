const fs = require('fs');
const path = require('path');

const bcrypt = require('bcrypt');
const AppError = require('../utils/appError');

const protectedFiles = [];

exports.createFile = function (req, res, next) {
	if (!req.body.filename)
		return next(new AppError("Please specify 'filename' parameter.", 400));

	if (!req.body.content)
		return next(new AppError("Please specify 'content' parameter.", 400));

	if (req.body.password) {
		const regEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		if (!regEx.test(req.body.password))
			return next(
				new AppError(
					'Invalid password format. Password should contain at least 8 characters, one number and one letter.',
					400
				)
			);

		protectedFiles.push({
			filename: req.body.filename,
			password: bcrypt.hashSync(req.body.password, 12)
		});
	}

	if (!fs.existsSync(path.join(__dirname, '..', 'files'))) {
		console.log('This folder does not exist. Creating folder...');
		fs.mkdirSync(path.join(__dirname, '..', 'files'));
	}

	if (fs.existsSync(path.join(__dirname, '..', 'files', req.body.filename)))
		return next(new AppError('This file already exist.', 400));

	fs.writeFile(
		`${path.resolve()}/files/${req.body.filename}`,
		req.body.content,
		err => {
			if (err) return next('ENOENT no such file or directory.', 400);

			res.status(200).json({ message: 'File created successfully.' });
		}
	);
};

exports.getFiles = function (req, res, next) {
	let files = [];

	fs.readdir(path.resolve() + '\\files\\', (err, fls) => {
		if (err) {
			if (err.code === 'ENOENT')
				return res.status(200).json({ message: 'Success', files: [] });

			return next(new AppError('Internal server error', 500));
		}

		fls.forEach(file => files.push(file));

		res.status(200).json({
			message: 'Success',
			files
		});
	});
};

exports.getFile = function (req, res, next) {
	const pt = path.resolve() + '\\files\\' + req.params.id;

	fs.readFile(pt, (err, data) => {
		if (err)
			return next(
				new AppError(`No file with ${path.basename(pt)} filename found.`, 400)
			);

		if (protectedFiles.find(el => el.filename === req.params.id)) {
			const protectedFile = protectedFiles.find(
				el => el.filename === req.params.id
			);
			const password = req.query.password || '';

			if (!bcrypt.compareSync(password, protectedFile.password))
				return next(new AppError('Wrong password. Access denied.', 400));
		}

		res.status(200).json({
			message: 'Success',
			filename: path.basename(pt),
			content: data.toString(),
			extension: path.extname(pt).replace('.', ''),
			uploadedDate: new Date()
		});
	});
};

exports.deleteFile = function (req, res, next) {
	const { id } = req.params;
	const { password } = req.query;

	if (protectedFiles.find(el => el.filename === id)) {
		const file = protectedFiles.find(el => el.filename === id);

		if (!password)
			return next(new AppError('This file is protected. Enter password.', 400));

		if (!bcrypt.compareSync(password, file.password))
			return next(
				new AppError('Wrong password. Operation is not allowed.', 400)
			);
	}

	fs.unlink(path.join(__dirname, '..', 'files', id), err => {
		if (err) return next(new AppError('This file does not exist.', 400));

		res.status(200).json({ message: 'Success' });
	});
};

exports.editFileContent = function (req, res, next) {
	const { id } = req.params;
	const { content } = req.body;
	const { password } = req.query;

	if (!content)
		return next(new AppError("Please specify 'content' parameter.", 400));

	if (protectedFiles.find(el => el.filename === id)) {
		const file = protectedFiles.find(el => el.filename === id);

		if (!password)
			return next(new AppError('This file is protected. Enter password.', 400));

		if (!bcrypt.compareSync(password, file.password))
			return next(
				new AppError('Wrong password. Operation is not allowed.', 400)
			);
	}

	if (!fs.existsSync(path.join(__dirname, '..', 'files', id)))
		return next(
			new AppError('This file does not exist. Operation denied.', 400)
		);

	fs.writeFile(path.join(__dirname, '..', 'files', id), content, err => {
		if (err) return next(new AppError('This file does not exits.', 400));

		return res.status(200).json({ message: 'Success' });
	});
};
