// 'use strict';
$(document).ready(function () {
  $('.slider-portfolio').owlCarousel({
    loop: true,
    // items: 5,
    nav: false,
    dots: false,
    margin: 10,
    responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {
        items: 1
      },
      767: {
        items: 3
      },
      1200: {
        items: 5
      }
    }
  }).on('click', '.owl-item', function (e) {
    const carousel = $('.slider-portfolio').data('owl.carousel');
    carousel.to(carousel.relative($(this).index()), false, true);
  });
});
