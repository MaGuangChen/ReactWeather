var React = require('react');
//可以用stateless component，就是不用extends component的

    let About = (props) => {
         return(
          <div>
            <h1 className="text-center">關於這個應用</h1>
            <p>這是一個weather application 用react 做，只是為了練一下啦</p>
            <p>這邊講一下我用了什麼工具：</p>
            <ul>
              <li>
                <a href="https://facebook.github.io/react">React</a> -這是臉書推出的javascript的framerwork
              </li>
              <li>
                <a href="https://openweathermap.org">Open Weather Map</a>-我用來取得各地或是各城市天氣的資訊
              </li>
            
            </ul>
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