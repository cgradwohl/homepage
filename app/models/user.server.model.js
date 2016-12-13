/*
***************************************************************
app/controllers/users.server.model.js
***************************************************************



- this is like db.table in python
***************************************************************
*/


var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

// UserSchema Object
// defines the UserSchema object using the Schema constructor
var UserSchema = new Schema({
    firstName: String,
    lastName : String,
    email    : String,
    username : String,
    password : String
});

// User Model
// uses the Schema instance to defnie the User model
// before using the User model you need to include user.server.model.js
// file in the mongosoose.js configuration file.
// MAKE SURE that the mongoose configuration file is called before anyother configuration
// in the server.js file
mongoose.model('User', UserSchema);
