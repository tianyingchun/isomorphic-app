/**
 * @jsx React.DOM
 */
var React = require('react');
// var Router = require('react-router');
// var RouteHandler = Router.RouteHandler;
var Message = React.createClass({displayName: "Message",

  getInitialState: function () {
    return {
      message: 'loading'
    };
  },

  componentDidMount: function () {
    // from the path `/inbox/messages/:id`
    var id = this.props.params.id;

    this.setState({
      message: 'componentDidMount' + id
    });

  },
  render: function () {
    return (
      React.createElement("div", null, 
          this.state.message
      )
    );
  }

});

module.exports = Message;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtZWQuanMiLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLHdDQUF3QztBQUN4QywwQ0FBMEM7QUFDMUMsSUFBSSw2QkFBNkIsdUJBQUE7O0VBRS9CLGVBQWUsRUFBRSxZQUFZO0lBQzNCLE9BQU87TUFDTCxPQUFPLEVBQUUsU0FBUztLQUNuQixDQUFDO0FBQ04sR0FBRzs7QUFFSCxFQUFFLGlCQUFpQixFQUFFLFlBQVk7O0FBRWpDLElBQUksSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDOztJQUU5QixJQUFJLENBQUMsUUFBUSxDQUFDO01BQ1osT0FBTyxFQUFFLG1CQUFtQixHQUFHLEVBQUU7QUFDdkMsS0FBSyxDQUFDLENBQUM7O0dBRUo7RUFDRCxNQUFNLEVBQUUsWUFBWTtJQUNsQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUE7VUFDQSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQVE7TUFDbEIsQ0FBQTtNQUNOO0FBQ04sR0FBRzs7QUFFSCxDQUFDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbi8vIHZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbi8vIHZhciBSb3V0ZUhhbmRsZXIgPSBSb3V0ZXIuUm91dGVIYW5kbGVyO1xudmFyIE1lc3NhZ2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6ICdsb2FkaW5nJ1xuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBmcm9tIHRoZSBwYXRoIGAvaW5ib3gvbWVzc2FnZXMvOmlkYFxuICAgIHZhciBpZCA9IHRoaXMucHJvcHMucGFyYW1zLmlkO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtZXNzYWdlOiAnY29tcG9uZW50RGlkTW91bnQnICsgaWRcbiAgICB9KTtcblxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZXNzYWdlO1xuIl19