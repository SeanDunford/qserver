var path = require('path');
var user = require('../models/User')
var userModel = user.model; 
var userSchema = user.schema; 


exports.index = function(req, res){ 
    var dataEJS = {};
    dataEJS.title = 'My Beautiful ass website'; 
    dataEJS.body = 'My Beautiful ass Content';
    res.render('users.ejs', dataEJS);
}; 

exports.list = function(req, res){
  res.send("respond with a resource");
};
exports.create =  function (req, res) {
  var user;
  console.log("POST: ");
  console.log(req.body);
  user = new userModel({
     name:        req.body.name, 
     location:     req.body.location, 
     gender:       req.body.gender, 
     fitbitApiKey: req.body.fitbitApiKey
  });
  user.save(function (err) {
    if (!err) {
      return console.log("created");
    } else {
      return console.log(err);
    }
  });
  return res.send(user);
}; 
exports.updateMany = function (req, res) {
    var i, len = 0;
    console.log("is Array req.body.users");
    console.log(Array.isArray(req.body.users));
    console.log("PUT: (users)");
    console.log(req.body.users);
    if (Array.isArray(req.body.users)) {
        len = req.body.users.length;
    }
    for (i = 0; i < len; i++) {
        console.log("UPDATE user by id:");
        for (var id in req.body.users[i]) {
            console.log(id);
        }
        userModel.update({ "_id": id }, req.body.users[i][id], function (err, numAffected) {
            if (err) {
                console.log("Error on update");
                console.log(err);
            } else {
                console.log("updated num: " + numAffected);
            }
        });
    }
    return res.send(req.body.users);
}; 
exports.updateOne = function (req, res) {
  return userModel.findById(req.params.id, function (err, user) {
    user.title = req.body.title;
    user.description = req.body.description;
    user.style = req.body.style;
    user.images = req.body.images;
    user.categories = req.body.categories;
    user.catalogs = req.body.catalogs;
    user.variants = req.body.variants;
    return user.save(function (err) {
      if (!err) {
        console.log("updated");
      } else {
        console.log(err);
      }
      return res.send(user);
    });
  });
};
exports.getAll = function (req, res) {
  return userModel.find(function (err, users) {
    if (!err) {
      return res.send(users);
    } else {
      return console.log(err);
    }
  });
}; 
exports.getOne = function (req, res) {
  return userModel.findById(req.params.id, function (err, user) {
    if (!err) {
      return res.send(user);
    } else {
      return console.log(err);
    }
  });
};
exports.deleteAll = function (req, res) {
  userModel.remove(function (err) {
    if (!err) {
      console.log("removed");
      return res.send('');
    } else {
      console.log(err);
    }
  });
};
exports.deleteOne  = function (req, res) {
  return userModel.findById(req.params.id, function (err, user) {
    return user.remove(function (err) {
      if (!err) {
        console.log("removed");
        return res.send('');
      } else {
        console.log(err);
      }
    });
  });
};