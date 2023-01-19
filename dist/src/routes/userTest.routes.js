"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var CreateUser_factory_1 = require("../models/User/CreateUser.factory");
var routes = (0, express_1.Router)();
exports.routes = routes;
routes.post('/user', function (request, response) {
    (0, CreateUser_factory_1.createUserFactory)().handle(request, response);
});
