// 'use strict';
$(document).ready(function () {
  $('.slider-portfolio').owlCarousel({
    loop: true,
    items: 5,
    nav: false,
    dots: false,
  }).on('click', '.owl-item', function (e) {
    const carousel = $('.slider-portfolio').data('owl.carousel');
    carousel.to(carousel.relative($(this).index()), false, true);
  });
});
