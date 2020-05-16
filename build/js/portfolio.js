// 'use strict';
$('.slider-portfolio').slick({
  prevArrow: false,
  nextArrow: false,
  dots: false,
  infinite: true,
  speed: 350,
  focusOnSelect: true,
  variableWidth: true,
  // определяем скорость перелистывания
  slidesToShow: 5,
  //количество слайдов для показа
  slidesToScroll: 1,
  //сколько слайдов за раз перелистнется
  responsive: [{
    breakpoint: 1204,
    //сообщает, при какой ширине экрана нужно включать настройки
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
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

$('.slider-portfolio-inner').slick({
  prevArrow: $(".slider-portfolio-inner__prev"),
  nextArrow: $(".slider-portfolio-inner__next"),
  dots: false,
  infinite: true,
  speed: 350,
  focusOnSelect: true,
  // variableWidth: true,
  centerMode: true,
  centerPadding: '40px',
  // определяем скорость перелистывания
  slidesToShow: 5,
  //количество слайдов для показа
  slidesToScroll: 1,
  //сколько слайдов за раз перелистнется
  responsive: [{
    breakpoint: 1204,
    //сообщает, при какой ширине экрана нужно включать настройки
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
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

// клик по label - показывает набор более детальных фильтров
// и набор карточек из первого набора .portfolio__space
$('.portfolio__label').click(function () {
  var id = $(this).attr('data-tab'),
    content = $('.portfolio__listing[data-tab="' + id + '"]');

  $('.portfolio__label.active').removeClass('active');
  $(this).addClass('active');

  $('.portfolio__listing.active').removeClass('active');
  content.addClass('active');

  $('.portfolio__sublabel.active').removeClass('active');
  $(this).addClass('active');

  $('.portfolio__space.active').removeClass('active');
  $('.portfolio__space[data-tab="5"]').addClass('active');
  $('.portfolio__space[data-tab="10"]').addClass('active');
  $('.portfolio__space[data-tab="20"]').addClass('active');
  $('.portfolio__space[data-tab="27"]').addClass('active');
});

// клик по sublabel - показывает набор карточек .portfolio__space, связанных с последним детальным фильтром
var clickSublabel = function () {
  $('.portfolio__sublabel').click(function () {
    var id = $(this).attr('data-tab'),
      content = $('.portfolio__space[data-tab="' + id + '"]');

    $('.portfolio__sublabel.active').removeClass('active');
    $(this).addClass('active');

    $('.portfolio__space.active').removeClass('active');
    content.addClass('active');
  });
};

// перезагрузка и отображение детального фильтра "По годам"
$('.portfolio__label--refresh').click(function () {

  $('.slider-portfolio-inner').slick('refresh');

  clickSublabel();
});

// отображение детальных фильтров
// --------
clickSublabel();
// ----------
(function () {
  window.addEventListener("DOMContentLoaded", function () {
    function setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
      else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
      }
    }

    function template(event) {
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
      if (def.length >= val.length) val = def;
      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
      if (event.type == "blur") {
        if (this.value.length == 2) this.value = ""
      } else setCursorPosition(this.value.length, this)
    }

    var phoneForm = document.querySelector(".feedback__phone");

    if (phoneForm) {
      phoneForm.addEventListener("input", template, false);
      phoneForm.addEventListener("focus", template, false);
      phoneForm.addEventListener("blur", template, false);
    }
  });
})();
