/**
 * @jsx React.DOM
 */
var React = require('react');

// the application entry
var App = require('./components/App.jsx');

var BootStrap = React.createClass({
  render: function () {
    return (
      <html>
      <head lang="en">
        <base href="/" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>The isomorphic app sample</title>
        <link href="static/built/styles/bootstrap.css" rel="stylesheet" />
        <script type="text/javascript" src="/static/built/vendor/react.js"></script>
        <script type="text/javascript" src="/static/built/app/bundle.js"></script>
      </head>
      <body>
        <App />
      </body>
      </html>
    );
  }
});

module.exports = BootStrap;
