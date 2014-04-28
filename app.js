
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose'); 
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('view options', { layout:false, root: __dirname + '/views' } ); 
app.use(express.favicon());
app.use(express.logger('dev')); 
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


require('./_routes.js')(app);


//Db 
var db;

// development only
console.log("Logging dat envVar: " + process.env.NODE_ENV); 
if ('development' == app.get('env')) {
   app.use(express.errorHandler());
   console.log("i r development"); 
   db = mongoose.connect('mongodb://localhost/qserver'); 
}
else if('production' == app.get('env')){
  console.log("i r production"); 
  db = mongoose.connect('mongodb://heroku_app24607371:heroku_app24607371@ds033887.mongolab.com:33887/heroku_app24607371'); 	
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
