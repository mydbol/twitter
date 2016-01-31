var express = require('express');

var app = express();

app.use(function(req,res,next){
	var date=new Date();
	console.log(date +': code '+res.statusCode+ ' for '+req.method+' on '+ req.url);
	next();
})

app.get('/',function(req,res){
	res.send('welcome bitches');

});





app.listen(3000,function(){console.log('server running')});



