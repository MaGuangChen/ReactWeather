var React = require('react');


let Examples = (props) => {
 return (
           <div>
             <h3>Examples</h3>
             <p>Welcome to examples page!</p>
           </div>
        );
};

module.exports = Examples;

/* es5做法
var Examples = React.createClass({
    render:function(){
        return (
           <h3>Examples Component</h3>
        );
    }
});*/