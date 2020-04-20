// 'use strict';
$('.btx-staff__slider').slick({
  prevArrow: $(".btx-staff__prev"),
  nextArrow: $(".btx-staff__next"),
  infinite: true,
  speed: 350,
  // определяем скорость перелистывания
  slidesToShow: 4,
  //количество слайдов для показа
  slidesToScroll: 4,
  //сколько слайдов за раз перелистнется
  responsive: [{
    breakpoint: 1204,
    //сообщает, при какой ширине экрана нужно включать настройки
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      // centerMode: true
      infinite: true
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      // centerMode: false
    }
  }]
});

$('.profile-page__slider').slick({
  prevArrow: $(".profile-page__prev"),
  nextArrow: $(".profile-page__next"),
  dots: true, // показывать точки индикаторы
  dotsClass: 'profile-page__dots', // название класса для точек
  infinite: true,
  speed: 350,
  // определяем скорость перелистывания
  slidesToShow: 4,
  //количество слайдов для показа
  slidesToScroll: 4,
  //сколько слайдов за раз перелистнется
  responsive: [{
    breakpoint: 1330,
    //сообщает, при какой ширине экрана нужно включать настройки
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      // centerMode: true
      infinite: true
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      // centerMode: false
    }
  }]
});

$('.team-page__label').click(function () {
  var id = $(this).attr('data-tab'),
    content = $('.team-page__listing[data-tab="' + id + '"]');

  $('.team-page__label.active').removeClass('active');
  $(this).addClass('active');

  $('.team-page__listing.active').removeClass('active');
  content.addClass('active');
});

(function () {
  var menuPop = document.querySelector(".btx-menu");
  var btnToggle = document.querySelector(".btx-header__toggle");
  var menuClose = document.querySelector(".btx-menu__close");

  btnToggle.addEventListener("click", function (evt) {
    evt.preventDefault();
    menuPop.classList.remove("visually-hidden");
  });

  if (menuClose) {
    menuClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      menuPop.classList.add("visually-hidden");
    });
  };
})();


// $('.abonement__item').click(function () {
//   var id = $(this).attr('data-tab'),
//     content = $('.abonement__type[data-tab="' + id + '"]');

//   $('.abonement__item.active').removeClass('active');
//   $(this).addClass('active');

//   $('.abonement__type.active').removeClass('active');
//   content.addClass('active');
// });

// (function () {
//   window.addEventListener("DOMContentLoaded", function () {
//     function setCursorPosition(pos, elem) {
//       elem.focus();
//       if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
//       else if (elem.createTextRange) {
//         var range = elem.createTextRange();
//         range.collapse(true);
//         range.moveEnd("character", pos);
//         range.moveStart("character", pos);
//         range.select()
//       }
//     }

//     function template(event) {
//       var matrix = "+7 (___) ___ ____",
//         i = 0,
//         def = matrix.replace(/\D/g, ""),
//         val = this.value.replace(/\D/g, "");
//       if (def.length >= val.length) val = def;
//       this.value = matrix.replace(/./g, function (a) {
//         return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
//       });
//       if (event.type == "blur") {
//         if (this.value.length == 2) this.value = ""
//       } else setCursorPosition(this.value.length, this)
//     }

//     var phoneForm = document.querySelector(".feedback__phone");

//     phoneForm.addEventListener("input", template, false);
//     phoneForm.addEventListener("focus", template, false);
//     phoneForm.addEventListener("blur", template, false);
//   });
// })();
