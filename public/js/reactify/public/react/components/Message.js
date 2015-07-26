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
    // var id = this.props.params.id;

    // this.setState({
    //   message: 'componentDidMount' + id
    // });

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtZWQuanMiLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLHdDQUF3QztBQUN4QywwQ0FBMEM7QUFDMUMsSUFBSSw2QkFBNkIsdUJBQUE7O0VBRS9CLGVBQWUsRUFBRSxZQUFZO0lBQzNCLE9BQU87TUFDTCxPQUFPLEVBQUUsU0FBUztLQUNuQixDQUFDO0FBQ04sR0FBRzs7QUFFSCxFQUFFLGlCQUFpQixFQUFFLFlBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztHQUVHO0VBQ0QsTUFBTSxFQUFFLFlBQVk7SUFDbEI7TUFDRSxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBO1VBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFRO01BQ2xCLENBQUE7TUFDTjtBQUNOLEdBQUc7O0FBRUgsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG4vLyB2YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG4vLyB2YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcbnZhciBNZXNzYWdlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiAnbG9hZGluZydcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gZnJvbSB0aGUgcGF0aCBgL2luYm94L21lc3NhZ2VzLzppZGBcbiAgICAvLyB2YXIgaWQgPSB0aGlzLnByb3BzLnBhcmFtcy5pZDtcblxuICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgbWVzc2FnZTogJ2NvbXBvbmVudERpZE1vdW50JyArIGlkXG4gICAgLy8gfSk7XG5cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWVzc2FnZTtcbiJdfQ==