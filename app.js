var express = require('express');
var fs = require('fs');
var app = express();
var swig = require('swig');
var tweets = require('./twitterBank');
swig.setDefaults({ cache: false });
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views',__dirname+'/views');
app.set('view cache',false);

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};


app.use(function(req,res,next){
	var allts=tweets.list();
	tweets.add('kevin','the '+allts.length+' tweet');
next();
})

app.use(function(req,res,next){
	console.log(tweets.list());
	next();
})
app.use(function(req,res,next){
	var date=new Date();
	console.log(date +': code '+res.statusCode+ ' for '+req.method+' on '+ req.url);
	next();
});
app.get('/',function(req,res){
	app.render('index',{title:locals.title,people:locals.people},function(err,html){
		//console.log(html);
		res.send(html);
	});
})


app.listen(3000,function(){console.log('running')});


var sendToLog = function(message,logfileName){

}
