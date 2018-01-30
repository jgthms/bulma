document.addEventListener('DOMContentLoaded', () => {

  const $cells = getAll('.cell');

  $cells.forEach(el => {
    const parentWidth = el.parentElement.offsetWidth;
    const percentage = el.offsetWidth / parentWidth * 100;
    el.append(`${Math.round(percentage)}`);
  });

  // Functions
  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }

});
