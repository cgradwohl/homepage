/*
***************************************************************
config.js
***************************************************************


- manages configuration file loading for the app
- simply loads the correct configuration file according to the
    process.env.NODE_ENV enviroment variable
***************************************************************
*/


module.exports = require('./env/' + process.env.NODE_ENV + '.js');
