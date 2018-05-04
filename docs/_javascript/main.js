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
        // closeCategories(el);
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

  let anchors_by_id = {};
  let anchors_order = [];
  let anchor_nav_els = [];

  if (anchors_el && anchor_links_el.length > 0) {
    anchors_el.classList.add('is-active');
    const anchors_el_list = anchors_el.querySelector('.bd-anchors-list');

    anchor_links_el.forEach((el, index) => {
      const link_target = el.getAttribute('href');
      const link_text = el.previousElementSibling.innerText;

      if (link_text != '') {
        const item_el = createAnchorLink(link_text, link_target);
        anchors_el_list.appendChild(item_el);

        const anchor_key = link_target.substring(1); // #target -> target
        anchors_by_id[anchor_key] = {
          id: anchor_key,
          index,
          target: link_target,
          text: link_text,
          nav_el: item_el,
        };
        anchors_order.push(anchor_key);
        anchor_nav_els.push(item_el);
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
  let horizon = NAVBAR_HEIGHT;
  let whereYouStoppedScrolling = 0;
  let scrollFactor = 0;
  let currentTranslate = 0;

  // Anchors highlight

  let past_anchors = [];
  anchor_links_el.reverse();
  const trigger_offset = 24 ; // In pixels
  const typo_el = document.getElementById('typo');

  function whenScrolling() {
    if (anchors_ref_el) {
      const bounds = anchors_ref_el.getBoundingClientRect();
      const anchors_height = anchors_el.clientHeight;
      const typo_bounds = typo_el.getBoundingClientRect();
      const typo_height = typo_el.clientHeight;

      if (bounds.top < 1 && typo_bounds.top - anchors_height + typo_height > 0) {
        anchors_el.classList.add('is-pinned');
      } else {
        anchors_el.classList.remove('is-pinned');
      }

      anchor_links_el.some(el => {
        const bounds = el.getBoundingClientRect();
        const href = el.getAttribute('href');
        const key = href.substring(1); // #target -> target

        if (bounds.top < 1 + trigger_offset && past_anchors.indexOf(key) == -1) {
          past_anchors.push(key);
          highlightAnchor();
          return;
        } else if (bounds.top > 0 + trigger_offset && past_anchors.indexOf(key) != -1) {
          removeFromArray(past_anchors, key);
          highlightAnchor();
          return;
        }
      });
    }
  }

  function highlightAnchor() {
    const future_anchors = anchors_order.diff(past_anchors);
    let highest_index = -1;
    let highest_anchor_key = '';

    if (past_anchors.length > 0) {
      past_anchors.forEach((key, index) => {
        const anchor = anchors_by_id[key];
        anchor.nav_el.className = 'is-past';

        // Keep track of the bottom most item
        if (anchor.index > highest_index) {
          highest_index = anchor.index;
          highest_anchor_key = key;
        }
      });

      if (highest_anchor_key in anchors_by_id) {
        anchors_by_id[highest_anchor_key].nav_el.className = 'is-current';
      }
    }

    if (future_anchors.length > 0) {
      future_anchors.forEach((key, index) => {
        const anchor = anchors_by_id[key];
        anchor.nav_el.className = '';
      });
    }
  }

  // Scroll

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
        whenScrolling();
        ticking = false;
        lastY = currentY;
      });
    }

    ticking = true;
  });

  // Utils

  function removeFromArray(array, value) {
    if (array.includes(value)) {
      const value_index = array.indexOf(value);
      array.splice(value_index, 1);
    }

    return array;
  }

  Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
  };

});
