// javascript stuff
$(function(){
    $('.projects a').hover(function(){
        $(this).addClass('active');
    },
    function(){
        $(this).removeClass('active');
    });
});
