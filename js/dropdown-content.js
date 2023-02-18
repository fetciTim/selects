$(document).ready(function () {
    //QA收展功能
    //預設第一個展開
    $('.qa-information-active').children('.qa-information-list-content').show();
    //點擊後，偵測狀態進行判斷
    $('.qa-information-list').click(function(e){
        var btnClassName = $(this).attr('class');
        if (btnClassName !== 'qa-information-list qa-information-active') {
            $('.qa-information-list').removeClass('qa-information-active');
            $('.qa-information-list-title').children('i').removeClass('fa-circle-minus').addClass('fa-circle-plus');
            $('.qa-information-list-content').stop().slideUp(500);
            $(this).addClass('qa-information-active');
            $(this).children('.qa-information-list-title').children('i').removeClass('fa-circle-plus').addClass('fa-circle-minus');
            $(this).children('.qa-information-list-content').stop().slideDown(500);
        } else {
            return false;
        }
    });
});
