

module.exports.index = function(req,res) {
    var dataEJS = {};
    dataEJS.title = 'My Beautiful ass website'; 
    dataEJS.body = 'My Beautiful ass Content';
    res.render('page1.ejs', dataEJS);
}; 
