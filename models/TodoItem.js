var util = require('util');
var BaseModel = require("./BaseModel");

function TodoItem(id, title, description) {
    BaseModel.call(this, "TodoItem");
    this.id = id;
    this.title = title;
    this.description = description;
};

util.inherits(TodoItem, BaseModel);

module.exports = TodoItem;
