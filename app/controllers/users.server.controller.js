/*
***************************************************************
app/controllers/users.server.controller.js
***************************************************************



- handles all user-related operations
***************************************************************
*/

// used the MOngoose module to call the .model method
var User = require('mongoose').model('User'),
passport = require('passport');


var getErrorMessage = function(err) {
    var message = '';

    if( err.code ){
        switch( err.code ){
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    } else {
        for( var errName in err.errors ){
            if( err.errors[errName].message ) message = err.errors[errName].message;
        }
    }

    return message;
};


// Allows users to sign up using their profile from another provider.
// Since users are signing up with other profiles, the profile details
//      are already present and so must be validated differently.
// This method accepts a user profile and then looks for an existing user
//      with these providerId and Provider properties.
exports.saveOAuthUserProfile = function(req, profile, done) {
    User.findOne({
        provider  : profile.provider,
        providerId: profile.providerId
    }, function(err, user) {
        if( err ){
            return done(err);
        } else {
            // if it can't find the user then it will find a unique user
            // name using findUniqueUsername() ststic method and save a new user instance
            if( !user ){
                var possibleUsername = profile.username ||
                ((profile.email) ? profile.email.split('@')[0] : '');

                User.findUniqueUsername(possibleUsername, null,
                function(availableUsername) {
                    profile.username = availableUsername;
                    user             = new User(profile);

                    user.save(function(err) {
                        if( err ){
                            var message = getErrorMessage(err);

                            req.flash('error', message);
                            //return res.redirect('/signup');
                        }
                        return done(err, user);
                    });
                });
            } else {
                // if it finds the user, it calls done() with the users MongoDB document
                return done(err, user);
            }
        }
    });
};


exports.renderSignin = function(req, res, next) {
    if( !req.user ){
        res.render('signin', {
            title   : 'Sign-in Form',
            messages: req.flash('error') || req.flash('info')
        });
    } else {
        return res.redirect('/');
    }
};

exports.renderSignup = function(req, res, next) {
    if( !req.user ){
        res.render('signup', {
            title   : 'Sign-up Form',
            messages: req.flash('error')
        });
    } else {
        return res.redirect('/');
    }
};

exports.signup = function(req, res, next) {
    if( !req.user ){
        var user    = new User(req.body);
        var message = null;

        user.provider = 'local';

        user.save(function(err) {
            if( err ){
                var message = getErrorMessage(err);

                req.flash('error', message);
                return res.redirect('/signup');
            }
            req.login(user, function(err) {
                if( err ) return next(err);
                return res.redirect('/');
            });
        });
    } else {
        return res.redirect('/');
    }
};


exports.signout = function(req, res) {
    req.logout();
    res.redirect('/');
};


// here we create a "controller method" named create()
// later we will write create() to create new users
// if we use the 'new' keyword with create() then it creates a new model instance, which is
// populated using the request body
exports.create = function(req, res, next) {
    var user = new User(req.body);


    // either saves the user object and output the user object or
    // passes to the next() middleware
    user.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};
