//var config = require('./config'),
mongoose   = require('mongoose');

module.exports = function() {
    //var db = mongoose.connect(config);
    var uri = 'mongodb://admin:2chester@ds133428.mlab.com:33428/mean_structure_db';
    var db = mongoose.connect(uri);

    require('../app/models/user.server.model');

    return db;
};
