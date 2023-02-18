$(document).ready(function () {
    $('.hots-information-banner').owlCarousel({
        loop: false,
        nav: true,
        navText: ['<i class="fa-solid fa-circle-arrow-left"></i><span>上一個</span>', '<span>下一個</span><i class="fa-solid fa-circle-arrow-right"></i>'],
        responsive: {
            0: {
                margin: 8,
                items: 1
            },
            768: {
                margin: 16,
                items: 1
            },
            1000: {
                margin: 24,
                items: 1
            }
        }
    })
});