// Loads mudules needed
var application_root = __dirname, 
	express = require("express"), 
	path = require("path"), 
	mongoose = require('mongoose');

//creates web server
var app = express(); 

//Db - change ecomm to qserver
mongoose.connect('mongodb://localhost/ecomm_database');  

//Config 
app.configure(function () {
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, "public")));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

//Routes
app.get('/api', function (req, res) {
  res.send('Ecomm API is running');
});


app.listen(3000); 