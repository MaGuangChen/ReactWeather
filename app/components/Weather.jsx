var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

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
      this.setState({
        isLoading:true,
        errorMessage: undefined //讓錯誤訊息出現所需要的新的state
      });
     //使用es6 promise，來根據openWeatherMap.jsx摔出來的return顯示訊息，這邊是在api資料夾內的
     openWeatherMap.getTemp(location).then(function(temp){
         that.setState({
           isLoading: false,
           location: location,
           temp: temp
         });
     },function(e){//使用e的原因是因為js中所使用習慣的錯誤訊息都用這個
        that.setState({
          isLoading:false,
          errorMessage: e.message
        });
        alert(errorMessage);
     });
     //this.setState({
     //location: location,
       //temp:23
     //});
        

    },

    render: function(){
        let {isLoading,temp,location,errorMessage} = this.state;
        //這個function是用來做一個loading，我們直接在render時注入他就好
        function renderMessage(){
          if(isLoading){
             return <h3 className="text-center">取得api中，記得輸入英文喔，這個api沒辦法辨識中文</h3>
          } else if(temp && location){
             return <WeatherMessage location={location/*this.state.location*/} temp={temp/*this.state.temp*/}/>
          }
        }

        //render 錯誤訊息function，在有錯誤時印，檢查errorMessage這個state
        function renderError(){
              if(typeof errorMessage === 'string'){
                return (
                   <ErrorModal message={errorMessage}/>
                );
              }
        }

        return(
          <div>
            <h3 className="text-center">Paul & React 搜天氣 </h3>
            <WeatherForm onSearch={this.handleSearch}/> 
            {renderMessage()}
            {renderError()}
          </div>
          
        );
    }
});

module.exports = Weather;
//這邊是js提供的一個keyword debugger，可以讓我們在開啟開發人員工具時，可以看到一堆東西
      //debugger; 可以放在任何你認為有可能有錯的地方啊
