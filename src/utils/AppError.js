class AppError extends Error {
  constructor(message, statusCode, code) {
    super(message);

    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = true;
  }
}

module.exports = AppError;
