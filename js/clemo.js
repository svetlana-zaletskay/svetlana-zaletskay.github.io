$(document).ready(function(){
	$('.team-slider').slick({
		dots: true,
		infinite: false,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 1
                }
            }

		]
	});

	$('.client-portfolio-slider').slick({
		dots: true,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2

                }
            },
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
	});

	$('#mobileMenuButton').click(function () {
		$(this).toggleClass('nav-mobile-button');
		$('.nav').toggleClass('nav-mobile');
		$('.link-nav').toggleClass('nav-el-mobile');
    })

	$('.link-nav').click(function () {
        $('#mobileMenuButton').toggleClass('nav-mobile-button');
		$('.nav').removeClass('nav-mobile');
        $('.link-nav').removeClass('nav-el-mobile');
    })
});


