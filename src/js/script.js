// $(document).ready(function () {
//     $('.carousel__inner').slick({
//         speed: 1200,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//     });
// });

// const slider = tns({
//     container: '.carousel__inner', // это наш контейнер
//     items: 1,  // количество предметов которые будут отображаться на главной странице
//     slideBy: 'page',
//     autoplay: false,
//     controls: false,
//     nav: false
// });

// document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
// });

// document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
// });
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        speed: 1200,
        loop: true,
        mouseDrag: false,
        center: true,
        nav: true,
        items: 1,
        navText: [
            '<button type="button" class="prev"><img src="../icons/left.svg"></button>',
            '<button type="button" class="next"><img src="../icons/right.svg"></button>'
        ]
    });
});