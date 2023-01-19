"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var booksFiles_controller_1 = require("../controllers/BooksFiles/booksFiles.controller");
var multerConfig_1 = require("../multerConfig");
var upload = (0, multer_1.default)({ storage: multerConfig_1.storage });
var routes = (0, express_1.Router)();
var booksFilesController = new booksFiles_controller_1.BooksFilesController();
routes.get('', booksFilesController.list);
routes.patch('/:id', upload.single('Books'), booksFilesController.updateFile);
exports.default = routes;
