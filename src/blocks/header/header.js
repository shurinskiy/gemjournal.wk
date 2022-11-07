import scrollLock from 'scroll-lock';

(() => {
	const $header = $('.header');
	const $shell = $header.find('.header__menu');
	const $toggle = $header.find('.header__menu-toggle').add('.header__menu-close');
	const vh = window.innerHeight * 0.01; // решение проблемы 100vh для меню на мобильных устройствах

	$(window).on('scroll', function() {
		$header[($(this).scrollTop() > 30 ? 'add': 'remove') + 'Class']('header_filled');
	});

	$('.header__search-toggle').on('click', function(e) {
		$('.header__menu').add(this).toggleClass('switched');
	})

	$toggle.on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).toggleClass('opened');
		$shell.toggleClass('opened');
		
		if($shell.hasClass('opened')) {
			$shell.css({'max-width': parseInt($shell.css('max-width')) + scrollLock.getPageScrollBarWidth()});
			scrollLock.disablePageScroll();
			return;
		}

		$shell.removeAttr('style');
		scrollLock.clearQueueScrollLocks();
		scrollLock.enablePageScroll();
	});

	$(window).on('click', function(e) {
		if($shell.hasClass('opened') && !e.target.closest('.header__menu')) {
			e.preventDefault();
			$toggle.toggleClass('opened');
			$shell.toggleClass('opened').removeAttr('style');
			scrollLock.clearQueueScrollLocks();
			scrollLock.enablePageScroll();
		}
	});

	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

})();
