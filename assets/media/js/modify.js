// 深色样式
function toggleStyle() {
    if (localStorage.getItem("style") != '') {
        if (localStorage.getItem("style") == 'dark') {
            setStyleLight();
        } else {
            setStyleDark();
        }
    } else {
        var time = (new Date).getHours();
        if('6' < time && time < '18') {
            setStyleLight()
        }
    }
}
function setStyleDark() {
    $('body').addClass('mdui-theme-layout-dark');
    localStorage.setItem("style", "dark");
}
function setStyleLight() {
    $('body').removeClass('mdui-theme-layout-dark');
    localStorage.setItem("style", "light");
}
if ("light" != typeof Storage) {
    "light" === localStorage.getItem("style") && setStyleLight();
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

// 文章 a 标签
$('#post main a').prop({
    target:"_blank",
    rel:"nofollow noopener noreferrer"
});