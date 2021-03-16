'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // Utils

  var tabs = getAll('.bd-tabs');

  if (tabs && tabs.length > 0) {
    tabs.forEach(function (tab) {
      var buttons = getAll('.bd-tabs-nav button', tab);
      var items = getAll('.bd-tabs-item', tab);

      buttons.forEach(function (button, index) {
        button.addEventListener('click', function (event) {
          showTab(buttons, items, index);
        });
      });
    });
  }

  function showTab(buttons, items, index) {
    buttons.forEach(function (button) {
      button.classList.remove('bd-is-active');
    });

    items.forEach(function (item) {
      item.classList.remove('bd-is-active');
    });

    buttons[index].classList.add('bd-is-active');
    items[index].classList.add('bd-is-active');
  }

  function getAll(selector) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    return Array.prototype.slice.call(parent.querySelectorAll(selector), 0);
  }
});