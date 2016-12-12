# mean_structure

#On branch ejs_for_static:


this a Node, Express, EJS server set up for static page server.
Also contains a session object

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

        0.1 package.json                             <-- manages dependencies and app META data
        0.2 /controllers/index.server.controller.js  <-- controller file
        0.3 /routes/index.server.routes.js           <-- routes file
        0.4 /config/express.js                       <-- express config file
        0.5 server.js                                <-- main nodeJS file
        0.6 /config/env/development.js               <-- defines the development enviroment
        0.7 /config/config.js                        <-- loads the correct configuration file
<br />

    * note at this point you should be able to serve static content. Test by deploying to Heroku!!
    * for local deployment use port 3000
    * for heroku: use process.env.PORT

<br />
1. add a MongoDB to the stack and create MongoDB local instance:

        1.1 brew update, brew install mongodb, brew upgrade mongodb
        1.2 mongoose --> package.json
        1.3 add a local instance of the mongodb to the deployment configuration file ()
        1.4 add mongoose.js configuration file to ./config/mongoose.js
        1.5 add require('./config/mongoose.js') module to server.js
<br />

    * note: remember to change the port to process.env.PORT when deploying to heroku

    * notes on mongodb:
        a. in order use mongobd for local develpoment we have to run mongodb as a service
        using $ mongod (mongod is the primary daemon process for the MongoDB system. It handles data requests, manages data access, and performs background management operations).
        b. next to intect with db we can use the 'mongo shell' by using the $ mongo command/
        (The 'mongo' shell is an interactive JavaScript interface to MongoDB. You can use the mongo shell to query and update data as well as perform administrative operations).
        c. mongoose.js is a helpful js layer to make using the mongo shell easier, and makes
        object modeling in Node.js for mongo easier.

    * PROCESS TO CREATE MONGODB LOCAL INSTANCE:

        1. $ mongod  (in one terminal shell)
        2. $ mongo   (in another terminal shell)
        3. $ nodemon server.js (in another terminal shell)   

<br />    

2. add Mongoose schemas

        2.1 add ./app/models/user.server.model.js <-- mongoose db schema for mongodb
        2.2 include user.server.model.js file in the mongosoose.js configuration file
            and make sure mongoose conig file is called first in server.js 
