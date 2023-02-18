$(document).ready(function () {
    //桌面/平板一鍵下載按鈕捲動
    $(window).scroll(function () {
        var menuHeight = $('.menu-list-logo').innerHeight();
        var visionHeight = $('.branding-kv').height();
        var windowScrollTop = $(window).scrollTop();
        if (windowScrollTop > visionHeight) {
            $('.download-l').addClass('content-show').removeClass('content-hide');
        } else {
            $('.download-l').addClass('content-hide').removeClass('content-show');
        }
    });
    //返回頂端按鈕捲動
    $(window).scroll(function () {
        var menuHeight = $('.menu-list-logo').innerHeight();
        var visionHeight = $('.branding-kv').height();
        var windowScrollTop = $(window).scrollTop();
        if (windowScrollTop > visionHeight) {
            $('.screen-to-top').addClass('content-show').removeClass('content-hide');
        } else {
            $('.screen-to-top').addClass('content-hide').removeClass('content-show');
        }
    });
    //熱門推薦區塊
    scrollAnimate($('.hots'), $('.hots'), 160, 'hots-animation-default', 'hots-animation-active');
    //服務介紹區塊
    scrollAnimate($('.service'), $('.service'), 160, 'service-animation-default', 'service-animation-active');
    //服務介紹區塊
    scrollAnimate($('.shops'), $('.brand-circles'), 160, 'brand-circle-animation-default', 'brand-circle-animation-active');
    //形象牆
    scrollAnimate($('.brand'), $('.brand-wrap-device'), 320, 'brand-device-animation-default', 'brand-device-animation-active');
    scrollAnimate($('.brand'), $('.brand-wrap-circle-fill'), 320, 'brand-circle-fill-animation-default', 'brand-circle-fill-animation-active');
    scrollAnimate($('.brand'), $('.brand-wrap-circle-border:nth-child(2)'), 320, null, 'brand-circle-border-01-animation-active');
    scrollAnimate($('.brand'), $('.brand-wrap-circle-border:nth-child(3)'), 320, null, 'brand-circle-border-02-animation-active');
    scrollAnimate($('.brand'), $('.brand-wrap-circle-border:nth-child(4)'), 320, null, 'brand-circle-border-03-animation-active');
    scrollAnimate($('.brand'), $('.brand-wrap-circle-border:last-child'), 320, null, 'brand-circle-border-04-animation-active');
    scrollAnimate($('.brand'), $('.brand-wrap-device-inner-vision div:first-child'), 320, 'brand-emoji-animation-default', 'brand-emoji-animation-active');
    scrollAnimate($('.brand'), $('.brand-wrap-device-inner-vision div:nth-child(2)'), 320, 'brand-title-animation-default', 'brand-title-animation-active');
    //函式 - 偵測每個區塊的向上距離，並加入/移除CSS動畫
    function scrollAnimate(section, animationItems, scrollDistance, defaultClassName, newClassName) {
        $(window).scroll(function () {
            var menuHeight = $('.menu-list-logo').innerHeight();
            var windowScrollTop = $(window).scrollTop();
            var sectionOffsetTop = section.offset().top - parseInt(section.css('margin-top'));
            if (windowScrollTop + menuHeight + scrollDistance >= sectionOffsetTop) {
                animationItems.addClass(newClassName).removeClass(defaultClassName);
            } else {
                animationItems.addClass(defaultClassName).removeClass(newClassName);
            }
        });
    }
});