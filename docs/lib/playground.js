"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var $grid = document.getElementById("grid");
  var $columns = document.querySelectorAll(".jsColumns");

  $columns.forEach(function ($) {
    return $.addEventListener("input", function (event) {
      var count = event.target.valueAsNumber;
      var suffix = event.target.dataset.suffix;
      console.log("Column count", count);
      $grid.className = "grid has-" + count + "-cols" + suffix;
      var $columnsCount = getAll("strong", $.parentNode);
      $columnsCount.innerHTML = count;
    }, false);
  });

  function getAll(selector) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    return Array.prototype.slice.call(parent.querySelectorAll(selector), 0);
  }
});