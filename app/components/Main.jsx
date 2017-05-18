var React = require('react');
var Nav = require('Nav');
//因為我們的Route設定為這個為父component，所以有.children
let Main = (props) => {
    return (
        <div>
         <Nav/>
         <h2>Main Component</h2>
         {props.children}
         </div>
       );
}

module.exports = Main;

/*es5 做法
var Main = React.createClass({
   render: function(){
       return (
        <div>
         <Nav/>
         <h2>Main Component</h2>
         {this.props.children}
         </div>
       );
   }
});
*/