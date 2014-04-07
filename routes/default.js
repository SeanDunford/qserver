exports.index = function(req, res){ 
    var dataEJS = {};
    dataEJS.title = 'My Beautiful ass website'; 
    dataEJS.body = 'My Beautiful ass Content';
    res.render('default.ejs', dataEJS);
}; 

exports.list = function(req, res){
  res.send("list");
};
exports.create =  function (req, res) {
  res.send("create");
}; 
exports.updateMany = function (req, res) {
  res.send("updateMany");
}; 
exports.updateOne = function (req, res) {
   res.send("updateOne"); 
};
exports.getAll = function (req, res) {
   res.send("getAll"); 
}; 
exports.getOne = function (req, res) {
  res.send("getOne"); 
};
exports.deleteAll = function (req, res) {
  res.send("deleteAll"); 
};
exports.deleteOne  = function (req, res) {
   res.send("deleteOne")
};
