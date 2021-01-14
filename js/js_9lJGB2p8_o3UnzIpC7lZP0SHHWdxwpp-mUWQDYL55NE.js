(function ($) {
	$(document).ready(function() {
		//Header scroll Class
		if($(window).width() > 767) {
			$(window).scroll(function() {    
				var scroll = $(window).scrollTop();
				if (scroll >= 42) {
					$("header").addClass("sticky-header");
				} else {
					$("header").removeClass("sticky-header");
				}
			});
		}
		
		//Equipment Slider
		$('.equipments-slider').slick({
		  speed: 300,
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  responsive: [
			{
			  breakpoint: 1199,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]
		});
		
		function lastActiveSlide() {
			$('.equipments-slider .slick-active').last().addClass("last-active-item");
		}
		
		lastActiveSlide();
		
		$(".equipments-slider").on('afterChange', function () {
			$('.equipments-slider .slick-active').removeClass('last-active-item');
			lastActiveSlide();
		});
	
		
		$(window).resize(function () {
			lastActiveSlide();
		});
		
		$('.social-media-slider .pane-content').slick({
		  speed: 300,
		  slidesToShow: 6,
		  slidesToScroll: 1,
		  responsive: [
			{
			  breakpoint: 1199,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 3
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
		});
		
		//Awards Slider
		$('.awards-main-slider').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  asNavFor: '.awards-thumb-slider'
		});
		$('.awards-thumb-slider').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  asNavFor: '.awards-main-slider',
		  focusOnSelect: true
		});
		

		//Loader
		$(window).load(function() {
			$(".loader-overlay").delay(2000).fadeOut("slow");
			$(".pre-loader").delay(2000).fadeOut("slow");
		})

		/*$(window).scroll(function(){
		  // Add parallax scrolling to all images in .paralax-image container
		  $('.not-front .banner').each(function(){
			// only put top value if the window scroll has gone beyond the top of the image
			if ($(this).offset().top < $(window).scrollTop()) {
			  // Get ammount of pixels the image is above the top of the window
			  var difference = $(window).scrollTop() - $(this).offset().top;
			  // Top value of image is set to half the amount scrolled
			  // (this gives the illusion of the image scrolling slower than the rest of the page)
			  var half = (difference / 2) + 'px';

			  $(this).find('img').css('top', half);
			} else {
			  // if image is below the top of the window set top to 0
			  $(this).find('img').css('top', '0');
			}
		  });

		});*/
	})
}(jQuery));;
