/*
***************************************************************
./config/express.js
***************************************************************


- configures the Express server application module
***************************************************************
*/


var config     = require('./config'),
express        = require('express'),
morgan         = require('morgan'),
compress       = require('compression'),
bodyParser     = require('body-parser'),
methodOverride = require('method-override');



module.exports = function() {
    var app = express();

    if( process.env.NODE_ENV==='development' ){
        // Concise output colored by response status for development use.
        // The :status token will be colored red for server error codes,
        // yellow for client error codes, cyan for redirection codes, and
        // uncolored for all other codes.
        app.use(morgan('dev'));

    } else if( process.env.NODE_ENV==='production' ){
        app.use(compress());
    }

    // Parse incoming request bodies in a middleware before your handlers,
    // availabe under the req.body property.
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    // Lets you use HTTP verbs such as PUT or DELETE in places where the
    // client doesn't support it.
    app.use(methodOverride());



    app.set('views', './app/views');
    app.set('view engine', 'ejs');



    // the routing module function in 'index.server.routes.js' accepts app as argument
    // these route you to the .ejs index and user login views
    require('../app/routes/index.server.routes.js')(app);

    app.use(express.static('./public'));

    return app;
};
