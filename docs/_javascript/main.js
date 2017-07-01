document.addEventListener('DOMContentLoaded', () => {

  // Navbar burger menu

  const $navBurger = document.getElementById('navBurger');
  const $navMenu = document.getElementById('navMenu');

  if ($navBurger) {
    $navBurger.addEventListener('click', () => {
      $navBurger.classList.toggle('is-active');
      $navMenu.classList.toggle('is-active');
    });
  }

  // Modals

  const $html = document.documentElement;
  const $modals = Array.prototype.slice.call(document.querySelectorAll('.modal'), 0);
  const $modalButtons = Array.prototype.slice.call(document.querySelectorAll('.modal-button'), 0);
  const $modalCloses = Array.prototype.slice.call(document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button'), 0);

  if ($modalButtons.length > 0) {
    $modalButtons.forEach($el => {
      $el.addEventListener('click', () => {
        const target = $el.dataset.target;
        console.log('target', target);
        const $target = document.getElementById(target);
        $html.classList.add('is-clipped');
        $target.classList.add('is-active');
      });
    });
  }

  if ($modalCloses.length > 0) {
    $modalCloses.forEach($el => {
      $el.addEventListener('click', () => {
        $html.classList.remove('is-clipped');
        closeModals();
      });
    });
  }

  document.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      $html.classList.remove('is-clipped');
      closeModals();
    }
  });

  function closeModals() {
    $modals.forEach($el => {
      $el.classList.remove('is-active');
    });
  }

});
