$(".proj_btn").click(function() {
    $('html,body').animate({
        scrollTop: $(".projects").offset().top},
        'fast');

    $('.projects h1').addClass('animated bounceInLeft');
    $('.projects p').addClass('animated bounceInLeft');
});

$(".blog_btn").click(function() {
    $('html,body').animate({
        scrollTop: $(".blog").offset().top},
        'fast');

    $('.blog h1').addClass('animated bounceInRight');
    $('.blog p').addClass('animated bounceInRight');
});

$(".hello_btn").click(function() {
    $('html,body').animate({
        scrollTop: $(".sayhello").offset().top},
        'fast');

    $('.sayhello h1').addClass('animated jello');
    $('.sayhello p').addClass('animated jello');
});

var vpw = $(window).width();
var vph = $(window).height();

$('.full-page').width(vph);
