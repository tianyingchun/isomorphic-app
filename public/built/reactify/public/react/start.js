/**
 * @jsx React.DOM
 */
var React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');

if (typeof window !== 'undefined') {
  window.onload = function () {
    Router
    // Runs the router, similiar to the Router.run method. You can think of it as an
    // initializer/constructor method.
      .create({
        routes: routes,
        location: Router.HistoryLocation,
        scrollBehavior: Router.ScrollToTopBehavior
      })
      // This is our callback function, whenever the url changes it will be called again.
      // Handler: The ReactComponent class that will be rendered
      .run((Root) => {
        React.render(React.createElement(Root, null), document.getElementById('react-app'));
      });
  };
}
module.exports = routes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtZWQuanMiLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNyQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRXJDLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO0VBQ2pDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsWUFBWTtBQUM5QixJQUFJLE1BQU07QUFDVjs7T0FFTyxNQUFNLENBQUM7UUFDTixNQUFNLEVBQUUsTUFBTTtRQUNkLFFBQVEsRUFBRSxNQUFNLENBQUMsZUFBZTtRQUNoQyxjQUFjLEVBQUUsTUFBTSxDQUFDLG1CQUFtQjtBQUNsRCxPQUFPLENBQUM7QUFDUjs7T0FFTyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUs7UUFDYixLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFDLElBQUksRUFBQSxJQUFBLENBQUcsQ0FBQSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztPQUM5RCxDQUFDLENBQUM7R0FDTixDQUFDO0NBQ0g7QUFDRCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbnZhciByb3V0ZXMgPSByZXF1aXJlKCcuL3JvdXRlcy5qc3gnKTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgUm91dGVyXG4gICAgLy8gUnVucyB0aGUgcm91dGVyLCBzaW1pbGlhciB0byB0aGUgUm91dGVyLnJ1biBtZXRob2QuIFlvdSBjYW4gdGhpbmsgb2YgaXQgYXMgYW5cbiAgICAvLyBpbml0aWFsaXplci9jb25zdHJ1Y3RvciBtZXRob2QuXG4gICAgICAuY3JlYXRlKHtcbiAgICAgICAgcm91dGVzOiByb3V0ZXMsXG4gICAgICAgIGxvY2F0aW9uOiBSb3V0ZXIuSGlzdG9yeUxvY2F0aW9uLFxuICAgICAgICBzY3JvbGxCZWhhdmlvcjogUm91dGVyLlNjcm9sbFRvVG9wQmVoYXZpb3JcbiAgICAgIH0pXG4gICAgICAvLyBUaGlzIGlzIG91ciBjYWxsYmFjayBmdW5jdGlvbiwgd2hlbmV2ZXIgdGhlIHVybCBjaGFuZ2VzIGl0IHdpbGwgYmUgY2FsbGVkIGFnYWluLlxuICAgICAgLy8gSGFuZGxlcjogVGhlIFJlYWN0Q29tcG9uZW50IGNsYXNzIHRoYXQgd2lsbCBiZSByZW5kZXJlZFxuICAgICAgLnJ1bigoUm9vdCkgPT4ge1xuICAgICAgICBSZWFjdC5yZW5kZXIoPFJvb3QgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1hcHAnKSk7XG4gICAgICB9KTtcbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gcm91dGVzO1xuIl19