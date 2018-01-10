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
      fixBottomElIcon.className = 'far fa-check-square';
      rootEl.classList.add('has-navbar-fixed-bottom');
      navbarBottomEl.classList.remove('is-hidden');
    } else {
      fixBottomEl.className = 'button is-link';
      fixBottomElIcon.className = 'far fa-square';
      rootEl.classList.remove('has-navbar-fixed-bottom');
      navbarBottomEl.classList.add('is-hidden');
    }
  });

});
