'use strict';

document.addEventListener('DOMContentLoaded', function () {

  var $cells = getAll('.cell');

  $cells.forEach(function (el) {
    var parentWidth = el.parentElement.offsetWidth;
    var percentage = el.offsetWidth / parentWidth * 100;
    el.append('' + Math.round(percentage));
  });

  // Functions
  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }
});