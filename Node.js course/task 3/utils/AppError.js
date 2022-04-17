/**
 * AppError class extends Error
 */
class AppError extends Error {
	/**
	 *
	 * @param {string} message
	 * @param {number} statusCode
	 */
	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode || 500;

		Error.captureStackTrace(this, this.constructor);
	}
}

module.exports = AppError;
