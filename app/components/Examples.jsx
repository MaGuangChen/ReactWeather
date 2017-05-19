var React = require('react');
var {Link} = require('react-router');

let Examples = (props) => {
  //加入了fundation class，並且引入router然後讓兩個li能夠進入連結首頁網址加上location
 return (
           <div>
             <h1 className="text-center">尋找搜尋想法</h1>
             <p>這邊有一些可以測試的地點</p>
             <ol>
               <li>
                  <Link to='/?location=Taipei'>`Taipei, Taiwan 台北,台灣`</Link>
               </li>
               <li>
                  <Link to='/?location=Rio'>`Rio, Brazil 里約, 巴西`</Link>
               </li>
             </ol>
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