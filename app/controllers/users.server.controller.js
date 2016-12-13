/*
***************************************************************
app/controllers/users.server.controller.js
***************************************************************



- handles all user-related operations
***************************************************************
*/

// used the MOngoose module to call the .model method
var User = require('mongoose').model('User');

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
