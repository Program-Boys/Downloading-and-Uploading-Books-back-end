"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var handleError_1 = require("./errors/handleError");
var books_routes_1 = __importDefault(require("./routes/books.routes"));
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var booksFiles_routes_1 = __importDefault(require("./routes/booksFiles.routes"));
var cors = require('cors');
var app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.use('/files', express_1.default.static('uploads'));
app.use('/booksFiles', booksFiles_routes_1.default);
app.use('/books', books_routes_1.default);
app.use('/user', user_routes_1.default);
app.use(handleError_1.handleErrors);
exports.default = app;
