$(document).ready(function(){
    $('.your-class').slick({
        dots: true,
        arrows: false,
    });
  });

  $('.slider').on('afterChange',function(e, slick, currentSlide){
    slick.$dots.attr('data-current-slide', currentSlide);
});