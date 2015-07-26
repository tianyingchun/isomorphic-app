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
var addons = require('react/addons');
var App = React.createClass({displayName: "App",

  mixins: [addons.PureRenderMixin],

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
      React.createElement("div", {className: "wrapper"}, 
        React.createElement("header", {id: "header", className: "navbar navbar-static-top"}, 
          React.createElement("nav", {className: "collapse navbar-collapse"}, 
            React.createElement("ul", {className: "nav navbar-nav"}, 
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
            )
          )
        ), 
        React.createElement("div", {id: "page", className: "container"}, 
            React.createElement(RouteHandler, null)
        )
      )
      );
  }
});

module.exports = App;

},{"react":"react","react-router":"react-router","react/addons":"react/addons"}],3:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
var React = require('react');
// var Router = require('react-router');
// var RouteHandler = Router.RouteHandler;
var HomeTitle = React.createClass({displayName: "HomeTitle",
  propTypes: {
    title: React.PropTypes.number
  },
  render: function () {
    return (
      React.createElement("span", null, this.props.title, " ")
    );
  }
});

var Home = React.createClass({displayName: "Home",

  render: function () {
    var title = 'default title';
    if ("development" === 'development') {
      title = 'development only';
    } else {
      title = 'production only';
    }
    return (
      React.createElement("div", null, 
          React.createElement("h1", null, "Home"), 
          React.createElement(HomeTitle, {title: title})
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
    var id = this.props.params.id;

    this.setState({
      message: 'componentDidMount' + id
    });

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

// var Route = Router.Route;
// var DefaultRoute = Router.DefaultRoute;
// var NotFoundRoute = Router.NotFoundRoute;
// var Redirect = Router.Redirect;

var $__0=       Router,Route=$__0.Route,DefaultRoute=$__0.DefaultRoute,NotFoundRoute=$__0.NotFoundRoute,Redirect=$__0.Redirect;

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
        React.render(React.createElement(Root, null), document.getElementById('react-app'));
      });
  };
}
module.exports = routes;

},{"./routes.jsx":7,"react":"react","react-router":"react-router"}]},{},[1,2,3,4,5,6,7,8])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZ2xvZG9uL3RpYW55Yy9naXQvaXNvbW9ycGhpYy1hcHAvcHVibGljL3JlYWN0L2NvbXBvbmVudHMvQWJvdXQuanN4IiwiL1VzZXJzL2dsb2Rvbi90aWFueWMvZ2l0L2lzb21vcnBoaWMtYXBwL3B1YmxpYy9yZWFjdC9jb21wb25lbnRzL0FwcC5qc3giLCIvVXNlcnMvZ2xvZG9uL3RpYW55Yy9naXQvaXNvbW9ycGhpYy1hcHAvcHVibGljL3JlYWN0L2NvbXBvbmVudHMvSG9tZS5qc3giLCIvVXNlcnMvZ2xvZG9uL3RpYW55Yy9naXQvaXNvbW9ycGhpYy1hcHAvcHVibGljL3JlYWN0L2NvbXBvbmVudHMvSW5ib3guanN4IiwiL1VzZXJzL2dsb2Rvbi90aWFueWMvZ2l0L2lzb21vcnBoaWMtYXBwL3B1YmxpYy9yZWFjdC9jb21wb25lbnRzL01lc3NhZ2UuanN4IiwiL1VzZXJzL2dsb2Rvbi90aWFueWMvZ2l0L2lzb21vcnBoaWMtYXBwL3B1YmxpYy9yZWFjdC9jb21wb25lbnRzL05vdEZvdW5kLmpzeCIsIi9Vc2Vycy9nbG9kb24vdGlhbnljL2dpdC9pc29tb3JwaGljLWFwcC9wdWJsaWMvcmVhY3Qvcm91dGVzLmpzeCIsIi9Vc2Vycy9nbG9kb24vdGlhbnljL2dpdC9pc29tb3JwaGljLWFwcC9wdWJsaWMvcmVhY3Qvc3RhcnQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0dBRUc7QUFDSCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3JDLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7O0FBRXZDLElBQUksMkJBQTJCLHFCQUFBO0VBQzdCLE1BQU0sRUFBRSxZQUFZLENBQUM7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eEI7O0dBRUc7QUFDSCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3JDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFckMsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7RUFDakMsTUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7QUFDL0IsSUFBSSxNQUFNO0FBQ1Y7O09BRU8sTUFBTSxDQUFDO1FBQ04sTUFBTSxFQUFFLE1BQU07UUFDZCxRQUFRLEVBQUUsTUFBTSxDQUFDLGVBQWU7UUFDaEMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxtQkFBbUI7QUFDbEQsT0FBTyxDQUFDO0FBQ1I7O09BRU8sR0FBRyxDQUFDLFFBQUEsQ0FBQyxJQUFJLENBQUEsS0FBSyxDQUFDO1FBQ2QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxJQUFJLEVBQUEsSUFBQSxDQUFHLENBQUEsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7T0FDOUQsQ0FBQyxDQUFDO0dBQ04sQ0FBQztDQUNIO0FBQ0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xudmFyIFJvdXRlSGFuZGxlciA9IFJvdXRlci5Sb3V0ZUhhbmRsZXI7XG5cbnZhciBBYm91dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5BYm91dDwvaDE+XG4gICAgICAgIDxSb3V0ZUhhbmRsZXIvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IEFib3V0O1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xudmFyIFJvdXRlSGFuZGxlciA9IFJvdXRlci5Sb3V0ZUhhbmRsZXI7XG52YXIgTGluayA9IFJvdXRlci5MaW5rO1xudmFyIGFkZG9ucyA9IHJlcXVpcmUoJ3JlYWN0L2FkZG9ucycpO1xudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBtaXhpbnM6IFthZGRvbnMuUHVyZVJlbmRlck1peGluXSxcblxuICAvL3N0YXRpY3M6IHtcbiAgLy8gICAgc3RvcmVMaXN0ZW5lcnM6IFtBcHBsaWNhdGlvblN0b3JlXVxuICAvL30sXG4gIGNvbnRleHRUeXBlczoge1xuICAgIGV4ZWN1dGVBY3Rpb246IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfSxcbiAgLy9vbkNoYW5nZTogZnVuY3Rpb24gKCkge1xuICAvLyAgICB2YXIgc3RhdGUgPSB0aGlzLmdldFN0b3JlKEFwcGxpY2F0aW9uU3RvcmUpLmdldFN0YXRlKCk7XG4gIC8vICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAvL30sXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxoZWFkZXIgaWQ9XCJoZWFkZXJcIiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLXN0YXRpYy10b3BcIj5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cImhvbWVcIiA+aG9tZTwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCJpbmJveFwiID5pbmJveDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCJhYm91dFwiID5hYm91dDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ub3Rmb3VuZFwiPm5vdGZvdW5kPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3JlZGlyZWN0XCI+cmVkaXJlY3Q8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGlkPVwicGFnZVwiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPFJvdXRlSGFuZGxlci8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG4vLyB2YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG4vLyB2YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcbnZhciBIb21lVGl0bGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c3Bhbj57dGhpcy5wcm9wcy50aXRsZX0gPC9zcGFuPlxuICAgICk7XG4gIH1cbn0pO1xuXG52YXIgSG9tZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGl0bGUgPSAnZGVmYXVsdCB0aXRsZSc7XG4gICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdGl0bGUgPSAnZGV2ZWxvcG1lbnQgb25seSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlID0gJ3Byb2R1Y3Rpb24gb25seSc7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgICAgICA8SG9tZVRpdGxlIHRpdGxlPXt0aXRsZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhvbWU7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcbnZhciBMaW5rID0gUm91dGVyLkxpbms7XG5cbnZhciBJbmJveCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPkluYm94PC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCJtZXNzYWdlXCIgcGFyYW1zPXt7aWQ6IDN9fT5NZXNzYWdlMzwvTGluaz5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNhcmNoaXZlL21lc3NhZ2VzLzRcIj4gTWVzc2FnZTQ8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxSb3V0ZUhhbmRsZXIvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW5ib3g7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG4vLyB2YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG4vLyB2YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcbnZhciBNZXNzYWdlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiAnbG9hZGluZydcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gZnJvbSB0aGUgcGF0aCBgL2luYm94L21lc3NhZ2VzLzppZGBcbiAgICB2YXIgaWQgPSB0aGlzLnByb3BzLnBhcmFtcy5pZDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWVzc2FnZTogJ2NvbXBvbmVudERpZE1vdW50JyArIGlkXG4gICAgfSk7XG5cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWVzc2FnZTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbi8vIHZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbi8vIHZhciBSb3V0ZUhhbmRsZXIgPSBSb3V0ZXIuUm91dGVIYW5kbGVyO1xuXG52YXIgTm90Rm91bmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT4hICBOb3RGb3VuZDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOb3RGb3VuZDtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuXG4vKmVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG4vKmVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzKi9cbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcblxuLy8gdmFyIFJvdXRlID0gUm91dGVyLlJvdXRlO1xuLy8gdmFyIERlZmF1bHRSb3V0ZSA9IFJvdXRlci5EZWZhdWx0Um91dGU7XG4vLyB2YXIgTm90Rm91bmRSb3V0ZSA9IFJvdXRlci5Ob3RGb3VuZFJvdXRlO1xuLy8gdmFyIFJlZGlyZWN0ID0gUm91dGVyLlJlZGlyZWN0O1xuXG52YXIgeyBSb3V0ZSwgRGVmYXVsdFJvdXRlLCBOb3RGb3VuZFJvdXRlLCBSZWRpcmVjdCB9ID0gUm91dGVyO1xuXG52YXIgQXBwID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0FwcC5qc3gnKTtcbnZhciBIb21lID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0hvbWUuanN4Jyk7XG52YXIgTm90Rm91bmQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTm90Rm91bmQuanN4Jyk7XG52YXIgQWJvdXQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvQWJvdXQuanN4Jyk7XG52YXIgSW5ib3ggPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvSW5ib3guanN4Jyk7XG52YXIgTWVzc2FnZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9NZXNzYWdlLmpzeCcpO1xuXG4vLyBkZWNsYXJlIG91ciByb3V0ZXMgYW5kIHRoZWlyIGhpZXJhcmNoeVxudmFyIHJvdXRlcyA9IChcbiAgICA8Um91dGUgcGF0aD1cIi9cIiBoYW5kbGVyPXtBcHB9PlxuICAgICAgICA8RGVmYXVsdFJvdXRlIG5hbWU9XCJob21lXCIgaGFuZGxlcj17SG9tZX0vPlxuICAgICAgICA8Um91dGUgbmFtZT1cImFib3V0XCIgcGF0aD1cImFib3V0XCIgaGFuZGxlcj17QWJvdXR9Lz5cbiAgICAgICAgPFJvdXRlIG5hbWU9XCJpbmJveFwiIHBhdGg9XCJpbmJveFwiIGhhbmRsZXI9e0luYm94fT5cbiAgICAgICAgICAgIDxSb3V0ZSBuYW1lPVwibWVzc2FnZVwiIHBhdGg9XCJtZXNzYWdlcy86aWRcIiBoYW5kbGVyPXtNZXNzYWdlfS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcmNoaXZlL21lc3NhZ2VzLzppZFwiIGhhbmRsZXI9e01lc3NhZ2V9Lz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPE5vdEZvdW5kUm91dGUgaGFuZGxlcj17Tm90Rm91bmR9IC8+XG4gICAgPC9Sb3V0ZT5cbik7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVzO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xudmFyIHJvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzLmpzeCcpO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBSb3V0ZXJcbiAgICAvLyBSdW5zIHRoZSByb3V0ZXIsIHNpbWlsaWFyIHRvIHRoZSBSb3V0ZXIucnVuIG1ldGhvZC4gWW91IGNhbiB0aGluayBvZiBpdCBhcyBhblxuICAgIC8vIGluaXRpYWxpemVyL2NvbnN0cnVjdG9yIG1ldGhvZC5cbiAgICAgIC5jcmVhdGUoe1xuICAgICAgICByb3V0ZXM6IHJvdXRlcyxcbiAgICAgICAgbG9jYXRpb246IFJvdXRlci5IaXN0b3J5TG9jYXRpb24sXG4gICAgICAgIHNjcm9sbEJlaGF2aW9yOiBSb3V0ZXIuU2Nyb2xsVG9Ub3BCZWhhdmlvclxuICAgICAgfSlcbiAgICAgIC8vIFRoaXMgaXMgb3VyIGNhbGxiYWNrIGZ1bmN0aW9uLCB3aGVuZXZlciB0aGUgdXJsIGNoYW5nZXMgaXQgd2lsbCBiZSBjYWxsZWQgYWdhaW4uXG4gICAgICAvLyBIYW5kbGVyOiBUaGUgUmVhY3RDb21wb25lbnQgY2xhc3MgdGhhdCB3aWxsIGJlIHJlbmRlcmVkXG4gICAgICAucnVuKChSb290KSA9PiB7XG4gICAgICAgIFJlYWN0LnJlbmRlcig8Um9vdCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LWFwcCcpKTtcbiAgICAgIH0pO1xuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXM7XG4iXX0=
