/*
***************************************************************
app/routes.users.server.routes.js
***************************************************************



- routing for users
***************************************************************
*/
var users = require('../../app/controllers/users.server.controller');

module.exports = function(app) {
    app.route('/users').post(users.create);
}
