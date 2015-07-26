/**
 * Created by hshen on 5/14/2015.
 */
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Message = React.createClass({displayName: "Message",

    getInitialState: function() {
        return {
            message: 'loading'
        }
    },

    componentDidMount: function() {
        // from the path `/inbox/messages/:id`
        var id = this.props.params.id;

        this.setState({
            message: 'componentDidMount' + id
        });

    },
    render: function() {
        return ( 
            React.createElement("div", null, 
                this.state.message
            )
        );
    }

});

module.exports = Message;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtZWQuanMiLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNyQyxJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3ZDLElBQUksNkJBQTZCLHVCQUFBOztJQUU3QixlQUFlLEVBQUUsV0FBVztRQUN4QixPQUFPO1lBQ0gsT0FBTyxFQUFFLFNBQVM7U0FDckI7QUFDVCxLQUFLOztBQUVMLElBQUksaUJBQWlCLEVBQUUsV0FBVzs7QUFFbEMsUUFBUSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7O1FBRTlCLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixPQUFPLEVBQUUsbUJBQW1CLEdBQUcsRUFBRTtBQUM3QyxTQUFTLENBQUMsQ0FBQzs7S0FFTjtJQUNELE1BQU0sRUFBRSxXQUFXO1FBQ2Y7WUFDSSxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBO2dCQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBUTtZQUNsQixDQUFBO1VBQ1I7QUFDVixLQUFLOztBQUVMLENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGhzaGVuIG9uIDUvMTQvMjAxNS5cbiAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbnZhciBSb3V0ZUhhbmRsZXIgPSBSb3V0ZXIuUm91dGVIYW5kbGVyO1xudmFyIE1lc3NhZ2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ2xvYWRpbmcnXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBmcm9tIHRoZSBwYXRoIGAvaW5ib3gvbWVzc2FnZXMvOmlkYFxuICAgICAgICB2YXIgaWQgPSB0aGlzLnByb3BzLnBhcmFtcy5pZDtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdjb21wb25lbnREaWRNb3VudCcgKyBpZFxuICAgICAgICB9KTtcblxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICggXG4gICAgICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlfSBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWVzc2FnZTtcbiJdfQ==