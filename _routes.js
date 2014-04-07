var routes = require('./routes');
var users = require('./routes/users');
var page1 = require('./routes/page1');
var page2 = require('./routes/page2'); 
var def = require('./routes/default'); 


function mount(app) {
   //routes go here	
   app.get('/', routes.index);
   
  app.get('/page1', page1.index); 
  app.get('/page2', page2.index); 

   app.get('/users', 		users.index);
   app.post('/api/users',  	users.create); 
   app.put('/api/users', 	  	users.updateMany); 
   app.put('/api/users/:id',   	users.updateOne); 
   app.get('/api/users', 	  	users.getAll);  
   app.get('/api/users/:id', 	users.getOne); 
   app.delete('/api/users', 	users.deleteAll); 
   app.delete('/api/users/:id', 	users.deleteOne); 

   app.get('/default', 		def.index);
   app.post('/api/default',  	def.create); 
   app.put('/api/default', 	def.updateMany); 
   app.put('/api/default/:id',   	def.updateOne); 
   app.get('/api/default', 	def.getAll);  
   app.get('/api/default/:id', 	def.getOne); 
   app.delete('/api/default', 	def.deleteAll); 
   app.delete('/api/default/:id',def.deleteOne); 


}
module.exports = mount;