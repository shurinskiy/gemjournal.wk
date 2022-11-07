import Swiper, { Navigation } from 'swiper';

(() => {

	new Swiper(".p-slider__inner", {
		spaceBetween: 25,
		loop: true,
		modules: [Navigation],
		navigation: {
			prevEl: '.p-slider__prev',
			nextEl: '.p-slider__next',
			disabledClass: 'disabled'
		},
		breakpoints: {
			1280: { 
				slidesPerView: 4,
			},
			1100: { 
				slidesPerView: 3.4,
			},
			960: { 
				slidesPerView: 3.0,
			},
			780: { 
				slidesPerView: 2.5,
			},
			640: { 
				slidesPerView: 2.0,
			},
			480: { 
				slidesPerView: 1.6,
			},
			0: { 
				slidesPerView: 1.0,
			}
		}
	});

})();
