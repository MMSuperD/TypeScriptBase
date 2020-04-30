"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var article_1 = require("./model/article");
var user_1 = require("./model/user");
// 创建一个用户
var user = new user_1.User();
// 这个是添加数据
user_1.userModel.add(user);
// 删除数据
user_1.userModel.delete(1);
// 更新数据
user_1.userModel.update(user, 1);
// 得到数据
user_1.userModel.get(1);
// 创建一个文章对象
var article = new article_1.Article();
// 这个是添加数据
article_1.articleModel.add(article);
// 删除数据
article_1.articleModel.delete(1);
// 更新数据
article_1.articleModel.update(article, 1);
// 得到数据
article_1.articleModel.get(1);
