var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    //因為我們不想要重新load整個表單
     e.preventDefault();

     //call parents function 去拿ref props，會把取得的資料存在變數location中
     var location = this.refs.location.value;    
     
     //讓data是正確的，在輸入
     if(location.length > 0){
       this.refs.location.value='';//讓輸入框變回空的
       this.props.onSearch(location);//讓其他props進來，從parents function中呼叫
     }
  },

  render: function(){
      return (
          <div>
            <form onSubmit={this.onFormSubmit}>
               <input type="text" ref="location"/>
               <button>Get Weather</button>
            
            </form>
          
          </div>
      );
  }

});

module.exports = WeatherForm;