//axios是npm裝下來的一個函式庫，用來抓api很方便啦
var axios = require('axios');


//產生基礎url
//我的api key： 35d04af76be8b2754dd053140de45f12
//下面是openweathermap.org提供的json資料結構網址
//我有把原本的q=Lodon刪掉因為我們不需要預設倫敦，且要讓我們的user輸入轉換q=地點
//另外加入了units=imperial來轉文字
const OPEN_WEATHER_MAP_URL ='http://api.openweathermap.org/data/2.5/weather?appid=35d04af76be8b2754dd053140de45f12&units=imperial';

module.exports = {
    
    //location參數是從WeatherForm.jsx過來的
    getTemp: function(location){
       let encodedLocation = encodeURIComponent(location);//避免因為user輸入的空白值或其他變成一些字元encode
       
       //建立url的樣板，user輸入後就會照著用
       let requestUrl =`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

       //要求api，使用promise，記得一定要用return不然promise不能用
      return axios.get(requestUrl).then(function(res){
           if(res.data.cod && res.data.message){
               throw new Error(res.data.message);//why
           }else{
               return res.data.main.temp;//json內的資料
           }
       },function(res){
          throw new Error(res.data.message);
       });
    }
}