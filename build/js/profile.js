// 'use strict';
$('.profile-page__vert-slide').click(function () {

  $('.profile-modal').removeClass('visually-hidden');

  $('.modal-overlay').removeClass('visually-hidden');

  $('.btx-body').addClass('btx-body__scroll');
});

(function () {
  var profileForm = document.querySelector(".profile-modal");
  var profileClose = document.querySelector(".profile-modal__close");
  var scrollRmv = document.querySelector(".btx-body");
  var modalOverlay = document.querySelector(".modal-overlay");
  var btnClose = document.querySelector(".button__profile-modal--close");

  if (profileClose) {
    profileClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      profileForm.classList.add("visually-hidden");
      scrollRmv.classList.remove("btx-body__scroll");
      modalOverlay.classList.add("visually-hidden");
    })
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", function (evt) {
      evt.preventDefault();
      profileForm.classList.add("visually-hidden");
      scrollRmv.classList.remove("btx-body__scroll");
      modalOverlay.classList.add("visually-hidden");
    })
  }

  if (btnClose) {
    btnClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      profileForm.classList.add("visually-hidden");
      scrollRmv.classList.remove("btx-body__scroll");
      modalOverlay.classList.add("visually-hidden");
    })
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (profileForm) {
        profileForm.classList.add("visually-hidden");
        scrollRmv.classList.remove("btx-body__scroll");
        modalOverlay.classList.add("visually-hidden");
      }
    }
  })
})();
