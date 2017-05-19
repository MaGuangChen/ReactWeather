var React = require('react');
//可以用stateless component，就是不用extends component的

    let About = (props) => {
         return(
          <div>
            <h3>關於我們</h3>
            <p>其實沒什麼啦</p>
          </div>
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