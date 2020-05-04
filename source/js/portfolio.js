// 'use strict';
$(document).ready(function () {
  $('.slider-portfolio').owlCarousel({
    loop: true,
    // items: 5,
    nav: false,
    dots: false,
    autoWidth: true,
    // margin: 10,
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

$('.portfolio__label').click(function () {
  var id = $(this).attr('data-tab'),
    content = $('.portfolio__listing[data-tab="' + id + '"]');

  $('.portfolio__label.active').removeClass('active');
  $(this).addClass('active');

  $('.portfolio__listing.active').removeClass('active');
  content.addClass('active');
});
// --------
$('.portfolio__sublabel').click(function () {
  var id = $(this).attr('data-tab'),
    content = $('.portfolio__space[data-tab="' + id + '"]');

  $('.portfolio__sublabel.active').removeClass('active');
  $(this).addClass('active');

  $('.portfolio__space.active').removeClass('active');
  content.addClass('active');
});
// ----------
// $('.team-page__label').click(function () {
//   var id = $(this).attr('data-tab'),
//     content = $('.team-page__listing[data-tab="' + id + '"]');

//   $('.team-page__label.active').removeClass('active');
//   $(this).addClass('active');

//   $('.team-page__listing.active').removeClass('active');
//   content.addClass('active');
// });
