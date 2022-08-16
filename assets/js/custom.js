(function($) {
	let socialMedia = document.getElementById('wrapper');
	'use strict';


	history.scrollRestoration = 'manual';

	// Mean Menu
	jQuery('.mean-menu').meanmenu({ 
		meanScreenWidth: "991"
	});

	// Preloader
	$(function() {
		$('body').addClass('loaded');
	});

	// Nice Select JS
	$('select').niceSelect();
	
	// Header Sticky
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >150){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	//  Hero Slider Wrap
	$('.hero-slider-wrap').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		mouseDrag: true,
		items:1,
		dots: true,
		autoHeight: true,
		autoplay: true,
		smartSpeed:800,
		autoplayHoverPause: true,
		rtl: true,
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-right'></i>",
		],
	});

	//  Hero Slider Wrap Eight
	$('.hero-slider-wrap-eight').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		mouseDrag: true,
		items:1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed:800,
		autoplayHoverPause: true,
		animateOut: "slideOutDown",
		animateIn: "slideInDown",
		rtl: true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>",
		],
	});



	// About Img Wrap
	$('.about-img-wrap').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		autoplayTimeout: 2500,
		autoHeight: true,
		items: 1,
		animateOut: 'fadeOut',
		margin: 0,
		rtl: true,
		navText: [
			"<i class='bx bx-chevron-right'></i>",
		],
	});

	// Services Item Wrap
	$('.services-item-wrap').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		autoplayTimeout: 2500,
		autoHeight: true,
		items: 1,
		animateOut: 'fadeOut',
		margin: 0,
		rtl: true,
	});

	// Go to Top
	// Scroll Event
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 1000) $('.go-top').addClass('active');
		if (scrolled < 1000) $('.go-top').removeClass('active');
	});  

	// Click Event
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  0);
	});

	
	/*-------------------------------------
        social media
    -------------------------------------*/
    addEventListener('scroll', function(){
		if(scrollY >= 400){
		  socialMedia.style.transform = "translate(15%, 100%)";
		}else{
		  socialMedia.style.transform = "translate(-100%, 100%)";
		}
	  });

	// Animation
	new WOW().init();
		
	// Popup Video
	$('.popup-youtube, .popup-vimeo').magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});
	
	
})(jQuery);