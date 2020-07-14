$(document).ready(function(){
	//FOR MENU
	$(".menu-icon").click(function(){
		$(".menu > ul").toggleClass("open");
		$("body").addClass("menu-open");
	});
	$(".close-menu").click(function(){
		$(".menu > ul").removeClass("open");
		$("body").removeClass("menu-open");
	});
	
	$(".parent-menu").click(function(){
		$(this).toggleClass("sub-menu-active");
		$(this).parent().find(".sub-menu").toggleClass("sub-menu-open");
	
	});
	
	/*var highestBox = 0;
	$('.equal-height-container .equal-height-block').each(function(){ 
		if($(this).height() > highestBox){  
			highestBox = $(this).height();  
		}
	});    
	$('.equal-height-container .equal-height-block').height(highestBox);*/
	
	function resizeboxes(){
		$('.equal-height-container, .equal-height-container-2, .equal-height-container-3').each(function(){  
			  var highestBox = 0;
			  $('.equal-height-block', this).css('height','auto');
			  $('.equal-height-block', this).each(function(){
				if($(this).height() > highestBox) {
				  highestBox = $(this).height(); 
				}
			  });
			  $('.equal-height-block',this).height(highestBox);
		}); 
	}
	
	resizeboxes();

	
	//Easy Scroll
	$(".easyscroll").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top - 100
			}, 800, function(){
				//window.location.hash = hash;
			});
		} // End if
	});
  
  
	$('.testimonial-slider').slick({
		dots: true,
		arrows: false
	});

	$('.partners').slick({
		dots: false,
		infinite: true,
		autoplay: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		}
		]
	});
	
	
	$('.other-courses').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	});
	
	$('.classes').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	});
	
	$(function() {
		$(".preloader").fadeOut(5000, function() {
			
		});
	});
	
	var window_width = jQuery(window).width();
	
	
	if (window_width < 768){
		$(".pre-header ul li.time").click(function(){
			$(this).toggleClass("open");
		});
	}
	
});


$(window).scroll(function() {    
 var scroll = $(window).scrollTop();    
 if (scroll >= 100) {
  $(".main-header").removeClass("").addClass("sticky");
 }else {
  $(".main-header").removeClass("sticky");
 }
});



