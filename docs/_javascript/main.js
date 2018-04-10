document.addEventListener('DOMContentLoaded', () => {

  // Cookies

  const cookieBookModalName = 'bulma_closed_book_modal';
  const cookieBookModal = Cookies.getJSON(cookieBookModalName) || false;

  // Sidebar links

  const $categories = getAll('#categories .bd-category');

  if ($categories.length > 0) {
    $categories.forEach(el => {
      const toggle_el = el.querySelector('.bd-category-toggle');

      toggle_el.addEventListener('click', event => {
        closeCategories(el);
        el.classList.toggle('is-active');
      });
    });
  }

  function closeCategories(current_el) {
    $categories.forEach(el => {
      if (current_el == el) {
        return;
      }
      el.classList.remove('is-active');
    });
  }

  const anchors_ref_el = document.getElementById('anchorsReference');
  const anchors_el = document.getElementById('anchors');
  const anchor_links_el = getAll('.bd-anchor-link');

  if (anchors_el && anchor_links_el.length > 0) {
    const anchors_el_list = anchors_el.querySelector('.bd-anchors-list');

    anchor_links_el.forEach(el => {
      const link_target = el.getAttribute('href');
      const link_text = el.previousElementSibling.innerText;

      if (link_text != '') {
        const item_el = createAnchorLink(link_text, link_target);
        anchors_el_list.appendChild(item_el);
      }
    });

    const back_to_top_el = createAnchorLink('Back to top', '');
    back_to_top_el.onclick = scrollToTop;
    anchors_el_list.appendChild(back_to_top_el);
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function createAnchorLink(text, target) {
    const item_el = document.createElement('li');
    const link_el = document.createElement('a');
    const text_node = document.createTextNode(text);

    if (target) {
      link_el.setAttribute('href', target);
    }

    link_el.appendChild(text_node);
    item_el.appendChild(link_el);

    return item_el;
  }

  function closeCategories(current_el) {
    $categories.forEach(el => {
      if (current_el == el) {
        return;
      }
      el.classList.remove('is-active');
    });
  }

  // Meta links

  const $metalinks = getAll('#meta a');

  if ($metalinks.length > 0) {
    $metalinks.forEach($el => {
      $el.addEventListener('click', event => {
        event.preventDefault();
        const target = $el.getAttribute('href');
        const $target = document.getElementById(target.substring(1));
        $target.scrollIntoView(true);
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

  const rootEl = document.documentElement;
  const $modals = getAll('.modal');
  const $modalButtons = getAll('.modal-button');
  const $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');

  if ($modalButtons.length > 0) {
    $modalButtons.forEach($el => {
      $el.addEventListener('click', () => {
        const target = $el.dataset.target;
        openModal(target);
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

  function openModal(target) {
    const $target = document.getElementById(target);
    rootEl.classList.add('is-clipped');
    $target.classList.add('is-active');
  }

  function closeModals() {
    rootEl.classList.remove('is-clipped');
    $modals.forEach($el => {
      $el.classList.remove('is-active');
    });
  }

  document.addEventListener('keydown', event => {
    const e = event || window.event;
    if (e.keyCode === 27) {
      closeModals();
      closeDropdowns();
    }
  });

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
        const showEl = '<button class="bd-show"><div><span class="icon"><i class="fas fa-code"></i></span> <strong>Show code</strong></div></button>';
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

  setTimeout(() => {
    new Clipboard('.bd-copy', {
      target: trigger => {
        return trigger.previousElementSibling.firstElementChild;
      }
    });
  }, 100);

  // Functions

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }

  // Scrolling

  const html_el = document.documentElement;
  const navbarEl = document.getElementById('navbar');
  const navbarBurger = document.getElementById('navbarBurger');
  const specialShadow = document.getElementById('specialShadow');
  const NAVBAR_HEIGHT = 52;
  const THRESHOLD = 160;
  let navbarOpen = false;
  let horizon = NAVBAR_HEIGHT;
  let whereYouStoppedScrolling = 0;
  let scrollFactor = 0;
  let currentTranslate = 0;

  navbarBurger.addEventListener('click', el => {
    navbarOpen = !navbarOpen;

    if (navbarOpen) {
      rootEl.classList.add('bd-is-clipped-touch');
    } else {
      rootEl.classList.remove('bd-is-clipped-touch');
    }
  });

  function whenScrolling(lastY, currentY) {
    if (anchors_ref_el) {
      const bounds = anchors_ref_el.getBoundingClientRect();

      if (bounds.top < 1) {
        anchors_el.classList.add('is-pinned');
      } else {
        anchors_el.classList.remove('is-pinned');
      }
    }
  }

  function upOrDown(lastY, currentY) {
    if (currentY >= lastY) {
      return goingDown(currentY);
    }
    return goingUp(currentY);
  }

  function goingDown(currentY) {
    const trigger = NAVBAR_HEIGHT;
    whereYouStoppedScrolling = currentY;

    if (currentY > horizon) {
      horizon = currentY;
    }

    translateHeader(currentY, false);
  }

  function goingUp(currentY) {
    const trigger = 0;

    if (currentY < (whereYouStoppedScrolling - NAVBAR_HEIGHT)) {
      horizon = currentY + NAVBAR_HEIGHT;
    }

    translateHeader(currentY, true);
  }

  function constrainDelta(delta) {
    return Math.max(0, Math.min(delta, NAVBAR_HEIGHT));
  }

  function translateHeader(currentY, upwards) {
    // let topTranslateValue;
    let translateValue;

    if (upwards && currentTranslate == 0) {
      translateValue = 0;
    } else if (currentY <= NAVBAR_HEIGHT) {
      translateValue = currentY * -1;
    } else {
      const delta = constrainDelta(Math.abs(currentY - horizon));
      translateValue = delta - NAVBAR_HEIGHT;
    }

    if (translateValue != currentTranslate) {
      const navbarStyle = `
        transform: translateY(${translateValue}px);
      `;
      currentTranslate = translateValue;
      navbarEl.setAttribute('style', navbarStyle);
    }

    if (currentY > THRESHOLD * 2) {
      scrollFactor = 1;
    } else if (currentY > THRESHOLD) {
      scrollFactor = (currentY - THRESHOLD) / THRESHOLD;
    } else {
      scrollFactor = 0;
    }

    const translateFactor = 1 + translateValue / NAVBAR_HEIGHT;

    if (specialShadow) {
      specialShadow.style.opacity = scrollFactor;
      specialShadow.style.transform = 'scaleY(' + translateFactor + ')';
    }
  }

  let ticking = false;
  let lastY = 0;

  window.addEventListener('scroll', function() {
    const currentY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        // upOrDown(lastY, currentY);
        whenScrolling(lastY, currentY);
        ticking = false;
        lastY = currentY;
      });
    }

    ticking = true;
  });

});
