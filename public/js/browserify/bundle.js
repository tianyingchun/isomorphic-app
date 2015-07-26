(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var About = React.createClass({displayName: "About",
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "About"), 
        React.createElement(RouteHandler, null)
      )
    );
  }
});
module.exports = About;

},{"react":"react","react-router":"react-router"}],2:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var App = React.createClass({displayName: "App",

  //mixins: [FluxibleMixin],

  //statics: {
  //    storeListeners: [ApplicationStore]
  //},
  contextTypes: {
    executeAction: React.PropTypes.func.isRequired
  },
  //onChange: function () {
  //    var state = this.getStore(ApplicationStore).getState();
  //    this.setState(state);
  //},
  render: function () {
    return (
      React.createElement("div", null, 
          React.createElement("ul", null, 
              React.createElement("li", null, 
                  React.createElement(Link, {to: "home"}, "home")
              ), 
              React.createElement("li", null, 
                  React.createElement(Link, {to: "inbox"}, "inbox")
              ), 
              React.createElement("li", null, 
                  React.createElement(Link, {to: "about"}, "about")
              ), 
              React.createElement("li", null, 
                  React.createElement("a", {href: "/notfound"}, "notfound")
              ), 
              React.createElement("li", null, 
                  React.createElement("a", {href: "/redirect"}, "redirect")
              )
          ), 
          React.createElement("h1", null, "App"), 
          React.createElement(RouteHandler, null)
      )
      );
  }
});

module.exports = App;

},{"react":"react","react-router":"react-router"}],3:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
var React = require('react');
// var Router = require('react-router');
// var RouteHandler = Router.RouteHandler;

var Home = React.createClass({displayName: "Home",
  render: function () {
    return (
      React.createElement("div", null, 
          React.createElement("h1", null, "Home")
      )
    );
  }
});

module.exports = Home;

},{"react":"react"}],4:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Inbox = React.createClass({displayName: "Inbox",
  render: function () {
    return (
      React.createElement("div", null, 
          React.createElement("h1", null, "Inbox"), 
          React.createElement("p", null, 
              React.createElement(Link, {to: "message", params: {id: 3}}, "Message3"), 
              React.createElement("br", null), 
              React.createElement("a", {href: "#archive/messages/4"}, " Message4")
          ), 
          React.createElement(RouteHandler, null)
      )
    );
  }
});

module.exports = Inbox;

},{"react":"react","react-router":"react-router"}],5:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
var React = require('react');
// var Router = require('react-router');
// var RouteHandler = Router.RouteHandler;
var Message = React.createClass({displayName: "Message",

  getInitialState: function () {
    return {
      message: 'loading'
    };
  },

  componentDidMount: function () {
    // from the path `/inbox/messages/:id`
    // var id = this.props.params.id;

    // this.setState({
    //   message: 'componentDidMount' + id
    // });

  },
  render: function () {
    return (
      React.createElement("div", null, 
          this.state.message
      )
    );
  }

});

module.exports = Message;

},{"react":"react"}],6:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
var React = require('react');
// var Router = require('react-router');
// var RouteHandler = Router.RouteHandler;

var NotFound = React.createClass({displayName: "NotFound",
  render: function () {
    return (
      React.createElement("div", null, 
          React.createElement("h1", null, "!  NotFound")
      )
    );
  }
});

module.exports = NotFound;

},{"react":"react"}],7:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

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
var Inbox = require('./components/Inbox.jsx');
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
        React.createElement(NotFoundRoute, {handler: NotFound})
    )
);

module.exports = routes;

},{"./components/About.jsx":1,"./components/App.jsx":2,"./components/Home.jsx":3,"./components/Inbox.jsx":4,"./components/Message.jsx":5,"./components/NotFound.jsx":6,"react":"react","react-router":"react-router"}],8:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
var React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');

if (typeof window !== 'undefined') {
  window.onload = function () {
    Router
    // Runs the router, similiar to the Router.run method. You can think of it as an
    // initializer/constructor method.
      .create({
        routes: routes,
        location: Router.HistoryLocation,
        scrollBehavior: Router.ScrollToTopBehavior
      })
      // This is our callback function, whenever the url changes it will be called again.
      // Handler: The ReactComponent class that will be rendered
      .run(function(Root)  {
        React.render(React.createElement(Root, null), document.body);
      });
  };
}
module.exports = routes;

},{"./routes.jsx":7,"react":"react","react-router":"react-router"}]},{},[1,2,3,4,5,6,7,8])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZ2xvZG9uL3RpYW55Yy9naXQvaXNvbW9ycGhpYy1hcHAvcHVibGljL3JlYWN0L2NvbXBvbmVudHMvQWJvdXQuanN4IiwiL1VzZXJzL2dsb2Rvbi90aWFueWMvZ2l0L2lzb21vcnBoaWMtYXBwL3B1YmxpYy9yZWFjdC9jb21wb25lbnRzL0FwcC5qc3giLCIvVXNlcnMvZ2xvZG9uL3RpYW55Yy9naXQvaXNvbW9ycGhpYy1hcHAvcHVibGljL3JlYWN0L2NvbXBvbmVudHMvSG9tZS5qc3giLCIvVXNlcnMvZ2xvZG9uL3RpYW55Yy9naXQvaXNvbW9ycGhpYy1hcHAvcHVibGljL3JlYWN0L2NvbXBvbmVudHMvSW5ib3guanN4IiwiL1VzZXJzL2dsb2Rvbi90aWFueWMvZ2l0L2lzb21vcnBoaWMtYXBwL3B1YmxpYy9yZWFjdC9jb21wb25lbnRzL01lc3NhZ2UuanN4IiwiL1VzZXJzL2dsb2Rvbi90aWFueWMvZ2l0L2lzb21vcnBoaWMtYXBwL3B1YmxpYy9yZWFjdC9jb21wb25lbnRzL05vdEZvdW5kLmpzeCIsIi9Vc2Vycy9nbG9kb24vdGlhbnljL2dpdC9pc29tb3JwaGljLWFwcC9wdWJsaWMvcmVhY3Qvcm91dGVzLmpzeCIsIi9Vc2Vycy9nbG9kb24vdGlhbnljL2dpdC9pc29tb3JwaGljLWFwcC9wdWJsaWMvcmVhY3Qvc3RhcnQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0dBRUc7QUFDSCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3JDLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7O0FBRXZDLElBQUksMkJBQTJCLHFCQUFBO0VBQzdCLE1BQU0sRUFBRSxZQUFZLENBQUM7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QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7O0FDbEN4Qjs7R0FFRztBQUNILElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDckMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztBQUVyQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtFQUNqQyxNQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztBQUMvQixJQUFJLE1BQU07QUFDVjs7T0FFTyxNQUFNLENBQUM7UUFDTixNQUFNLEVBQUUsTUFBTTtRQUNkLFFBQVEsRUFBRSxNQUFNLENBQUMsZUFBZTtRQUNoQyxjQUFjLEVBQUUsTUFBTSxDQUFDLG1CQUFtQjtBQUNsRCxPQUFPLENBQUM7QUFDUjs7T0FFTyxHQUFHLENBQUMsUUFBQSxDQUFDLElBQUksQ0FBQSxLQUFLLENBQUM7UUFDZCxLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFDLElBQUksRUFBQSxJQUFBLENBQUcsQ0FBQSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN2QyxDQUFDLENBQUM7R0FDTixDQUFDO0NBQ0g7QUFDRCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcblxudmFyIEFib3V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkFib3V0PC9oMT5cbiAgICAgICAgPFJvdXRlSGFuZGxlci8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gQWJvdXQ7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcbnZhciBMaW5rID0gUm91dGVyLkxpbms7XG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIC8vbWl4aW5zOiBbRmx1eGlibGVNaXhpbl0sXG5cbiAgLy9zdGF0aWNzOiB7XG4gIC8vICAgIHN0b3JlTGlzdGVuZXJzOiBbQXBwbGljYXRpb25TdG9yZV1cbiAgLy99LFxuICBjb250ZXh0VHlwZXM6IHtcbiAgICBleGVjdXRlQWN0aW9uOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH0sXG4gIC8vb25DaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgLy8gICAgdmFyIHN0YXRlID0gdGhpcy5nZXRTdG9yZShBcHBsaWNhdGlvblN0b3JlKS5nZXRTdGF0ZSgpO1xuICAvLyAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgLy99LFxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiaG9tZVwiID5ob21lPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz1cImluYm94XCIgPmluYm94PC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz1cImFib3V0XCIgPmFib3V0PC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL25vdGZvdW5kXCI+bm90Zm91bmQ8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcmVkaXJlY3RcIj5yZWRpcmVjdDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxoMT5BcHA8L2gxPlxuICAgICAgICAgIDxSb3V0ZUhhbmRsZXIvPlxuICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG4vLyB2YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG4vLyB2YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcblxudmFyIEhvbWUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhvbWU7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcbnZhciBMaW5rID0gUm91dGVyLkxpbms7XG5cbnZhciBJbmJveCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPkluYm94PC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCJtZXNzYWdlXCIgcGFyYW1zPXt7aWQ6IDN9fT5NZXNzYWdlMzwvTGluaz5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNhcmNoaXZlL21lc3NhZ2VzLzRcIj4gTWVzc2FnZTQ8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxSb3V0ZUhhbmRsZXIvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW5ib3g7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG4vLyB2YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG4vLyB2YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcbnZhciBNZXNzYWdlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiAnbG9hZGluZydcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gZnJvbSB0aGUgcGF0aCBgL2luYm94L21lc3NhZ2VzLzppZGBcbiAgICAvLyB2YXIgaWQgPSB0aGlzLnByb3BzLnBhcmFtcy5pZDtcblxuICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgbWVzc2FnZTogJ2NvbXBvbmVudERpZE1vdW50JyArIGlkXG4gICAgLy8gfSk7XG5cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWVzc2FnZTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbi8vIHZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbi8vIHZhciBSb3V0ZUhhbmRsZXIgPSBSb3V0ZXIuUm91dGVIYW5kbGVyO1xuXG52YXIgTm90Rm91bmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT4hICBOb3RGb3VuZDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOb3RGb3VuZDtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuXG4vKmVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG4vKmVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzKi9cbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcblxudmFyIFJvdXRlID0gUm91dGVyLlJvdXRlO1xudmFyIERlZmF1bHRSb3V0ZSA9IFJvdXRlci5EZWZhdWx0Um91dGU7XG52YXIgTm90Rm91bmRSb3V0ZSA9IFJvdXRlci5Ob3RGb3VuZFJvdXRlO1xudmFyIFJlZGlyZWN0ID0gUm91dGVyLlJlZGlyZWN0O1xuXG52YXIgQXBwID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0FwcC5qc3gnKTtcbnZhciBIb21lID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0hvbWUuanN4Jyk7XG52YXIgTm90Rm91bmQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTm90Rm91bmQuanN4Jyk7XG52YXIgQWJvdXQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvQWJvdXQuanN4Jyk7XG52YXIgSW5ib3ggPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvSW5ib3guanN4Jyk7XG52YXIgTWVzc2FnZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9NZXNzYWdlLmpzeCcpO1xuXG4vLyBkZWNsYXJlIG91ciByb3V0ZXMgYW5kIHRoZWlyIGhpZXJhcmNoeVxudmFyIHJvdXRlcyA9IChcbiAgICA8Um91dGUgcGF0aD1cIi9cIiBoYW5kbGVyPXtBcHB9PlxuICAgICAgICA8RGVmYXVsdFJvdXRlIG5hbWU9XCJob21lXCIgaGFuZGxlcj17SG9tZX0vPlxuICAgICAgICA8Um91dGUgbmFtZT1cImFib3V0XCIgcGF0aD1cImFib3V0XCIgaGFuZGxlcj17QWJvdXR9Lz5cbiAgICAgICAgPFJvdXRlIG5hbWU9XCJpbmJveFwiIHBhdGg9XCJpbmJveFwiIGhhbmRsZXI9e0luYm94fT5cbiAgICAgICAgICAgIDxSb3V0ZSBuYW1lPVwibWVzc2FnZVwiIHBhdGg9XCJtZXNzYWdlcy86aWRcIiBoYW5kbGVyPXtNZXNzYWdlfS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcmNoaXZlL21lc3NhZ2VzLzppZFwiIGhhbmRsZXI9e01lc3NhZ2V9Lz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPE5vdEZvdW5kUm91dGUgaGFuZGxlcj17Tm90Rm91bmR9IC8+XG4gICAgPC9Sb3V0ZT5cbik7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVzO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xudmFyIHJvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzLmpzeCcpO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBSb3V0ZXJcbiAgICAvLyBSdW5zIHRoZSByb3V0ZXIsIHNpbWlsaWFyIHRvIHRoZSBSb3V0ZXIucnVuIG1ldGhvZC4gWW91IGNhbiB0aGluayBvZiBpdCBhcyBhblxuICAgIC8vIGluaXRpYWxpemVyL2NvbnN0cnVjdG9yIG1ldGhvZC5cbiAgICAgIC5jcmVhdGUoe1xuICAgICAgICByb3V0ZXM6IHJvdXRlcyxcbiAgICAgICAgbG9jYXRpb246IFJvdXRlci5IaXN0b3J5TG9jYXRpb24sXG4gICAgICAgIHNjcm9sbEJlaGF2aW9yOiBSb3V0ZXIuU2Nyb2xsVG9Ub3BCZWhhdmlvclxuICAgICAgfSlcbiAgICAgIC8vIFRoaXMgaXMgb3VyIGNhbGxiYWNrIGZ1bmN0aW9uLCB3aGVuZXZlciB0aGUgdXJsIGNoYW5nZXMgaXQgd2lsbCBiZSBjYWxsZWQgYWdhaW4uXG4gICAgICAvLyBIYW5kbGVyOiBUaGUgUmVhY3RDb21wb25lbnQgY2xhc3MgdGhhdCB3aWxsIGJlIHJlbmRlcmVkXG4gICAgICAucnVuKChSb290KSA9PiB7XG4gICAgICAgIFJlYWN0LnJlbmRlcig8Um9vdCAvPiwgZG9jdW1lbnQuYm9keSk7XG4gICAgICB9KTtcbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gcm91dGVzO1xuIl19
