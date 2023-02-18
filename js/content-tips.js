$(document).ready(function () {
    //向下捲動提示
    $('.branding-popup-wrap-content-information').scroll(function () { 
        var thisContentScrolltop = $(this).scrollTop();
        if (thisContentScrolltop > 0) {
            $('.branding-popup-wrap-content').addClass('content-tips-default').removeClass('content-tips-active')
        } else {
            $('.branding-popup-wrap-content').addClass('content-tips-active').removeClass('content-tips-default')
        }
    });
});