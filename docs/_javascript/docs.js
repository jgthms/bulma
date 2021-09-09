document.addEventListener('DOMContentLoaded', () => {
  const tokens = {
    isFiltering: false,
  };

  document.addEventListener(
    'click',
    function (event) {
      if (event.target.closest('#categories')) {
        return (tokens.isFiltering = true);
      }

      tokens.isFiltering = false;
    },
    false
  );

  // Sidebar filter

  const filterCategories = () => {
    const container = document.getElementById('categories');
    const noResults = document.getElementById('categoriesNoResults');
    const noResultsButton = noResults.querySelector('button');

    const input = document.getElementById('categoriesFilter');
    const allLinks = getAll('#categories .bd-category a');

    const categories = getAll('#categories .bd-category').map((category) => {
      const links = getAll('a', category).map((link) => {
        const isHeader = link.classList.contains('bd-category-name');

        return {
          el: link,
          isHeader,
          text: link.dataset.name.toLowerCase(),
          isMatch: false,
        };
      });

      return {
        el: category,
        name: {
          el: category.querySelector('.bd-category-name'),
        },
        links,
        hasMatch: false,
      };
    });

    const state = {
      count: 0,
      hasQuery: false,
      selectedIndex: -1,
      selectedEl: null,
      results: [],
    };

    const removeFocus = () => {
      allLinks.forEach((link) => {
        link.classList.remove('bd-is-focused');
      });
    };

    const resetSearch = () => {
      categories.forEach((category) => {
        category.hasMatch = false;
        category.el.classList.remove('bd-has-match');

        category.links.forEach((link) => {
          link.isMatch = false;
          link.el.classList.remove('bd-is-match');
        });
      });
    };

    const updateUI = () => {
      categories.forEach((category) => {
        if (category.hasMatch) {
          category.el.classList.add('bd-has-match');
        } else {
          category.el.classList.remove('bd-has-match');
        }

        category.links.forEach((link) => {
          if (link.isMatch) {
            link.el.classList.add('bd-is-match');
          } else {
            link.el.classList.remove('bd-is-match');
          }

          highlightQuery(link.el, input.value.toLowerCase());
        });
      });

      if (state.count > 0) {
        container.classList.remove('bd-has-no-results');
      } else {
        container.classList.add('bd-has-no-results');
      }

      if (state.hasQuery) {
        container.classList.add('bd-has-query');
      } else {
        container.classList.remove('bd-has-query');
      }

      removeFocus();

      if (state.selectedIndex > -1 && state.results.length > 0) {
        container.focus();
        state.selectedEl = state.results[state.selectedIndex];
        state.selectedEl.classList.add('bd-is-focused');
      }
    };

    const performSearch = () => {
      const query = input.value.toLowerCase();

      state.count = 0;
      state.selectedIndex = -1;
      state.results = [];

      if (query.length > 0) {
        state.hasQuery = true;

        categories.forEach((category) => {
          category.hasMatch = false;

          category.links.forEach((link) => {
            const queryIndex = link.text.indexOf(query);

            if (queryIndex > -1) {
              link.isMatch = true;
              category.hasMatch = true;
              state.count++;

              if (state.results.indexOf(category.name.el) === -1) {
                state.results.push(category.name.el);
              }

              if (state.results.indexOf(link.el) === -1) {
                state.results.push(link.el);
              }
            } else {
              link.isMatch = false;
            }
          });
        });
      } else {
        state.hasQuery = false;
        resetSearch();
      }

      updateUI();
    };

    noResultsButton.addEventListener('click', (event) => {
      input.value = '';
      input.focus();
      performSearch();
    });

    input.addEventListener('focus', (event) => {
      tokens.isFiltering = true;
    });

    input.addEventListener('keyup', (event) => {
      if (!tokens.isFiltering) {
        return;
      }

      if (event.key === 'ArrowDown' && state.results.length > 0) {
        input.blur();
        return;
      }

      performSearch();
    });

    window.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'Escape':
          tokens.isFiltering = false;
          input.value = '';
          performSearch();
          break;
      }

      if (!tokens.isFiltering) {
        updateUI();
        return;
      }

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();

          if (
            state.selectedIndex === state.results.length - 1 ||
            state.results.length < 1
          ) {
            break;
          }

          state.selectedIndex++;
          break;
        case 'ArrowUp':
          event.preventDefault();

          if (state.selectedIndex === 0) {
            state.selectedIndex = -1;
            input.focus();
            break;
          }

          state.selectedIndex--;
          break;
        case 'Enter':
          if (state.selectedEl) {
            window.location.href = state.selectedEl.href;
          }
          break;
      }

      updateUI();
    });
  };

  filterCategories();

  // Sidebar links

  const setCategoriesToggle = () => {
    const categories = getAll('#categories .bd-category');

    if (categories.length > 0) {
      categories.forEach((el) => {
        const nameEl = el.querySelector('.bd-category-name');

        nameEl.addEventListener('click', (event) => {
          if (event.metaKey || tokens.isFiltering) {
            return true;
          }

          event.preventDefault();
          el.classList.toggle('is-open');
        });
      });
    }
  };

  setCategoriesToggle();

  // Docs mobile toggles

  const setDocsToggles = () => {
    const state = {
      showNav: false,
      showSide: false,
    };
    const docs = document.getElementById('docs');
    const overlay = document.getElementById('docsNavOverlay');
    const nav = document.getElementById('docsNav');
    const navButton = document.getElementById('docsNavButton');
    const side = document.getElementById('docsSide');
    const sideButton = document.getElementById('docsSideButton');

    if (!nav) {
      return;
    }

    navButton.addEventListener('click', (event) => {
      state.showNav = !state.showNav;
      updateUI();
    });

    sideButton.addEventListener('click', (event) => {
      state.showSide = !state.showSide;
      updateUI();
    });

    overlay.addEventListener('click', (event) => {
      state.showNav = false;
      state.showSide = false;
      updateUI();
    });

    const updateUI = () => {
      if (state.showNav || state.showSide) {
        docs.classList.add('bd-showing-overlay');
        toggleClass(nav, state.showNav, 'bd-is-shown');
        toggleClass(side, state.showSide, 'bd-is-shown');
      } else {
        docs.classList.remove('bd-showing-overlay');
        nav.classList.remove('bd-is-shown');
        side.classList.remove('bd-is-shown');
      }
    };
  };

  setDocsToggles();

  // Anchors

  const anchors_ref_el = document.getElementById('anchorsReference');
  const anchors_el = document.getElementById('anchors');
  const anchor_links_el = getAll('.bd-anchor-link');

  let anchors_by_id = {};
  let anchors_order = [];
  let anchor_nav_els = [];

  if (anchors_el && anchor_links_el.length > 0) {
    anchors_el.classList.remove('bd-is-empty');
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

  // Meta links

  const $metalinks = getAll('#meta a');

  if ($metalinks.length > 0) {
    $metalinks.forEach(($el) => {
      $el.addEventListener('click', (event) => {
        event.preventDefault();
        const target = $el.getAttribute('href');
        const $target = document.getElementById(target.substring(1));
        $target.scrollIntoView(true);
        return false;
      });
    });
  }

  // Docs edge sticky

  const stickiedRef = document.getElementById('docs');
  const stickied = getAll('.bd-stickied');
  let isStickied = false;

  function whenScrollingEdges() {
    if (!stickied || stickied.length < 1) {
      return;
    }

    const bounds = stickiedRef.getBoundingClientRect();
    const fromTop = bounds.top;
    const shouldSticky = fromTop < 0 || false;

    if (isStickied === shouldSticky) {
      // Nothing has changed
      return;
    }

    isStickied = shouldSticky;

    if (isStickied) {
      stickied.forEach((st) => {
        st.classList.add('bd-is-stickied');
      });
    } else {
      stickied.forEach((st) => {
        st.classList.remove('bd-is-stickied');
      });
    }
  }

  // Anchors highlight

  let past_anchors = [];
  anchor_links_el.reverse();
  const trigger_offset = 24; // In pixels
  const typo_el = document.getElementById('typo');

  function whenScrollingAnchors() {
    if (!anchors_ref_el) {
      return;
    }

    const bounds = anchors_ref_el.getBoundingClientRect();
    const anchors_height = anchors_el.clientHeight;
    const typo_bounds = typo_el.getBoundingClientRect();
    const typo_height = typo_el.clientHeight;

    if (bounds.top < 1 && typo_bounds.top - anchors_height + typo_height > 0) {
      anchors_el.classList.add('is-pinned');
    } else {
      anchors_el.classList.remove('is-pinned');
    }

    anchor_links_el.some((el) => {
      const bounds = el.getBoundingClientRect();
      const href = el.getAttribute('href');
      const key = href.substring(1); // #target -> target

      if (bounds.top < 1 + trigger_offset && past_anchors.indexOf(key) == -1) {
        past_anchors.push(key);
        highlightAnchor();
        return;
      } else if (
        bounds.top > 0 + trigger_offset &&
        past_anchors.indexOf(key) != -1
      ) {
        removeFromArray(past_anchors, key);
        highlightAnchor();
        return;
      }
    });
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

  // Spacing table

  const spacingTables = getAll('.bd-spacing-table');

  spacingTables.forEach((spacingEl) => {
    const spacingRows = getAll('tbody tr', spacingEl);
    const spacingCells = getAll('tbody td', spacingEl);
    const spacingValues = getAll('tfoot th', spacingEl);

    spacingEl.addEventListener('mouseleave', () => {
      resetTable(spacingCells, spacingValues);
    });

    spacingCells.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        resetTable(spacingCells, spacingValues);
        const row = Array.prototype.indexOf.call(
          el.parentNode.parentNode.children,
          el.parentNode
        );
        const column = Array.prototype.indexOf.call(el.parentNode.children, el);
        highlightRowAndColumn(row, column, spacingRows, spacingValues);
      });
    });
  });

  function resetTable(cells, values) {
    cells.forEach((el) =>
      el.classList.remove('bd-current-row', 'bd-current-column')
    );
    values.forEach((el) => el.classList.remove('bd-current-value'));
  }

  function highlightRowAndColumn(rowIndex, columnIndex, rows, values) {
    const row = rows[rowIndex];
    let i = columnIndex;

    while (i > -1) {
      row.children[i].classList.add('bd-current-row');
      i--;
    }

    const nextRows = rows.slice(rowIndex);
    nextRows.forEach((r) => {
      r.children[columnIndex].classList.add('bd-current-column');
    });

    if (columnIndex < 2) {
      return;
    }
    values[columnIndex - 1].classList.add('bd-current-value');
  }

  // Events

  let ticking = false;
  let lastY = 0;

  window.addEventListener('scroll', function () {
    const currentY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        whenScrollingAnchors();
        whenScrollingEdges();
        ticking = false;
        lastY = currentY;
      });
    }

    ticking = true;
  });

  // Utils

  function getAll(selector, parent = document) {
    return Array.prototype.slice.call(parent.querySelectorAll(selector), 0);
  }

  function removeFromArray(array, value) {
    if (array.includes(value)) {
      const value_index = array.indexOf(value);
      array.splice(value_index, 1);
    }

    return array;
  }

  function toggleClass(el, bool, cn) {
    if (bool) {
      return el.classList.add(cn);
    }

    el.classList.remove(cn);
  }

  function highlightQuery(el, query) {
    const text = el.dataset.name;
    const nameEl = el.querySelector('.bd-name');

    if (!query || query === '') {
      nameEl.innerHTML = text;
      return;
    }

    const lowerText = text.toLowerCase();
    const queryIndex = lowerText.indexOf(query);

    if (queryIndex >= 0) {
      const before = text.substring(0, queryIndex);
      const highlight = `<span class="bd-highlight">${text.substring(
        queryIndex,
        queryIndex + query.length
      )}</span>`;
      const after = text.substring(queryIndex + query.length);

      nameEl.innerHTML = before + highlight + after;

      return true;
    } else {
      nameEl.innerHTML = text;
      return false;
    }
  }

  Array.prototype.diff = function (a) {
    return this.filter(function (i) {
      return a.indexOf(i) < 0;
    });
  };
});
