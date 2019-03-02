//header
function headerOrange(){
var html = "";
html += '<header>';
html += '<div class="header-logo-orange">';
html += '<h1><img src="../img/logo-orange.png" alt="logo-orange"></h1>';
html += '</div>';
html += '</header>';
document.write(html);
}

//header2
function headerNavy(){
var html = "";
html += '<div class="header-logo-navy">';
html += '<h1><img src="../img/logo-navy.png" alt="logo-navy"></h1>';
html += '</div>';
document.write(html);
}

// footer
function footer(){
var html = "";
html += '<footer>';
html += '<div class="footer1">';
html += '<div class="footer-menu">';
html += '<div class="footer-arrow"><figure><img src="../img/footer-arrow.png" alt="footer-arrow"></figure>';
html += '<ul>';
html += '<li><a href="index.html">web業界仕事図鑑</a></li>';
html += '<li><a href="magazine.html">looky MAGAZINE</a></li>';
html += '<li><a href="lesson.html">looky LESSON</a></li>';
html += '<li><a href="diagnosis.html">looky 性格診断</a></li>';
html += '<div class="footer-logo-orange">';
html += '<img src="../img/logo-orange.png" alt="logo-orange">';
html += '</div>';
html += '</ul>';
html += '</div>';
html += '<p><small>&copy;copyright looky all right reserved</small></p>';
html += '</div>';
html += '</footer>';
document.write(html);
}

// // footer-short
// function footer2(){
// var html = "";
// html += '<footer>';
// html += '<div class="footer2">';
// html += '<p><small>&copy;copyright looky all right reserved</small></p>';
// html += '</div>';
// html += '</footer>';
// document.write(html);
// }

// $(function () {
//
// 	$('.zdo_drawer_button').click(function () {
// 		$(this).toggleClass('active');
// 		// $('.zdo_drawer_bg').fadeToggle();
// 		$('.zdo_drawer_nav_wrapper').toggleClass('open');
// 	})
// 	$('.zdo_drawer_bg').click(function () {
// 		$(this).fadeOut();
// 		$('.zdo_drawer_button').removeClass('active');
// 		$('nav').removeClass('open');
// 	});
//
//
// })
