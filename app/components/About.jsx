var React = require('react');
//可以用stateless component，就是不用extends component的

    let About = (props) => {
         return(
          <h3>About Component</h3>
        );
    }

module.exports = About;

/* es5作法
var About = React.createClass({
    render: function(){
        return(
          <h3>About Component</h3>
        );
    }
});*/