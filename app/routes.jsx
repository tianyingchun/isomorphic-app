/**
 * @jsx React.DOM
 */

/*eslint-disable no-unused-vars*/
var React = require('react');
/*eslint-disable no-unused-vars*/

var { Router, Route } = require('react-router');
var HashHistory = require('react-router/lib/HashHistory');

var BootStrap = require('./BootStrap.jsx');
var Home = require('./components/Home.jsx');
var NotFound = require('./components/NotFound.jsx');
var About = require('./components/About.jsx');
var Inbox = require('./components/Inbox.jsx');
var Message = require('./components/Message.jsx');

// declare our routes and their hierarchy
var routes = (
    <Route path="/" component={BootStrap}>
        <Route path="home" component={Home}/>
        <Route path="about" component={About}/>
        <Route path="notfound" component={NotFound}/>
        <Route path="inbox" component={Inbox}>
            <Route path="messages/:id" component={Message}/>
            <Route path="/archive/messages/:id" component={Message}/>
        </Route>
    </Route>
);
if (typeof window !== 'undefined') {
  window.onload = function () {
    React.render(
      <Router children= {routes} history={HashHistory} />,
      document
    );
  };
}
module.exports = routes;
