/*
***************************************************************

index.server.controller.js



- Express app controller, using express res.render():


        res.render('template', {template: 'variables'});
        *note* 'template' refers to template.ejs in ./views/

- Exported as 'exports.render()' so you can call it like
get('/', index.render); from a routes file
***************************************************************
*/



exports.render = function(req, res) {

    /*if( req.session.lastVisit ){
        console.log(req.session.lastVisit);
    }*/
    //req.session.lastVisit = new Date(); // records time of last user request


    // sends the rendered view to the client
    // res.render(view [, locals] [, callback])

	// finally here is where we call index.ejs
	// the ejs is not needed since we have already
	// set the view engine to ejs engine in express.js 
    res.render('index',{
        title: 'hello my creatures... ',
        userFullName: req.user ? req.user.fullName : ''
    });
};
