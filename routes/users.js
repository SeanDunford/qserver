
/*
 * GET users listing.
 */


exports.index = function(req, res){ 
    var dataEJS = {};
    dataEJS.title = 'My Beautiful ass website'; 
    dataEJS.body = 'My Beautiful ass Content';
    res.render('users.ejs', dataEJS);
}; 

exports.list = function(req, res){
  res.send("respond with a resource");
};