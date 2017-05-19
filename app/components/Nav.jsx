var React = require('react');
var {Link, IndexLink} = require('react-router');

/*為何要用<Link />呢？
<a href="#/about">Go To About</a>也是可行的呢，
但為何要用<Link />呢？
他可以根據路徑直接對page的class做樣式喔
還有其他的feature
*/

let Nav = React.createClass({
   onSearch: function (e) {
      e.preventDefault();

      let location = this.refs.search.value;//value是指user輸入的value
      let encodedLocation = encodeURIComponent(location);
         
      if (location.length > 0) {
        this.refs.search.value = '';//清空user輸入框
        window.location.hash = '#/?location=' + encodedLocation;//負責網址的工作，換頁
      }

   } ,
   render: function(){
     return (
         <div className="top-bar">

           <div className="top-bar-left">

              <ul className="menu">
                <li className="menu-text">React 天氣應用</li>
                <li>
                  <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>看今日天氣</IndexLink>
                </li>
                <li>
                  <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>關於這個應用</Link>
                </li>
                <li>
                  <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>搜尋想法</Link>
                </li>
              </ul>
          
           </div>

           <div className="top-bar-right">
              <form onSubmit={this.onSearch}>
                <ul className="menu">
                   <li>
                      <input type="search" placeholder="輸入希望搜尋的城市" ref="search"/>
                   </li>
                   <li>
                       <input type="submit" className="button" value="取得本日氣溫" />
                   </li>
                </ul>
              
              </form>
           </div>
         
         </div>
        );
       }
});


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
/*
let Nav = (props) => {
    return (
         <div className="top-bar">

           <div className="top-bar-left">

              <ul className="menu">
                <li className="menu-text">React 天氣應用</li>
                <li>
                  <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>看今日天氣</IndexLink>
                </li>
                <li>
                  <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>關於Paul</Link>
                </li>
                <li>
                  <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>一些範例</Link>
                </li>
              </ul>
          
           </div>

           <div className="top-bar-right">
              <form onSubmit={this.onSearch}>
              
              
              </form>
           </div>
         
         </div>
        );
}
*/