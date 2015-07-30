/**
 * @jsx React.DOM
 */
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var App = React.createClass({

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
            </ul>
          </nav>
        </header>
        <div id="page" className="container">
          {this.props.children || "Welcome to your Inbox"}
        </div>
      </div>
      );
  }
});

module.exports = App;
