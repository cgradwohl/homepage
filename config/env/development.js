/*
***************************************************************
app/config/env/development.js
***************************************************************


- enviroment configuration file for the 'development' enviroment
***************************************************************
*/

module.exports = {
    //db           : 'mongodb://localhost/myapp', // <-- use this for local devolpment
    db : 'mongodb://heroku_b4c304kx:1iap0rq9jn0c4eqbc9rahqabbj@ds133388.mlab.com:33388/heroku_b4c304kx'
    sessionSecret: 'developmentSessionSecret'
};
