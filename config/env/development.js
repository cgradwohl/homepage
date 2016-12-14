/*
***************************************************************
app/config/env/development.js
***************************************************************


- enviroment configuration file for the 'development' enviroment
***************************************************************
*/

module.exports = {
    db           : 'mongodb://localhost/myapp', // <-- use this for local devolpment
    //db : 'mongodb://admin:2chester@ds133428.mlab.com:33428/mean_structure_db',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: '2267073173431666',
        clientSecret: '86611ca8fb79f0b0570cd0ae3caa846a',
        callbackURL: 'http://localhost:8080/oauth/facebook/callback'
    }
};
