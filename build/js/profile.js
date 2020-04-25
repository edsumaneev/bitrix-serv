// 'use strict';
$('.profile-page__vert-slider').click(function () {
  var id = $(this).attr('data-tab'),
    content = $('.abonement__type[data-tab="' + id + '"]');

  $('.abonement__item.active').removeClass('active');
  $(this).addClass('active');

  $('.abonement__type.active').removeClass('active');
  content.addClass('active');
});

(function () {
  // var sliderItem = document.querySelectorAll(".profile-page__vert-slider");

})();
