document.addEventListener('DOMContentLoaded', () => {

  const $navBurger = document.getElementById('navBurger');
  const $navMenu = document.getElementById('navMenu');

  if ($navBurger) {
    $navBurger.addEventListener('click', () => {
      $navBurger.classList.toggle('is-active');
      $navMenu.classList.toggle('is-active');
    });
  }

});
