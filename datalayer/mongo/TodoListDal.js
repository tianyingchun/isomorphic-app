// https://github.com/kriskowal/q
var Q = require("q");
var logger = require('../../helpers/log');
var dataProvider = require("../../dataProvider");
var baseDal = require("../baseDal");
var TodoItemModel = dataProvider.getModel("TodoItem");

function TodoListDal() {
    // 返回所有的分类
    this.getTodoList = function() {
        var todoList = [];
        for (var i = 0; i < 10; i++) {
            todoList.push(new TodoItemModel(i, "title" + i, "desctiption" + i));
        };
        return baseDal.promise(todoList);
    };
};

module.exports = TodoListDal;
