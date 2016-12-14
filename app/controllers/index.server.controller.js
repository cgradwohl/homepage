/*
***************************************************************

app/controllers/index.server.controller.js



- Express app controller, using express res.render():

        res.render('template', {template: 'variables'});
        *note* 'template' refers to template.ejs in ./views/
***************************************************************
*/



exports.render = function(req, res) {

    /*if( req.session.lastVisit ){
        console.log(req.session.lastVisit);
    }*/
    //req.session.lastVisit = new Date(); // records time of last user request

    res.render('index', {
        title: 'hello my creatures... ',
        userFullName: req.user ? req.user.fullName : ''
    });
};
