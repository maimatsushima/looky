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


	$('.footer-arrow').on('click',function(){
	        $('html, body').animate({scrollTop: 0}, 500);
	    });

		$('.works-list').find('a').on('click',function(evt) {
		        evt.preventDefault();
		        var targetName = $(this).attr("href");
		        // console.log(targetName);
		        // targetNameの座標
		        var targetPosY = $(targetName).offset().top;
		        $('html, body').animate({scrollTop: targetPosY}, 1000);
		    });

})
