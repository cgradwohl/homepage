/*
***************************************************************
app/controllers/users.server.model.js
*** book calls it app/models/user.js file


- this is like db.table in python
***************************************************************
*/


var mongoose = require('mongoose'),
    crypto   = require('crytpto'),
    Schema   = mongoose.Schema;

// UserSchema Object
// defines the UserSchema object using the Schema constructor

/*1. added four fields to UserSchema object
    1. salt - used to hash the password
    2. provider - indicates the strategy to be used to
                    register the user
    3. providerId - indicates the user identifier for the auth
                    strategy
    4. providerData - used to store the user object retrieved
                    from OAUTH providers */
var UserSchema = new Schema({
    firstName: String,
    lastName : String,
    email    : {
        type : String,
        match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
    },
    username : {
        type    : String,
        unique  : true,
        required: 'Username is required',
        trim    : true
    },
    password : {
        type    : String,
        validate: [
            function(password) {
                return password && password.length > 6;
            }, 'Password should be longer'
        ]
    },
    salt: {
        type: String
    },
    provider: {
        type    : String,
        required: 'Provider is required'
    },
    providerId  : String,
    providerData: {},
    created     : {
        type   : Date,
        default: Date.now
    }
});


UserSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastName;
}).set(function(fullName) {
    var splitName  = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName  = splitName[1] || '';
});

// pre-save middleware to handle users password hashing
// prevents storing a clear text of the users passwords
// first generatres a psuedo random hash salt
// second replaces users passsword with the hashed password using hashPassword()
UserSchema.pre('save', function(next) {
    if( this.password ){
        this.salt     = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }

    next();
});

// instance method, uses Nodes crypto module to hash the password
UserSchema.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};
// instance method, authenticates the users password by hashing a string argument
// and comparing it to the users hashed password
UserSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};

// static method, finds an available username 
UserSchema.statics.findUniqueUsername = function(username, suffix, callback) {
    var _this = this;
    var possibleUsername = username + (suffix || '');

    _this.findOne({
        username: possibleUsername
    }, function(err, user) {
        if( !err ){
            if( !user ){
                callback(possibleUsername);
            } else {
                return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
            }
        } else {
            callback(null);
        }
    });
};

UserSchema.set('toJSON', {
    getters: true,
    virtuals: true
});
// User Model
// uses the Schema instance to defnie the User model
// before using the User model you need to include user.server.model.js
// file in the mongosoose.js configuration file.
// MAKE SURE that the mongoose configuration file is called before anyother configuration
// in the server.js file
mongoose.model('User', UserSchema);
