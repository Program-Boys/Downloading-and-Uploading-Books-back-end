"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var allUsers = [];
var User = /** @class */ (function () {
    function User(_a) {
        var email = _a.email, password = _a.password;
        return Object.assign(this, {
            email: email,
            password: password,
        });
    }
    User.create = function (_a) {
        var email = _a.email, password = _a.password;
        var user = new User({ email: email, password: password });
        allUsers.push(user);
        return user;
    };
    User.list = function () {
        return allUsers;
    };
    return User;
}());
exports.User = User;
