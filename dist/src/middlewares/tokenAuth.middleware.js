"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var tokenAuthMiddleware = function (req, res, next) {
    var _a;
    var token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, function (err, decoded) {
        if (err) {
            return res.status(403).json({
                message: 'Invalid token',
            });
        }
        return next();
    });
};
exports.default = tokenAuthMiddleware;
