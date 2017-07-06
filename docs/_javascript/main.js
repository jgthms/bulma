document.addEventListener('DOMContentLoaded', () => {

  // Toggles

  const $burgers = getAll('.burger');
  const $fries = getAll('.fries');

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

  // Clipboard

  const $highlights = getAll('.highlight');
  let itemsProcessed = 0;

  if ($highlights.length > 0) {
    $highlights.forEach($el => {
      const copy = '<button class="copy">Copy</button>';
      const expand = '<button class="expand">Expand</button>';
      $el.insertAdjacentHTML('beforeend', copy);

      if ($el.firstElementChild.scrollHeight > 320) {
        $el.insertAdjacentHTML('beforeend', expand);
      }

      itemsProcessed++;
      if (itemsProcessed === $highlights.length) {
        addHighlightControls();
      }
    });
  }

  function addHighlightControls() {
    const $highlightButtons = getAll('.highlight .copy, .highlight .expand');

    $highlightButtons.forEach($el => {
      $el.addEventListener('mouseenter', () => {
        $el.parentNode.style.boxShadow = '0 0 0 1px #ed6c63';
      });

      $el.addEventListener('mouseleave', () => {
        $el.parentNode.style.boxShadow = 'none';
      });
    });

    const $highlightExpands = getAll('.highlight .expand');

    $highlightExpands.forEach($el => {
      $el.addEventListener('click', () => {
        $el.parentNode.firstElementChild.style.maxHeight = 'none';
      });
    });
  }

  new Clipboard('.copy', {
    target: function(trigger) {
      return trigger.previousSibling;
    }
  });

  // Functions

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }

});
