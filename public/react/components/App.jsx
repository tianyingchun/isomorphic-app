/**
 * @jsx React.DOM
 */
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var addons = require('react/addons');
var App = React.createClass({

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
      <div className ="wrapper">
        <header id="header" className="navbar navbar-static-top">
          <nav className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
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
          </nav>
        </header>
        <div id="page" className="container">
            <RouteHandler/>
        </div>
      </div>
      );
  }
});

module.exports = App;
