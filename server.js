var express = require('express');

//Create my app
var app = express();
//給heroku用的port
const PORT = process.env.PORT || 3000;

app.use(function(req,res,next){
  if(req.headers['x-forwarded-proto'] === 'https'){
     res.redirect('http://'+ req.hostname + req.url);
     
  } else {
      next();
  }
});


app.use(express.static('public'))//第二個參數是檔案名稱



app.listen(PORT,function (){
    console.log('Express server is up on port '+ PORT);
});