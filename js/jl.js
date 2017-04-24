$(document).ready(function () {
    
    
	
    
});//end document ready
    


$(window).scroll(function() {
    var windscroll = $(window).scrollTop(),
        subnavScrolled = "subnav-scrolled",
        Scrollheight = $('.top-ad').height() + $('nav.container.nav').height() + $('.play-banner').height() + $('.filter-nav').height() + 90;
    
    if (windscroll >= Scrollheight) {
        $('.filter-nav').addClass(subnavScrolled);
        $('#myList section').each(function(i) {
            if ($(this).position().top <= windscroll + 40) {
                $('.filter-nav li.active').removeClass('active').addClass('non-mobile');
                $('.filter-nav li').eq(i).addClass('active').removeClass('non-mobile');
            }
        });

    } else {

        $('.filter-nav').removeClass(subnavScrolled);
        $('.filter-nav li.active').removeClass('active').addClass('non-mobile');
        $('.filter-nav li:first').addClass('active').removeClass('non-mobile');
    }

}).scroll();
 
    
    
	