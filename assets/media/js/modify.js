// 初始化
hljs.initHighlightingOnLoad()

// 深色样式
function toggleStyle() {
    if (localStorage.getItem("theme") == 'dark') {
        setStyleLight();
    } else {
        setStyleDark();
    }
}
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
if ("light" != typeof Storage) {
    "light" === localStorage.getItem("theme") && setStyleLight();
}
$('#DarkStyle').click(function() {
    toggleStyle();
});

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

// 文章列表页面瀑布流。
function masonry() {
    // 初始化 masonry
    $('.mdui-row-xs-1').masonry({
        itemSelector: '.mdui-col',
        horizontalOrder: true
    });
}
masonry()
$('.mdui-col').imagesLoaded( function() {
    masonry()
});

// 文章 a 标签
$('#post main a').prop({
    target:"_blank",
    rel:"nofollow noopener noreferrer"
});