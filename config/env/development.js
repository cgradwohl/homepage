/*
***************************************************************
app/config/env/development.js
***************************************************************


- enviroment configuration file for the 'development' enviroment
***************************************************************
*/

module.exports = {
    //db           : 'mongodb://localhost/myapp', // <-- use this for local devolpment
    db : 'mongodb://heroku_12345678:random_password@ds029017.mLab.com:29017/heroku_12345678'
    sessionSecret: 'developmentSessionSecret'
};
