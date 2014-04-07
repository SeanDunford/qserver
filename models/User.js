var Schema = mongoose.Schema;  
var db = mongoose.connect('mongodb://localhost/qserver');  


var UserSchema = new Schema({  
    name: 		{ type: String, required: true },  
    location: 		{ type: String, required: true },  
    gender: 		{ type: String, required: true },  
    fitbitApiKey: 	{ type: String, unique:true}
    modified: 		{ type: Date, default: Date.now }
});
var UserModel = db.model('User', UserSchema);

exports.model = UserModel;
exports.schema = UserSchema;  