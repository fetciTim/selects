$(document).ready(function () {
    //一鍵下載彈出視窗內容 - 開啟
    $('.popup-open').click(function (e) {
        $('body').addClass('overflow-close');
        $('.more').fadeIn(1000);
        return false;
    });
    //一鍵下載彈出視窗內容 - 關閉
    $('.popup-close').click(function (e) {
        $('body').removeClass('overflow-close');
        $('.more').fadeOut(1000);
        return false;
    });
    //
    //新裝上陣彈出視窗內容 - 開啟
    $('.branding-open').click(function (e) {
        $('body').addClass('overflow-close');
        $('.branding').fadeIn(1000);
        return false;
    });
    //新裝上陣彈出視窗內容 - 關閉
    $('.branding-close').click(function (e) {
        $('body').removeClass('overflow-close');
        $('.branding').fadeOut(1000);
        return false;
    });
});