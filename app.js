var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require("./config")();
var route = require("./config/route");
var debug = require('debug')(config.appName);

//For requiring `.jsx` files as Node modules
require('node-jsx').install({
    extension: '.jsx'
});

var React = require('react');
// May we should use react Async to render html in server side.
var ReactAsync = require('react-async');
var ReactRouter = require('react-router');
var ReactExpressLocation = require('react-router-express');
var appRoutes = require("./public/react/routes.jsx");


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


// Render React on Server
app.use(function(req, res) {
    var location = new ReactExpressLocation(req.url, res);
    debug('location: ', location);
    ReactRouter.run(appRoutes, location, function(Root, state) {
        // res.setHeader('Content-Type', 'text/html');
        var appFactory = React.createFactory(Root);
        var markup = React.renderToString(appFactory());
        // res.send('<!DOCTYPE html>' + markup);
        res.render('index', {
            content:  markup
        });
    });
});


// Initialize application routing configuraton.
route.init(app);

module.exports = app;
