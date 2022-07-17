(function ($) {
	"use strict";

	 $(window).on('load', function(){
        // Prealoder
        $("#preloader").delay(500).fadeOut();
    });
	
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
	
		//>=, not <=
		if (scroll >= 1) {
			//clearHeader, not clearheader - caps H
			$(".header-area").addClass("is-stick");
		}else{
			$(".header-area").removeClass("is-stick");
		};
	});

    // Hamburger-menu
    $('.hamburger-menu').on('click', function () {
        $('.hamburger-menu, #menu').toggleClass('current');
    });



	$('.services-active').slick({
		centerMode: true,
		centerPadding: '0px',
		dots: false,
		slidesToShow: 3,
		infinite: true,
		speed: 300,
		arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-left-long' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-right-long' aria-hidden='true'></i></button>",
		responsive: [
		  {
			breakpoint: 991,
			settings: {
			  arrows: true,
			  centerMode: false,
			  centerPadding: '0px',
			  slidesToShow: 2
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  arrows: true,
			  centerMode: true,
			  centerPadding: '0px',
			  slidesToShow: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  arrows: true,
			  centerMode: false,
			  centerPadding: '0px',
			  slidesToShow: 1
			}
		  }
		]
	  });


    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    //Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

})(jQuery);