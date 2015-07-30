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
