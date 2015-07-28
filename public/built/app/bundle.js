(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
var React = require('react');

// the application entry
var App = require('./components/App.jsx');

var BootStrap = React.createClass({displayName: "BootStrap",
  render: function () {

    var metaHtml =
      '<base href="/" />' +
      '<meta charSet="utf-8" />' +
      '<meta httpEquiv="X-UA-Compatible" content="IE=edge" />' +
      '<meta name="viewport" content="width=device-width+ initial-scale=1" />' +
      '<title><%=pageTitle%></title>' +
      '<link href="static/built/styles/bootstrap.css" rel="stylesheet" />' +
      '<!--[if lte IE 9]>' +
      '<script type="text/javascript" src="/static/built/vendor/react.ie8fix.js"></script>' +
      '<![endif]-->' +
      '<script type="text/javascript" src="/static/built/vendor/react.js"></script>' +
      '<script type="text/javascript" src="/static/built/app/bundle.js"></script>';
    return (
      React.createElement("html", null, 
      React.createElement("head", {lang: "en", dangerouslySetInnerHTML: {__html: metaHtml}}), 
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGlhbnlpbmdjaHVuL0RvY3VtZW50cy9HaXRodWIvaXNvbW9ycGhpYy1hcHAvYXBwL0Jvb3RTdHJhcC5qc3giLCIvVXNlcnMvdGlhbnlpbmdjaHVuL0RvY3VtZW50cy9HaXRodWIvaXNvbW9ycGhpYy1hcHAvYXBwL2NvbXBvbmVudHMvQWJvdXQuanN4IiwiL1VzZXJzL3RpYW55aW5nY2h1bi9Eb2N1bWVudHMvR2l0aHViL2lzb21vcnBoaWMtYXBwL2FwcC9jb21wb25lbnRzL0FwcC5qc3giLCIvVXNlcnMvdGlhbnlpbmdjaHVuL0RvY3VtZW50cy9HaXRodWIvaXNvbW9ycGhpYy1hcHAvYXBwL2NvbXBvbmVudHMvSG9tZS5qc3giLCIvVXNlcnMvdGlhbnlpbmdjaHVuL0RvY3VtZW50cy9HaXRodWIvaXNvbW9ycGhpYy1hcHAvYXBwL2NvbXBvbmVudHMvSW5ib3guanN4IiwiL1VzZXJzL3RpYW55aW5nY2h1bi9Eb2N1bWVudHMvR2l0aHViL2lzb21vcnBoaWMtYXBwL2FwcC9jb21wb25lbnRzL01lc3NhZ2UuanN4IiwiL1VzZXJzL3RpYW55aW5nY2h1bi9Eb2N1bWVudHMvR2l0aHViL2lzb21vcnBoaWMtYXBwL2FwcC9jb21wb25lbnRzL05vdEZvdW5kLmpzeCIsIi9Vc2Vycy90aWFueWluZ2NodW4vRG9jdW1lbnRzL0dpdGh1Yi9pc29tb3JwaGljLWFwcC9hcHAvcm91dGVzLmpzeCIsIi9Vc2Vycy90aWFueWluZ2NodW4vRG9jdW1lbnRzL0dpdGh1Yi9pc29tb3JwaGljLWFwcC9hcHAvc3RhcnQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0dBRUc7QUFDSCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRTdCLHdCQUF3QjtBQUN4QixJQUFJLEdBQUcsR0FBRyxPQUFPLENB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SSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7RUFDakMsTUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7QUFDL0IsSUFBSSxNQUFNO0FBQ1Y7O09BRU8sTUFBTSxDQUFDO1FBQ04sTUFBTSxFQUFFLE1BQU07UUFDZCxRQUFRLEVBQUUsTUFBTSxDQUFDLGVBQWU7UUFDaEMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxtQkFBbUI7QUFDbEQsT0FBTyxDQUFDO0FBQ1I7O09BRU8sR0FBRyxDQUFDLFFBQUEsQ0FBQyxJQUFJLENBQUEsS0FBSyxDQUFDO1FBQ2QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxJQUFJLEVBQUEsSUFBQSxDQUFHLENBQUEsRUFBRSxRQUFRLENBQUMsQ0FBQztPQUNsQyxDQUFDLENBQUM7R0FDTixDQUFDO0NBQ0g7QUFDRCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vIHRoZSBhcHBsaWNhdGlvbiBlbnRyeVxudmFyIEFwcCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9BcHAuanN4Jyk7XG5cbnZhciBCb290U3RyYXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIG1ldGFIdG1sID1cbiAgICAgICc8YmFzZSBocmVmPVwiL1wiIC8+JyArXG4gICAgICAnPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz4nICtcbiAgICAgICc8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+JyArXG4gICAgICAnPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCsgaW5pdGlhbC1zY2FsZT0xXCIgLz4nICtcbiAgICAgICc8dGl0bGU+PCU9cGFnZVRpdGxlJT48L3RpdGxlPicgK1xuICAgICAgJzxsaW5rIGhyZWY9XCJzdGF0aWMvYnVpbHQvc3R5bGVzL2Jvb3RzdHJhcC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz4nICtcbiAgICAgICc8IS0tW2lmIGx0ZSBJRSA5XT4nICtcbiAgICAgICc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvc3RhdGljL2J1aWx0L3ZlbmRvci9yZWFjdC5pZThmaXguanNcIj48L3NjcmlwdD4nICtcbiAgICAgICc8IVtlbmRpZl0tLT4nICtcbiAgICAgICc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvc3RhdGljL2J1aWx0L3ZlbmRvci9yZWFjdC5qc1wiPjwvc2NyaXB0PicgK1xuICAgICAgJzxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cIi9zdGF0aWMvYnVpbHQvYXBwL2J1bmRsZS5qc1wiPjwvc2NyaXB0Pic7XG4gICAgcmV0dXJuIChcbiAgICAgIDxodG1sPlxuICAgICAgPGhlYWQgbGFuZz1cImVuXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IG1ldGFIdG1sfX0+PC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxBcHAgLz5cbiAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb290U3RyYXA7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcblxudmFyIEFib3V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkFib3V0PC9oMT5cbiAgICAgICAgPFJvdXRlSGFuZGxlci8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gQWJvdXQ7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcbnZhciBMaW5rID0gUm91dGVyLkxpbms7XG52YXIgYWRkb25zID0gcmVxdWlyZSgncmVhY3QvYWRkb25zJyk7XG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIG1peGluczogW2FkZG9ucy5QdXJlUmVuZGVyTWl4aW5dLFxuXG4gIC8vc3RhdGljczoge1xuICAvLyAgICBzdG9yZUxpc3RlbmVyczogW0FwcGxpY2F0aW9uU3RvcmVdXG4gIC8vfSxcbiAgY29udGV4dFR5cGVzOiB7XG4gICAgZXhlY3V0ZUFjdGlvbjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9LFxuICAvL29uQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XG4gIC8vICAgIHZhciBzdGF0ZSA9IHRoaXMuZ2V0U3RvcmUoQXBwbGljYXRpb25TdG9yZSkuZ2V0U3RhdGUoKTtcbiAgLy8gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIC8vfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lID1cIndyYXBwZXJcIj5cbiAgICAgICAgPGhlYWRlciBpZD1cImhlYWRlclwiIGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItc3RhdGljLXRvcFwiPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiaG9tZVwiID5ob21lPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cImluYm94XCIgPmluYm94PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cImFib3V0XCIgPmFib3V0PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL25vdGZvdW5kXCI+bm90Zm91bmQ8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcmVkaXJlY3RcIj5yZWRpcmVjdDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgaWQ9XCJwYWdlXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8Um91dGVIYW5kbGVyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbi8vIHZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbi8vIHZhciBSb3V0ZUhhbmRsZXIgPSBSb3V0ZXIuUm91dGVIYW5kbGVyO1xudmFyIEhvbWVUaXRsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgdGl0bGU6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuPnt0aGlzLnByb3BzLnRpdGxlfSA8L3NwYW4+XG4gICAgKTtcbiAgfVxufSk7XG5cbnZhciBIb21lID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aXRsZSA9ICdkZWZhdWx0IHRpdGxlJztcbiAgICBpZiAoXCJkZXZlbG9wbWVudFwiID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICB0aXRsZSA9ICdkZXZlbG9wbWVudCBvbmx5JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGl0bGUgPSAncHJvZHVjdGlvbiBvbmx5JztcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPkhvbWU8L2gxPlxuICAgICAgICAgIDxIb21lVGl0bGUgdGl0bGU9e3RpdGxlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSG9tZTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbnZhciBSb3V0ZUhhbmRsZXIgPSBSb3V0ZXIuUm91dGVIYW5kbGVyO1xudmFyIExpbmsgPSBSb3V0ZXIuTGluaztcblxudmFyIEluYm94ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+SW5ib3g8L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIm1lc3NhZ2VcIiBwYXJhbXM9e3tpZDogM319Pk1lc3NhZ2UzPC9MaW5rPlxuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI2FyY2hpdmUvbWVzc2FnZXMvNFwiPiBNZXNzYWdlNDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPFJvdXRlSGFuZGxlci8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbmJveDtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbi8vIHZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbi8vIHZhciBSb3V0ZUhhbmRsZXIgPSBSb3V0ZXIuUm91dGVIYW5kbGVyO1xudmFyIE1lc3NhZ2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6ICdsb2FkaW5nJ1xuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBmcm9tIHRoZSBwYXRoIGAvaW5ib3gvbWVzc2FnZXMvOmlkYFxuICAgIHZhciBpZCA9IHRoaXMucHJvcHMucGFyYW1zLmlkO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtZXNzYWdlOiAnY29tcG9uZW50RGlkTW91bnQnICsgaWRcbiAgICB9KTtcblxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZXNzYWdlO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuLy8gdmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xuLy8gdmFyIFJvdXRlSGFuZGxlciA9IFJvdXRlci5Sb3V0ZUhhbmRsZXI7XG5cbnZhciBOb3RGb3VuZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPiEgIE5vdEZvdW5kPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5vdEZvdW5kO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG5cbi8qZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbi8qZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMqL1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xuXG4vLyB2YXIgUm91dGUgPSBSb3V0ZXIuUm91dGU7XG4vLyB2YXIgRGVmYXVsdFJvdXRlID0gUm91dGVyLkRlZmF1bHRSb3V0ZTtcbi8vIHZhciBOb3RGb3VuZFJvdXRlID0gUm91dGVyLk5vdEZvdW5kUm91dGU7XG4vLyB2YXIgUmVkaXJlY3QgPSBSb3V0ZXIuUmVkaXJlY3Q7XG5cbnZhciB7IFJvdXRlLCBEZWZhdWx0Um91dGUsIE5vdEZvdW5kUm91dGUsIFJlZGlyZWN0IH0gPSBSb3V0ZXI7XG5cbnZhciBCb290U3RyYXAgPSByZXF1aXJlKCcuL0Jvb3RTdHJhcC5qc3gnKTtcbnZhciBIb21lID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0hvbWUuanN4Jyk7XG52YXIgTm90Rm91bmQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTm90Rm91bmQuanN4Jyk7XG52YXIgQWJvdXQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvQWJvdXQuanN4Jyk7XG52YXIgSW5ib3ggPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvSW5ib3guanN4Jyk7XG52YXIgTWVzc2FnZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9NZXNzYWdlLmpzeCcpO1xuXG4vLyBkZWNsYXJlIG91ciByb3V0ZXMgYW5kIHRoZWlyIGhpZXJhcmNoeVxudmFyIHJvdXRlcyA9IChcbiAgICA8Um91dGUgcGF0aD1cIi9cIiBoYW5kbGVyPXtCb290U3RyYXB9PlxuICAgICAgICA8RGVmYXVsdFJvdXRlIG5hbWU9XCJob21lXCIgaGFuZGxlcj17SG9tZX0vPlxuICAgICAgICA8Um91dGUgbmFtZT1cImFib3V0XCIgcGF0aD1cImFib3V0XCIgaGFuZGxlcj17QWJvdXR9Lz5cbiAgICAgICAgPFJvdXRlIG5hbWU9XCJpbmJveFwiIHBhdGg9XCJpbmJveFwiIGhhbmRsZXI9e0luYm94fT5cbiAgICAgICAgICAgIDxSb3V0ZSBuYW1lPVwibWVzc2FnZVwiIHBhdGg9XCJtZXNzYWdlcy86aWRcIiBoYW5kbGVyPXtNZXNzYWdlfS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcmNoaXZlL21lc3NhZ2VzLzppZFwiIGhhbmRsZXI9e01lc3NhZ2V9Lz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPE5vdEZvdW5kUm91dGUgaGFuZGxlcj17Tm90Rm91bmR9IC8+XG4gICAgPC9Sb3V0ZT5cbik7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVzO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xudmFyIHJvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzLmpzeCcpO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBSb3V0ZXJcbiAgICAvLyBSdW5zIHRoZSByb3V0ZXIsIHNpbWlsaWFyIHRvIHRoZSBSb3V0ZXIucnVuIG1ldGhvZC4gWW91IGNhbiB0aGluayBvZiBpdCBhcyBhblxuICAgIC8vIGluaXRpYWxpemVyL2NvbnN0cnVjdG9yIG1ldGhvZC5cbiAgICAgIC5jcmVhdGUoe1xuICAgICAgICByb3V0ZXM6IHJvdXRlcyxcbiAgICAgICAgbG9jYXRpb246IFJvdXRlci5IaXN0b3J5TG9jYXRpb24sXG4gICAgICAgIHNjcm9sbEJlaGF2aW9yOiBSb3V0ZXIuU2Nyb2xsVG9Ub3BCZWhhdmlvclxuICAgICAgfSlcbiAgICAgIC8vIFRoaXMgaXMgb3VyIGNhbGxiYWNrIGZ1bmN0aW9uLCB3aGVuZXZlciB0aGUgdXJsIGNoYW5nZXMgaXQgd2lsbCBiZSBjYWxsZWQgYWdhaW4uXG4gICAgICAvLyBIYW5kbGVyOiBUaGUgUmVhY3RDb21wb25lbnQgY2xhc3MgdGhhdCB3aWxsIGJlIHJlbmRlcmVkXG4gICAgICAucnVuKChSb290KSA9PiB7XG4gICAgICAgIFJlYWN0LnJlbmRlcig8Um9vdCAvPiwgZG9jdW1lbnQpO1xuICAgICAgfSk7XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcztcbiJdfQ==
