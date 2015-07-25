/**
 * @jsx React.DOM
 */

//For rendering the app on client side.
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

if (typeof window !== 'undefined') {
    window.onload = function() {
        Router
            .create({
                routes: routes,
                location: Router.HistoryLocation,
                scrollBehavior: Router.ScrollToTopBehavior
            })
            .run((Root) => {
                React.render( <Root/> , document.body);
            });
    }
}

module.exports = routes;