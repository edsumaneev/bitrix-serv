// 'use strict';
// $('.slider-portfolio').slick({
//   // prevArrow: $(".btx-staff__prev"),
//   // nextArrow: $(".btx-staff__next"),
//   prevArrow: false,
//   nextArrow: false,

//   infinite: true,
//   speed: 350,

//   slidesToShow: 5,

//   slidesToScroll: 1,

//   responsive: [{
//     breakpoint: 1204,

//     settings: {
//       slidesToShow: 4,
//       slidesToScroll: 1,
//     }
//   }, {
//     breakpoint: 767,
//     settings: {
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     }
//   }]
// });


$(document).ready(function () {
  $('.slider-portfolio').owlCarousel({
    loop: true,
    items: 5,
    nav: false,
    dots: false,
    // navText: [
    //   '<i class="fa fa-caret-left"></i>',
    //   '<i class="fa fa-caret-right"></i>',
    // ],
  }).on('click', '.owl-item', function (e) {
    const carousel = $('.slider-portfolio').data('owl.carousel');
    carousel.to(carousel.relative($(this).index()), false, true);
  });
});
// ================================================================
// $('.slick-active').click(function (event) {
//   $('.slick-current').removeClass('slick-current');
//   $(this).addClass('slick-current');
// });
// =================================================================
// $('.slider-portfolio__item').click(function () {
// var id = $(this).attr('data-tab'),
//   content = $('.team-page__listing[data-tab="' + id + '"]');

// $('.btx-title.slider-portfolio__item').addClass('slick-current');
// $(this).addClass('slick-current');

// $('.team-page__listing.active').removeClass('active');
// content.addClass('active');
// });
