/*
***************************************************************
config/passport.js



- configures the passport module
***************************************************************
*/

var passport = require('passport'),
mongoose     = require('mongoose');

module.exports = function() {
    var User = mongoose.model('User');


    // when a user is authenticateed, Passport will save the _id property
    // to the session.
    // Later on when the user object is needed , Paasport will use the id property
    // to grab the user object from the database.
    passport.serializeUser(function(user, done) {
        /*done(null, user.id);*/
        done(null, user);
    });

    passport.deserializeUser(function(id, done) {
        /*User.findOne({
            _id: id
            // Mongoose does not fetch password and salt properties
        }, '-password -salt', function(err, user) {
            done(err, user);
        });*/
        done(null, id);
    });

    // includes the local.js, facebook.js strategies file to the server.js file
    require('./strategies/local.js')();
    require('./strategies/facebook.js')();
};
