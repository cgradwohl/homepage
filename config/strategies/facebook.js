var passport     = require('passport'),
url              = require('url'),
FacebookStrategy = require('passport-facebook').Strategy,
config           = require('../config'),
users            = require('../../app/controllers/users.server.controller');


module.exports = function() {
    /*passport.use(new FacebookStrategy({
        clientID         : config.facebook.clientID,
        clientSecret     : config.facebook.clientSecret,
        callbackURL      : config.facebook.callbackURL,
        passReqToCallback: true
    },
    function(req, accessToken, refreshToken, profile, done) {
        var providerData          = profile._json;
        providerData.accessToken  = accessToken;
        providerData.refreshToken = refreshToken;

        var providerUserProfile = {
            firstName   : profile.name.givenName,
            lastName    : profile.name.familyName,
            fullName    : profile.displayName,

            // --> wtf? TypeError: Cannot read property '0' of undefined
            email       : profile.emails[0].value,

            username    : profile.username,
            provider    : 'facebook',
            providerId  : profile.id,
            providerData: providerData,
        };

        users.saveOAuthUserProfile(req, providerUserProfile, done);
    }));*/

    passport.use(new FacebookStrategy({
        clientID: '2267073173431666',
        clientSecret: '86611ca8fb79f0b0570cd0ae3caa846a',
        callbackURL: 'http://localhost:8080/auth/facebook/callback'
      },
      function(accessToken, refreshToken, profile, cb) {
        //User.findOrCreate({ facebookId: profile.id }, function (err, user) {
          return cb(null, profile);
        //});
      }
    ));
};
