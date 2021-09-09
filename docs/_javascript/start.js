document.addEventListener('DOMContentLoaded', () => {
  // Utils

  const tabs = getAll('.bd-tabs');

  if (tabs && tabs.length > 0) {
    tabs.forEach((tab) => {
      const buttons = getAll('.bd-tabs-nav button', tab);
      const items = getAll('.bd-tabs-item', tab);

      buttons.forEach((button, index) => {
        button.addEventListener('click', (event) => {
          showTab(buttons, items, index);
        });
      });
    });
  }

  function showTab(buttons, items, index) {
    buttons.forEach((button) => {
      button.classList.remove('bd-is-active');
    });

    items.forEach((item) => {
      item.classList.remove('bd-is-active');
    });

    buttons[index].classList.add('bd-is-active');
    items[index].classList.add('bd-is-active');
  }

  function getAll(selector, parent = document) {
    return Array.prototype.slice.call(parent.querySelectorAll(selector), 0);
  }
});
