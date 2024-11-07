document.addEventListener("DOMContentLoaded", () => {
  // Init JS elements
  const $readys = document.querySelectorAll(".js-ready");
  $readys.forEach((el) => el.classList.add("is-ready"));

  const $animateds = document.querySelectorAll(".js-animated");
  $animateds.forEach((el) => el.classList.add("is-animated"));

  // Backers

  const $backers = document.getElementById("js-backers");

  if ($backers) {
    fetch("https://jgthms.com/amis/backers.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
      })
      .then((response) => {
        const values = response.values;

        values.forEach((value) => {
          const el = document.createElement("div");
          el.className = "bd-tier";

          const amount = document.createElement("div");
          amount.className = "bd-tier-amount";
          amount.textContent = `$${value}`;

          const frequency = document.createElement("div");
          frequency.className = "bd-tier-frequency";
          frequency.textContent = "a month";

          const list = response.tiers[value];
          const message = document.createElement("div");
          message.className = "bd-tier-message";
          message.textContent = list.join(", ");

          el.appendChild(amount);
          el.appendChild(frequency);
          el.appendChild(message);

          $backers.appendChild(el);
        });
      });
  }

  // Amis

  const $amis = document.getElementById("amis");
  const $pied = document.getElementById("pied");

  if ($amis || $pied) {
    fetch("https://jgthms.com/amis/new.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
      })
      .then((response) => {
        response.forEach((item) => {
          const el = document.createElement("a");
          el.className = "bd-ami";
          el.href = item.url;
          el.target = "_blank";
          el.title = item.title || item.id;

          if (item.color) {
            el.style = `--color: ${item.color};`;
          }

          const extension = item.svg ? ".svg" : ".png";
          const img = document.createElement("img");
          img.src = `https://jgthms.com/amis/images/${item.id}${extension}`;

          el.appendChild(img);

          if ($amis) {
            $amis.appendChild(el);
          }

          if (item.pied && $pied) {
            el.className = "bd-ami bd-ami-footer";
            $pied.appendChild(el);
          }
        });
      });
  }

  // TOGGLES
  const $toggles = document.querySelectorAll(".js-toggle");

  $toggles.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const target = el.dataset.target;
      const $target = document.getElementById(target);
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });

  // MODALS
  // Functions to open and close a modal
  function openModal($el) {
    if (!$el) {
      return;
    }

    $el.classList.add("is-active");
  }

  function closeModal($el) {
    if (!$el) {
      return;
    }

    $el.classList.remove("is-active");
  }

  function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener("click", () => {
      openModal($target);
    });
  });

  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button",
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });

  // DROPDOWNS
  const $clickableDropdowns = document.querySelectorAll(
    ".dropdown:not(.is-hoverable)",
  );

  if ($clickableDropdowns.length > 0) {
    $clickableDropdowns.forEach(($dropdown) => {
      if (!$dropdown.querySelector("button")) {
        return;
      }

      $dropdown.querySelector("button").addEventListener("click", (event) => {
        event.stopPropagation();
        $dropdown.classList.toggle("is-active");
      });
    });

    document.addEventListener("click", () => {
      closeDropdowns();
    });
  }

  function closeDropdowns() {
    $clickableDropdowns.forEach(($el) => {
      $el.classList.remove("is-active");
    });
  }

  // THEMES
  const STORAGE_KEY = "bulma-theme";
  const SYSTEM_THEME = "system";
  const DEFAULT_THEME = "light";

  const state = {
    chosenTheme: SYSTEM_THEME, // light|dark|system
    appliedTheme: DEFAULT_THEME, // light|dark
    OSTheme: null, // light|dark|null
  };

  const $themeCycle = document.getElementById("js-cycle");
  const $themeSwitchers = document.querySelectorAll(".js-themes button");
  const $darkmodes = document.querySelectorAll(".js-darkmode");

  const updateThemeUI = () => {
    if (state.appliedTheme === "light") {
      $themeCycle.className = "bd-cycle js-burger is-sun";
    } else {
      $themeCycle.className = "bd-cycle js-burger is-moon";
    }

    $themeSwitchers.forEach((el) => {
      const swatchTheme = el.dataset.scheme;

      if (state.chosenTheme === swatchTheme) {
        el.classList.add("is-active");
      } else {
        el.classList.remove("is-active");
      }
    });
  };

  const setTheme = (theme, save = true) => {
    state.chosenTheme = theme;
    state.appliedTheme = theme;

    if (theme === SYSTEM_THEME) {
      state.appliedTheme = state.OSTheme;
      document.documentElement.removeAttribute("data-theme");
      window.localStorage.removeItem(STORAGE_KEY);
    } else {
      document.documentElement.setAttribute("data-theme", theme);

      if (save) {
        window.localStorage.setItem(STORAGE_KEY, theme);
      }
    }

    updateThemeUI();
  };

  const toggleTheme = () => {
    if (state.appliedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const detectOSTheme = () => {
    if (!window.matchMedia) {
      // matchMedia method not supported
      return DEFAULT_THEME;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      // OS theme setting detected as dark
      return "dark";
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }

    return DEFAULT_THEME;
  };

  // On load, check if any preference was saved
  const localTheme = window.localStorage.getItem(STORAGE_KEY);
  state.OSTheme = detectOSTheme();

  if (localTheme) {
    setTheme(localTheme, false);
  } else {
    setTheme(SYSTEM_THEME);
  }

  // Event listeners
  $themeSwitchers.forEach((el) => {
    el.addEventListener("click", () => {
      const theme = el.dataset.scheme;
      setTheme(theme);
    });
  });

  $darkmodes.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      toggleTheme();
    });
  });

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      const theme = event.matches ? "dark" : "light";
      state.OSTheme = theme;
      setTheme(theme);
    });

  // BURGERS
  const $burgers = document.querySelectorAll(".js-burger");

  $burgers.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const targetID = el.dataset.target;
      const $target = document.getElementById(targetID);
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
      e.stopPropagation();
    });
  });

  const onClickOutside = (menuSelector) => {
    document.addEventListener("click", (e) => {
      const menus = document.querySelectorAll(menuSelector);

      menus.forEach((el) => {
        if (!el.contains(e.target) && el.classList.contains("is-active")) {
          el.classList.remove("is-active");
        }
      });
    });
  };

  onClickOutside(".js-menu");

  // TABS
  const $tabs = document.querySelectorAll(".js-tabs");

  $tabs.forEach(($tab) => {
    const buttons = $tab.querySelectorAll(".bd-tabs-nav button");
    const tabs = $tab.querySelectorAll(".bd-tabs-item");

    buttons.forEach((el, i) => {
      el.addEventListener("click", () => {
        buttons.forEach((button) => {
          if (el === button) {
            button.classList.add("bd-is-active");
          } else {
            button.classList.remove("bd-is-active");
          }
        });

        tabs.forEach((tab, j) => {
          if (i === j) {
            tab.classList.add("bd-is-active");
          } else {
            tab.classList.remove("bd-is-active");
          }
        });
      });
    });
  });

  // CLIPBOARD
  const $highlights = document.querySelectorAll(".highlight");
  let itemsProcessed = 0;

  if ($highlights.length > 0) {
    $highlights.forEach(($el) => {
      const copyEl = '<button class="button bd-copy">Copy</button>';
      // const expandEl =
      //   '<button class="button is-small bd-expand">Expand</button>';
      $el.insertAdjacentHTML("beforeend", copyEl);

      const $parent = $el.parentNode;

      if ($parent && $parent.classList.contains("bd-is-more")) {
        const showEl =
          '<button class="button is-small bd-show"><span class="icon"><i class="fas fa-code"></i></span><strong>Show code</strong></button>';
        $parent.insertAdjacentHTML("afterbegin", showEl);
      }

      itemsProcessed++;

      if (itemsProcessed === $highlights.length) {
        addHighlightControls();
      }
    });
  }

  function addHighlightControls() {
    const $highlightButtons = document.querySelectorAll(
      ".highlight .bd-copy, .highlight .bd-expand",
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

    const $highlightExpands = document.querySelectorAll(
      ".bd-snippet .bd-expand",
    );

    $highlightExpands.forEach(($el) => {
      $el.addEventListener("click", () => {
        $el.parentNode.firstElementChild.style.maxHeight = "none";
      });
    });

    const $highlightShows = document.querySelectorAll(".bd-snippet .bd-show");

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
    new window.ClipboardJS(".bd-copy", {
      target: (trigger) => {
        return trigger.previousElementSibling.firstElementChild;
      },
    });

    new window.ClipboardJS(".bd-clipboard");
  }, 100);

  // MASTERCLASS
  const MASTERCLASS_KEY = "cssmasterclass";
  const $masterclass = document.getElementById("masterclass");
  const $masterclassBackground = document.getElementById(
    "masterclass-background",
  );
  const $masterclassClose = document.getElementById("masterclass-close");
  const masterclassStorage = window.localStorage.getItem(MASTERCLASS_KEY);

  if (masterclassStorage !== "seen") {
    window.setTimeout(() => {
      openMasterclass();
    }, 3000);
  }

  const openMasterclass = () => {
    $masterclass.classList.add("is-open");
  };

  const closeMasterclass = () => {
    window.localStorage.setItem(MASTERCLASS_KEY, "seen");
    $masterclass.classList.remove("is-open");
  };

  $masterclassBackground.addEventListener("click", (event) => {
    event.preventDefault();
    closeMasterclass();
  });

  $masterclassClose.addEventListener("click", (event) => {
    event.preventDefault();
    closeMasterclass();
  });
});
