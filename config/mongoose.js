//var config = require('./config'),
mongoose   = require('mongoose');

module.exports = function() {
    //var db = mongoose.connect(config.db);

    // instead of requiring './config' we just hard code the uri
    // try to clean this up later
    var uri = 'mongodb://admin:2chester@ds133428.mlab.com:33428/mean_structure_db';
    var db = mongoose.connect(uri);

    require('../app/models/user.server.model');

    return db;
};
