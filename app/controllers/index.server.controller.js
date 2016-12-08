/*
***************************************************************
2. index.server.controller.js
***************************************************************


- Express app controller, using express res.render():

        res.render('template', {template: 'variables'});
        *note* 'template' refers to template.ejs in ./views/
***************************************************************
*/



exports.render = function(req, res) {
    res.render('index', {
        title: 'hello creatures...'
    });
};
