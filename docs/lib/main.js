'use strict';

document.addEventListener('DOMContentLoaded', function () {

  // Dropdowns

  var $metalinks = getAll('#meta a');

  if ($metalinks.length > 0) {
    $metalinks.forEach(function ($el) {
      $el.addEventListener('click', function (event) {
        event.preventDefault();
        var target = $el.getAttribute('href');
        var $target = document.getElementById(target.substring(1));
        $target.scrollIntoView(true);
        // window.history.replaceState(null, document.title, `${window.location.origin}${window.location.pathname}${target}`);
        return false;
      });
    });
  }

  // Dropdowns

  var $dropdowns = getAll('.dropdown:not(.is-hoverable)');

  if ($dropdowns.length > 0) {
    $dropdowns.forEach(function ($el) {
      $el.addEventListener('click', function (event) {
        event.stopPropagation();
        $el.classList.toggle('is-active');
      });
    });

    document.addEventListener('click', function (event) {
      closeDropdowns();
    });
  }

  function closeDropdowns() {
    $dropdowns.forEach(function ($el) {
      $el.classList.remove('is-active');
    });
  }

  // Toggles

  var $burgers = getAll('.burger');

  if ($burgers.length > 0) {
    $burgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  // Modals

  var rootEl = document.documentElement;
  var $modals = getAll('.modal');
  var $modalButtons = getAll('.modal-button');
  var $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');

  if ($modalButtons.length > 0) {
    $modalButtons.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        rootEl.classList.add('is-clipped');
        $target.classList.add('is-active');
      });
    });
  }

  if ($modalCloses.length > 0) {
    $modalCloses.forEach(function ($el) {
      $el.addEventListener('click', function () {
        closeModals();
      });
    });
  }

  document.addEventListener('keydown', function (event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
      closeModals();
      closeDropdowns();
    }
  });

  function closeModals() {
    rootEl.classList.remove('is-clipped');
    $modals.forEach(function ($el) {
      $el.classList.remove('is-active');
    });
  }

  // Clipboard

  var $highlights = getAll('.highlight');
  var itemsProcessed = 0;

  if ($highlights.length > 0) {
    $highlights.forEach(function ($el) {
      var copyEl = '<button class="button is-small bd-copy">Copy</button>';
      var expandEl = '<button class="button is-small bd-expand">Expand</button>';
      $el.insertAdjacentHTML('beforeend', copyEl);

      var $parent = $el.parentNode;
      if ($parent && $parent.classList.contains('bd-is-more')) {
        var showEl = '<button class="bd-show"><div><span class="icon"><i class="fa fa-code"></i></span> <strong>Show code</strong></div></button>';
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
    var $highlightButtons = getAll('.highlight .bd-copy, .highlight .bd-expand');

    $highlightButtons.forEach(function ($el) {
      $el.addEventListener('mouseenter', function () {
        $el.parentNode.classList.add('bd-is-hovering');
      });

      $el.addEventListener('mouseleave', function () {
        $el.parentNode.classList.remove('bd-is-hovering');
      });
    });

    var $highlightExpands = getAll('.highlight .bd-expand');

    $highlightExpands.forEach(function ($el) {
      $el.addEventListener('click', function () {
        $el.parentNode.firstElementChild.style.maxHeight = 'none';
      });
    });

    var $highlightShows = getAll('.highlight .bd-show');

    $highlightShows.forEach(function ($el) {
      $el.addEventListener('click', function () {
        $el.parentNode.parentNode.classList.remove('bd-is-more-clipped');
      });
    });
  }

  new Clipboard('.bd-copy', {
    target: function target(trigger) {
      return trigger.previousSibling;
    }
  });

  // Functions

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }

  // Scrolling

  var navbarEl = document.getElementById('navbar');
  var navbarBurger = document.getElementById('navbarBurger');
  var specialShadow = document.getElementById('specialShadow');
  var NAVBAR_HEIGHT = 52;
  var THRESHOLD = 160;
  var navbarOpen = false;
  var horizon = NAVBAR_HEIGHT;
  var whereYouStoppedScrolling = 0;
  var scrollFactor = 0;
  var currentTranslate = 0;

  navbarBurger.addEventListener('click', function (el) {
    navbarOpen = !navbarOpen;

    if (navbarOpen) {
      rootEl.classList.add('bd-is-clipped-touch');
    } else {
      rootEl.classList.remove('bd-is-clipped-touch');
    }
  });

  function upOrDown(lastY, currentY) {
    if (currentY >= lastY) {
      return goingDown(currentY);
    }
    return goingUp(currentY);
  }

  function goingDown(currentY) {
    var trigger = NAVBAR_HEIGHT;
    whereYouStoppedScrolling = currentY;

    if (currentY > horizon) {
      horizon = currentY;
    }

    translateHeader(currentY, false);
  }

  function goingUp(currentY) {
    var trigger = 0;

    if (currentY < whereYouStoppedScrolling - NAVBAR_HEIGHT) {
      horizon = currentY + NAVBAR_HEIGHT;
    }

    translateHeader(currentY, true);
  }

  function constrainDelta(delta) {
    return Math.max(0, Math.min(delta, NAVBAR_HEIGHT));
  }

  function translateHeader(currentY, upwards) {
    // let topTranslateValue;
    var translateValue = void 0;

    if (upwards && currentTranslate == 0) {
      translateValue = 0;
    } else if (currentY <= NAVBAR_HEIGHT) {
      translateValue = currentY * -1;
    } else {
      var delta = constrainDelta(Math.abs(currentY - horizon));
      translateValue = delta - NAVBAR_HEIGHT;
    }

    if (translateValue != currentTranslate) {
      var navbarStyle = '\n        transform: translateY(' + translateValue + 'px);\n      ';
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

    var translateFactor = 1 + translateValue / NAVBAR_HEIGHT;
    specialShadow.style.opacity = scrollFactor;
    specialShadow.style.transform = 'scaleY(' + translateFactor + ')';
  }

  translateHeader(window.scrollY, false);

  var ticking = false;
  var lastY = 0;

  window.addEventListener('scroll', function () {
    var currentY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        upOrDown(lastY, currentY);
        ticking = false;
        lastY = currentY;
      });
    }

    ticking = true;
  });
});