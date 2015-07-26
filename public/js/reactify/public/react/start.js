/**
 * Created by hshen on 5/15/2015.
 */
var React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');
var x;
if (typeof window !== 'undefined') {
    window.onload = function() {
        Router
            // Runs the router, similiar to the Router.run method. You can think of it as an
            // initializer/constructor method.
            .create({
                routes: routes,
                location: ReactRouter.HistoryLocation,
                scrollBehavior: ReactRouter.ScrollToTopBehavior
            })
            // This is our callback function, whenever the url changes it will be called again.
            // Handler: The ReactComponent class that will be rendered
            .run((Root) => {
                React.render( React.createElement(Root, null) , document.body);
            });
    };
}
module.exports = routes

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtZWQuanMiLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNyQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDckMsSUFBSSxDQUFDLENBQUM7QUFDTixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtJQUMvQixNQUFNLENBQUMsTUFBTSxHQUFHLFdBQVc7QUFDL0IsUUFBUSxNQUFNO0FBQ2Q7O2FBRWEsTUFBTSxDQUFDO2dCQUNKLE1BQU0sRUFBRSxNQUFNO2dCQUNkLFFBQVEsRUFBRSxXQUFXLENBQUMsZUFBZTtnQkFDckMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxtQkFBbUI7QUFDL0QsYUFBYSxDQUFDO0FBQ2Q7O2FBRWEsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLO2dCQUNYLEtBQUssQ0FBQyxNQUFNLEVBQUUsb0JBQUMsSUFBSSxFQUFBLElBQUEsQ0FBRyxDQUFBLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNDLENBQUMsQ0FBQztLQUNWLENBQUM7Q0FDTDtBQUNELE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBoc2hlbiBvbiA1LzE1LzIwMTUuXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgcm91dGVzID0gcmVxdWlyZSgnLi9yb3V0ZXMuanN4Jyk7XG52YXIgeDtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgUm91dGVyXG4gICAgICAgICAgICAvLyBSdW5zIHRoZSByb3V0ZXIsIHNpbWlsaWFyIHRvIHRoZSBSb3V0ZXIucnVuIG1ldGhvZC4gWW91IGNhbiB0aGluayBvZiBpdCBhcyBhblxuICAgICAgICAgICAgLy8gaW5pdGlhbGl6ZXIvY29uc3RydWN0b3IgbWV0aG9kLlxuICAgICAgICAgICAgLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgcm91dGVzOiByb3V0ZXMsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IFJlYWN0Um91dGVyLkhpc3RvcnlMb2NhdGlvbixcbiAgICAgICAgICAgICAgICBzY3JvbGxCZWhhdmlvcjogUmVhY3RSb3V0ZXIuU2Nyb2xsVG9Ub3BCZWhhdmlvclxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgb3VyIGNhbGxiYWNrIGZ1bmN0aW9uLCB3aGVuZXZlciB0aGUgdXJsIGNoYW5nZXMgaXQgd2lsbCBiZSBjYWxsZWQgYWdhaW4uXG4gICAgICAgICAgICAvLyBIYW5kbGVyOiBUaGUgUmVhY3RDb21wb25lbnQgY2xhc3MgdGhhdCB3aWxsIGJlIHJlbmRlcmVkXG4gICAgICAgICAgICAucnVuKChSb290KSA9PiB7XG4gICAgICAgICAgICAgICAgUmVhY3QucmVuZGVyKCA8Um9vdCAvPiAsIGRvY3VtZW50LmJvZHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gcm91dGVzXG4iXX0=