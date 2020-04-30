"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../modules/db");
var Article = /** @class */ (function () {
    function Article() {
    }
    return Article;
}());
exports.Article = Article;
var articleModel = new db_1.MySqlDB();
exports.articleModel = articleModel;
