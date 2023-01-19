"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var User_controllers_1 = require("../controllers/User/User.controllers");
var verifyEmail_middleware_1 = __importDefault(require("../middlewares/verifyEmail.middleware"));
var routes = (0, express_1.Router)();
var userController = new User_controllers_1.UserController();
routes.post('', verifyEmail_middleware_1.default, userController.create);
routes.get('', userController.list);
routes.post('/login', userController.login);
exports.default = routes;
