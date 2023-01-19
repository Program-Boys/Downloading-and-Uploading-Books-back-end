"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBookFactory = void 0;
var PrismaRepositorys_1 = require("../../repositories/prisma/PrismaRepositorys");
var CreateBook_controller_1 = require("./CreateBook.controller");
var CreateBook_service_1 = require("./CreateBook.service");
var createBookFactory = function () {
    var booksRepository = new PrismaRepositorys_1.PrismaBooksRepository();
    var createBook = new CreateBook_service_1.CreateBookService(booksRepository);
    var createBookController = new CreateBook_controller_1.CreateBookController(createBook);
    return createBookController;
};
exports.createBookFactory = createBookFactory;
