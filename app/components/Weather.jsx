var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');


//開始囉
var Weather = React.createClass({
  
  getInitialState: function(){
   
    return {
      isLoading: false
    };
  
  },
    

    handleSearch: function(location){
      //用that的元因是因為this在function內的function不能跑
      let that = this;

      
      //更新state，在isLoading property被輸入時，變為true
      this.setState({isLoading:true});
     //使用es6 promise，來根據openWeatherMap.jsx摔出來的return顯示訊息
     openWeatherMap.getTemp(location).then(function(temp){
         that.setState({
           isLoading: false,
           location: location,
           temp: temp
         });
     },function(errorMessage){
        that.setState({
          isLoading:false
        });
        alert(errorMessage);
     });
     //this.setState({
     //location: location,
       //temp:23
     //});
        

    },

    render: function(){
        var {isLoading,temp,location} = this.state;
        //這個function是用來做一個loading，我們直接在render時注入他就好
        function renderMessage(){
          if(isLoading){
             return <h3>取得api中，記得輸入英文喔，這個api沒辦法辨識中文</h3>
          } else if(temp && location){
             return <WeatherMessage location={location/*this.state.location*/} temp={temp/*this.state.temp*/}/>
          }
        }

        return(
          <div>
            <h3>Weather Component</h3>
            <WeatherForm onSearch={this.handleSearch}/> 
            {renderMessage()}
            
          </div>
          
        );
    }
});

module.exports = Weather;
//這邊是js提供的一個keyword debugger，可以讓我們在開啟開發人員工具時，可以看到一堆東西
      //debugger; 可以放在任何你認為有可能有錯的地方啊
