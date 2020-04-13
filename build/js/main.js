// 'use strict';
$('.btx-stuff__slider').slick({
  prevArrow: $(".btx-stuff__prev"),
  nextArrow: $(".btx-stuff__next"),
  infinite: true,
  speed: 350,
  // определяем скорость перелистывания
  slidesToShow: 4,
  //количество слайдов для показа
  slidesToScroll: 2,
  //сколько слайдов за раз перелистнется
  responsive: [{
    breakpoint: 1199,
    //сообщает, при какой ширине экрана нужно включать настройки
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      // centerMode: true
      // infinite: true
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