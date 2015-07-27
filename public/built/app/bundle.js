(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
var React = require('react');

// the application entry
var App = require('./components/App.jsx');

var BootStrap = React.createClass({displayName: "BootStrap",
  render: function () {
    return (
      React.createElement("html", null, 
			React.createElement("head", {lang: "en"}, 
				React.createElement("base", {href: "/"}), 
				React.createElement("meta", {charSet: "utf-8"}), 
				React.createElement("meta", {httpEquiv: "X-UA-Compatible", content: "IE=edge"}), 
				React.createElement("meta", {name: "viewport", content: "width=device-width, initial-scale=1"}), 
				React.createElement("title", null, "The isomorphic app sample"), 
				React.createElement("link", {href: "static/built/styles/bootstrap.css", rel: "stylesheet"}), 
				React.createElement("script", {type: "text/javascript", src: "/static/built/vendor/react.js"}), 
				React.createElement("script", {type: "text/javascript", src: "/static/built/app/bundle.js"})
			), 
			React.createElement("body", null, 
				React.createElement(App, null)
			)
			)
    );
  }
});

module.exports = BootStrap;

},{"./components/App.jsx":3,"react":"react"}],2:[function(require,module,exports){
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

},{"react":"react","react-router":"react-router"}],3:[function(require,module,exports){
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

},{"react":"react","react-router":"react-router","react/addons":"react/addons"}],4:[function(require,module,exports){
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

},{"react":"react"}],5:[function(require,module,exports){
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

},{"react":"react","react-router":"react-router"}],6:[function(require,module,exports){
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

},{"react":"react"}],7:[function(require,module,exports){
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

},{"react":"react"}],8:[function(require,module,exports){
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

var BootStrap = require('./BootStrap.jsx');
var Home = require('./components/Home.jsx');
var NotFound = require('./components/NotFound.jsx');
var About = require('./components/About.jsx');
var Inbox = require('./components/Inbox.jsx');
var Message = require('./components/Message.jsx');

// declare our routes and their hierarchy
var routes = (
    React.createElement(Route, {path: "/", handler: BootStrap}, 
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

},{"./BootStrap.jsx":1,"./components/About.jsx":2,"./components/Home.jsx":4,"./components/Inbox.jsx":5,"./components/Message.jsx":6,"./components/NotFound.jsx":7,"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
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
        React.render(React.createElement(Root, null), document);
      });
  };
}
module.exports = routes;

},{"./routes.jsx":8,"react":"react","react-router":"react-router"}]},{},[1,2,3,4,5,6,7,8,9])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZ2xvZG9uL0RvY3VtZW50cy9HaXRIdWIvaXNvbW9ycGhpYy1hcHAvYXBwL0Jvb3RTdHJhcC5qc3giLCIvVXNlcnMvZ2xvZG9uL0RvY3VtZW50cy9HaXRIdWIvaXNvbW9ycGhpYy1hcHAvYXBwL2NvbXBvbmVudHMvQWJvdXQuanN4IiwiL1VzZXJzL2dsb2Rvbi9Eb2N1bWVudHMvR2l0SHViL2lzb21vcnBoaWMtYXBwL2FwcC9jb21wb25lbnRzL0FwcC5qc3giLCIvVXNlcnMvZ2xvZG9uL0RvY3VtZW50cy9HaXRIdWIvaXNvbW9ycGhpYy1hcHAvYXBwL2NvbXBvbmVudHMvSG9tZS5qc3giLCIvVXNlcnMvZ2xvZG9uL0RvY3VtZW50cy9HaXRIdWIvaXNvbW9ycGhpYy1hcHAvYXBwL2NvbXBvbmVudHMvSW5ib3guanN4IiwiL1VzZXJzL2dsb2Rvbi9Eb2N1bWVudHMvR2l0SHViL2lzb21vcnBoaWMtYXBwL2FwcC9jb21wb25lbnRzL01lc3NhZ2UuanN4IiwiL1VzZXJzL2dsb2Rvbi9Eb2N1bWVudHMvR2l0SHViL2lzb21vcnBoaWMtYXBwL2FwcC9jb21wb25lbnRzL05vdEZvdW5kLmpzeCIsIi9Vc2Vycy9nbG9kb24vRG9jdW1lbnRzL0dpdEh1Yi9pc29tb3JwaGljLWFwcC9hcHAvcm91dGVzLmpzeCIsIi9Vc2Vycy9nbG9kb24vRG9jdW1lbnRzL0dpdEh1Yi9pc29tb3JwaGljLWFwcC9hcHAvc3RhcnQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0dBRUc7QUFDSCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRTdCLHdCQUF3QjtBQUN4QixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7QUFFMUMsSUFBSSwrQkFBK0IseUJBQUE7RUFDakMsTUFB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QUFDLE9BQUEsRUFBTyxDQUFFLE9BQVEsQ0FBRSxDQUFBLEVBQUE7WUFDN0Qsb0JBQUMsS0FBSyxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyx1QkFBQSxFQUF1QixDQUFDLE9BQUEsRUFBTyxDQUFFLE9BQVEsQ0FBRSxDQUFBO1FBQ25ELENBQUEsRUFBQTtRQUNSLG9CQUFDLGFBQWEsRUFBQSxDQUFBLENBQUMsT0FBQSxFQUFPLENBQUUsUUFBUyxDQUFBLENBQUcsQ0FBQTtJQUNoQyxDQUFBO0FBQ1osQ0FBQyxDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzs7QUNwQ3hCOztHQUVHO0FBQ0gsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNyQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRXJDLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO0VBQ2pDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO0FBQy9CLElBQUksTUFBTTtBQUNWOztPQUVPLE1BQU0sQ0FBQztRQUNOLE1BQU0sRUFBRSxNQUFNO1FBQ2QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxlQUFlO1FBQ2hDLGNBQWMsRUFBRSxNQUFNLENBQUMsbUJBQW1CO0FBQ2xELE9BQU8sQ0FBQztBQUNSOztPQUVPLEdBQUcsQ0FBQyxRQUFBLENBQUMsSUFBSSxDQUFBLEtBQUssQ0FBQztRQUNkLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQUMsSUFBSSxFQUFBLElBQUEsQ0FBRyxDQUFBLEVBQUUsUUFBUSxDQUFDLENBQUM7T0FDbEMsQ0FBQyxDQUFDO0dBQ04sQ0FBQztDQUNIO0FBQ0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vLyB0aGUgYXBwbGljYXRpb24gZW50cnlcbnZhciBBcHAgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvQXBwLmpzeCcpO1xuXG52YXIgQm9vdFN0cmFwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWw+XG5cdFx0XHQ8aGVhZCBsYW5nPVwiZW5cIj5cblx0XHRcdFx0PGJhc2UgaHJlZj1cIi9cIiAvPlxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdFx0XHQ8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cdFx0XHRcdDx0aXRsZT5UaGUgaXNvbW9ycGhpYyBhcHAgc2FtcGxlPC90aXRsZT5cblx0XHRcdFx0PGxpbmsgaHJlZj1cInN0YXRpYy9idWlsdC9zdHlsZXMvYm9vdHN0cmFwLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuXHRcdFx0XHQ8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvc3RhdGljL2J1aWx0L3ZlbmRvci9yZWFjdC5qc1wiPjwvc2NyaXB0PlxuXHRcdFx0XHQ8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvc3RhdGljL2J1aWx0L2FwcC9idW5kbGUuanNcIj48L3NjcmlwdD5cblx0XHRcdDwvaGVhZD5cblx0XHRcdDxib2R5PlxuXHRcdFx0XHQ8QXBwIC8+XG5cdFx0XHQ8L2JvZHk+XG5cdFx0XHQ8L2h0bWw+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQm9vdFN0cmFwO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xudmFyIFJvdXRlSGFuZGxlciA9IFJvdXRlci5Sb3V0ZUhhbmRsZXI7XG5cbnZhciBBYm91dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5BYm91dDwvaDE+XG4gICAgICAgIDxSb3V0ZUhhbmRsZXIvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IEFib3V0O1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xudmFyIFJvdXRlSGFuZGxlciA9IFJvdXRlci5Sb3V0ZUhhbmRsZXI7XG52YXIgTGluayA9IFJvdXRlci5MaW5rO1xudmFyIGFkZG9ucyA9IHJlcXVpcmUoJ3JlYWN0L2FkZG9ucycpO1xudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBtaXhpbnM6IFthZGRvbnMuUHVyZVJlbmRlck1peGluXSxcblxuICAvL3N0YXRpY3M6IHtcbiAgLy8gICAgc3RvcmVMaXN0ZW5lcnM6IFtBcHBsaWNhdGlvblN0b3JlXVxuICAvL30sXG4gIGNvbnRleHRUeXBlczoge1xuICAgIGV4ZWN1dGVBY3Rpb246IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfSxcbiAgLy9vbkNoYW5nZTogZnVuY3Rpb24gKCkge1xuICAvLyAgICB2YXIgc3RhdGUgPSB0aGlzLmdldFN0b3JlKEFwcGxpY2F0aW9uU3RvcmUpLmdldFN0YXRlKCk7XG4gIC8vICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAvL30sXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxoZWFkZXIgaWQ9XCJoZWFkZXJcIiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLXN0YXRpYy10b3BcIj5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cImhvbWVcIiA+aG9tZTwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCJpbmJveFwiID5pbmJveDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCJhYm91dFwiID5hYm91dDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ub3Rmb3VuZFwiPm5vdGZvdW5kPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3JlZGlyZWN0XCI+cmVkaXJlY3Q8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGlkPVwicGFnZVwiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPFJvdXRlSGFuZGxlci8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG4vLyB2YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG4vLyB2YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcbnZhciBIb21lVGl0bGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c3Bhbj57dGhpcy5wcm9wcy50aXRsZX0gPC9zcGFuPlxuICAgICk7XG4gIH1cbn0pO1xuXG52YXIgSG9tZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGl0bGUgPSAnZGVmYXVsdCB0aXRsZSc7XG4gICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdGl0bGUgPSAnZGV2ZWxvcG1lbnQgb25seSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlID0gJ3Byb2R1Y3Rpb24gb25seSc7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgICAgICA8SG9tZVRpdGxlIHRpdGxlPXt0aXRsZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhvbWU7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcbnZhciBMaW5rID0gUm91dGVyLkxpbms7XG5cbnZhciBJbmJveCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPkluYm94PC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCJtZXNzYWdlXCIgcGFyYW1zPXt7aWQ6IDN9fT5NZXNzYWdlMzwvTGluaz5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNhcmNoaXZlL21lc3NhZ2VzLzRcIj4gTWVzc2FnZTQ8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxSb3V0ZUhhbmRsZXIvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW5ib3g7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG4vLyB2YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG4vLyB2YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcbnZhciBNZXNzYWdlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiAnbG9hZGluZydcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gZnJvbSB0aGUgcGF0aCBgL2luYm94L21lc3NhZ2VzLzppZGBcbiAgICB2YXIgaWQgPSB0aGlzLnByb3BzLnBhcmFtcy5pZDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWVzc2FnZTogJ2NvbXBvbmVudERpZE1vdW50JyArIGlkXG4gICAgfSk7XG5cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWVzc2FnZTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbi8vIHZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbi8vIHZhciBSb3V0ZUhhbmRsZXIgPSBSb3V0ZXIuUm91dGVIYW5kbGVyO1xuXG52YXIgTm90Rm91bmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT4hICBOb3RGb3VuZDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOb3RGb3VuZDtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuXG4vKmVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG4vKmVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzKi9cbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcblxuLy8gdmFyIFJvdXRlID0gUm91dGVyLlJvdXRlO1xuLy8gdmFyIERlZmF1bHRSb3V0ZSA9IFJvdXRlci5EZWZhdWx0Um91dGU7XG4vLyB2YXIgTm90Rm91bmRSb3V0ZSA9IFJvdXRlci5Ob3RGb3VuZFJvdXRlO1xuLy8gdmFyIFJlZGlyZWN0ID0gUm91dGVyLlJlZGlyZWN0O1xuXG52YXIgeyBSb3V0ZSwgRGVmYXVsdFJvdXRlLCBOb3RGb3VuZFJvdXRlLCBSZWRpcmVjdCB9ID0gUm91dGVyO1xuXG52YXIgQm9vdFN0cmFwID0gcmVxdWlyZSgnLi9Cb290U3RyYXAuanN4Jyk7XG52YXIgSG9tZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Ib21lLmpzeCcpO1xudmFyIE5vdEZvdW5kID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL05vdEZvdW5kLmpzeCcpO1xudmFyIEFib3V0ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0Fib3V0LmpzeCcpO1xudmFyIEluYm94ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0luYm94LmpzeCcpO1xudmFyIE1lc3NhZ2UgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTWVzc2FnZS5qc3gnKTtcblxuLy8gZGVjbGFyZSBvdXIgcm91dGVzIGFuZCB0aGVpciBoaWVyYXJjaHlcbnZhciByb3V0ZXMgPSAoXG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgaGFuZGxlcj17Qm9vdFN0cmFwfT5cbiAgICAgICAgPERlZmF1bHRSb3V0ZSBuYW1lPVwiaG9tZVwiIGhhbmRsZXI9e0hvbWV9Lz5cbiAgICAgICAgPFJvdXRlIG5hbWU9XCJhYm91dFwiIHBhdGg9XCJhYm91dFwiIGhhbmRsZXI9e0Fib3V0fS8+XG4gICAgICAgIDxSb3V0ZSBuYW1lPVwiaW5ib3hcIiBwYXRoPVwiaW5ib3hcIiBoYW5kbGVyPXtJbmJveH0+XG4gICAgICAgICAgICA8Um91dGUgbmFtZT1cIm1lc3NhZ2VcIiBwYXRoPVwibWVzc2FnZXMvOmlkXCIgaGFuZGxlcj17TWVzc2FnZX0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXJjaGl2ZS9tZXNzYWdlcy86aWRcIiBoYW5kbGVyPXtNZXNzYWdlfS8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxOb3RGb3VuZFJvdXRlIGhhbmRsZXI9e05vdEZvdW5kfSAvPlxuICAgIDwvUm91dGU+XG4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcztcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbnZhciByb3V0ZXMgPSByZXF1aXJlKCcuL3JvdXRlcy5qc3gnKTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgUm91dGVyXG4gICAgLy8gUnVucyB0aGUgcm91dGVyLCBzaW1pbGlhciB0byB0aGUgUm91dGVyLnJ1biBtZXRob2QuIFlvdSBjYW4gdGhpbmsgb2YgaXQgYXMgYW5cbiAgICAvLyBpbml0aWFsaXplci9jb25zdHJ1Y3RvciBtZXRob2QuXG4gICAgICAuY3JlYXRlKHtcbiAgICAgICAgcm91dGVzOiByb3V0ZXMsXG4gICAgICAgIGxvY2F0aW9uOiBSb3V0ZXIuSGlzdG9yeUxvY2F0aW9uLFxuICAgICAgICBzY3JvbGxCZWhhdmlvcjogUm91dGVyLlNjcm9sbFRvVG9wQmVoYXZpb3JcbiAgICAgIH0pXG4gICAgICAvLyBUaGlzIGlzIG91ciBjYWxsYmFjayBmdW5jdGlvbiwgd2hlbmV2ZXIgdGhlIHVybCBjaGFuZ2VzIGl0IHdpbGwgYmUgY2FsbGVkIGFnYWluLlxuICAgICAgLy8gSGFuZGxlcjogVGhlIFJlYWN0Q29tcG9uZW50IGNsYXNzIHRoYXQgd2lsbCBiZSByZW5kZXJlZFxuICAgICAgLnJ1bigoUm9vdCkgPT4ge1xuICAgICAgICBSZWFjdC5yZW5kZXIoPFJvb3QgLz4sIGRvY3VtZW50KTtcbiAgICAgIH0pO1xuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXM7XG4iXX0=
