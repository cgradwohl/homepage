/*
***************************************************************
server.js
***************************************************************


- main server file for the node/Express web app
***************************************************************
*/

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('hello creature welcome to mean_structure. i am listening on port:' + port);
});
module.exports = app;
