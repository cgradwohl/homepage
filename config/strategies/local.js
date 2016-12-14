/*
***************************************************************
config/strategies/local.js


- defines the passport auth strategy to be used
***************************************************************
*/
var passport  = require('passport'),
LocalStrategy = require('passport-local').Strategy,
User          = require('mongoose').model('User');

module.exports = function() {
    // here we register  the strategy using passports.use(), which uses
    // and instance if the LocalStrategy object
    // the callback in the LocalStrategy constructor  'function(username, password, done)'
    // this callback fucntion authenticates the user after the LocalStrategy object is constructed
    passport.use(new LocalStrategy(function(username, password, done) {
        User.findOne({
            username: username
        }, function(err, user) {
            if( err ){
                return done(err);
            }

            if( !user ){
                return done(null, false, {
                    message: 'Unknown user'
                });
            }
            if( !user.authenticate(password)) {
                return done(null, false, {
                    message: 'Invalid password'
                });
            }

            return done(null, user);
        });
    }));
};
