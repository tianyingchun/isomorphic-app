/**
 * @jsx React.DOM
 */
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var App = React.createClass({

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
      <div>
          <ul>
              <li>
                  <Link to="home" >home</Link>
              </li>
              <li>
                  <Link to="inbox" >inbox</Link>
              </li>
              <li>
                  <Link to="about" >about</Link>
              </li>
              <li>
                  <a href="/notfound">notfound</a>
              </li>
              <li>
                  <a href="/redirect">redirect</a>
              </li>
          </ul>
          <h1>App</h1>
          <RouteHandler/>
      </div>
      );
  }
});

module.exports = App;
