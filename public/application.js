/*
***************************************************************
public/application.js



- angular application file
***************************************************************
*/

var mainApplicationModuleName = 'mean';

// var mainApplicationModule = angular.module(mainApplicationModuleName, []);
var mainApplicationModule = angular.module(mainApplicationModuleName, ['example']);

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainApplicationModuleName]);
});
