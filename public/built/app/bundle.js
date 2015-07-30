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
      '<meta name="viewport" content="width=device-width" initial-scale=1" />' +
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
var Router = require('react-router');
var Link = Router.Link;
var App = React.createClass({displayName: "App",

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

},{"react":"react","react-router":"react-router"}],4:[function(require,module,exports){
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
          this.props.children
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

var $__0=     require('react-router'),Router=$__0.Router,Route=$__0.Route;
var HashHistory = require('react-router/lib/HashHistory');

var BootStrap = require('./BootStrap.jsx');
var Home = require('./components/Home.jsx');
var NotFound = require('./components/NotFound.jsx');
var About = require('./components/About.jsx');
var Inbox = require('./components/Inbox.jsx');
var Message = require('./components/Message.jsx');

// declare our routes and their hierarchy
var routes = (
    React.createElement(Route, {path: "/", component: BootStrap}, 
        React.createElement(Route, {path: "home", component: Home}), 
        React.createElement(Route, {path: "about", component: About}), 
        React.createElement(Route, {path: "notfound", component: NotFound}), 
        React.createElement(Route, {path: "inbox", component: Inbox}, 
            React.createElement(Route, {path: "messages/:id", component: Message}), 
            React.createElement(Route, {path: "/archive/messages/:id", component: Message})
        )
    )
);
if (typeof window !== 'undefined') {
  window.onload = function () {
    React.render(
      React.createElement(Router, {children: routes}),
      document
    );
  };
}
module.exports = routes;

},{"./BootStrap.jsx":1,"./components/About.jsx":2,"./components/Home.jsx":4,"./components/Inbox.jsx":5,"./components/Message.jsx":6,"./components/NotFound.jsx":7,"react":"react","react-router":"react-router","react-router/lib/HashHistory":13}],9:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
// var React = require('react');
// var { Router } = require('react-router');
var routes = require('./routes.jsx');

// if (typeof window !== 'undefined') {
//   window.onload = function () {
//     Router.run(routes, Router.HistoryLocation, function () {
//       React.render(
//         <Router children= {routes} />,
//         document);
//     });
//   };
// }
module.exports = routes;

},{"./routes.jsx":8}],10:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            currentQueue[queueIndex].run();
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],11:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _History2 = require('./History');

var _History3 = _interopRequireDefault(_History2);

var _DOMUtils = require('./DOMUtils');

/**
 * A history interface that assumes a DOM environment.
 */

var DOMHistory = (function (_History) {
  function DOMHistory() {
    var options = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, DOMHistory);

    _History.call(this, options);
    this.getScrollPosition = options.getScrollPosition || _DOMUtils.getWindowScrollPosition;
  }

  _inherits(DOMHistory, _History);

  DOMHistory.prototype.go = function go(n) {
    if (n === 0) return;

    window.history.go(n);
  };

  return DOMHistory;
})(_History3['default']);

exports['default'] = DOMHistory;
module.exports = exports['default'];
},{"./DOMUtils":12,"./History":14}],12:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.getWindowScrollPosition = getWindowScrollPosition;
exports.setWindowScrollPosition = setWindowScrollPosition;
exports.supportsHistory = supportsHistory;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports.canUseDOM = canUseDOM;

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search;
}

function getWindowScrollPosition() {
  return {
    scrollX: window.pageXOffset || document.documentElement.scrollLeft,
    scrollY: window.pageYOffset || document.documentElement.scrollTop
  };
}

function setWindowScrollPosition(scrollX, scrollY) {
  window.scrollTo(scrollX, scrollY);
}

/**
 * taken from modernizr
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}
},{}],13:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _DOMHistory2 = require('./DOMHistory');

var _DOMHistory3 = _interopRequireDefault(_DOMHistory2);

var _NavigationTypes = require('./NavigationTypes');

var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

var _DOMUtils = require('./DOMUtils');

var _URLUtils = require('./URLUtils');

var DefaultQueryKey = '_qk';

function ensureSlash() {
  var path = (0, _DOMUtils.getHashPath)();

  if ((0, _URLUtils.isAbsolutePath)(path)) return true;

  (0, _DOMUtils.replaceHashPath)('/' + path);

  return false;
}

function addQueryStringValueToPath(path, key, value) {
  return path + (path.indexOf('?') === -1 ? '?' : '&') + ('' + key + '=' + value);
}

function getQueryStringValueFromPath(path, key) {
  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
  return match && match[1];
}

function saveState(path, queryKey, state) {
  window.sessionStorage.setItem(state.key, JSON.stringify(state));
  return addQueryStringValueToPath(path, queryKey, state.key);
}

function readState(path, queryKey) {
  var sessionKey = getQueryStringValueFromPath(path, queryKey);
  var json = sessionKey && window.sessionStorage.getItem(sessionKey);

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {}
  }

  return null;
}

function updateCurrentState(queryKey, extraState) {
  var path = (0, _DOMUtils.getHashPath)();
  var state = readState(path, queryKey);

  if (state) saveState(path, queryKey, _extends(state, extraState));
}

/**
 * A history implementation for DOM environments that uses window.location.hash
 * to store the current path. This is essentially a hack for older browsers that
 * do not support the HTML5 history API (IE <= 9).
 *
 * Support for persistence of state across page refreshes is provided using a
 * combination of a URL query string parameter and DOM storage. However, this
 * support is not enabled by default. In order to use it, create your own
 * HashHistory.
 *
 *   import HashHistory from 'react-router/lib/HashHistory';
 *   var StatefulHashHistory = new HashHistory({ queryKey: '_key' });
 *   React.render(<Router history={StatefulHashHistory} .../>, ...);
 */

var HashHistory = (function (_DOMHistory) {
  function HashHistory() {
    var options = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, HashHistory);

    _DOMHistory.call(this, options);
    this.handleHashChange = this.handleHashChange.bind(this);
    this.queryKey = options.queryKey;

    if (typeof this.queryKey !== 'string') this.queryKey = this.queryKey ? DefaultQueryKey : null;
  }

  _inherits(HashHistory, _DOMHistory);

  HashHistory.prototype._updateLocation = function _updateLocation(navigationType) {
    var path = (0, _DOMUtils.getHashPath)();
    var state = this.queryKey ? readState(path, this.queryKey) : null;
    this.location = this.createLocation(path, state, navigationType);
  };

  HashHistory.prototype.setup = function setup() {
    if (this.location == null) {
      ensureSlash();
      this._updateLocation();
    }
  };

  HashHistory.prototype.handleHashChange = function handleHashChange() {
    if (!ensureSlash()) return;

    if (this._ignoreNextHashChange) {
      this._ignoreNextHashChange = false;
    } else {
      this._updateLocation(_NavigationTypes2['default'].POP);
      this._notifyChange();
    }
  };

  HashHistory.prototype.addChangeListener = function addChangeListener(listener) {
    _DOMHistory.prototype.addChangeListener.call(this, listener);

    if (this.changeListeners.length === 1) {
      if (window.addEventListener) {
        window.addEventListener('hashchange', this.handleHashChange, false);
      } else {
        window.attachEvent('onhashchange', this.handleHashChange);
      }
    }
  };

  HashHistory.prototype.removeChangeListener = function removeChangeListener(listener) {
    _DOMHistory.prototype.removeChangeListener.call(this, listener);

    if (this.changeListeners.length === 0) {
      if (window.removeEventListener) {
        window.removeEventListener('hashchange', this.handleHashChange, false);
      } else {
        window.detachEvent('onhashchange', this.handleHashChange);
      }
    }
  };

  HashHistory.prototype.pushState = function pushState(state, path) {
    (0, _warning2['default'])(this.queryKey || state == null, 'HashHistory needs a queryKey in order to persist state');

    if (this.queryKey) updateCurrentState(this.queryKey, this.getScrollPosition());

    state = this._createState(state);

    if (this.queryKey) path = saveState(path, this.queryKey, state);

    this._ignoreNextHashChange = true;
    window.location.hash = path;

    this.location = this.createLocation(path, state, _NavigationTypes2['default'].PUSH);

    this._notifyChange();
  };

  HashHistory.prototype.replaceState = function replaceState(state, path) {
    state = this._createState(state);

    if (this.queryKey) path = saveState(path, this.queryKey, state);

    this._ignoreNextHashChange = true;
    (0, _DOMUtils.replaceHashPath)(path);

    this.location = this.createLocation(path, state, _NavigationTypes2['default'].REPLACE);

    this._notifyChange();
  };

  HashHistory.prototype.makeHref = function makeHref(path) {
    return '#' + path;
  };

  return HashHistory;
})(_DOMHistory3['default']);

var history = new HashHistory();
exports.history = history;
exports['default'] = HashHistory;

// Ignore invalid JSON in session storage.
},{"./DOMHistory":11,"./DOMUtils":12,"./NavigationTypes":16,"./URLUtils":17,"warning":25}],14:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _URLUtils = require('./URLUtils');

var _Location = require('./Location');

var _Location2 = _interopRequireDefault(_Location);

var RequiredHistorySubclassMethods = ['pushState', 'replaceState', 'go'];

function createRandomKey() {
  return Math.random().toString(36).substr(2);
}

/**
 * A history interface that normalizes the differences across
 * various environments and implementations. Requires concrete
 * subclasses to implement the following methods:
 *
 * - pushState(state, path)
 * - replaceState(state, path)
 * - go(n)
 */

var History = (function () {
  function History() {
    var options = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, History);

    RequiredHistorySubclassMethods.forEach(function (method) {
      (0, _invariant2['default'])(typeof this[method] === 'function', '%s needs a "%s" method', this.constructor.name, method);
    }, this);

    this.parseQueryString = options.parseQueryString || _URLUtils.parseQueryString;
    this.changeListeners = [];
    this.location = null;
  }

  History.prototype._notifyChange = function _notifyChange() {
    for (var i = 0, len = this.changeListeners.length; i < len; ++i) this.changeListeners[i].call(this);
  };

  History.prototype.addChangeListener = function addChangeListener(listener) {
    this.changeListeners.push(listener);
  };

  History.prototype.removeChangeListener = function removeChangeListener(listener) {
    this.changeListeners = this.changeListeners.filter(function (li) {
      return li !== listener;
    });
  };

  History.prototype.back = function back() {
    this.go(-1);
  };

  History.prototype.forward = function forward() {
    this.go(1);
  };

  History.prototype._createState = function _createState(state) {
    state = state || {};

    if (!state.key) state.key = createRandomKey();

    return state;
  };

  History.prototype.createLocation = function createLocation(path, state, navigationType) {
    var pathname = (0, _URLUtils.getPathname)(path);
    var queryString = (0, _URLUtils.getQueryString)(path);
    var query = queryString ? this.parseQueryString(queryString) : null;
    return new _Location2['default'](pathname, query, state, navigationType);
  };

  return History;
})();

exports['default'] = History;
module.exports = exports['default'];
},{"./Location":15,"./URLUtils":17,"invariant":18}],15:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _NavigationTypes = require('./NavigationTypes');

var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

/**
 * A Location answers two important questions:
 *
 * 1. Where am I?
 * 2. How did I get here?
 */

var Location = (function () {
  function Location() {
    var pathname = arguments[0] === undefined ? '/' : arguments[0];
    var query = arguments[1] === undefined ? null : arguments[1];
    var state = arguments[2] === undefined ? null : arguments[2];
    var navigationType = arguments[3] === undefined ? _NavigationTypes2['default'].POP : arguments[3];

    _classCallCheck(this, Location);

    this.pathname = pathname;
    this.query = query;
    this.state = state;
    this.navigationType = navigationType;
  }

  Location.isLocation = function isLocation(object) {
    return object instanceof Location;
  };

  return Location;
})();

exports['default'] = Location;
module.exports = exports['default'];
},{"./NavigationTypes":16}],16:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _keymirror = require('keymirror');

var _keymirror2 = _interopRequireDefault(_keymirror);

var NavigationTypes = (0, _keymirror2['default'])({

  /**
   * Indicates that navigation was caused by a call to history.push.
   */
  PUSH: null,

  /**
   * Indicates that navigation was caused by a call to history.replace.
   */
  REPLACE: null,

  /**
   * Indicates that navigation was caused by some other action such
   * as using a browser's back/forward buttons and/or manually manipulating
   * the URL in a browser's location bar. This is the default.
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
   * for more information.
   */
  POP: null

});

exports['default'] = NavigationTypes;
module.exports = exports['default'];
},{"keymirror":19}],17:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.stringifyQuery = stringifyQuery;
exports.getPathname = getPathname;
exports.getQueryString = getQueryString;
exports.stripLeadingSlashes = stripLeadingSlashes;
exports.isAbsolutePath = isAbsolutePath;
exports.compilePattern = compilePattern;
exports.matchPattern = matchPattern;
exports.getParamNames = getParamNames;
exports.getParams = getParams;
exports.formatPattern = formatPattern;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var parseQueryString = _qs2['default'].parse;

exports.parseQueryString = parseQueryString;

function stringifyQuery(query) {
  return _qs2['default'].stringify(query, { arrayFormat: 'brackets' });
}

var queryMatcher = /\?([\s\S]*)$/;

function getPathname(path) {
  return path.replace(queryMatcher, '');
}

function getQueryString(path) {
  var match = path.match(queryMatcher);
  return match ? match[1] : '';
}

function stripLeadingSlashes(path) {
  return path ? path.replace(/^\/+/, '') : '';
}

function isAbsolutePath(path) {
  return typeof path === 'string' && path.charAt(0) === '/';
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeSource(string) {
  return escapeRegExp(string).replace(/\/+/g, '/+');
}

function _compilePattern(pattern) {
  var regexpSource = '';
  var paramNames = [];
  var tokens = [];

  var match,
      lastIndex = 0,
      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*|\(|\)/g;
  while (match = matcher.exec(pattern)) {
    if (match.index !== lastIndex) {
      tokens.push(pattern.slice(lastIndex, match.index));
      regexpSource += escapeSource(pattern.slice(lastIndex, match.index));
    }

    if (match[1]) {
      regexpSource += '([^/?#]+)';
      paramNames.push(match[1]);
    } else if (match[0] === '*') {
      regexpSource += '([\\s\\S]*?)';
      paramNames.push('splat');
    } else if (match[0] === '(') {
      regexpSource += '(?:';
    } else if (match[0] === ')') {
      regexpSource += ')?';
    }

    tokens.push(match[0]);

    lastIndex = matcher.lastIndex;
  }

  if (lastIndex !== pattern.length) {
    tokens.push(pattern.slice(lastIndex, pattern.length));
    regexpSource += escapeSource(pattern.slice(lastIndex, pattern.length));
  }

  return {
    pattern: pattern,
    regexpSource: regexpSource,
    paramNames: paramNames,
    tokens: tokens
  };
}

var CompiledPatternsCache = {};

function compilePattern(pattern) {
  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);

  return CompiledPatternsCache[pattern];
}

/**
 * Attempts to match a pattern on the given pathname. Patterns may use
 * the following special characters:
 *
 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
 *                  captured string is considered a "param"
 * - ()             Wraps a segment of the URL that is optional
 * - *              Consumes (non-greedy) all characters up to the next
 *                  character in the pattern, or to the end of the URL if
 *                  there is none
 *
 * The return value is an object with the following properties:
 *
 * - remainingPathname
 * - paramNames
 * - paramValues
 */

function matchPattern(pattern, pathname) {
  var _compilePattern2 = compilePattern(stripLeadingSlashes(pattern));

  var regexpSource = _compilePattern2.regexpSource;
  var paramNames = _compilePattern2.paramNames;
  var tokens = _compilePattern2.tokens;

  regexpSource += '/*'; // Ignore trailing slashes

  var captureRemaining = tokens[tokens.length - 1] !== '*';

  if (captureRemaining) regexpSource += '([\\s\\S]*?)';

  var match = pathname.match(new RegExp('^' + regexpSource + '$', 'i'));

  var remainingPathname, paramValues;
  if (match != null) {
    paramValues = Array.prototype.slice.call(match, 1).map(function (v) {
      return v != null ? decodeURIComponent(v.replace(/\+/g, '%20')) : v;
    });

    if (captureRemaining) {
      remainingPathname = paramValues.pop();
    } else {
      remainingPathname = pathname.replace(match[0], '');
    }
  } else {
    remainingPathname = paramValues = null;
  }

  return {
    remainingPathname: remainingPathname,
    paramNames: paramNames,
    paramValues: paramValues
  };
}

function getParamNames(pattern) {
  return compilePattern(pattern).paramNames;
}

function getParams(pattern, pathname) {
  var _matchPattern = matchPattern(pattern, stripLeadingSlashes(pathname));

  var paramNames = _matchPattern.paramNames;
  var paramValues = _matchPattern.paramValues;

  if (paramValues != null) {
    return paramNames.reduce(function (memo, paramName, index) {
      memo[paramName] = paramValues[index];
      return memo;
    }, {});
  }

  return null;
}

/**
 * Returns a version of the given pattern with params interpolated. Throws
 * if there is a dynamic segment of the pattern for which there is no param.
 */

function formatPattern(pattern, params) {
  params = params || {};

  var _compilePattern3 = compilePattern(pattern);

  var tokens = _compilePattern3.tokens;

  var parenCount = 0,
      pathname = '',
      splatIndex = 0;

  var token, paramName, paramValue;
  for (var i = 0, len = tokens.length; i < len; ++i) {
    token = tokens[i];

    if (token === '*') {
      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

      (0, _invariant2['default'])(paramValue != null || parenCount > 0, 'Missing splat #%s for path "%s"', splatIndex, pattern);

      if (paramValue != null) pathname += encodeURI(paramValue).replace(/%20/g, '+');
    } else if (token === '(') {
      parenCount += 1;
    } else if (token === ')') {
      parenCount -= 1;
    } else if (token.charAt(0) === ':') {
      paramName = token.substring(1);
      paramValue = params[paramName];

      (0, _invariant2['default'])(paramValue != null || parenCount > 0, 'Missing "%s" parameter for path "%s"', paramName, pattern);

      if (paramValue != null) pathname += encodeURIComponent(paramValue).replace(/%20/g, '+');
    } else {
      pathname += token;
    }
  }

  return pathname.replace(/\/+/g, '/');
}
},{"invariant":18,"qs":20}],18:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        'Invariant Violation: ' +
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":10}],19:[function(require,module,exports){
/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

"use strict";

/**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   var COLORS = keyMirror({blue: null, red: null});
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 * @param {object} obj
 * @return {object}
 */
var keyMirror = function(obj) {
  var ret = {};
  var key;
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('keyMirror(...): Argument must be an object.');
  }
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = key;
  }
  return ret;
};

module.exports = keyMirror;

},{}],20:[function(require,module,exports){
module.exports = require('./lib/');

},{"./lib/":21}],21:[function(require,module,exports){
// Load modules

var Stringify = require('./stringify');
var Parse = require('./parse');


// Declare internals

var internals = {};


module.exports = {
    stringify: Stringify,
    parse: Parse
};

},{"./parse":22,"./stringify":23}],22:[function(require,module,exports){
// Load modules

var Utils = require('./utils');


// Declare internals

var internals = {
    delimiter: '&',
    depth: 5,
    arrayLimit: 20,
    parameterLimit: 1000
};


internals.parseValues = function (str, options) {

    var obj = {};
    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

    for (var i = 0, il = parts.length; i < il; ++i) {
        var part = parts[i];
        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

        if (pos === -1) {
            obj[Utils.decode(part)] = '';
        }
        else {
            var key = Utils.decode(part.slice(0, pos));
            var val = Utils.decode(part.slice(pos + 1));

            if (Object.prototype.hasOwnProperty(key)) {
                continue;
            }

            if (!obj.hasOwnProperty(key)) {
                obj[key] = val;
            }
            else {
                obj[key] = [].concat(obj[key]).concat(val);
            }
        }
    }

    return obj;
};


internals.parseObject = function (chain, val, options) {

    if (!chain.length) {
        return val;
    }

    var root = chain.shift();

    var obj = {};
    if (root === '[]') {
        obj = [];
        obj = obj.concat(internals.parseObject(chain, val, options));
    }
    else {
        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
        var index = parseInt(cleanRoot, 10);
        var indexString = '' + index;
        if (!isNaN(index) &&
            root !== cleanRoot &&
            indexString === cleanRoot &&
            index >= 0 &&
            index <= options.arrayLimit) {

            obj = [];
            obj[index] = internals.parseObject(chain, val, options);
        }
        else {
            obj[cleanRoot] = internals.parseObject(chain, val, options);
        }
    }

    return obj;
};


internals.parseKeys = function (key, val, options) {

    if (!key) {
        return;
    }

    // The regex chunks

    var parent = /^([^\[\]]*)/;
    var child = /(\[[^\[\]]*\])/g;

    // Get the parent

    var segment = parent.exec(key);

    // Don't allow them to overwrite object prototype properties

    if (Object.prototype.hasOwnProperty(segment[1])) {
        return;
    }

    // Stash the parent if it exists

    var keys = [];
    if (segment[1]) {
        keys.push(segment[1]);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {

        ++i;
        if (!Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
            keys.push(segment[1]);
        }
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return internals.parseObject(keys, val, options);
};


module.exports = function (str, options) {

    if (str === '' ||
        str === null ||
        typeof str === 'undefined') {

        return {};
    }

    options = options || {};
    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;

    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
    var obj = {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0, il = keys.length; i < il; ++i) {
        var key = keys[i];
        var newObj = internals.parseKeys(key, tempObj[key], options);
        obj = Utils.merge(obj, newObj);
    }

    return Utils.compact(obj);
};

},{"./utils":24}],23:[function(require,module,exports){
// Load modules

var Utils = require('./utils');


// Declare internals

var internals = {
    delimiter: '&',
    arrayPrefixGenerators: {
        brackets: function (prefix, key) {
            return prefix + '[]';
        },
        indices: function (prefix, key) {
            return prefix + '[' + key + ']';
        },
        repeat: function (prefix, key) {
            return prefix;
        }
    }
};


internals.stringify = function (obj, prefix, generateArrayPrefix) {

    if (Utils.isBuffer(obj)) {
        obj = obj.toString();
    }
    else if (obj instanceof Date) {
        obj = obj.toISOString();
    }
    else if (obj === null) {
        obj = '';
    }

    if (typeof obj === 'string' ||
        typeof obj === 'number' ||
        typeof obj === 'boolean') {

        return [encodeURIComponent(prefix) + '=' + encodeURIComponent(obj)];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys = Object.keys(obj);
    for (var i = 0, il = objKeys.length; i < il; ++i) {
        var key = objKeys[i];
        if (Array.isArray(obj)) {
            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix));
        }
        else {
            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix));
        }
    }

    return values;
};


module.exports = function (obj, options) {

    options = options || {};
    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;

    var keys = [];

    if (typeof obj !== 'object' ||
        obj === null) {

        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in internals.arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    }
    else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    }
    else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];

    var objKeys = Object.keys(obj);
    for (var i = 0, il = objKeys.length; i < il; ++i) {
        var key = objKeys[i];
        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix));
    }

    return keys.join(delimiter);
};

},{"./utils":24}],24:[function(require,module,exports){
// Load modules


// Declare internals

var internals = {};


exports.arrayToObject = function (source) {

    var obj = {};
    for (var i = 0, il = source.length; i < il; ++i) {
        if (typeof source[i] !== 'undefined') {

            obj[i] = source[i];
        }
    }

    return obj;
};


exports.merge = function (target, source) {

    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        }
        else {
            target[source] = true;
        }

        return target;
    }

    if (typeof target !== 'object') {
        target = [target].concat(source);
        return target;
    }

    if (Array.isArray(target) &&
        !Array.isArray(source)) {

        target = exports.arrayToObject(target);
    }

    var keys = Object.keys(source);
    for (var k = 0, kl = keys.length; k < kl; ++k) {
        var key = keys[k];
        var value = source[key];

        if (!target[key]) {
            target[key] = value;
        }
        else {
            target[key] = exports.merge(target[key], value);
        }
    }

    return target;
};


exports.decode = function (str) {

    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};


exports.compact = function (obj, refs) {

    if (typeof obj !== 'object' ||
        obj === null) {

        return obj;
    }

    refs = refs || [];
    var lookup = refs.indexOf(obj);
    if (lookup !== -1) {
        return refs[lookup];
    }

    refs.push(obj);

    if (Array.isArray(obj)) {
        var compacted = [];

        for (var i = 0, il = obj.length; i < il; ++i) {
            if (typeof obj[i] !== 'undefined') {
                compacted.push(obj[i]);
            }
        }

        return compacted;
    }

    var keys = Object.keys(obj);
    for (i = 0, il = keys.length; i < il; ++i) {
        var key = keys[i];
        obj[key] = exports.compact(obj[key], refs);
    }

    return obj;
};


exports.isRegExp = function (obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};


exports.isBuffer = function (obj) {

    if (obj === null ||
        typeof obj === 'undefined') {

        return false;
    }

    return !!(obj.constructor &&
        obj.constructor.isBuffer &&
        obj.constructor.isBuffer(obj));
};

},{}],25:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":10}]},{},[1,2,3,4,5,6,7,8,9])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGlhbnlpbmdjaHVuL0RvY3VtZW50cy9HaXRodWIvaXNvbW9ycGhpYy1hcHAvYXBwL0Jvb3RTdHJhcC5qc3giLCIvVXNlcnMvdGlhbnlpbmdjaHVuL0RvY3VtZW50cy9HaXRodWIvaXNvbW9ycGhpYy1hcHAvYXBwL2NvbXBvbmVudHMvQWJvdXQuanN4IiwiL1VzZXJzL3RpYW55aW5nY2h1bi9Eb2N1bWVudHMvR2l0aHViL2lzb21vcnBoaWMtYXBwL2FwcC9jb21wb25lbnRzL0FwcC5qc3giLCIvVXNlcnMvdGlhbnlpbmdjaHVuL0RvY3VtZW50cy9HaXRodWIvaXNvbW9ycGhpYy1hcHAvYXBwL2NvbXBvbmVudHMvSG9tZS5qc3giLCIvVXNlcnMvdGlhbnlpbmdjaHVuL0RvY3VtZW50cy9HaXRodWIvaXNvbW9ycGhpYy1hcHAvYXBwL2NvbXBvbmVudHMvSW5ib3guanN4IiwiL1VzZXJzL3RpYW55aW5nY2h1bi9Eb2N1bWVudHMvR2l0aHViL2lzb21vcnBoaWMtYXBwL2FwcC9jb21wb25lbnRzL01lc3NhZ2UuanN4IiwiL1VzZXJzL3RpYW55aW5nY2h1bi9Eb2N1bWVudHMvR2l0aHViL2lzb21vcnBoaWMtYXBwL2FwcC9jb21wb25lbnRzL05vdEZvdW5kLmpzeCIsIi9Vc2Vycy90aWFueWluZ2NodW4vRG9jdW1lbnRzL0dpdGh1Yi9pc29tb3JwaGljLWFwcC9hcHAvcm91dGVzLmpzeCIsIi9Vc2Vycy90aWFueWluZ2NodW4vRG9jdW1lbnRzL0dpdGh1Yi9pc29tb3JwaGljLWFwcC9hcHAvc3RhcnQuanN4Iiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL0RPTUhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9ET01VdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL0hhc2hIaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL0xvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvTmF2aWdhdGlvblR5cGVzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvVVJMVXRpbHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL2tleW1pcnJvci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3FzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvcXMvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvcXMvbGliL3BhcnNlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvcXMvbGliL3N0cmluZ2lmeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3FzL2xpYi91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3dhcm5pbmcvd2FybmluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztHQUVHO0FBQ0gsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUU3Qix3QkFBd0I7QUFDeEIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7O0FBRTFDLElBQUksK0JBQStCLHlCQUFBO0FBQ25DLEVBQUUs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDak1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNyT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLy8gdGhlIGFwcGxpY2F0aW9uIGVudHJ5XG52YXIgQXBwID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0FwcC5qc3gnKTtcblxudmFyIEJvb3RTdHJhcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgbWV0YUh0bWwgPVxuICAgICAgJzxiYXNlIGhyZWY9XCIvXCIgLz4nICtcbiAgICAgICc8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPicgK1xuICAgICAgJzxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz4nICtcbiAgICAgICc8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoXCIgaW5pdGlhbC1zY2FsZT0xXCIgLz4nICtcbiAgICAgICc8dGl0bGU+PCU9cGFnZVRpdGxlJT48L3RpdGxlPicgK1xuICAgICAgJzxsaW5rIGhyZWY9XCJzdGF0aWMvYnVpbHQvc3R5bGVzL2Jvb3RzdHJhcC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz4nICtcbiAgICAgICc8IS0tW2lmIGx0ZSBJRSA5XT4nICtcbiAgICAgICc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvc3RhdGljL2J1aWx0L3ZlbmRvci9yZWFjdC5pZThmaXguanNcIj48L3NjcmlwdD4nICtcbiAgICAgICc8IVtlbmRpZl0tLT4nICtcbiAgICAgICc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvc3RhdGljL2J1aWx0L3ZlbmRvci9yZWFjdC5qc1wiPjwvc2NyaXB0PicgK1xuICAgICAgJzxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cIi9zdGF0aWMvYnVpbHQvYXBwL2J1bmRsZS5qc1wiPjwvc2NyaXB0Pic7XG4gICAgcmV0dXJuIChcbiAgICAgIDxodG1sPlxuICAgICAgPGhlYWQgbGFuZz1cImVuXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IG1ldGFIdG1sfX0+PC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxBcHAgLz5cbiAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb290U3RyYXA7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQWJvdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+QWJvdXQ8L2gxPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFib3V0O1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xudmFyIExpbmsgPSBSb3V0ZXIuTGluaztcbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lID1cIndyYXBwZXJcIj5cbiAgICAgICAgPGhlYWRlciBpZD1cImhlYWRlclwiIGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItc3RhdGljLXRvcFwiPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiaG9tZVwiID5ob21lPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cImluYm94XCIgPmluYm94PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cImFib3V0XCIgPmFib3V0PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL25vdGZvdW5kXCI+bm90Zm91bmQ8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGlkPVwicGFnZVwiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuIHx8IFwiV2VsY29tZSB0byB5b3VyIEluYm94XCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG4vLyB2YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG4vLyB2YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcbnZhciBIb21lVGl0bGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c3Bhbj57dGhpcy5wcm9wcy50aXRsZX0gPC9zcGFuPlxuICAgICk7XG4gIH1cbn0pO1xuXG52YXIgSG9tZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGl0bGUgPSAnZGVmYXVsdCB0aXRsZSc7XG4gICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdGl0bGUgPSAnZGV2ZWxvcG1lbnQgb25seSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlID0gJ3Byb2R1Y3Rpb24gb25seSc7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgICAgICA8SG9tZVRpdGxlIHRpdGxlPXt0aXRsZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhvbWU7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgTGluayA9IFJvdXRlci5MaW5rO1xuXG52YXIgSW5ib3ggPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5JbmJveDwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwibWVzc2FnZVwiIHBhcmFtcz17e2lkOiAzfX0+TWVzc2FnZTM8L0xpbms+XG4gICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjYXJjaGl2ZS9tZXNzYWdlcy80XCI+IE1lc3NhZ2U0PC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEluYm94O1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuLy8gdmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xuLy8gdmFyIFJvdXRlSGFuZGxlciA9IFJvdXRlci5Sb3V0ZUhhbmRsZXI7XG52YXIgTWVzc2FnZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogJ2xvYWRpbmcnXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgIC8vIGZyb20gdGhlIHBhdGggYC9pbmJveC9tZXNzYWdlcy86aWRgXG4gICAgdmFyIGlkID0gdGhpcy5wcm9wcy5wYXJhbXMuaWQ7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1lc3NhZ2U6ICdjb21wb25lbnREaWRNb3VudCcgKyBpZFxuICAgIH0pO1xuXG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2V9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lc3NhZ2U7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG4vLyB2YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG4vLyB2YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcblxudmFyIE5vdEZvdW5kID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+ISAgTm90Rm91bmQ8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTm90Rm91bmQ7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cblxuLyplc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuLyplc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyovXG5cbnZhciB7IFJvdXRlciwgUm91dGUgfSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xudmFyIEhhc2hIaXN0b3J5ID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyL2xpYi9IYXNoSGlzdG9yeScpO1xuXG52YXIgQm9vdFN0cmFwID0gcmVxdWlyZSgnLi9Cb290U3RyYXAuanN4Jyk7XG52YXIgSG9tZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Ib21lLmpzeCcpO1xudmFyIE5vdEZvdW5kID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL05vdEZvdW5kLmpzeCcpO1xudmFyIEFib3V0ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0Fib3V0LmpzeCcpO1xudmFyIEluYm94ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0luYm94LmpzeCcpO1xudmFyIE1lc3NhZ2UgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTWVzc2FnZS5qc3gnKTtcblxuLy8gZGVjbGFyZSBvdXIgcm91dGVzIGFuZCB0aGVpciBoaWVyYXJjaHlcbnZhciByb3V0ZXMgPSAoXG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtCb290U3RyYXB9PlxuICAgICAgICA8Um91dGUgcGF0aD1cImhvbWVcIiBjb21wb25lbnQ9e0hvbWV9Lz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJhYm91dFwiIGNvbXBvbmVudD17QWJvdXR9Lz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJub3Rmb3VuZFwiIGNvbXBvbmVudD17Tm90Rm91bmR9Lz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJpbmJveFwiIGNvbXBvbmVudD17SW5ib3h9PlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJtZXNzYWdlcy86aWRcIiBjb21wb25lbnQ9e01lc3NhZ2V9Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FyY2hpdmUvbWVzc2FnZXMvOmlkXCIgY29tcG9uZW50PXtNZXNzYWdlfS8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgPC9Sb3V0ZT5cbik7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBSZWFjdC5yZW5kZXIoXG4gICAgICA8Um91dGVyIGNoaWxkcmVuPSB7cm91dGVzfSAvPixcbiAgICAgIGRvY3VtZW50XG4gICAgKTtcbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gcm91dGVzO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4vLyB2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuLy8gdmFyIHsgUm91dGVyIH0gPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbnZhciByb3V0ZXMgPSByZXF1aXJlKCcuL3JvdXRlcy5qc3gnKTtcblxuLy8gaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4vLyAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4vLyAgICAgUm91dGVyLnJ1bihyb3V0ZXMsIFJvdXRlci5IaXN0b3J5TG9jYXRpb24sIGZ1bmN0aW9uICgpIHtcbi8vICAgICAgIFJlYWN0LnJlbmRlcihcbi8vICAgICAgICAgPFJvdXRlciBjaGlsZHJlbj0ge3JvdXRlc30gLz4sXG4vLyAgICAgICAgIGRvY3VtZW50KTtcbi8vICAgICB9KTtcbi8vICAgfTtcbi8vIH1cbm1vZHVsZS5leHBvcnRzID0gcm91dGVzO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9IaXN0b3J5MiA9IHJlcXVpcmUoJy4vSGlzdG9yeScpO1xuXG52YXIgX0hpc3RvcnkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSGlzdG9yeTIpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG4vKipcbiAqIEEgaGlzdG9yeSBpbnRlcmZhY2UgdGhhdCBhc3N1bWVzIGEgRE9NIGVudmlyb25tZW50LlxuICovXG5cbnZhciBET01IaXN0b3J5ID0gKGZ1bmN0aW9uIChfSGlzdG9yeSkge1xuICBmdW5jdGlvbiBET01IaXN0b3J5KCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBET01IaXN0b3J5KTtcblxuICAgIF9IaXN0b3J5LmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5nZXRTY3JvbGxQb3NpdGlvbiA9IG9wdGlvbnMuZ2V0U2Nyb2xsUG9zaXRpb24gfHwgX0RPTVV0aWxzLmdldFdpbmRvd1Njcm9sbFBvc2l0aW9uO1xuICB9XG5cbiAgX2luaGVyaXRzKERPTUhpc3RvcnksIF9IaXN0b3J5KTtcblxuICBET01IaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvKG4pIHtcbiAgICBpZiAobiA9PT0gMCkgcmV0dXJuO1xuXG4gICAgd2luZG93Lmhpc3RvcnkuZ28obik7XG4gIH07XG5cbiAgcmV0dXJuIERPTUhpc3Rvcnk7XG59KShfSGlzdG9yeTNbJ2RlZmF1bHQnXSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERPTUhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldEhhc2hQYXRoID0gZ2V0SGFzaFBhdGg7XG5leHBvcnRzLnJlcGxhY2VIYXNoUGF0aCA9IHJlcGxhY2VIYXNoUGF0aDtcbmV4cG9ydHMuZ2V0V2luZG93UGF0aCA9IGdldFdpbmRvd1BhdGg7XG5leHBvcnRzLmdldFdpbmRvd1Njcm9sbFBvc2l0aW9uID0gZ2V0V2luZG93U2Nyb2xsUG9zaXRpb247XG5leHBvcnRzLnNldFdpbmRvd1Njcm9sbFBvc2l0aW9uID0gc2V0V2luZG93U2Nyb2xsUG9zaXRpb247XG5leHBvcnRzLnN1cHBvcnRzSGlzdG9yeSA9IHN1cHBvcnRzSGlzdG9yeTtcbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5leHBvcnRzLmNhblVzZURPTSA9IGNhblVzZURPTTtcblxuZnVuY3Rpb24gZ2V0SGFzaFBhdGgoKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB3aW5kb3cubG9jYXRpb24uaGFzaCBoZXJlIGJlY2F1c2UgaXQncyBub3RcbiAgLy8gY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnMgLSBGaXJlZm94IHdpbGwgcHJlLWRlY29kZSBpdCFcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMV0gfHwgJyc7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VIYXNoUGF0aChwYXRoKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyAnIycgKyBwYXRoKTtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93UGF0aCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbFBvc2l0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHNjcm9sbFg6IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxZOiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICB9O1xufVxuXG5mdW5jdGlvbiBzZXRXaW5kb3dTY3JvbGxQb3NpdGlvbihzY3JvbGxYLCBzY3JvbGxZKSB7XG4gIHdpbmRvdy5zY3JvbGxUbyhzY3JvbGxYLCBzY3JvbGxZKTtcbn1cblxuLyoqXG4gKiB0YWtlbiBmcm9tIG1vZGVybml6clxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2hpc3RvcnkuanNcbiAqIGNoYW5nZWQgdG8gYXZvaWQgZmFsc2UgbmVnYXRpdmVzIGZvciBXaW5kb3dzIFBob25lczogaHR0cHM6Ly9naXRodWIuY29tL3JhY2t0L3JlYWN0LXJvdXRlci9pc3N1ZXMvNTg2XG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNIaXN0b3J5KCkge1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICBpZiAoKHVhLmluZGV4T2YoJ0FuZHJvaWQgMi4nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignQW5kcm9pZCA0LjAnKSAhPT0gLTEpICYmIHVhLmluZGV4T2YoJ01vYmlsZSBTYWZhcmknKSAhPT0gLTEgJiYgdWEuaW5kZXhPZignQ2hyb21lJykgPT09IC0xICYmIHVhLmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5O1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9ET01IaXN0b3J5MiA9IHJlcXVpcmUoJy4vRE9NSGlzdG9yeScpO1xuXG52YXIgX0RPTUhpc3RvcnkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRE9NSGlzdG9yeTIpO1xuXG52YXIgX05hdmlnYXRpb25UeXBlcyA9IHJlcXVpcmUoJy4vTmF2aWdhdGlvblR5cGVzJyk7XG5cbnZhciBfTmF2aWdhdGlvblR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05hdmlnYXRpb25UeXBlcyk7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbnZhciBfVVJMVXRpbHMgPSByZXF1aXJlKCcuL1VSTFV0aWxzJyk7XG5cbnZhciBEZWZhdWx0UXVlcnlLZXkgPSAnX3FrJztcblxuZnVuY3Rpb24gZW5zdXJlU2xhc2goKSB7XG4gIHZhciBwYXRoID0gKDAsIF9ET01VdGlscy5nZXRIYXNoUGF0aCkoKTtcblxuICBpZiAoKDAsIF9VUkxVdGlscy5pc0Fic29sdXRlUGF0aCkocGF0aCkpIHJldHVybiB0cnVlO1xuXG4gICgwLCBfRE9NVXRpbHMucmVwbGFjZUhhc2hQYXRoKSgnLycgKyBwYXRoKTtcblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGFkZFF1ZXJ5U3RyaW5nVmFsdWVUb1BhdGgocGF0aCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gcGF0aCArIChwYXRoLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgKCcnICsga2V5ICsgJz0nICsgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXRRdWVyeVN0cmluZ1ZhbHVlRnJvbVBhdGgocGF0aCwga2V5KSB7XG4gIHZhciBtYXRjaCA9IHBhdGgubWF0Y2gobmV3IFJlZ0V4cCgnXFxcXD8uKj9cXFxcYicgKyBrZXkgKyAnPSguKz8pXFxcXGInKSk7XG4gIHJldHVybiBtYXRjaCAmJiBtYXRjaFsxXTtcbn1cblxuZnVuY3Rpb24gc2F2ZVN0YXRlKHBhdGgsIHF1ZXJ5S2V5LCBzdGF0ZSkge1xuICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShzdGF0ZS5rZXksIEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XG4gIHJldHVybiBhZGRRdWVyeVN0cmluZ1ZhbHVlVG9QYXRoKHBhdGgsIHF1ZXJ5S2V5LCBzdGF0ZS5rZXkpO1xufVxuXG5mdW5jdGlvbiByZWFkU3RhdGUocGF0aCwgcXVlcnlLZXkpIHtcbiAgdmFyIHNlc3Npb25LZXkgPSBnZXRRdWVyeVN0cmluZ1ZhbHVlRnJvbVBhdGgocGF0aCwgcXVlcnlLZXkpO1xuICB2YXIganNvbiA9IHNlc3Npb25LZXkgJiYgd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oc2Vzc2lvbktleSk7XG5cbiAgaWYgKGpzb24pIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3VycmVudFN0YXRlKHF1ZXJ5S2V5LCBleHRyYVN0YXRlKSB7XG4gIHZhciBwYXRoID0gKDAsIF9ET01VdGlscy5nZXRIYXNoUGF0aCkoKTtcbiAgdmFyIHN0YXRlID0gcmVhZFN0YXRlKHBhdGgsIHF1ZXJ5S2V5KTtcblxuICBpZiAoc3RhdGUpIHNhdmVTdGF0ZShwYXRoLCBxdWVyeUtleSwgX2V4dGVuZHMoc3RhdGUsIGV4dHJhU3RhdGUpKTtcbn1cblxuLyoqXG4gKiBBIGhpc3RvcnkgaW1wbGVtZW50YXRpb24gZm9yIERPTSBlbnZpcm9ubWVudHMgdGhhdCB1c2VzIHdpbmRvdy5sb2NhdGlvbi5oYXNoXG4gKiB0byBzdG9yZSB0aGUgY3VycmVudCBwYXRoLiBUaGlzIGlzIGVzc2VudGlhbGx5IGEgaGFjayBmb3Igb2xkZXIgYnJvd3NlcnMgdGhhdFxuICogZG8gbm90IHN1cHBvcnQgdGhlIEhUTUw1IGhpc3RvcnkgQVBJIChJRSA8PSA5KS5cbiAqXG4gKiBTdXBwb3J0IGZvciBwZXJzaXN0ZW5jZSBvZiBzdGF0ZSBhY3Jvc3MgcGFnZSByZWZyZXNoZXMgaXMgcHJvdmlkZWQgdXNpbmcgYVxuICogY29tYmluYXRpb24gb2YgYSBVUkwgcXVlcnkgc3RyaW5nIHBhcmFtZXRlciBhbmQgRE9NIHN0b3JhZ2UuIEhvd2V2ZXIsIHRoaXNcbiAqIHN1cHBvcnQgaXMgbm90IGVuYWJsZWQgYnkgZGVmYXVsdC4gSW4gb3JkZXIgdG8gdXNlIGl0LCBjcmVhdGUgeW91ciBvd25cbiAqIEhhc2hIaXN0b3J5LlxuICpcbiAqICAgaW1wb3J0IEhhc2hIaXN0b3J5IGZyb20gJ3JlYWN0LXJvdXRlci9saWIvSGFzaEhpc3RvcnknO1xuICogICB2YXIgU3RhdGVmdWxIYXNoSGlzdG9yeSA9IG5ldyBIYXNoSGlzdG9yeSh7IHF1ZXJ5S2V5OiAnX2tleScgfSk7XG4gKiAgIFJlYWN0LnJlbmRlcig8Um91dGVyIGhpc3Rvcnk9e1N0YXRlZnVsSGFzaEhpc3Rvcnl9IC4uLi8+LCAuLi4pO1xuICovXG5cbnZhciBIYXNoSGlzdG9yeSA9IChmdW5jdGlvbiAoX0RPTUhpc3RvcnkpIHtcbiAgZnVuY3Rpb24gSGFzaEhpc3RvcnkoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhhc2hIaXN0b3J5KTtcblxuICAgIF9ET01IaXN0b3J5LmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5oYW5kbGVIYXNoQ2hhbmdlID0gdGhpcy5oYW5kbGVIYXNoQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5xdWVyeUtleSA9IG9wdGlvbnMucXVlcnlLZXk7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMucXVlcnlLZXkgIT09ICdzdHJpbmcnKSB0aGlzLnF1ZXJ5S2V5ID0gdGhpcy5xdWVyeUtleSA/IERlZmF1bHRRdWVyeUtleSA6IG51bGw7XG4gIH1cblxuICBfaW5oZXJpdHMoSGFzaEhpc3RvcnksIF9ET01IaXN0b3J5KTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuX3VwZGF0ZUxvY2F0aW9uID0gZnVuY3Rpb24gX3VwZGF0ZUxvY2F0aW9uKG5hdmlnYXRpb25UeXBlKSB7XG4gICAgdmFyIHBhdGggPSAoMCwgX0RPTVV0aWxzLmdldEhhc2hQYXRoKSgpO1xuICAgIHZhciBzdGF0ZSA9IHRoaXMucXVlcnlLZXkgPyByZWFkU3RhdGUocGF0aCwgdGhpcy5xdWVyeUtleSkgOiBudWxsO1xuICAgIHRoaXMubG9jYXRpb24gPSB0aGlzLmNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBuYXZpZ2F0aW9uVHlwZSk7XG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgaWYgKHRoaXMubG9jYXRpb24gPT0gbnVsbCkge1xuICAgICAgZW5zdXJlU2xhc2goKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUxvY2F0aW9uKCk7XG4gICAgfVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5oYW5kbGVIYXNoQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlSGFzaENoYW5nZSgpIHtcbiAgICBpZiAoIWVuc3VyZVNsYXNoKCkpIHJldHVybjtcblxuICAgIGlmICh0aGlzLl9pZ25vcmVOZXh0SGFzaENoYW5nZSkge1xuICAgICAgdGhpcy5faWdub3JlTmV4dEhhc2hDaGFuZ2UgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXBkYXRlTG9jYXRpb24oX05hdmlnYXRpb25UeXBlczJbJ2RlZmF1bHQnXS5QT1ApO1xuICAgICAgdGhpcy5fbm90aWZ5Q2hhbmdlKCk7XG4gICAgfVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5hZGRDaGFuZ2VMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZENoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgX0RPTUhpc3RvcnkucHJvdG90eXBlLmFkZENoYW5nZUxpc3RlbmVyLmNhbGwodGhpcywgbGlzdGVuZXIpO1xuXG4gICAgaWYgKHRoaXMuY2hhbmdlTGlzdGVuZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhpcy5oYW5kbGVIYXNoQ2hhbmdlLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29uaGFzaGNoYW5nZScsIHRoaXMuaGFuZGxlSGFzaENoYW5nZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUNoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgX0RPTUhpc3RvcnkucHJvdG90eXBlLnJlbW92ZUNoYW5nZUxpc3RlbmVyLmNhbGwodGhpcywgbGlzdGVuZXIpO1xuXG4gICAgaWYgKHRoaXMuY2hhbmdlTGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhpcy5oYW5kbGVIYXNoQ2hhbmdlLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuZGV0YWNoRXZlbnQoJ29uaGFzaGNoYW5nZScsIHRoaXMuaGFuZGxlSGFzaENoYW5nZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5wdXNoU3RhdGUgPSBmdW5jdGlvbiBwdXNoU3RhdGUoc3RhdGUsIHBhdGgpIHtcbiAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKHRoaXMucXVlcnlLZXkgfHwgc3RhdGUgPT0gbnVsbCwgJ0hhc2hIaXN0b3J5IG5lZWRzIGEgcXVlcnlLZXkgaW4gb3JkZXIgdG8gcGVyc2lzdCBzdGF0ZScpO1xuXG4gICAgaWYgKHRoaXMucXVlcnlLZXkpIHVwZGF0ZUN1cnJlbnRTdGF0ZSh0aGlzLnF1ZXJ5S2V5LCB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCkpO1xuXG4gICAgc3RhdGUgPSB0aGlzLl9jcmVhdGVTdGF0ZShzdGF0ZSk7XG5cbiAgICBpZiAodGhpcy5xdWVyeUtleSkgcGF0aCA9IHNhdmVTdGF0ZShwYXRoLCB0aGlzLnF1ZXJ5S2V5LCBzdGF0ZSk7XG5cbiAgICB0aGlzLl9pZ25vcmVOZXh0SGFzaENoYW5nZSA9IHRydWU7XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwYXRoO1xuXG4gICAgdGhpcy5sb2NhdGlvbiA9IHRoaXMuY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIF9OYXZpZ2F0aW9uVHlwZXMyWydkZWZhdWx0J10uUFVTSCk7XG5cbiAgICB0aGlzLl9ub3RpZnlDaGFuZ2UoKTtcbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUucmVwbGFjZVN0YXRlID0gZnVuY3Rpb24gcmVwbGFjZVN0YXRlKHN0YXRlLCBwYXRoKSB7XG4gICAgc3RhdGUgPSB0aGlzLl9jcmVhdGVTdGF0ZShzdGF0ZSk7XG5cbiAgICBpZiAodGhpcy5xdWVyeUtleSkgcGF0aCA9IHNhdmVTdGF0ZShwYXRoLCB0aGlzLnF1ZXJ5S2V5LCBzdGF0ZSk7XG5cbiAgICB0aGlzLl9pZ25vcmVOZXh0SGFzaENoYW5nZSA9IHRydWU7XG4gICAgKDAsIF9ET01VdGlscy5yZXBsYWNlSGFzaFBhdGgpKHBhdGgpO1xuXG4gICAgdGhpcy5sb2NhdGlvbiA9IHRoaXMuY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIF9OYXZpZ2F0aW9uVHlwZXMyWydkZWZhdWx0J10uUkVQTEFDRSk7XG5cbiAgICB0aGlzLl9ub3RpZnlDaGFuZ2UoKTtcbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUubWFrZUhyZWYgPSBmdW5jdGlvbiBtYWtlSHJlZihwYXRoKSB7XG4gICAgcmV0dXJuICcjJyArIHBhdGg7XG4gIH07XG5cbiAgcmV0dXJuIEhhc2hIaXN0b3J5O1xufSkoX0RPTUhpc3RvcnkzWydkZWZhdWx0J10pO1xuXG52YXIgaGlzdG9yeSA9IG5ldyBIYXNoSGlzdG9yeSgpO1xuZXhwb3J0cy5oaXN0b3J5ID0gaGlzdG9yeTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEhhc2hIaXN0b3J5O1xuXG4vLyBJZ25vcmUgaW52YWxpZCBKU09OIGluIHNlc3Npb24gc3RvcmFnZS4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfVVJMVXRpbHMgPSByZXF1aXJlKCcuL1VSTFV0aWxzJyk7XG5cbnZhciBfTG9jYXRpb24gPSByZXF1aXJlKCcuL0xvY2F0aW9uJyk7XG5cbnZhciBfTG9jYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTG9jYXRpb24pO1xuXG52YXIgUmVxdWlyZWRIaXN0b3J5U3ViY2xhc3NNZXRob2RzID0gWydwdXNoU3RhdGUnLCAncmVwbGFjZVN0YXRlJywgJ2dvJ107XG5cbmZ1bmN0aW9uIGNyZWF0ZVJhbmRvbUtleSgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyKTtcbn1cblxuLyoqXG4gKiBBIGhpc3RvcnkgaW50ZXJmYWNlIHRoYXQgbm9ybWFsaXplcyB0aGUgZGlmZmVyZW5jZXMgYWNyb3NzXG4gKiB2YXJpb3VzIGVudmlyb25tZW50cyBhbmQgaW1wbGVtZW50YXRpb25zLiBSZXF1aXJlcyBjb25jcmV0ZVxuICogc3ViY2xhc3NlcyB0byBpbXBsZW1lbnQgdGhlIGZvbGxvd2luZyBtZXRob2RzOlxuICpcbiAqIC0gcHVzaFN0YXRlKHN0YXRlLCBwYXRoKVxuICogLSByZXBsYWNlU3RhdGUoc3RhdGUsIHBhdGgpXG4gKiAtIGdvKG4pXG4gKi9cblxudmFyIEhpc3RvcnkgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBIaXN0b3J5KCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIaXN0b3J5KTtcblxuICAgIFJlcXVpcmVkSGlzdG9yeVN1YmNsYXNzTWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgICgwLCBfaW52YXJpYW50MlsnZGVmYXVsdCddKSh0eXBlb2YgdGhpc1ttZXRob2RdID09PSAnZnVuY3Rpb24nLCAnJXMgbmVlZHMgYSBcIiVzXCIgbWV0aG9kJywgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCBtZXRob2QpO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgdGhpcy5wYXJzZVF1ZXJ5U3RyaW5nID0gb3B0aW9ucy5wYXJzZVF1ZXJ5U3RyaW5nIHx8IF9VUkxVdGlscy5wYXJzZVF1ZXJ5U3RyaW5nO1xuICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5sb2NhdGlvbiA9IG51bGw7XG4gIH1cblxuICBIaXN0b3J5LnByb3RvdHlwZS5fbm90aWZ5Q2hhbmdlID0gZnVuY3Rpb24gX25vdGlmeUNoYW5nZSgpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5jaGFuZ2VMaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHRoaXMuY2hhbmdlTGlzdGVuZXJzW2ldLmNhbGwodGhpcyk7XG4gIH07XG5cbiAgSGlzdG9yeS5wcm90b3R5cGUuYWRkQ2hhbmdlTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICB9O1xuXG4gIEhpc3RvcnkucHJvdG90eXBlLnJlbW92ZUNoYW5nZUxpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB0aGlzLmNoYW5nZUxpc3RlbmVycyA9IHRoaXMuY2hhbmdlTGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAobGkpIHtcbiAgICAgIHJldHVybiBsaSAhPT0gbGlzdGVuZXI7XG4gICAgfSk7XG4gIH07XG5cbiAgSGlzdG9yeS5wcm90b3R5cGUuYmFjayA9IGZ1bmN0aW9uIGJhY2soKSB7XG4gICAgdGhpcy5nbygtMSk7XG4gIH07XG5cbiAgSGlzdG9yeS5wcm90b3R5cGUuZm9yd2FyZCA9IGZ1bmN0aW9uIGZvcndhcmQoKSB7XG4gICAgdGhpcy5nbygxKTtcbiAgfTtcblxuICBIaXN0b3J5LnByb3RvdHlwZS5fY3JlYXRlU3RhdGUgPSBmdW5jdGlvbiBfY3JlYXRlU3RhdGUoc3RhdGUpIHtcbiAgICBzdGF0ZSA9IHN0YXRlIHx8IHt9O1xuXG4gICAgaWYgKCFzdGF0ZS5rZXkpIHN0YXRlLmtleSA9IGNyZWF0ZVJhbmRvbUtleSgpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xuXG4gIEhpc3RvcnkucHJvdG90eXBlLmNyZWF0ZUxvY2F0aW9uID0gZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIG5hdmlnYXRpb25UeXBlKSB7XG4gICAgdmFyIHBhdGhuYW1lID0gKDAsIF9VUkxVdGlscy5nZXRQYXRobmFtZSkocGF0aCk7XG4gICAgdmFyIHF1ZXJ5U3RyaW5nID0gKDAsIF9VUkxVdGlscy5nZXRRdWVyeVN0cmluZykocGF0aCk7XG4gICAgdmFyIHF1ZXJ5ID0gcXVlcnlTdHJpbmcgPyB0aGlzLnBhcnNlUXVlcnlTdHJpbmcocXVlcnlTdHJpbmcpIDogbnVsbDtcbiAgICByZXR1cm4gbmV3IF9Mb2NhdGlvbjJbJ2RlZmF1bHQnXShwYXRobmFtZSwgcXVlcnksIHN0YXRlLCBuYXZpZ2F0aW9uVHlwZSk7XG4gIH07XG5cbiAgcmV0dXJuIEhpc3Rvcnk7XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX05hdmlnYXRpb25UeXBlcyA9IHJlcXVpcmUoJy4vTmF2aWdhdGlvblR5cGVzJyk7XG5cbnZhciBfTmF2aWdhdGlvblR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05hdmlnYXRpb25UeXBlcyk7XG5cbi8qKlxuICogQSBMb2NhdGlvbiBhbnN3ZXJzIHR3byBpbXBvcnRhbnQgcXVlc3Rpb25zOlxuICpcbiAqIDEuIFdoZXJlIGFtIEk/XG4gKiAyLiBIb3cgZGlkIEkgZ2V0IGhlcmU/XG4gKi9cblxudmFyIExvY2F0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTG9jYXRpb24oKSB7XG4gICAgdmFyIHBhdGhuYW1lID0gYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAnLycgOiBhcmd1bWVudHNbMF07XG4gICAgdmFyIHF1ZXJ5ID0gYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzFdO1xuICAgIHZhciBzdGF0ZSA9IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1syXTtcbiAgICB2YXIgbmF2aWdhdGlvblR5cGUgPSBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IF9OYXZpZ2F0aW9uVHlwZXMyWydkZWZhdWx0J10uUE9QIDogYXJndW1lbnRzWzNdO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvY2F0aW9uKTtcblxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMubmF2aWdhdGlvblR5cGUgPSBuYXZpZ2F0aW9uVHlwZTtcbiAgfVxuXG4gIExvY2F0aW9uLmlzTG9jYXRpb24gPSBmdW5jdGlvbiBpc0xvY2F0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiBMb2NhdGlvbjtcbiAgfTtcblxuICByZXR1cm4gTG9jYXRpb247XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBMb2NhdGlvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2tleW1pcnJvciA9IHJlcXVpcmUoJ2tleW1pcnJvcicpO1xuXG52YXIgX2tleW1pcnJvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXltaXJyb3IpO1xuXG52YXIgTmF2aWdhdGlvblR5cGVzID0gKDAsIF9rZXltaXJyb3IyWydkZWZhdWx0J10pKHtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgbmF2aWdhdGlvbiB3YXMgY2F1c2VkIGJ5IGEgY2FsbCB0byBoaXN0b3J5LnB1c2guXG4gICAqL1xuICBQVVNIOiBudWxsLFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCBuYXZpZ2F0aW9uIHdhcyBjYXVzZWQgYnkgYSBjYWxsIHRvIGhpc3RvcnkucmVwbGFjZS5cbiAgICovXG4gIFJFUExBQ0U6IG51bGwsXG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IG5hdmlnYXRpb24gd2FzIGNhdXNlZCBieSBzb21lIG90aGVyIGFjdGlvbiBzdWNoXG4gICAqIGFzIHVzaW5nIGEgYnJvd3NlcidzIGJhY2svZm9yd2FyZCBidXR0b25zIGFuZC9vciBtYW51YWxseSBtYW5pcHVsYXRpbmdcbiAgICogdGhlIFVSTCBpbiBhIGJyb3dzZXIncyBsb2NhdGlvbiBiYXIuIFRoaXMgaXMgdGhlIGRlZmF1bHQuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93RXZlbnRIYW5kbGVycy9vbnBvcHN0YXRlXG4gICAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgUE9QOiBudWxsXG5cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBOYXZpZ2F0aW9uVHlwZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0cmluZ2lmeVF1ZXJ5ID0gc3RyaW5naWZ5UXVlcnk7XG5leHBvcnRzLmdldFBhdGhuYW1lID0gZ2V0UGF0aG5hbWU7XG5leHBvcnRzLmdldFF1ZXJ5U3RyaW5nID0gZ2V0UXVlcnlTdHJpbmc7XG5leHBvcnRzLnN0cmlwTGVhZGluZ1NsYXNoZXMgPSBzdHJpcExlYWRpbmdTbGFzaGVzO1xuZXhwb3J0cy5pc0Fic29sdXRlUGF0aCA9IGlzQWJzb2x1dGVQYXRoO1xuZXhwb3J0cy5jb21waWxlUGF0dGVybiA9IGNvbXBpbGVQYXR0ZXJuO1xuZXhwb3J0cy5tYXRjaFBhdHRlcm4gPSBtYXRjaFBhdHRlcm47XG5leHBvcnRzLmdldFBhcmFtTmFtZXMgPSBnZXRQYXJhbU5hbWVzO1xuZXhwb3J0cy5nZXRQYXJhbXMgPSBnZXRQYXJhbXM7XG5leHBvcnRzLmZvcm1hdFBhdHRlcm4gPSBmb3JtYXRQYXR0ZXJuO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcXMgPSByZXF1aXJlKCdxcycpO1xuXG52YXIgX3FzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3FzKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIHBhcnNlUXVlcnlTdHJpbmcgPSBfcXMyWydkZWZhdWx0J10ucGFyc2U7XG5cbmV4cG9ydHMucGFyc2VRdWVyeVN0cmluZyA9IHBhcnNlUXVlcnlTdHJpbmc7XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVF1ZXJ5KHF1ZXJ5KSB7XG4gIHJldHVybiBfcXMyWydkZWZhdWx0J10uc3RyaW5naWZ5KHF1ZXJ5LCB7IGFycmF5Rm9ybWF0OiAnYnJhY2tldHMnIH0pO1xufVxuXG52YXIgcXVlcnlNYXRjaGVyID0gL1xcPyhbXFxzXFxTXSopJC87XG5cbmZ1bmN0aW9uIGdldFBhdGhuYW1lKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZShxdWVyeU1hdGNoZXIsICcnKTtcbn1cblxuZnVuY3Rpb24gZ2V0UXVlcnlTdHJpbmcocGF0aCkge1xuICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKHF1ZXJ5TWF0Y2hlcik7XG4gIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdIDogJyc7XG59XG5cbmZ1bmN0aW9uIHN0cmlwTGVhZGluZ1NsYXNoZXMocGF0aCkge1xuICByZXR1cm4gcGF0aCA/IHBhdGgucmVwbGFjZSgvXlxcLysvLCAnJykgOiAnJztcbn1cblxuZnVuY3Rpb24gaXNBYnNvbHV0ZVBhdGgocGF0aCkge1xuICByZXR1cm4gdHlwZW9mIHBhdGggPT09ICdzdHJpbmcnICYmIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVTb3VyY2Uoc3RyaW5nKSB7XG4gIHJldHVybiBlc2NhcGVSZWdFeHAoc3RyaW5nKS5yZXBsYWNlKC9cXC8rL2csICcvKycpO1xufVxuXG5mdW5jdGlvbiBfY29tcGlsZVBhdHRlcm4ocGF0dGVybikge1xuICB2YXIgcmVnZXhwU291cmNlID0gJyc7XG4gIHZhciBwYXJhbU5hbWVzID0gW107XG4gIHZhciB0b2tlbnMgPSBbXTtcblxuICB2YXIgbWF0Y2gsXG4gICAgICBsYXN0SW5kZXggPSAwLFxuICAgICAgbWF0Y2hlciA9IC86KFthLXpBLVpfJF1bYS16QS1aMC05XyRdKil8XFwqfFxcKHxcXCkvZztcbiAgd2hpbGUgKG1hdGNoID0gbWF0Y2hlci5leGVjKHBhdHRlcm4pKSB7XG4gICAgaWYgKG1hdGNoLmluZGV4ICE9PSBsYXN0SW5kZXgpIHtcbiAgICAgIHRva2Vucy5wdXNoKHBhdHRlcm4uc2xpY2UobGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgcmVnZXhwU291cmNlICs9IGVzY2FwZVNvdXJjZShwYXR0ZXJuLnNsaWNlKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICB9XG5cbiAgICBpZiAobWF0Y2hbMV0pIHtcbiAgICAgIHJlZ2V4cFNvdXJjZSArPSAnKFteLz8jXSspJztcbiAgICAgIHBhcmFtTmFtZXMucHVzaChtYXRjaFsxXSk7XG4gICAgfSBlbHNlIGlmIChtYXRjaFswXSA9PT0gJyonKSB7XG4gICAgICByZWdleHBTb3VyY2UgKz0gJyhbXFxcXHNcXFxcU10qPyknO1xuICAgICAgcGFyYW1OYW1lcy5wdXNoKCdzcGxhdCcpO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hbMF0gPT09ICcoJykge1xuICAgICAgcmVnZXhwU291cmNlICs9ICcoPzonO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hbMF0gPT09ICcpJykge1xuICAgICAgcmVnZXhwU291cmNlICs9ICcpPyc7XG4gICAgfVxuXG4gICAgdG9rZW5zLnB1c2gobWF0Y2hbMF0pO1xuXG4gICAgbGFzdEluZGV4ID0gbWF0Y2hlci5sYXN0SW5kZXg7XG4gIH1cblxuICBpZiAobGFzdEluZGV4ICE9PSBwYXR0ZXJuLmxlbmd0aCkge1xuICAgIHRva2Vucy5wdXNoKHBhdHRlcm4uc2xpY2UobGFzdEluZGV4LCBwYXR0ZXJuLmxlbmd0aCkpO1xuICAgIHJlZ2V4cFNvdXJjZSArPSBlc2NhcGVTb3VyY2UocGF0dGVybi5zbGljZShsYXN0SW5kZXgsIHBhdHRlcm4ubGVuZ3RoKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhdHRlcm46IHBhdHRlcm4sXG4gICAgcmVnZXhwU291cmNlOiByZWdleHBTb3VyY2UsXG4gICAgcGFyYW1OYW1lczogcGFyYW1OYW1lcyxcbiAgICB0b2tlbnM6IHRva2Vuc1xuICB9O1xufVxuXG52YXIgQ29tcGlsZWRQYXR0ZXJuc0NhY2hlID0ge307XG5cbmZ1bmN0aW9uIGNvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pIHtcbiAgaWYgKCEocGF0dGVybiBpbiBDb21waWxlZFBhdHRlcm5zQ2FjaGUpKSBDb21waWxlZFBhdHRlcm5zQ2FjaGVbcGF0dGVybl0gPSBfY29tcGlsZVBhdHRlcm4ocGF0dGVybik7XG5cbiAgcmV0dXJuIENvbXBpbGVkUGF0dGVybnNDYWNoZVtwYXR0ZXJuXTtcbn1cblxuLyoqXG4gKiBBdHRlbXB0cyB0byBtYXRjaCBhIHBhdHRlcm4gb24gdGhlIGdpdmVuIHBhdGhuYW1lLiBQYXR0ZXJucyBtYXkgdXNlXG4gKiB0aGUgZm9sbG93aW5nIHNwZWNpYWwgY2hhcmFjdGVyczpcbiAqXG4gKiAtIDpwYXJhbU5hbWUgICAgIE1hdGNoZXMgYSBVUkwgc2VnbWVudCB1cCB0byB0aGUgbmV4dCAvLCA/LCBvciAjLiBUaGVcbiAqICAgICAgICAgICAgICAgICAgY2FwdHVyZWQgc3RyaW5nIGlzIGNvbnNpZGVyZWQgYSBcInBhcmFtXCJcbiAqIC0gKCkgICAgICAgICAgICAgV3JhcHMgYSBzZWdtZW50IG9mIHRoZSBVUkwgdGhhdCBpcyBvcHRpb25hbFxuICogLSAqICAgICAgICAgICAgICBDb25zdW1lcyAobm9uLWdyZWVkeSkgYWxsIGNoYXJhY3RlcnMgdXAgdG8gdGhlIG5leHRcbiAqICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyIGluIHRoZSBwYXR0ZXJuLCBvciB0byB0aGUgZW5kIG9mIHRoZSBVUkwgaWZcbiAqICAgICAgICAgICAgICAgICAgdGhlcmUgaXMgbm9uZVxuICpcbiAqIFRoZSByZXR1cm4gdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqIC0gcmVtYWluaW5nUGF0aG5hbWVcbiAqIC0gcGFyYW1OYW1lc1xuICogLSBwYXJhbVZhbHVlc1xuICovXG5cbmZ1bmN0aW9uIG1hdGNoUGF0dGVybihwYXR0ZXJuLCBwYXRobmFtZSkge1xuICB2YXIgX2NvbXBpbGVQYXR0ZXJuMiA9IGNvbXBpbGVQYXR0ZXJuKHN0cmlwTGVhZGluZ1NsYXNoZXMocGF0dGVybikpO1xuXG4gIHZhciByZWdleHBTb3VyY2UgPSBfY29tcGlsZVBhdHRlcm4yLnJlZ2V4cFNvdXJjZTtcbiAgdmFyIHBhcmFtTmFtZXMgPSBfY29tcGlsZVBhdHRlcm4yLnBhcmFtTmFtZXM7XG4gIHZhciB0b2tlbnMgPSBfY29tcGlsZVBhdHRlcm4yLnRva2VucztcblxuICByZWdleHBTb3VyY2UgKz0gJy8qJzsgLy8gSWdub3JlIHRyYWlsaW5nIHNsYXNoZXNcblxuICB2YXIgY2FwdHVyZVJlbWFpbmluZyA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV0gIT09ICcqJztcblxuICBpZiAoY2FwdHVyZVJlbWFpbmluZykgcmVnZXhwU291cmNlICs9ICcoW1xcXFxzXFxcXFNdKj8pJztcblxuICB2YXIgbWF0Y2ggPSBwYXRobmFtZS5tYXRjaChuZXcgUmVnRXhwKCdeJyArIHJlZ2V4cFNvdXJjZSArICckJywgJ2knKSk7XG5cbiAgdmFyIHJlbWFpbmluZ1BhdGhuYW1lLCBwYXJhbVZhbHVlcztcbiAgaWYgKG1hdGNoICE9IG51bGwpIHtcbiAgICBwYXJhbVZhbHVlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG1hdGNoLCAxKS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiB2ICE9IG51bGwgPyBkZWNvZGVVUklDb21wb25lbnQodi5yZXBsYWNlKC9cXCsvZywgJyUyMCcpKSA6IHY7XG4gICAgfSk7XG5cbiAgICBpZiAoY2FwdHVyZVJlbWFpbmluZykge1xuICAgICAgcmVtYWluaW5nUGF0aG5hbWUgPSBwYXJhbVZhbHVlcy5wb3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtYWluaW5nUGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKG1hdGNoWzBdLCAnJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlbWFpbmluZ1BhdGhuYW1lID0gcGFyYW1WYWx1ZXMgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZW1haW5pbmdQYXRobmFtZTogcmVtYWluaW5nUGF0aG5hbWUsXG4gICAgcGFyYW1OYW1lczogcGFyYW1OYW1lcyxcbiAgICBwYXJhbVZhbHVlczogcGFyYW1WYWx1ZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyYW1OYW1lcyhwYXR0ZXJuKSB7XG4gIHJldHVybiBjb21waWxlUGF0dGVybihwYXR0ZXJuKS5wYXJhbU5hbWVzO1xufVxuXG5mdW5jdGlvbiBnZXRQYXJhbXMocGF0dGVybiwgcGF0aG5hbWUpIHtcbiAgdmFyIF9tYXRjaFBhdHRlcm4gPSBtYXRjaFBhdHRlcm4ocGF0dGVybiwgc3RyaXBMZWFkaW5nU2xhc2hlcyhwYXRobmFtZSkpO1xuXG4gIHZhciBwYXJhbU5hbWVzID0gX21hdGNoUGF0dGVybi5wYXJhbU5hbWVzO1xuICB2YXIgcGFyYW1WYWx1ZXMgPSBfbWF0Y2hQYXR0ZXJuLnBhcmFtVmFsdWVzO1xuXG4gIGlmIChwYXJhbVZhbHVlcyAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHBhcmFtTmFtZXMucmVkdWNlKGZ1bmN0aW9uIChtZW1vLCBwYXJhbU5hbWUsIGluZGV4KSB7XG4gICAgICBtZW1vW3BhcmFtTmFtZV0gPSBwYXJhbVZhbHVlc1tpbmRleF07XG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9LCB7fSk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gcGF0dGVybiB3aXRoIHBhcmFtcyBpbnRlcnBvbGF0ZWQuIFRocm93c1xuICogaWYgdGhlcmUgaXMgYSBkeW5hbWljIHNlZ21lbnQgb2YgdGhlIHBhdHRlcm4gZm9yIHdoaWNoIHRoZXJlIGlzIG5vIHBhcmFtLlxuICovXG5cbmZ1bmN0aW9uIGZvcm1hdFBhdHRlcm4ocGF0dGVybiwgcGFyYW1zKSB7XG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICB2YXIgX2NvbXBpbGVQYXR0ZXJuMyA9IGNvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pO1xuXG4gIHZhciB0b2tlbnMgPSBfY29tcGlsZVBhdHRlcm4zLnRva2VucztcblxuICB2YXIgcGFyZW5Db3VudCA9IDAsXG4gICAgICBwYXRobmFtZSA9ICcnLFxuICAgICAgc3BsYXRJbmRleCA9IDA7XG5cbiAgdmFyIHRva2VuLCBwYXJhbU5hbWUsIHBhcmFtVmFsdWU7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0b2tlbnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgIGlmICh0b2tlbiA9PT0gJyonKSB7XG4gICAgICBwYXJhbVZhbHVlID0gQXJyYXkuaXNBcnJheShwYXJhbXMuc3BsYXQpID8gcGFyYW1zLnNwbGF0W3NwbGF0SW5kZXgrK10gOiBwYXJhbXMuc3BsYXQ7XG5cbiAgICAgICgwLCBfaW52YXJpYW50MlsnZGVmYXVsdCddKShwYXJhbVZhbHVlICE9IG51bGwgfHwgcGFyZW5Db3VudCA+IDAsICdNaXNzaW5nIHNwbGF0ICMlcyBmb3IgcGF0aCBcIiVzXCInLCBzcGxhdEluZGV4LCBwYXR0ZXJuKTtcblxuICAgICAgaWYgKHBhcmFtVmFsdWUgIT0gbnVsbCkgcGF0aG5hbWUgKz0gZW5jb2RlVVJJKHBhcmFtVmFsdWUpLnJlcGxhY2UoLyUyMC9nLCAnKycpO1xuICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICcoJykge1xuICAgICAgcGFyZW5Db3VudCArPSAxO1xuICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICcpJykge1xuICAgICAgcGFyZW5Db3VudCAtPSAxO1xuICAgIH0gZWxzZSBpZiAodG9rZW4uY2hhckF0KDApID09PSAnOicpIHtcbiAgICAgIHBhcmFtTmFtZSA9IHRva2VuLnN1YnN0cmluZygxKTtcbiAgICAgIHBhcmFtVmFsdWUgPSBwYXJhbXNbcGFyYW1OYW1lXTtcblxuICAgICAgKDAsIF9pbnZhcmlhbnQyWydkZWZhdWx0J10pKHBhcmFtVmFsdWUgIT0gbnVsbCB8fCBwYXJlbkNvdW50ID4gMCwgJ01pc3NpbmcgXCIlc1wiIHBhcmFtZXRlciBmb3IgcGF0aCBcIiVzXCInLCBwYXJhbU5hbWUsIHBhdHRlcm4pO1xuXG4gICAgICBpZiAocGFyYW1WYWx1ZSAhPSBudWxsKSBwYXRobmFtZSArPSBlbmNvZGVVUklDb21wb25lbnQocGFyYW1WYWx1ZSkucmVwbGFjZSgvJTIwL2csICcrJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGhuYW1lICs9IHRva2VuO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXRobmFtZS5yZXBsYWNlKC9cXC8rL2csICcvJyk7XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGludmFyaWFudFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ0ludmFyaWFudCBWaW9sYXRpb246ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE0IEZhY2Vib29rLCBJbmMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvbnN0cnVjdHMgYW4gZW51bWVyYXRpb24gd2l0aCBrZXlzIGVxdWFsIHRvIHRoZWlyIHZhbHVlLlxuICpcbiAqIEZvciBleGFtcGxlOlxuICpcbiAqICAgdmFyIENPTE9SUyA9IGtleU1pcnJvcih7Ymx1ZTogbnVsbCwgcmVkOiBudWxsfSk7XG4gKiAgIHZhciBteUNvbG9yID0gQ09MT1JTLmJsdWU7XG4gKiAgIHZhciBpc0NvbG9yVmFsaWQgPSAhIUNPTE9SU1tteUNvbG9yXTtcbiAqXG4gKiBUaGUgbGFzdCBsaW5lIGNvdWxkIG5vdCBiZSBwZXJmb3JtZWQgaWYgdGhlIHZhbHVlcyBvZiB0aGUgZ2VuZXJhdGVkIGVudW0gd2VyZVxuICogbm90IGVxdWFsIHRvIHRoZWlyIGtleXMuXG4gKlxuICogICBJbnB1dDogIHtrZXkxOiB2YWwxLCBrZXkyOiB2YWwyfVxuICogICBPdXRwdXQ6IHtrZXkxOiBrZXkxLCBrZXkyOiBrZXkyfVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xudmFyIGtleU1pcnJvciA9IGZ1bmN0aW9uKG9iaikge1xuICB2YXIgcmV0ID0ge307XG4gIHZhciBrZXk7XG4gIGlmICghKG9iaiBpbnN0YW5jZW9mIE9iamVjdCAmJiAhQXJyYXkuaXNBcnJheShvYmopKSkge1xuICAgIHRocm93IG5ldyBFcnJvcigna2V5TWlycm9yKC4uLik6IEFyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0LicpO1xuICB9XG4gIGZvciAoa2V5IGluIG9iaikge1xuICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICByZXRba2V5XSA9IGtleTtcbiAgfVxuICByZXR1cm4gcmV0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlNaXJyb3I7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliLycpO1xuIiwiLy8gTG9hZCBtb2R1bGVzXG5cbnZhciBTdHJpbmdpZnkgPSByZXF1aXJlKCcuL3N0cmluZ2lmeScpO1xudmFyIFBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpO1xuXG5cbi8vIERlY2xhcmUgaW50ZXJuYWxzXG5cbnZhciBpbnRlcm5hbHMgPSB7fTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzdHJpbmdpZnk6IFN0cmluZ2lmeSxcbiAgICBwYXJzZTogUGFyc2Vcbn07XG4iLCIvLyBMb2FkIG1vZHVsZXNcblxudmFyIFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5cbi8vIERlY2xhcmUgaW50ZXJuYWxzXG5cbnZhciBpbnRlcm5hbHMgPSB7XG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgZGVwdGg6IDUsXG4gICAgYXJyYXlMaW1pdDogMjAsXG4gICAgcGFyYW1ldGVyTGltaXQ6IDEwMDBcbn07XG5cblxuaW50ZXJuYWxzLnBhcnNlVmFsdWVzID0gZnVuY3Rpb24gKHN0ciwgb3B0aW9ucykge1xuXG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdChvcHRpb25zLmRlbGltaXRlciwgb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA9PT0gSW5maW5pdHkgPyB1bmRlZmluZWQgOiBvcHRpb25zLnBhcmFtZXRlckxpbWl0KTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IHBhcnRzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgdmFyIHBvcyA9IHBhcnQuaW5kZXhPZignXT0nKSA9PT0gLTEgPyBwYXJ0LmluZGV4T2YoJz0nKSA6IHBhcnQuaW5kZXhPZignXT0nKSArIDE7XG5cbiAgICAgICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgICAgICAgIG9ialtVdGlscy5kZWNvZGUocGFydCldID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gVXRpbHMuZGVjb2RlKHBhcnQuc2xpY2UoMCwgcG9zKSk7XG4gICAgICAgICAgICB2YXIgdmFsID0gVXRpbHMuZGVjb2RlKHBhcnQuc2xpY2UocG9zICsgMSkpO1xuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ialtrZXldID0gW10uY29uY2F0KG9ialtrZXldKS5jb25jYXQodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG5cbmludGVybmFscy5wYXJzZU9iamVjdCA9IGZ1bmN0aW9uIChjaGFpbiwgdmFsLCBvcHRpb25zKSB7XG5cbiAgICBpZiAoIWNoYWluLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHZhciByb290ID0gY2hhaW4uc2hpZnQoKTtcblxuICAgIHZhciBvYmogPSB7fTtcbiAgICBpZiAocm9vdCA9PT0gJ1tdJykge1xuICAgICAgICBvYmogPSBbXTtcbiAgICAgICAgb2JqID0gb2JqLmNvbmNhdChpbnRlcm5hbHMucGFyc2VPYmplY3QoY2hhaW4sIHZhbCwgb3B0aW9ucykpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGNsZWFuUm9vdCA9IHJvb3RbMF0gPT09ICdbJyAmJiByb290W3Jvb3QubGVuZ3RoIC0gMV0gPT09ICddJyA/IHJvb3Quc2xpY2UoMSwgcm9vdC5sZW5ndGggLSAxKSA6IHJvb3Q7XG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGNsZWFuUm9vdCwgMTApO1xuICAgICAgICB2YXIgaW5kZXhTdHJpbmcgPSAnJyArIGluZGV4O1xuICAgICAgICBpZiAoIWlzTmFOKGluZGV4KSAmJlxuICAgICAgICAgICAgcm9vdCAhPT0gY2xlYW5Sb290ICYmXG4gICAgICAgICAgICBpbmRleFN0cmluZyA9PT0gY2xlYW5Sb290ICYmXG4gICAgICAgICAgICBpbmRleCA+PSAwICYmXG4gICAgICAgICAgICBpbmRleCA8PSBvcHRpb25zLmFycmF5TGltaXQpIHtcblxuICAgICAgICAgICAgb2JqID0gW107XG4gICAgICAgICAgICBvYmpbaW5kZXhdID0gaW50ZXJuYWxzLnBhcnNlT2JqZWN0KGNoYWluLCB2YWwsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2JqW2NsZWFuUm9vdF0gPSBpbnRlcm5hbHMucGFyc2VPYmplY3QoY2hhaW4sIHZhbCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxuXG5pbnRlcm5hbHMucGFyc2VLZXlzID0gZnVuY3Rpb24gKGtleSwgdmFsLCBvcHRpb25zKSB7XG5cbiAgICBpZiAoIWtleSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGhlIHJlZ2V4IGNodW5rc1xuXG4gICAgdmFyIHBhcmVudCA9IC9eKFteXFxbXFxdXSopLztcbiAgICB2YXIgY2hpbGQgPSAvKFxcW1teXFxbXFxdXSpcXF0pL2c7XG5cbiAgICAvLyBHZXQgdGhlIHBhcmVudFxuXG4gICAgdmFyIHNlZ21lbnQgPSBwYXJlbnQuZXhlYyhrZXkpO1xuXG4gICAgLy8gRG9uJ3QgYWxsb3cgdGhlbSB0byBvdmVyd3JpdGUgb2JqZWN0IHByb3RvdHlwZSBwcm9wZXJ0aWVzXG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShzZWdtZW50WzFdKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3Rhc2ggdGhlIHBhcmVudCBpZiBpdCBleGlzdHNcblxuICAgIHZhciBrZXlzID0gW107XG4gICAgaWYgKHNlZ21lbnRbMV0pIHtcbiAgICAgICAga2V5cy5wdXNoKHNlZ21lbnRbMV0pO1xuICAgIH1cblxuICAgIC8vIExvb3AgdGhyb3VnaCBjaGlsZHJlbiBhcHBlbmRpbmcgdG8gdGhlIGFycmF5IHVudGlsIHdlIGhpdCBkZXB0aFxuXG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlICgoc2VnbWVudCA9IGNoaWxkLmV4ZWMoa2V5KSkgIT09IG51bGwgJiYgaSA8IG9wdGlvbnMuZGVwdGgpIHtcblxuICAgICAgICArK2k7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShzZWdtZW50WzFdLnJlcGxhY2UoL1xcW3xcXF0vZywgJycpKSkge1xuICAgICAgICAgICAga2V5cy5wdXNoKHNlZ21lbnRbMV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUncyBhIHJlbWFpbmRlciwganVzdCBhZGQgd2hhdGV2ZXIgaXMgbGVmdFxuXG4gICAgaWYgKHNlZ21lbnQpIHtcbiAgICAgICAga2V5cy5wdXNoKCdbJyArIGtleS5zbGljZShzZWdtZW50LmluZGV4KSArICddJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVybmFscy5wYXJzZU9iamVjdChrZXlzLCB2YWwsIG9wdGlvbnMpO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIsIG9wdGlvbnMpIHtcblxuICAgIGlmIChzdHIgPT09ICcnIHx8XG4gICAgICAgIHN0ciA9PT0gbnVsbCB8fFxuICAgICAgICB0eXBlb2Ygc3RyID09PSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmRlbGltaXRlciA9IHR5cGVvZiBvcHRpb25zLmRlbGltaXRlciA9PT0gJ3N0cmluZycgfHwgVXRpbHMuaXNSZWdFeHAob3B0aW9ucy5kZWxpbWl0ZXIpID8gb3B0aW9ucy5kZWxpbWl0ZXIgOiBpbnRlcm5hbHMuZGVsaW1pdGVyO1xuICAgIG9wdGlvbnMuZGVwdGggPSB0eXBlb2Ygb3B0aW9ucy5kZXB0aCA9PT0gJ251bWJlcicgPyBvcHRpb25zLmRlcHRoIDogaW50ZXJuYWxzLmRlcHRoO1xuICAgIG9wdGlvbnMuYXJyYXlMaW1pdCA9IHR5cGVvZiBvcHRpb25zLmFycmF5TGltaXQgPT09ICdudW1iZXInID8gb3B0aW9ucy5hcnJheUxpbWl0IDogaW50ZXJuYWxzLmFycmF5TGltaXQ7XG4gICAgb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA9IHR5cGVvZiBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMucGFyYW1ldGVyTGltaXQgOiBpbnRlcm5hbHMucGFyYW1ldGVyTGltaXQ7XG5cbiAgICB2YXIgdGVtcE9iaiA9IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gaW50ZXJuYWxzLnBhcnNlVmFsdWVzKHN0ciwgb3B0aW9ucykgOiBzdHI7XG4gICAgdmFyIG9iaiA9IHt9O1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBrZXlzIGFuZCBzZXR1cCB0aGUgbmV3IG9iamVjdFxuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0ZW1wT2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBrZXlzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhciBuZXdPYmogPSBpbnRlcm5hbHMucGFyc2VLZXlzKGtleSwgdGVtcE9ialtrZXldLCBvcHRpb25zKTtcbiAgICAgICAgb2JqID0gVXRpbHMubWVyZ2Uob2JqLCBuZXdPYmopO1xuICAgIH1cblxuICAgIHJldHVybiBVdGlscy5jb21wYWN0KG9iaik7XG59O1xuIiwiLy8gTG9hZCBtb2R1bGVzXG5cbnZhciBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuXG4vLyBEZWNsYXJlIGludGVybmFsc1xuXG52YXIgaW50ZXJuYWxzID0ge1xuICAgIGRlbGltaXRlcjogJyYnLFxuICAgIGFycmF5UHJlZml4R2VuZXJhdG9yczoge1xuICAgICAgICBicmFja2V0czogZnVuY3Rpb24gKHByZWZpeCwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4ICsgJ1tdJztcbiAgICAgICAgfSxcbiAgICAgICAgaW5kaWNlczogZnVuY3Rpb24gKHByZWZpeCwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4ICsgJ1snICsga2V5ICsgJ10nO1xuICAgICAgICB9LFxuICAgICAgICByZXBlYXQ6IGZ1bmN0aW9uIChwcmVmaXgsIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuaW50ZXJuYWxzLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIChvYmosIHByZWZpeCwgZ2VuZXJhdGVBcnJheVByZWZpeCkge1xuXG4gICAgaWYgKFV0aWxzLmlzQnVmZmVyKG9iaikpIHtcbiAgICAgICAgb2JqID0gb2JqLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgb2JqID0gb2JqLnRvSVNPU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgICAgICBvYmogPSAnJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgdHlwZW9mIG9iaiA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgdHlwZW9mIG9iaiA9PT0gJ2Jvb2xlYW4nKSB7XG5cbiAgICAgICAgcmV0dXJuIFtlbmNvZGVVUklDb21wb25lbnQocHJlZml4KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmopXTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWVzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG5cbiAgICB2YXIgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gb2JqS2V5cy5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBvYmpLZXlzW2ldO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KGludGVybmFscy5zdHJpbmdpZnkob2JqW2tleV0sIGdlbmVyYXRlQXJyYXlQcmVmaXgocHJlZml4LCBrZXkpLCBnZW5lcmF0ZUFycmF5UHJlZml4KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KGludGVybmFscy5zdHJpbmdpZnkob2JqW2tleV0sIHByZWZpeCArICdbJyArIGtleSArICddJywgZ2VuZXJhdGVBcnJheVByZWZpeCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqLCBvcHRpb25zKSB7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgZGVsaW1pdGVyID0gdHlwZW9mIG9wdGlvbnMuZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/IGludGVybmFscy5kZWxpbWl0ZXIgOiBvcHRpb25zLmRlbGltaXRlcjtcblxuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgb2JqID09PSBudWxsKSB7XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHZhciBhcnJheUZvcm1hdDtcbiAgICBpZiAob3B0aW9ucy5hcnJheUZvcm1hdCBpbiBpbnRlcm5hbHMuYXJyYXlQcmVmaXhHZW5lcmF0b3JzKSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gb3B0aW9ucy5hcnJheUZvcm1hdDtcbiAgICB9XG4gICAgZWxzZSBpZiAoJ2luZGljZXMnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRpb25zLmluZGljZXMgPyAnaW5kaWNlcycgOiAncmVwZWF0JztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gJ2luZGljZXMnO1xuICAgIH1cblxuICAgIHZhciBnZW5lcmF0ZUFycmF5UHJlZml4ID0gaW50ZXJuYWxzLmFycmF5UHJlZml4R2VuZXJhdG9yc1thcnJheUZvcm1hdF07XG5cbiAgICB2YXIgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gb2JqS2V5cy5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBvYmpLZXlzW2ldO1xuICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoaW50ZXJuYWxzLnN0cmluZ2lmeShvYmpba2V5XSwga2V5LCBnZW5lcmF0ZUFycmF5UHJlZml4KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleXMuam9pbihkZWxpbWl0ZXIpO1xufTtcbiIsIi8vIExvYWQgbW9kdWxlc1xuXG5cbi8vIERlY2xhcmUgaW50ZXJuYWxzXG5cbnZhciBpbnRlcm5hbHMgPSB7fTtcblxuXG5leHBvcnRzLmFycmF5VG9PYmplY3QgPSBmdW5jdGlvbiAoc291cmNlKSB7XG5cbiAgICB2YXIgb2JqID0ge307XG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gc291cmNlLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VbaV0gIT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgIG9ialtpXSA9IHNvdXJjZVtpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG5cbmV4cG9ydHMubWVyZ2UgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblxuICAgIGlmICghc291cmNlKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbc291cmNlXSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0YXJnZXQgPSBbdGFyZ2V0XS5jb25jYXQoc291cmNlKTtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmXG4gICAgICAgICFBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcblxuICAgICAgICB0YXJnZXQgPSBleHBvcnRzLmFycmF5VG9PYmplY3QodGFyZ2V0KTtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgZm9yICh2YXIgayA9IDAsIGtsID0ga2V5cy5sZW5ndGg7IGsgPCBrbDsgKytrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2tdO1xuICAgICAgICB2YXIgdmFsdWUgPSBzb3VyY2Vba2V5XTtcblxuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBleHBvcnRzLm1lcmdlKHRhcmdldFtrZXldLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5leHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uIChzdHIpIHtcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxufTtcblxuXG5leHBvcnRzLmNvbXBhY3QgPSBmdW5jdGlvbiAob2JqLCByZWZzKSB7XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgb2JqID09PSBudWxsKSB7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICByZWZzID0gcmVmcyB8fCBbXTtcbiAgICB2YXIgbG9va3VwID0gcmVmcy5pbmRleE9mKG9iaik7XG4gICAgaWYgKGxvb2t1cCAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHJlZnNbbG9va3VwXTtcbiAgICB9XG5cbiAgICByZWZzLnB1c2gob2JqKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgdmFyIGNvbXBhY3RlZCA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IG9iai5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9ialtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb21wYWN0ZWQucHVzaChvYmpbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBhY3RlZDtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgZm9yIChpID0gMCwgaWwgPSBrZXlzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIG9ialtrZXldID0gZXhwb3J0cy5jb21wYWN0KG9ialtrZXldLCByZWZzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxuXG5leHBvcnRzLmlzUmVnRXhwID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59O1xuXG5cbmV4cG9ydHMuaXNCdWZmZXIgPSBmdW5jdGlvbiAob2JqKSB7XG5cbiAgICBpZiAob2JqID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhIShvYmouY29uc3RydWN0b3IgJiZcbiAgICAgICAgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyICYmXG4gICAgICAgIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopKTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBfX0RFVl9fID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAoX19ERVZfXykge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAoL15bc1xcV10qJC8pLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIl19
