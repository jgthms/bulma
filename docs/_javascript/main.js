document.addEventListener("DOMContentLoaded", () => {
  // Search

  const setSearchToggle = () => {
    const icon = document.getElementById("searchIcon");
    const search = document.getElementById("search");
    const input = document.getElementById("algoliaSearch");

    if (!icon) {
      return;
    }

    icon.addEventListener("click", (event) => {
      search.classList.toggle("bd-is-visible");

      if (search.classList.contains("bd-is-visible")) {
        algoliaSearch.focus();
      }
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        return search.classList.remove("bd-is-visible");
      }
    });
  };

  setSearchToggle();

  // Navbar

  const setNavbarVisibility = () => {
    const navbar = document.getElementById("navbar");

    if (!navbar) {
      return;
    }

    const cs = getComputedStyle(navbar);
    const paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
    const brand = navbar.querySelector(".navbar-brand");
    const end = navbar.querySelector(".navbar-end");
    const search = navbar.querySelector(".bd-search");
    const original = document.getElementById("navbarStartOriginal");
    const clone = document.getElementById("navbarStartClone");

    const rest =
      navbar.clientWidth -
      paddingX -
      brand.clientWidth -
      end.clientWidth -
      search.clientWidth;

    const space = original.clientWidth;
    const all = document.querySelectorAll(
      "#navbarStartClone > .bd-navbar-item"
    );
    const base = document.querySelectorAll(
      "#navbarStartClone > .bd-navbar-item-base"
    );
    const more = document.querySelectorAll(
      "#navbarStartOriginal > .bd-navbar-item-more"
    );
    const dropdown = document.querySelectorAll(
      "#navbarStartOriginal .bd-navbar-dropdown > .navbar-item"
    );

    let count = 0;
    let totalWidth = 0;

    const showMore = () => {};

    const hideMore = () => {};

    for (const item of all) {
      totalWidth += item.offsetWidth;

      if (totalWidth > rest) {
        break;
      }

      count++;
    }

    const howManyMore = Math.max(0, count - base.length);

    if (howManyMore > 0) {
      for (let i = 0; i < howManyMore; i++) {
        more[i].classList.add("bd-is-visible");
        dropdown[i].classList.add("bd-is-hidden");
      }
    }

    for (let j = howManyMore; j < more.length; j++) {
      more[j].classList.remove("bd-is-visible");
    }

    for (let k = howManyMore; k < dropdown.length; k++) {
      dropdown[k].classList.remove("bd-is-hidden");
    }
  };

  setNavbarVisibility();

  // Cookies

  const cookieBookModalName = "bulma_closed_book_modal";
  const cookieBookModal = Cookies.getJSON(cookieBookModalName) || false;

  // Dropdowns

  const $dropdowns = getAll(".dropdown:not(.is-hoverable)");

  if ($dropdowns.length > 0) {
    $dropdowns.forEach(($el) => {
      $el.addEventListener("click", (event) => {
        event.stopPropagation();
        $el.classList.toggle("is-active");
      });
    });

    document.addEventListener("click", (event) => {
      closeDropdowns();
    });
  }

  function closeDropdowns() {
    $dropdowns.forEach(($el) => {
      $el.classList.remove("is-active");
    });
  }

  // Toggles

  const $burgers = getAll(".navbar-burger");

  if ($burgers.length > 0) {
    $burgers.forEach(($el) => {
      if (!$el.dataset.target) {
        return;
      }

      $el.addEventListener("click", () => {
        const target = $el.dataset.target;
        const $target = document.getElementById(target);
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }

  // Modals

  const rootEl = document.documentElement;
  const $modals = getAll(".modal");
  const $modalButtons = getAll(".modal-button");
  const $modalCloses = getAll(
    ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
  );

  if ($modalButtons.length > 0) {
    $modalButtons.forEach(($el) => {
      $el.addEventListener("click", () => {
        const target = $el.dataset.target;
        openModal(target);
      });
    });
  }

  if ($modalCloses.length > 0) {
    $modalCloses.forEach(($el) => {
      $el.addEventListener("click", () => {
        closeModals();
      });
    });
  }

  function openModal(target) {
    const $target = document.getElementById(target);
    rootEl.classList.add("is-clipped");
    $target.classList.add("is-active");
  }

  function closeModals() {
    rootEl.classList.remove("is-clipped");
    $modals.forEach(($el) => {
      $el.classList.remove("is-active");
    });
  }

  document.addEventListener("keydown", (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) {
      closeModals();
      closeDropdowns();
    }
  });

  // Clipboard

  const $highlights = getAll(".highlight");
  let itemsProcessed = 0;

  if ($highlights.length > 0) {
    $highlights.forEach(($el) => {
      const copyEl = '<button class="button bd-copy">Copy</button>';
      const expandEl =
        '<button class="button is-small bd-expand">Expand</button>';
      $el.insertAdjacentHTML("beforeend", copyEl);

      const $parent = $el.parentNode;

      if ($parent && $parent.classList.contains("bd-is-more")) {
        const showEl =
          '<button class="button is-small bd-show"><span class="icon"><i class="fas fa-code"></i></span><strong>Show code</strong></button>';
        $parent.insertAdjacentHTML("afterbegin", showEl);
      } else if (
        $el.firstElementChild.scrollHeight > 480 &&
        $el.firstElementChild.clientHeight <= 480
      ) {
        $el.insertAdjacentHTML("beforeend", expandEl);
      }

      itemsProcessed++;

      if (itemsProcessed === $highlights.length) {
        addHighlightControls();
      }
    });
  }

  function addHighlightControls() {
    const $highlightButtons = getAll(
      ".highlight .bd-copy, .highlight .bd-expand"
    );

    $highlightButtons.forEach(($el) => {
      $el.addEventListener("mouseenter", () => {
        $el.parentNode.classList.add("bd-is-hovering");
        $el.parentNode.parentNode.classList.add("bd-is-hovering");
      });

      $el.addEventListener("mouseleave", () => {
        $el.parentNode.classList.remove("bd-is-hovering");
        $el.parentNode.parentNode.classList.remove("bd-is-hovering");
      });
    });

    const $highlightExpands = getAll(".bd-snippet .bd-expand");

    $highlightExpands.forEach(($el) => {
      $el.addEventListener("click", () => {
        $el.parentNode.firstElementChild.style.maxHeight = "none";
      });
    });

    const $highlightShows = getAll(".bd-snippet .bd-show");

    $highlightShows.forEach(($el) => {
      $el.addEventListener("click", () => {
        const text = $el.querySelector("strong").textContent;
        const newText = text === "Show code" ? "Hide code" : "Show code";
        $el.querySelector("strong").textContent = newText;
        $el.parentNode.classList.toggle("bd-is-more-clipped");
      });
    });
  }

  setTimeout(() => {
    new Clipboard(".bd-copy", {
      target: (trigger) => {
        return trigger.previousElementSibling.firstElementChild;
      },
    });

    new Clipboard(".bd-clipboard");
  }, 100);

  // Events

  let resizeTimer;

  function handleResize() {
    window.clearTimeout(resizeTimer);

    resizeTimer = window.setTimeout(function () {
      setNavbarVisibility();
    }, 10);
  }

  window.addEventListener("resize", handleResize);

  // Utils

  function getAll(selector, parent = document) {
    return Array.prototype.slice.call(parent.querySelectorAll(selector), 0);
  }
});
