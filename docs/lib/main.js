"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Search

  var setSearchToggle = function setSearchToggle() {
    var icon = document.getElementById("searchIcon");
    var search = document.getElementById("search");
    var input = document.getElementById("algoliaSearch");

    if (!icon) {
      return;
    }

    icon.addEventListener("click", function (event) {
      search.classList.toggle("bd-is-visible");

      if (search.classList.contains("bd-is-visible")) {
        algoliaSearch.focus();
      }
    });

    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        return search.classList.remove("bd-is-visible");
      }
    });
  };

  setSearchToggle();

  // Navbar

  var setNavbarVisibility = function setNavbarVisibility() {
    var navbar = document.getElementById("navbar");

    if (!navbar) {
      return;
    }

    var cs = getComputedStyle(navbar);
    var paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
    var brand = navbar.querySelector(".navbar-brand");
    var end = navbar.querySelector(".navbar-end");
    var search = navbar.querySelector(".bd-search");
    var original = document.getElementById("navbarStartOriginal");
    var clone = document.getElementById("navbarStartClone");

    var rest = navbar.clientWidth - paddingX - brand.clientWidth - end.clientWidth - search.clientWidth;

    var space = original.clientWidth;
    var all = document.querySelectorAll("#navbarStartClone > .bd-navbar-item");
    var base = document.querySelectorAll("#navbarStartClone > .bd-navbar-item-base");
    var more = document.querySelectorAll("#navbarStartOriginal > .bd-navbar-item-more");
    var dropdown = document.querySelectorAll("#navbarStartOriginal .bd-navbar-dropdown > .navbar-item");

    var count = 0;
    var totalWidth = 0;

    var showMore = function showMore() {};

    var hideMore = function hideMore() {};

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = all[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        totalWidth += item.offsetWidth;

        if (totalWidth > rest) {
          break;
        }

        count++;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var howManyMore = Math.max(0, count - base.length);

    if (howManyMore > 0) {
      for (var i = 0; i < howManyMore; i++) {
        more[i].classList.add("bd-is-visible");
        dropdown[i].classList.add("bd-is-hidden");
      }
    }

    for (var j = howManyMore; j < more.length; j++) {
      more[j].classList.remove("bd-is-visible");
    }

    for (var k = howManyMore; k < dropdown.length; k++) {
      dropdown[k].classList.remove("bd-is-hidden");
    }
  };

  setNavbarVisibility();

  // Cookies

  var cookieBookModalName = "bulma_closed_book_modal";
  var cookieBookModal = Cookies.getJSON(cookieBookModalName) || false;

  // Dropdowns

  var $dropdowns = getAll(".dropdown:not(.is-hoverable)");

  if ($dropdowns.length > 0) {
    $dropdowns.forEach(function ($el) {
      $el.addEventListener("click", function (event) {
        event.stopPropagation();
        $el.classList.toggle("is-active");
      });
    });

    document.addEventListener("click", function (event) {
      closeDropdowns();
    });
  }

  function closeDropdowns() {
    $dropdowns.forEach(function ($el) {
      $el.classList.remove("is-active");
    });
  }

  // Toggles

  var $burgers = getAll(".navbar-burger");

  if ($burgers.length > 0) {
    $burgers.forEach(function ($el) {
      if (!$el.dataset.target) {
        return;
      }

      $el.addEventListener("click", function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }

  // Modals

  var rootEl = document.documentElement;
  var $modals = getAll(".modal");
  var $modalButtons = getAll(".modal-button");
  var $modalCloses = getAll(".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button");

  if ($modalButtons.length > 0) {
    $modalButtons.forEach(function ($el) {
      $el.addEventListener("click", function () {
        var target = $el.dataset.target;
        openModal(target);
      });
    });
  }

  if ($modalCloses.length > 0) {
    $modalCloses.forEach(function ($el) {
      $el.addEventListener("click", function () {
        closeModals();
      });
    });
  }

  function openModal(target) {
    var $target = document.getElementById(target);
    rootEl.classList.add("is-clipped");
    $target.classList.add("is-active");
  }

  function closeModals() {
    rootEl.classList.remove("is-clipped");
    $modals.forEach(function ($el) {
      $el.classList.remove("is-active");
    });
  }

  document.addEventListener("keydown", function (event) {
    var e = event || window.event;

    if (e.keyCode === 27) {
      closeModals();
      closeDropdowns();
    }
  });

  // Clipboard

  var $highlights = getAll(".highlight");
  var itemsProcessed = 0;

  if ($highlights.length > 0) {
    $highlights.forEach(function ($el) {
      var copyEl = '<button class="button bd-copy">Copy</button>';
      var expandEl = '<button class="button is-small bd-expand">Expand</button>';
      $el.insertAdjacentHTML("beforeend", copyEl);

      var $parent = $el.parentNode;

      if ($parent && $parent.classList.contains("bd-is-more")) {
        var showEl = '<button class="button is-small bd-show"><span class="icon"><i class="fas fa-code"></i></span><strong>Show code</strong></button>';
        $parent.insertAdjacentHTML("afterbegin", showEl);
      } else if ($el.firstElementChild.scrollHeight > 480 && $el.firstElementChild.clientHeight <= 480) {
        $el.insertAdjacentHTML("beforeend", expandEl);
      }

      itemsProcessed++;

      if (itemsProcessed === $highlights.length) {
        addHighlightControls();
      }
    });
  }

  function addHighlightControls() {
    var $highlightButtons = getAll(".highlight .bd-copy, .highlight .bd-expand");

    $highlightButtons.forEach(function ($el) {
      $el.addEventListener("mouseenter", function () {
        $el.parentNode.classList.add("bd-is-hovering");
        $el.parentNode.parentNode.classList.add("bd-is-hovering");
      });

      $el.addEventListener("mouseleave", function () {
        $el.parentNode.classList.remove("bd-is-hovering");
        $el.parentNode.parentNode.classList.remove("bd-is-hovering");
      });
    });

    var $highlightExpands = getAll(".bd-snippet .bd-expand");

    $highlightExpands.forEach(function ($el) {
      $el.addEventListener("click", function () {
        $el.parentNode.firstElementChild.style.maxHeight = "none";
      });
    });

    var $highlightShows = getAll(".bd-snippet .bd-show");

    $highlightShows.forEach(function ($el) {
      $el.addEventListener("click", function () {
        var text = $el.querySelector("strong").textContent;
        var newText = text === "Show code" ? "Hide code" : "Show code";
        $el.querySelector("strong").textContent = newText;
        $el.parentNode.classList.toggle("bd-is-more-clipped");
      });
    });
  }

  setTimeout(function () {
    new Clipboard(".bd-copy", {
      target: function target(trigger) {
        return trigger.previousElementSibling.firstElementChild;
      }
    });

    new Clipboard(".bd-clipboard");
  }, 100);

  // Events

  var resizeTimer = void 0;

  function handleResize() {
    window.clearTimeout(resizeTimer);

    resizeTimer = window.setTimeout(function () {
      setNavbarVisibility();
    }, 10);
  }

  window.addEventListener("resize", handleResize);

  // Utils

  function getAll(selector) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    return Array.prototype.slice.call(parent.querySelectorAll(selector), 0);
  }
});