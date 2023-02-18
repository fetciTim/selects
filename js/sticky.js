$(document).ready(function () {
    //主視覺上方動態間距
    menuSize();
    $(window).resize(function () {
        menuSize();
    });
    //函式 - 計算選單高度
    function menuSize() {
        var menuHeight = $('.menu-list').innerHeight();
        $('.branding-kv').css({ 'margin-top': menuHeight })
    }
});