'use strict';

document.addEventListener('DOMContentLoaded', function () {

  // Navbar burger menu

  var $navBurger = document.getElementById('navBurger');
  var $navMenu = document.getElementById('navMenu');

  if ($navBurger) {
    $navBurger.addEventListener('click', function () {
      $navBurger.classList.toggle('is-active');
      $navMenu.classList.toggle('is-active');
    });
  }

  // Modals

  var $html = document.documentElement;
  var $modals = Array.prototype.slice.call(document.querySelectorAll('.modal'), 0);
  var $modalButtons = Array.prototype.slice.call(document.querySelectorAll('.modal-button'), 0);
  var $modalCloses = Array.prototype.slice.call(document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button'), 0);

  if ($modalButtons.length > 0) {
    $modalButtons.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        console.log('target', target);
        var $target = document.getElementById(target);
        $html.classList.add('is-clipped');
        $target.classList.add('is-active');
      });
    });
  }

  if ($modalCloses.length > 0) {
    $modalCloses.forEach(function ($el) {
      $el.addEventListener('click', function () {
        $html.classList.remove('is-clipped');
        closeModals();
      });
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
      $html.classList.remove('is-clipped');
      closeModals();
    }
  });

  function closeModals() {
    $modals.forEach(function ($el) {
      $el.classList.remove('is-active');
    });
  }
});