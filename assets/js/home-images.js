$('img.home-img').click(function(e) {
	$(e.target).next().removeClass('hidden');
	$('body').addClass('no-scroll');
});


$('.image-details').click(function (e) {
	$('.image-details').addClass('hidden')
	$('body').removeClass('no-scroll');
});