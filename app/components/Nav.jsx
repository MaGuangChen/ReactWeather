var React = require('react');
var {Link, IndexLink} = require('react-router');

/*為何要用<Link />呢？
<a href="#/about">Go To About</a>也是可行的呢，
但為何要用<Link />呢？
他可以根據路徑直接對page的class做樣式喔
還有其他的feature
*/

let Nav = (props) => {
    return (
            <div>
               <h2>Nav Component</h2>
               <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
               <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
               <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
            </div>
        );
}
module.exports = Nav;

/*es5 做法
var Nav = React.createClass({
    render: function(){
        return (
            <div>
               <h2>Nav Component</h2>
               <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
               <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
               <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
            </div>
        );
    }
});
*/