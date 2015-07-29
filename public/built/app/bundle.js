(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
var React = require('react');

// the application entry
var App = require('./components/App.jsx');

var BootStrap = React.createClass({displayName: "BootStrap",
  render: function () {

    // var metaHtml =
    //   '<base href="/" />' +
    //   '<meta charSet="utf-8" />' +
    //   '<meta httpEquiv="X-UA-Compatible" content="IE=edge" />' +
    //   '<meta name="viewport" content="width=device-width+ initial-scale=1" />' +
    //   '<title><%=pageTitle%></title>' +
    //   '<link href="static/built/styles/bootstrap.css" rel="stylesheet" />' +
    //   '<!--[if lte IE 9]>' +
    //   '<script type="text/javascript" src="/static/built/vendor/react.ie8fix.js"></script>' +
    //   '<![endif]-->' +
    //   '<script type="text/javascript" src="/static/built/vendor/react.js"></script>' +
    //   '<script type="text/javascript" src="/static/built/app/bundle.js"></script>';
    return (
      React.createElement("html", null, 
        React.createElement("head", {lang: "en"}, 
        React.createElement("base", {href: "/"}), 
        React.createElement("meta", {charSet: "utf-8"}), 
        React.createElement("meta", {httpEquiv: "X-UA-Compatible", content: "IE=edge"}), 
        React.createElement("meta", {name: "viewport", content: "width=device-width initial-scale=1"}), 
        React.createElement("title", null, "The Isomorphic sample"), 
        React.createElement("link", {href: "static/built/styles/bootstrap.css", rel: "stylesheet"}), 
        React.createElement("script", {type: "text/javascript", src: "/static/built/vendor/react.ie8fix.js"}), 
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJHOlxcaXNvbW9ycGhpYy1hcHBcXGFwcFxcQm9vdFN0cmFwLmpzeCIsIkc6XFxpc29tb3JwaGljLWFwcFxcYXBwXFxjb21wb25lbnRzXFxBYm91dC5qc3giLCJHOlxcaXNvbW9ycGhpYy1hcHBcXGFwcFxcY29tcG9uZW50c1xcQXBwLmpzeCIsIkc6XFxpc29tb3JwaGljLWFwcFxcYXBwXFxjb21wb25lbnRzXFxIb21lLmpzeCIsIkc6XFxpc29tb3JwaGljLWFwcFxcYXBwXFxjb21wb25lbnRzXFxJbmJveC5qc3giLCJHOlxcaXNvbW9ycGhpYy1hcHBcXGFwcFxcY29tcG9uZW50c1xcTWVzc2FnZS5qc3giLCJHOlxcaXNvbW9ycGhpYy1hcHBcXGFwcFxcY29tcG9uZW50c1xcTm90Rm91bmQuanN4IiwiRzpcXGlzb21vcnBoaWMtYXBwXFxhcHBcXHJvdXRlcy5qc3giLCJHOlxcaXNvbW9ycGhpYy1hcHBcXGFwcFxcc3RhcnQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0dBRUc7QUFDSCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRTdCLHdCQUF3QjtBQUN4QixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7QUFFMUMsSUFBSSwrQkFBK0IseUJBQUE7QUFDbkMsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFSTtNQUNFLG9CQUFBLE1BQUssRUFBQSxJQUFDLEVBQUE7UUFDSixvQkFBQSxNQUFLLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLElBQUssQ0FBQSxFQUFBO1FBQ2hCLG9CQUFBLE1BQUssRUFBQSxDQUFBLENBQUMsSUFBQSxF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QUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLHVCQUFBLEVBQXVCLENBQUMsT0FBQSxFQUFPLENBQUUsT0FBUSxDQUFFLENBQUE7UUFDbkQsQ0FBQSxFQUFBO1FBQ1Isb0JBQUMsYUFBYSxFQUFBLENBQUEsQ0FBQyxPQUFBLEVBQU8sQ0FBRSxRQUFTLENBQUEsQ0FBRyxDQUFBO0lBQ2hDLENBQUE7QUFDWixDQUFDLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7O0FDcEN4Qjs7R0FFRztBQUNILElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDckMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztBQUVyQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtFQUNqQyxNQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztBQUMvQixJQUFJLE1BQU07QUFDVjs7T0FFTyxNQUFNLENBQUM7UUFDTixNQUFNLEVBQUUsTUFBTTtRQUNkLFFBQVEsRUFBRSxNQUFNLENBQUMsZUFBZTtRQUNoQyxjQUFjLEVBQUUsTUFBTSxDQUFDLG1CQUFtQjtBQUNsRCxPQUFPLENBQUM7QUFDUjs7T0FFTyxHQUFHLENBQUMsUUFBQSxDQUFDLElBQUksQ0FBQSxLQUFLLENBQUM7UUFDZCxLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFDLElBQUksRUFBQSxJQUFBLENBQUcsQ0FBQSxFQUFFLFFBQVEsQ0FBQyxDQUFDO09BQ2xDLENBQUMsQ0FBQztHQUNOLENBQUM7Q0FDSDtBQUNELE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gKiBAanN4IFJlYWN0LkRPTVxyXG4gKi9cclxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxuXHJcbi8vIHRoZSBhcHBsaWNhdGlvbiBlbnRyeVxyXG52YXIgQXBwID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0FwcC5qc3gnKTtcclxuXHJcbnZhciBCb290U3RyYXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gdmFyIG1ldGFIdG1sID1cclxuICAgIC8vICAgJzxiYXNlIGhyZWY9XCIvXCIgLz4nICtcclxuICAgIC8vICAgJzxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+JyArXHJcbiAgICAvLyAgICc8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+JyArXHJcbiAgICAvLyAgICc8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoKyBpbml0aWFsLXNjYWxlPTFcIiAvPicgK1xyXG4gICAgLy8gICAnPHRpdGxlPjwlPXBhZ2VUaXRsZSU+PC90aXRsZT4nICtcclxuICAgIC8vICAgJzxsaW5rIGhyZWY9XCJzdGF0aWMvYnVpbHQvc3R5bGVzL2Jvb3RzdHJhcC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz4nICtcclxuICAgIC8vICAgJzwhLS1baWYgbHRlIElFIDldPicgK1xyXG4gICAgLy8gICAnPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiL3N0YXRpYy9idWlsdC92ZW5kb3IvcmVhY3QuaWU4Zml4LmpzXCI+PC9zY3JpcHQ+JyArXHJcbiAgICAvLyAgICc8IVtlbmRpZl0tLT4nICtcclxuICAgIC8vICAgJzxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cIi9zdGF0aWMvYnVpbHQvdmVuZG9yL3JlYWN0LmpzXCI+PC9zY3JpcHQ+JyArXHJcbiAgICAvLyAgICc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvc3RhdGljL2J1aWx0L2FwcC9idW5kbGUuanNcIj48L3NjcmlwdD4nO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGh0bWw+XHJcbiAgICAgICAgPGhlYWQgbGFuZz1cImVuXCI+XHJcbiAgICAgICAgPGJhc2UgaHJlZj1cIi9cIiAvPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGggaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8dGl0bGU+VGhlIElzb21vcnBoaWMgc2FtcGxlPC90aXRsZT5cclxuICAgICAgICA8bGluayBocmVmPVwic3RhdGljL2J1aWx0L3N0eWxlcy9ib290c3RyYXAuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiL3N0YXRpYy9idWlsdC92ZW5kb3IvcmVhY3QuaWU4Zml4LmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiL3N0YXRpYy9idWlsdC92ZW5kb3IvcmVhY3QuanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvc3RhdGljL2J1aWx0L2FwcC9idW5kbGUuanNcIj48L3NjcmlwdD5cclxuICAgICAgPC9oZWFkPlxyXG4gICAgICA8Ym9keT5cclxuICAgICAgICA8QXBwIC8+XHJcbiAgICAgIDwvYm9keT5cclxuICAgICAgPC9odG1sPlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCb290U3RyYXA7XHJcbiIsIi8qKlxyXG4gKiBAanN4IFJlYWN0LkRPTVxyXG4gKi9cclxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xyXG52YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcclxuXHJcbnZhciBBYm91dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPkFib3V0PC9oMT5cclxuICAgICAgICA8Um91dGVIYW5kbGVyLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gQWJvdXQ7XHJcbiIsIi8qKlxyXG4gKiBAanN4IFJlYWN0LkRPTVxyXG4gKi9cclxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xyXG52YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcclxudmFyIExpbmsgPSBSb3V0ZXIuTGluaztcclxudmFyIGFkZG9ucyA9IHJlcXVpcmUoJ3JlYWN0L2FkZG9ucycpO1xyXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cclxuICBtaXhpbnM6IFthZGRvbnMuUHVyZVJlbmRlck1peGluXSxcclxuXHJcbiAgLy9zdGF0aWNzOiB7XHJcbiAgLy8gICAgc3RvcmVMaXN0ZW5lcnM6IFtBcHBsaWNhdGlvblN0b3JlXVxyXG4gIC8vfSxcclxuICBjb250ZXh0VHlwZXM6IHtcclxuICAgIGV4ZWN1dGVBY3Rpb246IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxuICB9LFxyXG4gIC8vb25DaGFuZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAvLyAgICB2YXIgc3RhdGUgPSB0aGlzLmdldFN0b3JlKEFwcGxpY2F0aW9uU3RvcmUpLmdldFN0YXRlKCk7XHJcbiAgLy8gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgLy99LFxyXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWUgPVwid3JhcHBlclwiPlxyXG4gICAgICAgIDxoZWFkZXIgaWQ9XCJoZWFkZXJcIiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLXN0YXRpYy10b3BcIj5cclxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiaG9tZVwiID5ob21lPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cImluYm94XCIgPmluYm94PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cImFib3V0XCIgPmFib3V0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL25vdGZvdW5kXCI+bm90Zm91bmQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcmVkaXJlY3RcIj5yZWRpcmVjdDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8ZGl2IGlkPVwicGFnZVwiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8Um91dGVIYW5kbGVyLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQXBwO1xyXG4iLCIvKipcclxuICogQGpzeCBSZWFjdC5ET01cclxuICovXHJcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbi8vIHZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcclxuLy8gdmFyIFJvdXRlSGFuZGxlciA9IFJvdXRlci5Sb3V0ZUhhbmRsZXI7XHJcbnZhciBIb21lVGl0bGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcHJvcFR5cGVzOiB7XHJcbiAgICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlclxyXG4gIH0sXHJcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3Bhbj57dGhpcy5wcm9wcy50aXRsZX0gPC9zcGFuPlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxudmFyIEhvbWUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRpdGxlID0gJ2RlZmF1bHQgdGl0bGUnO1xyXG4gICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICB0aXRsZSA9ICdkZXZlbG9wbWVudCBvbmx5JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRpdGxlID0gJ3Byb2R1Y3Rpb24gb25seSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxPkhvbWU8L2gxPlxyXG4gICAgICAgICAgPEhvbWVUaXRsZSB0aXRsZT17dGl0bGV9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBIb21lO1xyXG4iLCIvKipcclxuICogQGpzeCBSZWFjdC5ET01cclxuICovXHJcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcclxudmFyIFJvdXRlSGFuZGxlciA9IFJvdXRlci5Sb3V0ZUhhbmRsZXI7XHJcbnZhciBMaW5rID0gUm91dGVyLkxpbms7XHJcblxyXG52YXIgSW5ib3ggPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxPkluYm94PC9oMT5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwibWVzc2FnZVwiIHBhcmFtcz17e2lkOiAzfX0+TWVzc2FnZTM8L0xpbms+XHJcbiAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI2FyY2hpdmUvbWVzc2FnZXMvNFwiPiBNZXNzYWdlNDwvYT5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxSb3V0ZUhhbmRsZXIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSW5ib3g7XHJcbiIsIi8qKlxyXG4gKiBAanN4IFJlYWN0LkRPTVxyXG4gKi9cclxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxuLy8gdmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xyXG4vLyB2YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcclxudmFyIE1lc3NhZ2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblxyXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWVzc2FnZTogJ2xvYWRpbmcnXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBmcm9tIHRoZSBwYXRoIGAvaW5ib3gvbWVzc2FnZXMvOmlkYFxyXG4gICAgdmFyIGlkID0gdGhpcy5wcm9wcy5wYXJhbXMuaWQ7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1lc3NhZ2U6ICdjb21wb25lbnREaWRNb3VudCcgKyBpZFxyXG4gICAgfSk7XHJcblxyXG4gIH0sXHJcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNZXNzYWdlO1xyXG4iLCIvKipcclxuICogQGpzeCBSZWFjdC5ET01cclxuICovXHJcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbi8vIHZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcclxuLy8gdmFyIFJvdXRlSGFuZGxlciA9IFJvdXRlci5Sb3V0ZUhhbmRsZXI7XHJcblxyXG52YXIgTm90Rm91bmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxPiEgIE5vdEZvdW5kPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE5vdEZvdW5kO1xyXG4iLCIvKipcclxuICogQGpzeCBSZWFjdC5ET01cclxuICovXHJcblxyXG4vKmVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzKi9cclxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxuLyplc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyovXHJcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcclxuXHJcbi8vIHZhciBSb3V0ZSA9IFJvdXRlci5Sb3V0ZTtcclxuLy8gdmFyIERlZmF1bHRSb3V0ZSA9IFJvdXRlci5EZWZhdWx0Um91dGU7XHJcbi8vIHZhciBOb3RGb3VuZFJvdXRlID0gUm91dGVyLk5vdEZvdW5kUm91dGU7XHJcbi8vIHZhciBSZWRpcmVjdCA9IFJvdXRlci5SZWRpcmVjdDtcclxuXHJcbnZhciB7IFJvdXRlLCBEZWZhdWx0Um91dGUsIE5vdEZvdW5kUm91dGUsIFJlZGlyZWN0IH0gPSBSb3V0ZXI7XHJcblxyXG52YXIgQm9vdFN0cmFwID0gcmVxdWlyZSgnLi9Cb290U3RyYXAuanN4Jyk7XHJcbnZhciBIb21lID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0hvbWUuanN4Jyk7XHJcbnZhciBOb3RGb3VuZCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Ob3RGb3VuZC5qc3gnKTtcclxudmFyIEFib3V0ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0Fib3V0LmpzeCcpO1xyXG52YXIgSW5ib3ggPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvSW5ib3guanN4Jyk7XHJcbnZhciBNZXNzYWdlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL01lc3NhZ2UuanN4Jyk7XHJcblxyXG4vLyBkZWNsYXJlIG91ciByb3V0ZXMgYW5kIHRoZWlyIGhpZXJhcmNoeVxyXG52YXIgcm91dGVzID0gKFxyXG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgaGFuZGxlcj17Qm9vdFN0cmFwfT5cclxuICAgICAgICA8RGVmYXVsdFJvdXRlIG5hbWU9XCJob21lXCIgaGFuZGxlcj17SG9tZX0vPlxyXG4gICAgICAgIDxSb3V0ZSBuYW1lPVwiYWJvdXRcIiBwYXRoPVwiYWJvdXRcIiBoYW5kbGVyPXtBYm91dH0vPlxyXG4gICAgICAgIDxSb3V0ZSBuYW1lPVwiaW5ib3hcIiBwYXRoPVwiaW5ib3hcIiBoYW5kbGVyPXtJbmJveH0+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBuYW1lPVwibWVzc2FnZVwiIHBhdGg9XCJtZXNzYWdlcy86aWRcIiBoYW5kbGVyPXtNZXNzYWdlfS8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FyY2hpdmUvbWVzc2FnZXMvOmlkXCIgaGFuZGxlcj17TWVzc2FnZX0vPlxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPE5vdEZvdW5kUm91dGUgaGFuZGxlcj17Tm90Rm91bmR9IC8+XHJcbiAgICA8L1JvdXRlPlxyXG4pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXM7XHJcbiIsIi8qKlxyXG4gKiBAanN4IFJlYWN0LkRPTVxyXG4gKi9cclxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xyXG52YXIgcm91dGVzID0gcmVxdWlyZSgnLi9yb3V0ZXMuanN4Jyk7XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgUm91dGVyXHJcbiAgICAvLyBSdW5zIHRoZSByb3V0ZXIsIHNpbWlsaWFyIHRvIHRoZSBSb3V0ZXIucnVuIG1ldGhvZC4gWW91IGNhbiB0aGluayBvZiBpdCBhcyBhblxyXG4gICAgLy8gaW5pdGlhbGl6ZXIvY29uc3RydWN0b3IgbWV0aG9kLlxyXG4gICAgICAuY3JlYXRlKHtcclxuICAgICAgICByb3V0ZXM6IHJvdXRlcyxcclxuICAgICAgICBsb2NhdGlvbjogUm91dGVyLkhpc3RvcnlMb2NhdGlvbixcclxuICAgICAgICBzY3JvbGxCZWhhdmlvcjogUm91dGVyLlNjcm9sbFRvVG9wQmVoYXZpb3JcclxuICAgICAgfSlcclxuICAgICAgLy8gVGhpcyBpcyBvdXIgY2FsbGJhY2sgZnVuY3Rpb24sIHdoZW5ldmVyIHRoZSB1cmwgY2hhbmdlcyBpdCB3aWxsIGJlIGNhbGxlZCBhZ2Fpbi5cclxuICAgICAgLy8gSGFuZGxlcjogVGhlIFJlYWN0Q29tcG9uZW50IGNsYXNzIHRoYXQgd2lsbCBiZSByZW5kZXJlZFxyXG4gICAgICAucnVuKChSb290KSA9PiB7XHJcbiAgICAgICAgUmVhY3QucmVuZGVyKDxSb290IC8+LCBkb2N1bWVudCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXM7XHJcbiJdfQ==
