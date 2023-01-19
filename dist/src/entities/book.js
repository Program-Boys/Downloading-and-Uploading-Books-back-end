"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var allBooks = [];
var Book = /** @class */ (function () {
    function Book(_a) {
        var name = _a.name, gender = _a.gender;
        return Object.assign(this, {
            name: name,
            gender: gender,
        });
    }
    Book.create = function (_a) {
        var name = _a.name, gender = _a.gender;
        var book = new Book({
            name: name,
            gender: gender,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        allBooks.push(book);
        return book;
    };
    Book.list = function () {
        return allBooks;
    };
    Book.listOne = function (id) {
        var findBook = allBooks.find(function (book) { return book.id === id; });
        findBook = findBook;
        return findBook;
    };
    return Book;
}());
exports.Book = Book;
