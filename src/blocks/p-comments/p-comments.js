(() => {
	$( '#commentform' ).on('submit', function(e) {
		e.preventDefault();
		
		let $form = $(this);
		let $button = $form.find('button[type="submit"]');
		let $elements = $form.find('input, textarea').add($button);
		let formdata = $form.serialize() + '&action=sendcomment';
		let $infoblock = $form.find('.p-form__alert');

		$button.addClass('processed');
		$elements.prop("disabled", true);

		$.ajax({
			type: 'post',
			dataType: 'json',
			url: props.ajax_url,
			data: formdata,
			cache: false,
		}).done(function(response) {
			
			if(response.success) {
				if(response.data.html) {
					$form.siblings('.p-comments__title').removeClass('hidden');
					$form.prev('.p-comments__cards').html(response.data.html);
					$form.find('.p-form__area textarea').val('');
					$infoblock.html('');
				} else {
					$form.addClass('p-form_success').html(response.data.text);
				}

			} else {
				$infoblock.html(response.data.text);
			}

			$button.removeClass('processed');
			$elements.prop("disabled", false);
		});
	});
})();
