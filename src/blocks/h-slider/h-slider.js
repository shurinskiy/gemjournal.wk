import Swiper, { Navigation } from 'swiper';

(() => {

	new Swiper(".h-slider__inner", {
		// slidesPerView: 3.35,
		spaceBetween: 20,
		// loop: true,
		modules: [Navigation],
		navigation: {
			prevEl: '.h-slider__prev',
			nextEl: '.h-slider__next',
			disabledClass: 'disabled'
		},
		breakpoints: {
			1280: { 
				slidesPerView: 3.35,
			},
			1100: { 
				slidesPerView: 2.8,
			},
			960: { 
				slidesPerView: 2.5,
			},
			780: { 
				slidesPerView: 2.2,
			},
			640: { 
				slidesPerView: 1.7,
			},
			480: { 
				slidesPerView: 1.5,
			},
			0: { 
				slidesPerView: 1.2,
			}
		}
	});

})();
