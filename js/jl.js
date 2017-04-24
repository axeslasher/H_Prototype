



$(window).scroll(function() {
    var windscroll = $(window).scrollTop(),
        subnavScrolled = "subnav-scrolled",
        //We need to know how far we need to scroll to trigger the sticky nav. NOTE: Unpredictability of Adsense could be an issue.
        Scrollheight = $('.top-ad').height() + $('nav.container.nav').height() + $('.play-banner').height() + $('.filter-nav').height() + 90;
    
    //When we go past our scroll height...
    if (windscroll >= Scrollheight) {
        //Add the sticky class to the subnav
        $('.filter-nav').addClass(subnavScrolled);
        //As a new section is scrolled past, loop through the menu and incrimentally switch classes
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
 

	