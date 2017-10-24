document.addEventListener('DOMContentLoaded', () => {

  const rootEl = document.documentElement;
  const navbarTopEl = document.getElementById('navbar');
  const navbarBottomEl = document.getElementById('navbarBottom');
  const fixTopEl = document.getElementById('navbarFixTop');
  const fixTopElIcon = fixTopEl.querySelector('.fa');
  const fixBottomEl = document.getElementById('navbarFixBottom');
  const fixBottomElIcon = fixBottomEl.querySelector('.fa');
  let fixedTop = false;
  let fixedBottom = false;

  fixTopEl.addEventListener('click', event => {
    fixedTop = !fixedTop;

    if (fixedTop) {
      fixTopEl.className = 'button is-success';
      fixTopElIcon.className = 'fa fa-check-square-o';
      rootEl.classList.add('has-navbar-fixed-top');
      navbarTopEl.classList.add('is-fixed-top', 'has-shadow');
    } else {
      fixTopEl.className = 'button is-link';
      fixTopElIcon.className = 'fa fa-square-o';
      rootEl.classList.remove('has-navbar-fixed-top');
      navbarTopEl.classList.remove('is-fixed-top', 'has-shadow');
    }
  });

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
