$(document).ready(function () {
    newsBannerUpdate();
    hotsBannerUpdate();
    //函式設定 - 最新活動Banner
    /*Banner圖檔編號由01開始，範例：hots-banner-l-01 & hots-banner-m-01，
    將圖檔依照編號放入資料夾，即可帶入相應圖檔，不需從html中控制*/
    function newsBannerUpdate() {
        var newsbannerNumber = $('.news-information-banner-item').length;
        for (let index = 0; index < newsbannerNumber; index++) {
            $('.news-information-banner-item').eq(index).children('img').attr('src', 'images/news-banner-0' + parseInt(index + 1) + '.jpg');
        }
    }
    //函式設定 - 熱門推薦Banner
    function hotsBannerUpdate() {
        var screenWidth = window.screen.width;
        var hotsbannerNumber = $('.hots-information-banner-item').length;
        //偵測螢幕寬度替換圖片
        if (screenWidth > 480) {
            for (let index = 0; index < hotsbannerNumber; index++) {
                $('.hots-information-banner-item').eq(index).children('img').attr('src', 'images/hots-banner-l-0' + parseInt(index + 1) + '.jpg');
            }
            //
        } else {
            for (let index = 0; index < hotsbannerNumber; index++) {
                $('.hots-information-banner-item').eq(index).children('img').attr('src', 'images/hots-banner-m-0' + parseInt(index + 1) + '.jpg');
            }
        }
    }
});