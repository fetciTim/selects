$(document).ready(function () {
    $('.news-information-banner').owlCarousel({
        loop: false,
        nav: true,
        navText: ['<i class="fa-solid fa-circle-arrow-left"></i><span>上一個</span>', '<span>下一個</span><i class="fa-solid fa-circle-arrow-right"></i>'],
        responsive: {
            0: {
                margin: 4,
                items: 2
            },
            768: {
                margin: 12,
                items: 2
            },
            1000: {
                margin: 8,
                items: 3
            },
            1600: {
                margin: 20,
                items: 3
            }
        }
    })
});