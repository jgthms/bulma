'use strict';

document.addEventListener('DOMContentLoaded', function () {

  var $klmnColumns = Array.prototype.slice.call(document.querySelectorAll('.bd-klmn-columns'), 0);
  var $klmnGaps = Array.prototype.slice.call(document.querySelectorAll('.bd-klmn-gap'), 0);
  var $klmnValue = document.getElementById('klmnValue');

  $klmnGaps.forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      var index = el.dataset.value;
      selectGap(index);
    });
  });

  function resetGaps() {
    $klmnGaps.forEach(function (el) {
      el.classList.remove('bd-is-selected');
    });
  }

  function setColumns(n) {
    $klmnColumns.forEach(function (el) {
      el.className = 'columns is-variable bd-klmn-columns is-' + n;
    });
  }

  function setValue(n) {
    var rem = n * 0.25 + 'rem';
    $klmnValue.innerHTML = rem;
  }

  function selectGap(n) {
    resetGaps();
    $klmnGaps[n].classList.add('bd-is-selected');
    setColumns(n);
    setValue(n);
  }

  selectGap(3);
});