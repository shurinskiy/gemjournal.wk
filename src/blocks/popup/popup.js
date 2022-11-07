import Cookies from 'js-cookie'

(() => {
	let $popup = $('.popup');

	if (! Cookies.get('popup') && $popup.length) {
		setTimeout(function() {
			$popup.addClass('opened');
			Cookies.set('popup', true);
		}, 15000);
	}

	$('button.popup__close').on('click', function(e) {
		$popup.removeClass('opened');
		console.log('hello');
	});
})();
