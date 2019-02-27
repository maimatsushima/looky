$(function () {

	$('.zdo_drawer_button').click(function () {
		$(this).toggleClass('active');
		// $('.zdo_drawer_bg').fadeToggle();
		$('.zdo_drawer_nav_wrapper').toggleClass('open');
	})
	// $('.zdo_drawer_bg').click(function () {
	// 	$(this).fadeOut();
	// 	$('.zdo_drawer_button').removeClass('active');
	// 	$('nav').removeClass('open');
	// });
})
