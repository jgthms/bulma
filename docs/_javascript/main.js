document.addEventListener('DOMContentLoaded', () => {

  // Dropdowns

  const $metalinks = getAll('#meta a');

  if ($metalinks.length > 0) {
    $metalinks.forEach($el => {
      $el.addEventListener('click', event => {
        event.preventDefault();
        const target = $el.getAttribute('href');
        const $target = document.getElementById(target.substring(1));
        $target.scrollIntoView(true);
        // window.history.replaceState(null, document.title, `${window.location.origin}${window.location.pathname}${target}`);
        return false;
      });
    });
  }

  // Dropdowns

  const $dropdowns = getAll('.dropdown:not(.is-hoverable)');

  if ($dropdowns.length > 0) {
    $dropdowns.forEach($el => {
      $el.addEventListener('click', event => {
        event.stopPropagation();
        $el.classList.toggle('is-active');
      });
    });

    document.addEventListener('click', event => {
      closeDropdowns();
    });
  }

  function closeDropdowns() {
    $dropdowns.forEach($el => {
      $el.classList.remove('is-active');
    });
  }

  // Toggles

  const $burgers = getAll('.burger');

  if ($burgers.length > 0) {
    $burgers.forEach($el => {
      $el.addEventListener('click', () => {
        const target = $el.dataset.target;
        const $target = document.getElementById(target);
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  // Modals

  const $html = document.documentElement;
  const $modals = getAll('.modal');
  const $modalButtons = getAll('.modal-button');
  const $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');

  if ($modalButtons.length > 0) {
    $modalButtons.forEach($el => {
      $el.addEventListener('click', () => {
        const target = $el.dataset.target;
        const $target = document.getElementById(target);
        $html.classList.add('is-clipped');
        $target.classList.add('is-active');
      });
    });
  }

  if ($modalCloses.length > 0) {
    $modalCloses.forEach($el => {
      $el.addEventListener('click', () => {
        closeModals();
      });
    });
  }

  document.addEventListener('keydown', event => {
    const e = event || window.event;
    if (e.keyCode === 27) {
      closeModals();
      closeDropdowns();
    }
  });

  function closeModals() {
    $html.classList.remove('is-clipped');
    $modals.forEach($el => {
      $el.classList.remove('is-active');
    });
  }

  // Clipboard

  const $highlights = getAll('.highlight');
  let itemsProcessed = 0;

  if ($highlights.length > 0) {
    $highlights.forEach($el => {
      const copyEl = '<button class="button is-small bd-copy">Copy</button>';
      const expandEl = '<button class="button is-small bd-expand">Expand</button>';
      $el.insertAdjacentHTML('beforeend', copyEl);

      const $parent = $el.parentNode;
      if ($parent && $parent.classList.contains('bd-is-more')) {
        const showEl = '<button class="bd-show"><div><span class="icon"><i class="fa fa-code"></i></span> <strong>Show code</strong></div></button>';
        $el.insertAdjacentHTML('beforeend', showEl);
      } else if ($el.firstElementChild.scrollHeight > 480 && $el.firstElementChild.clientHeight <= 480) {
        $el.insertAdjacentHTML('beforeend', expandEl);
      }

      itemsProcessed++;
      if (itemsProcessed === $highlights.length) {
        addHighlightControls();
      }
    });
  }

  function addHighlightControls() {
    const $highlightButtons = getAll('.highlight .bd-copy, .highlight .bd-expand');

    $highlightButtons.forEach($el => {
      $el.addEventListener('mouseenter', () => {
        $el.parentNode.classList.add('bd-is-hovering');
      });

      $el.addEventListener('mouseleave', () => {
        $el.parentNode.classList.remove('bd-is-hovering');
      });
    });

    const $highlightExpands = getAll('.highlight .bd-expand');

    $highlightExpands.forEach($el => {
      $el.addEventListener('click', () => {
        $el.parentNode.firstElementChild.style.maxHeight = 'none';
      });
    });

    const $highlightShows = getAll('.highlight .bd-show');

    $highlightShows.forEach($el => {
      $el.addEventListener('click', () => {
        $el.parentNode.parentNode.classList.remove('bd-is-more-clipped');
      });
    });
  }

  new Clipboard('.bd-copy', {
    target: function(trigger) {
      return trigger.previousSibling;
    }
  });

  // Functions

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }

  let latestKnownScrollY = 0;
  let ticking = false;

  function scrollUpdate() {
    ticking = false;
    // do stuff
  }


  function onScroll() {
    latestKnownScrollY = window.scrollY;
    scrollRequestTick();
  }

  function scrollRequestTick() {
    if(!ticking) {
      requestAnimationFrame(scrollUpdate);
    }
    ticking = true;
  }

   window.addEventListener('scroll', onScroll, false);

});
