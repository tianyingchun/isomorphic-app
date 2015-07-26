/*eslint-disable no-unused-vars*/
var React = require('react');
/*eslint-disable no-unused-vars*/
var Router = require('react-router');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var App = require('./components/App.jsx');
var Home = require('./components/Home.jsx');
var NotFound = require('./components/NotFound.jsx');
var About = require('./components/About.jsx');
var Inbox =  require('./components/Inbox.jsx');
var Message = require('./components/Message.jsx');

// declare our routes and their hierarchy
var routes = (
    React.createElement(Route, {path: "/", handler: App}, 
        React.createElement(DefaultRoute, {name: "home", handler: Home}), 
        React.createElement(Route, {name: "about", path: "about", handler: About}), 
        React.createElement(Route, {name: "inbox", path: "inbox", handler: Inbox}, 
            React.createElement(Route, {name: "message", path: "messages/:id", handler: Message}), 
            React.createElement(Route, {path: "/archive/messages/:id", handler: Message})
        ), 
        React.createElement(Redirect, {from: "redirect", to: "about"}), 
        React.createElement(NotFoundRoute, {handler: NotFound})
    )
);

module.exports = routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtZWQuanMiLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQztBQUNqQyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsaUNBQWlDO0FBQ2pDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFckMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUN6QixJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3ZDLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7QUFDekMsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7QUFFL0IsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDMUMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDNUMsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDcEQsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDOUMsSUFBSSxLQUFLLElBQUksT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDL0MsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7O0FBRWxELHlDQUF5QztBQUN6QyxJQUFJLE1BQU07SUFDTixvQkFBQyxLQUFLLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLEdBQUEsRUFBRyxDQUFDLE9BQUEsRUFBTyxDQUFFLEdBQUssQ0FBQSxFQUFBO1FBQzFCLG9CQUFDLFlBQVksRUFBQSxDQUFBLENBQUMsSUFBQSxFQUFJLENBQUMsTUFBQSxFQUFNLENBQUMsT0FBQSxFQUFPLENBQUUsSUFBSyxDQUFFLENBQUEsRUFBQTtRQUMxQyxvQkFBQyxLQUFLLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLE9BQUEsRUFBTyxDQUFDLElBQUEsRUFBSSxDQUFDLE9BQUEsRUFBTyxDQUFDLE9BQUEsRUFBTyxDQUFFLEtBQU0sQ0FBRSxDQUFBLEVBQUE7UUFDbEQsb0JBQUMsS0FBSyxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyxPQUFBLEVBQU8sQ0FBQyxJQUFBLEVBQUksQ0FBQyxPQUFBLEVBQU8sQ0FBQyxPQUFBLEVBQU8sQ0FBRSxLQUFPLENBQUEsRUFBQTtZQUM3QyxvQkFBQyxLQUFLLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLFNBQUEsRUFBUyxDQUFDLElBQUEsRUFBSSxDQUFDLGNBQUEsRUFBYyxDQUFDLE9BQUEsRUFBTyxDQUFFLE9BQVEsQ0FBRSxDQUFBLEVBQUE7WUFDN0Qsb0JBQUMsS0FBSyxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyx1QkFBQSxFQUF1QixDQUFDLE9BQUEsRUFBTyxDQUFFLE9BQVEsQ0FBRSxDQUFBO1FBQ25ELENBQUEsRUFBQTtRQUNSLG9CQUFDLFFBQVEsRUFBQSxDQUFBLENBQUMsSUFBQSxFQUFJLENBQUMsVUFBQSxFQUFVLENBQUMsRUFBQSxFQUFFLENBQUMsT0FBTyxDQUFBLENBQUcsQ0FBQSxFQUFBO1FBQ3ZDLG9CQUFDLGFBQWEsRUFBQSxDQUFBLENBQUMsT0FBQSxFQUFPLENBQUUsUUFBUyxDQUFBLENBQUcsQ0FBQTtJQUNoQyxDQUFBO0FBQ1osQ0FBQyxDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbi8qZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMqL1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xuXG52YXIgUm91dGUgPSBSb3V0ZXIuUm91dGU7XG52YXIgRGVmYXVsdFJvdXRlID0gUm91dGVyLkRlZmF1bHRSb3V0ZTtcbnZhciBOb3RGb3VuZFJvdXRlID0gUm91dGVyLk5vdEZvdW5kUm91dGU7XG52YXIgUmVkaXJlY3QgPSBSb3V0ZXIuUmVkaXJlY3Q7XG5cbnZhciBBcHAgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvQXBwLmpzeCcpO1xudmFyIEhvbWUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvSG9tZS5qc3gnKTtcbnZhciBOb3RGb3VuZCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Ob3RGb3VuZC5qc3gnKTtcbnZhciBBYm91dCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9BYm91dC5qc3gnKTtcbnZhciBJbmJveCA9ICByZXF1aXJlKCcuL2NvbXBvbmVudHMvSW5ib3guanN4Jyk7XG52YXIgTWVzc2FnZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9NZXNzYWdlLmpzeCcpO1xuXG4vLyBkZWNsYXJlIG91ciByb3V0ZXMgYW5kIHRoZWlyIGhpZXJhcmNoeVxudmFyIHJvdXRlcyA9IChcbiAgICA8Um91dGUgcGF0aD1cIi9cIiBoYW5kbGVyPXtBcHB9PlxuICAgICAgICA8RGVmYXVsdFJvdXRlIG5hbWU9XCJob21lXCIgaGFuZGxlcj17SG9tZX0vPlxuICAgICAgICA8Um91dGUgbmFtZT1cImFib3V0XCIgcGF0aD1cImFib3V0XCIgaGFuZGxlcj17QWJvdXR9Lz5cbiAgICAgICAgPFJvdXRlIG5hbWU9XCJpbmJveFwiIHBhdGg9XCJpbmJveFwiIGhhbmRsZXI9e0luYm94fT5cbiAgICAgICAgICAgIDxSb3V0ZSBuYW1lPVwibWVzc2FnZVwiIHBhdGg9XCJtZXNzYWdlcy86aWRcIiBoYW5kbGVyPXtNZXNzYWdlfS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcmNoaXZlL21lc3NhZ2VzLzppZFwiIGhhbmRsZXI9e01lc3NhZ2V9Lz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJlZGlyZWN0IGZyb209XCJyZWRpcmVjdFwiIHRvPVwiYWJvdXRcIiAvPlxuICAgICAgICA8Tm90Rm91bmRSb3V0ZSBoYW5kbGVyPXtOb3RGb3VuZH0gLz5cbiAgICA8L1JvdXRlPlxuKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXM7Il19