$(document).ready(function () {
    
    
    
    //Sticky Sub Nav
    //Sticky Header code modified from: https://codepen.io/Guilh/pen/JLKbn
    
    var  subnav = $(".filter-nav");
    var  subnavScrolled = "subnav-scrolled";
    var  Scrollheight = $('.top-ad').height() + $('nav.container.nav').height() + $('.play-banner').height() + $('.filter-nav').height();

    $(window).scroll(function() {
      if( $(this).scrollTop() > Scrollheight ) {
        subnav.addClass(subnavScrolled);
      } else {
        subnav.removeClass(subnavScrolled);
      }
    });

    
    
   /* //Script found and modified from: https://stanhub.com/sticky-header-change-navigation-active-class-on-page-scroll-with-jquery/
    
    
		$(document).on("scroll", onScroll);
 
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
 
			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');
 
			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});
    
// This Switches active classes on the subnav as the section is in view. 
	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		$('nav a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$('nav ul li a').removeClass("active");
				currentLink.addClass("active");
			}
			else{
				currentLink.removeClass("active");
			}
		});*/
	});