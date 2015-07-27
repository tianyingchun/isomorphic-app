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
    if ("production" === 'development') {
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

},{"./routes.jsx":7,"react":"react","react-router":"react-router"}]},{},[1,2,3,4,5,6,7,8]);
