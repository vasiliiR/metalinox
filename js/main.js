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
						dots: false,
					}
				}
			]
    });

	$('.your-class_2').slick({
		dots: false,
		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,
		arrows: true,
		nextArrow: '<div class="sprite-next"><img src="./img/products/left.svg" alt="left"></div>', // Кастомная стрелка "далее"
		prevArrow: '<div class="sprite-prev"> <img src="./img/products/right.svg" alt="left"></div>', // Кастомная стрелка "назад"
		

		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				slidesToShow: 1
			  }
			},
		  ]
	});

	
  });

  $('.slider').on('afterChange',function(e, slick, currentSlide){
    slick.$dots.attr('data-current-slide', currentSlide);
});

$('#my_Dropdown').click(function() {

        $('.dropdown-content').hide('dropdown-content');
});

$( "#myInput" ).click(function() {
	$( ".dropdown-content" ).show( 500 );
  });

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("my_Dropdown").classList.toggle("show");
  }
  
  function filterFunction() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	div = document.getElementById("my_Dropdown");
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
	  txtЗначение = a[i].textСодержание || a[i].innerText;
	  if (txtЗначение.toUpperCase().indexOf(filter) > -1) {
		a[i].style.display = "";
	  } else {
		a[i].style.display = "none";
	  }
	}
  }

