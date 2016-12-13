/*
***************************************************************
server.js
***************************************************************


- main server file for the node/Express web app
***************************************************************
*/

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    express  = require('./config/express');

var db       = mongoose();
var app      = express();

// use the following for Heroku deployment
// set the port of our application
// process.env.PORT lets the port be set by Heroku
        /*var port = process.env.PORT || 8080;
        app.listen(port, function() {
            console.log('hello creature welcome to mean_structure. i am listening on port:' + port);
        });*/

app.listen(3000);

module.exports = app;

console.log('--> success. hello creature...i am running on http://localhost:3000');
