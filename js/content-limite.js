$(document).ready(function () {
    //鎖定字數後一律呈現...
    var textContentMore = '...';
    //最新消息每則內容鎖定20字
    var newsLength = $('.news-content-banner-item').length;
    for (let index = 0; index < newsLength; index++) {
        var newsEachContent = $('.news-content-banner-item').eq(index).children('p').text();
        var newsEachTextLength = $('.news-content-banner-item').eq(index).children('p').text().length;
        if (newsEachTextLength >= 20) {
            $('.news-content-banner-item').eq(index).children('p').text(newsEachContent.slice(0, 20) + textContentMore);
        }
    }
    //商家名稱鎖定15字
    var shopsLength = $('.shops-content-list').length;
    for (let index = 0; index < shopsLength; index++) {
        var shopsNameEachContent = $('.shops-content-list').eq(index).children('.shops-content-list-wrap').children('.shops-content-list-wrap-data').children('p').text();
        var shopsNameEachTextLength = $('.shops-content-list').eq(index).children('.shops-content-list-wrap').children('.shops-content-list-wrap-data').children('p').text().length;
        if (shopsNameEachTextLength >= 15) {
            $('.shops-content-list').eq(index).children('.shops-content-list-wrap').children('.shops-content-list-wrap-data').children('p').text(shopsNameEachContent.slice(0, 15) + textContentMore);
        }
    }
    //商家活動鎖定30字
    for (let index = 0; index < shopsLength; index++) {
        var shopsEventEachContent = $('.shops-content-list').eq(index).children('.shops-content-list-wrap').children('.shops-content-list-wrap-event').children('h3').text();
        var shopsEventEachTextLength = $('.shops-content-list').eq(index).children('.shops-content-list-wrap').children('.shops-content-list-wrap-event').children('h3').text().length;
        if (shopsEventEachTextLength >= 30) {
            $('.shops-content-list').eq(index).children('.shops-content-list-wrap').children('.shops-content-list-wrap-event').children('h3').text(shopsEventEachContent.slice(0, 30) + textContentMore);
        }
    }
    //活動內容鎖定100字
    for (let index = 0; index < shopsLength; index++) {
        var shopsEventInforEachContent = $('.shops-content-list').eq(index).children('.shops-content-list-wrap').children('.shops-content-list-wrap-other').children('.shops-content-list-wrap-other-information').children('article').text();
        var shopsEventInforEachTextLength = $('.shops-content-list').eq(index).children('.shops-content-list-wrap').children('.shops-content-list-wrap-other').children('.shops-content-list-wrap-other-information').children('article').text().length;
        if (shopsEventInforEachTextLength >= 100) {
            $('.shops-content-list').eq(index).children('.shops-content-list-wrap').children('.shops-content-list-wrap-other').children('.shops-content-list-wrap-other-information').children('article').text(shopsEventInforEachContent.slice(0, 100) + textContentMore);
        }
    }
});
