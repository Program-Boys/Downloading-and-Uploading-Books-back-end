"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = void 0;
var AppError_1 = require("../AppError");
var handleErrors = function (err, req, res, _) {
    if (err instanceof AppError_1.AppError) {
        return res.status(err.statusCode).json({
            status: 'error',
            statusCode: err.statusCode,
            message: err.message,
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
};
exports.handleErrors = handleErrors;
