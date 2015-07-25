var express = require('express');
var https = require('http');
var fs = require("fs");

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var cons = require('consolidate');

var config = require("./config")();
var route = require("./config/route");
var debug = require('debug')(config.appName);
var app = express();

// debug version.
app.set("env", config.mode);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());


// express.static.mime.define({
//  'text/xml': ['plist']
// });
// the default is "/" capture the static dir as all static resource root.
app.use("/static", express.static(path.join(__dirname, 'public')));

// initialize application route config.
route.init(app);

module.exports = app;