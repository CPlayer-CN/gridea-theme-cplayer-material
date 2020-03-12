// 初始化
hljs.initHighlightingOnLoad()

// 深色样式
// 手动切换
$("#DarkStyle").on("click",function() {
    if (localStorage.getItem("theme") == 'dark') {
        setStyleLight();
    } else {
        setStyleDark()
    }
});
function setStyleDark() {
    $('body').addClass('mdui-theme-layout-dark');
    localStorage.setItem("theme", "dark");
}
function setStyleLight() {
    $('body').removeClass('mdui-theme-layout-dark');
    localStorage.setItem("theme", "light");
}
if ("undefined" != typeof Storage) {
    "dark" === localStorage.getItem("theme") && setStyleDark();
}
var time = (new Date).getHours();
if('6' < time && time < '18') {
    setStyleLight()
};

// 返回顶部
$('body').append('<a id="to-top" class="mdui-fab mdui-fab-fixed mdui-color-theme-accent mdui-ripple mdui-fab-hide"><i class="mdui-icon material-icons mdui-text-color-white">expand_less</i></a>');
$(function() {
	var toTop = $("#to-top"),
    toTopHide = function() {
        if ($(window).scrollTop() > 420) {
            toTop.removeClass("mdui-fab-hide");
        } else {
            toTop.addClass("mdui-fab-hide");
        }
    };
	if ($(window).scrollTop() > 420) {
		toTopHide()
	}
	$(window).scroll(function() {
		toTopHide()
	});
	toTop.click(function() {
		$("body,html").animate({
			scrollTop: 0
		}, 500)
	})
});

// 文章图片放大
window.addEventListener('load', function () {
    Lightense('#post .mdui-card-content img');
}, false);