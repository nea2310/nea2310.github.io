$(function(){
	let slider = $('.slider').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items:1
			},
			600: {
				items:3
			},
			1000: {
				items:5
			}
		},
			})
	slider.trigger('refresh.owl.carousel');

	slider.on('mousewheel', '.owl-stage', function (e) {
		if (e.originalEvent.deltaY > 0) {
			slider.trigger('next.owl');
		} else {
			slider.trigger('prev.owl');
		}

		e.preventDefault();
	});
});

