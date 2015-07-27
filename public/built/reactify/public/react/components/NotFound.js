/**
 * @jsx React.DOM
 */
var React = require('react');
// var Router = require('react-router');
// var RouteHandler = Router.RouteHandler;

var NotFound = React.createClass({displayName: "NotFound",
  render: function () {
    return (
      React.createElement("div", null, 
          React.createElement("h1", null, "!  NotFound")
      )
    );
  }
});

module.exports = NotFound;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtZWQuanMiLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLHdDQUF3QztBQUN4QywwQ0FBMEM7O0FBRTFDLElBQUksOEJBQThCLHdCQUFBO0VBQ2hDLE1BQU0sRUFBRSxZQUFZO0lBQ2xCO01BQ0Usb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQTtVQUNELG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUEsYUFBZ0IsQ0FBQTtNQUNsQixDQUFBO01BQ047R0FDSDtBQUNILENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuLy8gdmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xuLy8gdmFyIFJvdXRlSGFuZGxlciA9IFJvdXRlci5Sb3V0ZUhhbmRsZXI7XG5cbnZhciBOb3RGb3VuZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPiEgIE5vdEZvdW5kPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5vdEZvdW5kO1xuIl19