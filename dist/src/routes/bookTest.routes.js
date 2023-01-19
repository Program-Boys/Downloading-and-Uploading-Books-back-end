"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var CreateBook_factory_1 = require("../models/Book/CreateBook.factory");
var routes = (0, express_1.Router)();
exports.routes = routes;
routes.post('/book', function (request, response) {
    (0, CreateBook_factory_1.createBookFactory)().handle(request, response);
});
