'use strict';

document.addEventListener('DOMContentLoaded', function () {

  var rootEl = document.documentElement;
  var navbarTopEl = document.getElementById('navbar');
  var navbarBottomEl = document.getElementById('navbarBottom');
  var fixTopEl = document.getElementById('navbarFixTop');
  var fixTopElIcon = fixTopEl.querySelector('.fa');
  var fixBottomEl = document.getElementById('navbarFixBottom');
  var fixBottomElIcon = fixBottomEl.querySelector('.fa');
  var fixedTop = false;
  var fixedBottom = false;

  fixTopEl.addEventListener('click', function (event) {
    fixedTop = !fixedTop;

    if (fixedTop) {
      fixTopEl.className = 'button is-success';
      fixTopElIcon.className = 'fa fa-check-square-o';
      rootEl.classList.add('has-navbar-fixed-top');
      navbarTopEl.classList.add('is-fixed-top', 'has-shadow');
    } else {
      fixTopEl.className = 'button is-link';
      fixTopElIcon.className = 'fa fa-square-o';
      rootEl.classList.remove('has-navbar-fixed-top');
      navbarTopEl.classList.remove('is-fixed-top', 'has-shadow');
    }
  });

  fixBottomEl.addEventListener('click', function (event) {
    fixedBottom = !fixedBottom;

    if (fixedBottom) {
      fixBottomEl.className = 'button is-success';
      fixBottomElIcon.className = 'fa fa-check-square-o';
      rootEl.classList.add('has-navbar-fixed-bottom');
      navbarBottomEl.classList.remove('is-hidden');
    } else {
      fixBottomEl.className = 'button is-link';
      fixBottomElIcon.className = 'fa fa-square-o';
      rootEl.classList.remove('has-navbar-fixed-bottom');
      navbarBottomEl.classList.add('is-hidden');
    }
  });
});