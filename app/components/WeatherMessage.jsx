var React = require('react');

let WeatherMessage = ({temp,location}) => {
    //參數內的props等於在行內宣告： let {temp,location} = props;
      return (
          <h3>It's  {temp/*this.props.temp*/} in {location/*this.props.location*/}.</h3>
      );
}
module.exports = WeatherMessage;

/* es5 做法
var WeatherMessage = React.createClass({
  render: function(){
      var {temp,location} = this.props;
      return (
          <h3>It's  {temp} in {location}.</h3>
      );
  }

});*/