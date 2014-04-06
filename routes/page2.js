var fs = require('fs');
var ejs = require('ejs');

module.exports.index = function(req,res) {
    var dataEJS = {};
    dataEJS.title = 'Page 2';
    dataEJS.body = 'Moar Content for page 2';
    var ejs_file = fs.readFileSync('views/page2.ejs', 'utf-8');
    var page_html = ejs.render(ejs_file, dataEJS);
    res.send(page_html);
}