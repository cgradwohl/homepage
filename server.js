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
app.listen(3000);
module.exports = app;

console.log('hello creature welcome to mean_structure. i am listening on port 3000.');
