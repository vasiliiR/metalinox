$(document).ready(function(){
    $('.your-class').slick({
        dots: true,
				dotsClass: "my-dots",
        arrows: false,
				autoplay: true,
				adaptiveHeight: true,
				speed: 500,

			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
					}
				}
			]
    });
  });

  $('.slider').on('afterChange',function(e, slick, currentSlide){
    slick.$dots.attr('data-current-slide', currentSlide);
});


