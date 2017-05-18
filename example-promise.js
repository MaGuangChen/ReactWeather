//我們現在要用es6的promise 來進行fetch 天氣(openweathermap)api的動作
//首先我們要先來做一個異步的函數
/*帶有兩參數location跟lcallback，一旦取得天氣資料，會將資料
pass進入callback，但我們也期望處理錯誤。

*/
function getTempCallback (location,callback){
   callback(undefined,78);//成功訊息，當我們沒有err時
   callback('找不到你所搜尋的城市');//失敗訊息，不pass temp
}
/*這邊有一個callback但要每次手動寫，且有兩個callback，
因此當用node跑這個檔案時，會同時出現正確與錯誤訊息*/
getTempCallback('Taiwan',function(err,temp){
   if(err) {//當err為true，吐err message
       console.log('error',err);
   }else {//當err為false
       console.log('success',temp);
   }
});
/*promise啦
setTimeout下去以後，會讓resolve跟reject判定完才會進入下一個
*/
function getTempPromise(location) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){

        resolve(79);//成啦
        reject('找不到你所搜尋的城市');//沒成

        },1000);
       
    });
}
//處理訊息，promise只會出現一個訊息，根據resolve及reject來判定顯示訊息
//resolve是成功，reject是失敗訊息
getTempPromise('Taiwan').then(function(temp){
   console.log('promise 成功',temp);
},function(err){
   console.log('promise 失敗',err);
}

)

//challenge Area自己做一個數字進來就跑的東西
//利用promise可以再node測試看看
function getPlus(a,b){
   return new Promise(function(resolve,reject){
        if((typeof a === 'number') && (typeof b === 'number')){
             resolve(a+b);
            }else{
             reject('a或b其中之一不為數字');
            }
       //在這邊放判斷與條件等等
   }); 

}
//then是event method是只有當function被return時才會執行
getPlus(3,2).then(function(sum){
       console.log('promise 成功',sum);
    },function(err){
        console.log('promise 失敗',err);
    }
);

getPlus('paul',9).then(function(sum){
 console.log('這個一定失敗的啦');
},function(err){
  console.log('失敗是正常的啦');
}
);
/*
if(typeof a === 'number'){
    console.log('true')
}


 function addPromise(a,b){
   //如果兩個參數都是number就要相加
   //如果有一個不是就reject
   //call 成功或失敗訊息
 }
 */