var routes = require('./routes');
var user = require('./routes/users');
var page1 = require('./routes/page1');
var page2 = require('./routes/page2'); 

function mount(app) {
   //routes go here	
   app.get('/', routes.index);
   app.get('/users', user.index);
   
  app.get('/page1', page1.index); 
  app.get('/page2', page2.index); 

}
module.exports = mount;