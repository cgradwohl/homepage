# mean_structure

#On branch ejs_for_static:
this a Node, Express, EJS server set up for static page server

Steps:<br />
0. create directory structure:

    /app
        /controllers
        /models
        /routes
        /views
    /config
        /env
    /public
        /css
        /img
        /js

1. package.json                             <-- manages dependencies and app META data
2. /controllers/index.server.controller.js  <-- controller file
3. /routes/index.server.routes.js           <-- routes file
4. /config/express.js                       <-- express config file
5. server.js                                <-- main nodeJS file
6. /config/env/development.js               <-- defines the development enviroment
7. /config/config.js                        <-- loads the correct configuration file
