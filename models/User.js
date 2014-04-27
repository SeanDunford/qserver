var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;  

var UserSchema = new Schema({  
    name: 		{ type: String, required: true },  
    location: 		{ type: String, required: true },  
    gender: 		{ type: String, required: true },  
    fitbitToken: 	{ type: String, required: true, unique:true},
    fitbitSecret: 	{ type: String, required: true, unique:true},  
    modified: 		{ type: Date, default: Date.now }
});
var UserModel = mongoose.model('User', UserSchema);

exports.model = UserModel;
exports.schema = UserSchema;  