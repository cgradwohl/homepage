var express = require('./config/express');

var app = express();
app.listen(3000);
module.exports = app;

console.log('hello creature. i am listening on port 3000.');
