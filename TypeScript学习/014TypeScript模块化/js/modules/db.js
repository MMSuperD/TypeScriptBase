"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 定义操作MySql数据库的类
var MySqlDB = /** @class */ (function () {
    function MySqlDB() {
        console.log('建立数据库的链接');
    }
    MySqlDB.prototype.add = function (info) {
        console.log(info);
        console.log('数据添加成功');
        return true;
    };
    MySqlDB.prototype.update = function (info, id) {
        console.log('更新数据成功');
        return true;
    };
    MySqlDB.prototype.delete = function (id) {
        console.log('删除数据成功');
        return true;
    };
    MySqlDB.prototype.get = function (id) {
        return [
            {
                'title': 'I am a handsome boy',
                'name': 'My name is fan'
            },
            {
                'title': 'I am a handsome boy',
                'name': 'My name is fan'
            }
        ];
    };
    return MySqlDB;
}());
exports.MySqlDB = MySqlDB;
// 定义操作Sqlite数据库的类
var SqliteDB = /** @class */ (function () {
    function SqliteDB() {
        console.log('建立数据库的链接');
    }
    SqliteDB.prototype.add = function (info) {
        console.log(info);
        console.log('数据添加成功');
        return true;
    };
    SqliteDB.prototype.update = function (info, id) {
        console.log('更新数据成功');
        return true;
    };
    SqliteDB.prototype.delete = function (id) {
        console.log('删除数据成功');
        return true;
    };
    SqliteDB.prototype.get = function (id) {
        return [
            {
                'title': 'I am a handsome boy',
                'name': 'My name is fan'
            },
            {
                'title': 'I am a handsome boy',
                'name': 'My name is fan'
            }
        ];
    };
    return SqliteDB;
}());
exports.SqliteDB = SqliteDB;
