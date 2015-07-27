/**
 * @jsx React.DOM
 */
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var About = React.createClass({
  render: function () {
    return (
      <div>
        <h1>About</h1>
        <RouteHandler/>
      </div>
    );
  }
});
module.exports = About;
