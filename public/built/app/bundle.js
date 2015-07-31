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
    //   '<meta name="viewport" content="width=device-width" initial-scale=1" />' +
    //   '<title><%=pageTitle%></title>' +
    //   '<link href="static/built/styles/bootstrap.css" rel="stylesheet" />' +
    //   '<!--[if lte IE 9]>' +
    //   '<script type="text/javascript" src="/static/built/vendor/react.ie8fix.js"></script>' +
    //   '<![endif]-->' +
    //   '<script type="text/javascript" src="/static/built/vendor/react.js"></script>' +
    //   '<script type="text/javascript" src="/static/built/app/bundle.js"></script>';
    return (
      // <html>
      // <head lang="en" dangerouslySetInnerHTML={{__html: metaHtml}}></head>
      // <body>
        React.createElement(App, null)
      // </body>
      // </html>
    );
  }
});

module.exports = BootStrap;

},{"./components/App.jsx":3,"react":"react"}],2:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
var React = require('react');
var About = React.createClass({displayName: "About",
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "About"), 
        this.props.children
      )
    );
  }
});

module.exports = About;

},{"react":"react"}],3:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
var React = require('react');
var Router = require('react-router-component');
var Link = Router.Link;
var App = React.createClass({displayName: "App",

  render: function () {
    return (
      React.createElement("div", {className: "wrapper"}, 
        React.createElement("header", {id: "header", className: "navbar navbar-static-top"}, 
          React.createElement("nav", {className: "collapse navbar-collapse"}, 
            React.createElement("ul", {className: "nav navbar-nav"}, 
                React.createElement("li", null, 
                    React.createElement(Link, {href: "/home"}, "home")
                ), 
                React.createElement("li", null, 
                    React.createElement(Link, {href: "/inbox"}, "inbox")
                ), 
                React.createElement("li", null, 
                    React.createElement(Link, {href: "/about"}, "about")
                ), 
                React.createElement("li", null, 
                    React.createElement("a", {href: "/notfound"}, "notfound")
                )
            )
          )
        ), 
        React.createElement("div", {id: "page", className: "container"}, 
          this.props.children || "Welcome to your Inbox"
        )
      )
      );
  }
});

module.exports = App;

},{"react":"react","react-router-component":"react-router-component"}],4:[function(require,module,exports){
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
// var Router = require('react-router');
// var RouteHandler = Router.RouteHandler;
var Message = React.createClass({displayName: "Message",

  getInitialState: function () {
    return {
      message: 'loading message!'
    };
  },

  componentDidMount: function () {
    // from the path `/inbox/messages/:id`

    this.setState({
      message: 'componentDidMount'
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

var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;
var Inbox = require('./Inbox.jsx');

// page components.
var BootStrap = require('../BootStrap.jsx');
var Home = require('../components/Home.jsx');
var NotFoundPage = require('../components/NotFound.jsx');
var About = require('../components/About.jsx');


var App = React.createClass({displayName: "App",

  showProgressBar: function () {
    // console.log(arguments);
  },

  hideProgressBar: function () {
    // console.log(arguments);
  },

  render: function () {
    return (
      React.createElement(Locations, {onBeforeNavigation: this.showProgressBar, onNavigation: this.hideProgressBar}, 
        React.createElement(Location, {path: "/", handler: BootStrap}), 
        React.createElement(Location, {path: "/home", handler: Home}), 
        React.createElement(Location, {path: "/about", handler: About}), 
        React.createElement(Location, {path: "/inbox(/*)", handler: Inbox}), 
        React.createElement(NotFound, {handler: NotFoundPage})
      )
    );
  }

});

// declare our routes and their hierarchy

module.exports = App;

},{"../BootStrap.jsx":1,"../components/About.jsx":2,"../components/Home.jsx":4,"../components/NotFound.jsx":6,"./Inbox.jsx":8,"react":"react","react-router-component":"react-router-component"}],8:[function(require,module,exports){
var React = require('react');

var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;
var Message = require('../components/Message.jsx');

var Inbox = React.createClass({displayName: "Inbox",
  render: function () {
    return (
      React.createElement(Locations, {contextual: true}, 
        React.createElement(Location, {path: "/", handler: Message})
      )
    );
  }
});

module.exports = Inbox;

},{"../components/Message.jsx":5,"react":"react","react-router-component":"react-router-component"}],9:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
var React = require('react');
var App = require('./routers/App.jsx');

if (typeof window !== 'undefined') {
  window.onload = function () {
    React.render(React.createElement(App, null), document.getElementById('react-app'));
  };
}

},{"./routers/App.jsx":7,"react":"react"}]},{},[1,2,3,4,5,6,7,8,9])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZ2xvZG9uL0RvY3VtZW50cy9HaXRIdWIvaXNvbW9ycGhpYy1hcHAvYXBwL0Jvb3RTdHJhcC5qc3giLCIvVXNlcnMvZ2xvZG9uL0RvY3VtZW50cy9HaXRIdWIvaXNvbW9ycGhpYy1hcHAvYXBwL2NvbXBvbmVudHMvQWJvdXQuanN4IiwiL1VzZXJzL2dsb2Rvbi9Eb2N1bWVudHMvR2l0SHViL2lzb21vcnBoaWMtYXBwL2FwcC9jb21wb25lbnRzL0FwcC5qc3giLCIvVXNlcnMvZ2xvZG9uL0RvY3VtZW50cy9HaXRIdWIvaXNvbW9ycGhpYy1hcHAvYXBwL2NvbXBvbmVudHMvSG9tZS5qc3giLCIvVXNlcnMvZ2xvZG9uL0RvY3VtZW50cy9HaXRIdWIvaXNvbW9ycGhpYy1hcHAvYXBwL2NvbXBvbmVudHMvTWVzc2FnZS5qc3giLCIvVXNlcnMvZ2xvZG9uL0RvY3VtZW50cy9HaXRIdWIvaXNvbW9ycGhpYy1hcHAvYXBwL2NvbXBvbmVudHMvTm90Rm91bmQuanN4IiwiL1VzZXJzL2dsb2Rvbi9Eb2N1bWVudHMvR2l0SHViL2lzb21vcnBoaWMtYXBwL2FwcC9yb3V0ZXJzL0FwcC5qc3giLCIvVXNlcnMvZ2xvZG9uL0RvY3VtZW50cy9HaXRIdWIvaXNvbW9ycGhpYy1hcHAvYXBwL3JvdXRlcnMvSW5ib3guanN4IiwiL1VzZXJzL2dsb2Rvbi9Eb2N1bWVudHMvR2l0SHViL2lzb21vcnBoaWMtYXBwL2FwcC9zdGFydC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7R0FFRztBQUNILElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFN0Isd0JBQXdCO0FBQ3hCLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOztBQUUxQyxJQUFJLCtCQUErQix5QkFBQTtBQUNuQyxF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O0FBQ0osQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vIHRoZSBhcHBsaWNhdGlvbiBlbnRyeVxudmFyIEFwcCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9BcHAuanN4Jyk7XG5cbnZhciBCb290U3RyYXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gdmFyIG1ldGFIdG1sID1cbiAgICAvLyAgICc8YmFzZSBocmVmPVwiL1wiIC8+JyArXG4gICAgLy8gICAnPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz4nICtcbiAgICAvLyAgICc8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+JyArXG4gICAgLy8gICAnPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aFwiIGluaXRpYWwtc2NhbGU9MVwiIC8+JyArXG4gICAgLy8gICAnPHRpdGxlPjwlPXBhZ2VUaXRsZSU+PC90aXRsZT4nICtcbiAgICAvLyAgICc8bGluayBocmVmPVwic3RhdGljL2J1aWx0L3N0eWxlcy9ib290c3RyYXAuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+JyArXG4gICAgLy8gICAnPCEtLVtpZiBsdGUgSUUgOV0+JyArXG4gICAgLy8gICAnPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiL3N0YXRpYy9idWlsdC92ZW5kb3IvcmVhY3QuaWU4Zml4LmpzXCI+PC9zY3JpcHQ+JyArXG4gICAgLy8gICAnPCFbZW5kaWZdLS0+JyArXG4gICAgLy8gICAnPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiL3N0YXRpYy9idWlsdC92ZW5kb3IvcmVhY3QuanNcIj48L3NjcmlwdD4nICtcbiAgICAvLyAgICc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvc3RhdGljL2J1aWx0L2FwcC9idW5kbGUuanNcIj48L3NjcmlwdD4nO1xuICAgIHJldHVybiAoXG4gICAgICAvLyA8aHRtbD5cbiAgICAgIC8vIDxoZWFkIGxhbmc9XCJlblwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBtZXRhSHRtbH19PjwvaGVhZD5cbiAgICAgIC8vIDxib2R5PlxuICAgICAgICA8QXBwIC8+XG4gICAgICAvLyA8L2JvZHk+XG4gICAgICAvLyA8L2h0bWw+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQm9vdFN0cmFwO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEFib3V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkFib3V0PC9oMT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBYm91dDtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXItY29tcG9uZW50Jyk7XG52YXIgTGluayA9IFJvdXRlci5MaW5rO1xudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWUgPVwid3JhcHBlclwiPlxuICAgICAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCIgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1zdGF0aWMtdG9wXCI+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lXCIgPmhvbWU8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5ib3hcIiA+aW5ib3g8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIiA+YWJvdXQ8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbm90Zm91bmRcIj5ub3Rmb3VuZDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgaWQ9XCJwYWdlXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW4gfHwgXCJXZWxjb21lIHRvIHlvdXIgSW5ib3hcIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbi8vIHZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbi8vIHZhciBSb3V0ZUhhbmRsZXIgPSBSb3V0ZXIuUm91dGVIYW5kbGVyO1xudmFyIEhvbWVUaXRsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgdGl0bGU6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuPnt0aGlzLnByb3BzLnRpdGxlfSA8L3NwYW4+XG4gICAgKTtcbiAgfVxufSk7XG5cbnZhciBIb21lID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aXRsZSA9ICdkZWZhdWx0IHRpdGxlJztcbiAgICBpZiAoXCJkZXZlbG9wbWVudFwiID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICB0aXRsZSA9ICdkZXZlbG9wbWVudCBvbmx5JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGl0bGUgPSAncHJvZHVjdGlvbiBvbmx5JztcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPkhvbWU8L2gxPlxuICAgICAgICAgIDxIb21lVGl0bGUgdGl0bGU9e3RpdGxlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSG9tZTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbi8vIHZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbi8vIHZhciBSb3V0ZUhhbmRsZXIgPSBSb3V0ZXIuUm91dGVIYW5kbGVyO1xudmFyIE1lc3NhZ2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6ICdsb2FkaW5nIG1lc3NhZ2UhJ1xuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBmcm9tIHRoZSBwYXRoIGAvaW5ib3gvbWVzc2FnZXMvOmlkYFxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtZXNzYWdlOiAnY29tcG9uZW50RGlkTW91bnQnXG4gICAgfSk7XG5cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWVzc2FnZTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbi8vIHZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbi8vIHZhciBSb3V0ZUhhbmRsZXIgPSBSb3V0ZXIuUm91dGVIYW5kbGVyO1xuXG52YXIgTm90Rm91bmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT4hICBOb3RGb3VuZDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOb3RGb3VuZDtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuXG4vKmVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG4vKmVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzKi9cblxudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlci1jb21wb25lbnQnKTtcbnZhciBMb2NhdGlvbnMgPSBSb3V0ZXIuTG9jYXRpb25zO1xudmFyIExvY2F0aW9uID0gUm91dGVyLkxvY2F0aW9uO1xudmFyIE5vdEZvdW5kID0gUm91dGVyLk5vdEZvdW5kO1xudmFyIEluYm94ID0gcmVxdWlyZSgnLi9JbmJveC5qc3gnKTtcblxuLy8gcGFnZSBjb21wb25lbnRzLlxudmFyIEJvb3RTdHJhcCA9IHJlcXVpcmUoJy4uL0Jvb3RTdHJhcC5qc3gnKTtcbnZhciBIb21lID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9Ib21lLmpzeCcpO1xudmFyIE5vdEZvdW5kUGFnZSA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvTm90Rm91bmQuanN4Jyk7XG52YXIgQWJvdXQgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL0Fib3V0LmpzeCcpO1xuXG5cbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgc2hvd1Byb2dyZXNzQmFyOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coYXJndW1lbnRzKTtcbiAgfSxcblxuICBoaWRlUHJvZ3Jlc3NCYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TG9jYXRpb25zIG9uQmVmb3JlTmF2aWdhdGlvbj17dGhpcy5zaG93UHJvZ3Jlc3NCYXJ9IG9uTmF2aWdhdGlvbj17dGhpcy5oaWRlUHJvZ3Jlc3NCYXJ9PlxuICAgICAgICA8TG9jYXRpb24gcGF0aD1cIi9cIiBoYW5kbGVyPXtCb290U3RyYXB9IC8+XG4gICAgICAgIDxMb2NhdGlvbiBwYXRoPVwiL2hvbWVcIiBoYW5kbGVyPXtIb21lfSAvPlxuICAgICAgICA8TG9jYXRpb24gcGF0aD1cIi9hYm91dFwiIGhhbmRsZXI9e0Fib3V0fSAvPlxuICAgICAgICA8TG9jYXRpb24gcGF0aD1cIi9pbmJveCgvKilcIiBoYW5kbGVyPXtJbmJveH0gLz5cbiAgICAgICAgPE5vdEZvdW5kIGhhbmRsZXI9e05vdEZvdW5kUGFnZX0gLz5cbiAgICAgIDwvTG9jYXRpb25zPlxuICAgICk7XG4gIH1cblxufSk7XG5cbi8vIGRlY2xhcmUgb3VyIHJvdXRlcyBhbmQgdGhlaXIgaGllcmFyY2h5XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlci1jb21wb25lbnQnKTtcbnZhciBMb2NhdGlvbnMgPSBSb3V0ZXIuTG9jYXRpb25zO1xudmFyIExvY2F0aW9uID0gUm91dGVyLkxvY2F0aW9uO1xudmFyIE1lc3NhZ2UgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL01lc3NhZ2UuanN4Jyk7XG5cbnZhciBJbmJveCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMb2NhdGlvbnMgY29udGV4dHVhbD5cbiAgICAgICAgPExvY2F0aW9uIHBhdGg9XCIvXCIgaGFuZGxlcj17TWVzc2FnZX0gLz5cbiAgICAgIDwvTG9jYXRpb25zPlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEluYm94O1xuXG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQXBwID0gcmVxdWlyZSgnLi9yb3V0ZXJzL0FwcC5qc3gnKTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgUmVhY3QucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1hcHAnKSk7XG4gIH07XG59XG5cbiJdfQ==
