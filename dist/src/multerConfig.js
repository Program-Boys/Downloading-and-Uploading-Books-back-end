"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
var path_1 = __importDefault(require("path"));
var multer_1 = __importDefault(require("multer"));
exports.storage = multer_1.default.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path_1.default.resolve('uploads'));
    },
    filename: function (req, file, callback) {
        var time = new Date().getTime();
        callback(null, "".concat(time, "_").concat(file.originalname));
    },
});
