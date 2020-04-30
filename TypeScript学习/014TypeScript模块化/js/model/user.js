"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../modules/db");
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var userModel = new db_1.MySqlDB();
exports.userModel = userModel;
