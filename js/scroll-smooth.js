$(document).ready(function () {
    //頁首錨點平滑捲動
    $('.scroll-smooth').click(function (e) {
        var menuHeight = $('.menu-list-logo').innerHeight();
        var btnStatus = $('.dropdown-btn').data('status');
        var btnOffsetTop = $($(this).attr('href')).offset().top - (parseInt($($(this).attr('href')).css('margin-top')));
        $('body').stop().animate({ scrollTop: btnOffsetTop - menuHeight }, 1000);
        if (btnStatus == 'open') {
            $('body').removeClass('overflow-close-bg');
            $('.menu-list-l').stop().slideUp(500);
            $('.dropdown-btn').data('status', 'close');
            $('.dropdown-btn').children('i').removeClass('fa-solid fa-xmark').addClass('fa-solid fa-bars');
        }
        return false;
    });
    //返回頂端平滑捲動
    $('.to-top, .screen-to-top').click(function (e) {
        $('body').stop().animate({ scrollTop: 0 }, 1000);
        return false;
    });
});