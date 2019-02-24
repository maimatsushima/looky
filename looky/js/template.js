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

// index.html/more button
function more(){
var html = "";
html += '<div class="button-more">';
html += '<a href="#">もっと見る</a>';
html += '</div>';
document.write(html);
}

// footer
function footer(){
var html = "";
html += '<footer>';
html += '<div class="footer-menu">';
html += '<ul>';
html += '<li><a href="index.html">web業界仕事図鑑</a></li>';
html += '<li><a href="magazine.html">マガジン</a></li>';
html += '<li><a href="lesson.html">レッスン</a></li>';
html += '<li><a href="diagnosis.html">診断</a></li>';
html += '<div class="footer-logo-orange">';
html += '<img src="../img/logo-orange.png" alt="logo-orange">';
html += '</div>';
html += '</ul>';
html += '</div>';
html += '<p><small>&copy;copyright looky All Right Reserved</small></p>';
html += '</footer>';
document.write(html);
}

// footer-short
function footer2(){
var html = "";
html += '<footer>';
html += '<p><small>&copy;copyright looky All Right Reserved</small></p>';
html += '</footer>';
document.write(html);
}
