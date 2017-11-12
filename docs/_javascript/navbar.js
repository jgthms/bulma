document.addEventListener('DOMContentLoaded', () => {

  const rootEl = document.documentElement;
  const navbarTopEl = document.getElementById('navbar');
  const navbarBottomEl = document.getElementById('navbarBottom');
  const fixBottomEl = document.getElementById('navbarFixBottom');
  const fixBottomElIcon = fixBottomEl.querySelector('.fa');
  let fixedBottom = false;

  fixBottomEl.addEventListener('click', event => {
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
