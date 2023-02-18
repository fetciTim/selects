$(document).ready(function () {
    //漢堡選單收闔效果
    $('.dropdown-btn').click(function(){
        var btnStatus = $(this).data('status');
        if (btnStatus == 'close') {
            $('body').addClass('overflow-close-bg');
            $(this).data('status', 'open');
            $(this).children('i').removeClass('fa-solid fa-bars').addClass('fa-solid fa-xmark');
        } else {
            $('body').removeClass('overflow-close-bg');
            $(this).data('status', 'close');
            $(this).children('i').removeClass('fa-solid fa-xmark').addClass('fa-solid fa-bars');
        }
        $('.menu-list-l').stop().slideToggle(500);
        return false;
    });
});
