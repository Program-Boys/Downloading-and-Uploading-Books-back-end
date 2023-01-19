"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserFactory = void 0;
var PrismaRepositorys_1 = require("../../repositories/prisma/PrismaRepositorys");
var CreateUser_controller_1 = require("./CreateUser.controller");
var CreateUser_service_1 = require("./CreateUser.service");
var createUserFactory = function () {
    var usersRepository = new PrismaRepositorys_1.PrismaUsersRepository();
    var createUser = new CreateUser_service_1.CreateUserService(usersRepository);
    var createUserController = new CreateUser_controller_1.CreateUserController(createUser);
    return createUserController;
};
exports.createUserFactory = createUserFactory;
