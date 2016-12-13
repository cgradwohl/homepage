var config = require('./config'),
mongoose   = require('mongoose');

module.exports = function() {
    //var db = mongoose.connect(config.db);

    // mongoose.connect('uri_string') connects to the mongodb instance
    // uri from mLab to create a mongodb instance
    var db = mongoose.connect('mongodb://admin:2chester@ds133428.mlab.com:33428/mean_structure_db');

    require('../app/models/user.server.model');

    return db;
};
