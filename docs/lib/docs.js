'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var tokens = {
    isFiltering: false
  };

  document.addEventListener('click', function (event) {
    if (event.target.closest('#categories')) {
      return tokens.isFiltering = true;
    }

    tokens.isFiltering = false;
  }, false);

  // Sidebar filter

  var filterCategories = function filterCategories() {
    var container = document.getElementById('categories');
    var noResults = document.getElementById('categoriesNoResults');
    var noResultsButton = noResults.querySelector('button');

    var input = document.getElementById('categoriesFilter');
    var allLinks = getAll('#categories .bd-category a');

    var categories = getAll('#categories .bd-category').map(function (category) {
      var links = getAll('a', category).map(function (link) {
        var isHeader = link.classList.contains('bd-category-name');

        return {
          el: link,
          isHeader: isHeader,
          text: link.dataset.name.toLowerCase(),
          isMatch: false
        };
      });

      return {
        el: category,
        name: {
          el: category.querySelector('.bd-category-name')
        },
        links: links,
        hasMatch: false
      };
    });

    var state = {
      count: 0,
      hasQuery: false,
      selectedIndex: -1,
      selectedEl: null,
      results: []
    };

    var removeFocus = function removeFocus() {
      allLinks.forEach(function (link) {
        link.classList.remove('bd-is-focused');
      });
    };

    var resetSearch = function resetSearch() {
      categories.forEach(function (category) {
        category.hasMatch = false;
        category.el.classList.remove('bd-has-match');

        category.links.forEach(function (link) {
          link.isMatch = false;
          link.el.classList.remove('bd-is-match');
        });
      });
    };

    var updateUI = function updateUI() {
      categories.forEach(function (category) {
        if (category.hasMatch) {
          category.el.classList.add('bd-has-match');
        } else {
          category.el.classList.remove('bd-has-match');
        }

        category.links.forEach(function (link) {
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

    var performSearch = function performSearch() {
      var query = input.value.toLowerCase();

      state.count = 0;
      state.selectedIndex = -1;
      state.results = [];

      if (query.length > 0) {
        state.hasQuery = true;

        categories.forEach(function (category) {
          category.hasMatch = false;

          category.links.forEach(function (link) {
            var queryIndex = link.text.indexOf(query);

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

    noResultsButton.addEventListener('click', function (event) {
      input.value = '';
      input.focus();
      performSearch();
    });

    input.addEventListener('focus', function (event) {
      tokens.isFiltering = true;
    });

    input.addEventListener('keyup', function (event) {
      if (!tokens.isFiltering) {
        return;
      }

      if (event.key === 'ArrowDown' && state.results.length > 0) {
        input.blur();
        return;
      }

      performSearch();
    });

    window.addEventListener('keydown', function (event) {
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

          if (state.selectedIndex === state.results.length - 1 || state.results.length < 1) {
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

  var setCategoriesToggle = function setCategoriesToggle() {
    var categories = getAll('#categories .bd-category');

    if (categories.length > 0) {
      categories.forEach(function (el) {
        var nameEl = el.querySelector('.bd-category-name');

        nameEl.addEventListener('click', function (event) {
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

  var setDocsToggles = function setDocsToggles() {
    var state = {
      showNav: false,
      showSide: false
    };
    var docs = document.getElementById('docs');
    var overlay = document.getElementById('docsNavOverlay');
    var nav = document.getElementById('docsNav');
    var navButton = document.getElementById('docsNavButton');
    var side = document.getElementById('docsSide');
    var sideButton = document.getElementById('docsSideButton');

    if (!nav) {
      return;
    }

    navButton.addEventListener('click', function (event) {
      state.showNav = !state.showNav;
      updateUI();
    });

    sideButton.addEventListener('click', function (event) {
      state.showSide = !state.showSide;
      updateUI();
    });

    overlay.addEventListener('click', function (event) {
      state.showNav = false;
      state.showSide = false;
      updateUI();
    });

    var updateUI = function updateUI() {
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

  var anchors_ref_el = document.getElementById('anchorsReference');
  var anchors_el = document.getElementById('anchors');
  var anchor_links_el = getAll('.bd-anchor-link');

  var anchors_by_id = {};
  var anchors_order = [];
  var anchor_nav_els = [];

  if (anchors_el && anchor_links_el.length > 0) {
    anchors_el.classList.remove('bd-is-empty');
    var anchors_el_list = anchors_el.querySelector('.bd-anchors-list');

    anchor_links_el.forEach(function (el, index) {
      var link_target = el.getAttribute('href');
      var link_text = el.previousElementSibling.innerText;

      if (link_text != '') {
        var item_el = createAnchorLink(link_text, link_target);
        anchors_el_list.appendChild(item_el);

        var anchor_key = link_target.substring(1); // #target -> target
        anchors_by_id[anchor_key] = {
          id: anchor_key,
          index: index,
          target: link_target,
          text: link_text,
          nav_el: item_el
        };
        anchors_order.push(anchor_key);
        anchor_nav_els.push(item_el);
      }
    });

    var back_to_top_el = createAnchorLink('Back to top', '');
    back_to_top_el.onclick = scrollToTop;
    anchors_el_list.appendChild(back_to_top_el);
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function createAnchorLink(text, target) {
    var item_el = document.createElement('li');
    var link_el = document.createElement('a');
    var text_node = document.createTextNode(text);

    if (target) {
      link_el.setAttribute('href', target);
    }

    link_el.appendChild(text_node);
    item_el.appendChild(link_el);

    return item_el;
  }

  // Meta links

  var $metalinks = getAll('#meta a');

  if ($metalinks.length > 0) {
    $metalinks.forEach(function ($el) {
      $el.addEventListener('click', function (event) {
        event.preventDefault();
        var target = $el.getAttribute('href');
        var $target = document.getElementById(target.substring(1));
        $target.scrollIntoView(true);
        return false;
      });
    });
  }

  // Docs edge sticky

  var stickiedRef = document.getElementById('docs');
  var stickied = getAll('.bd-stickied');
  var isStickied = false;

  function whenScrollingEdges() {
    if (!stickied || stickied.length < 1) {
      return;
    }

    var bounds = stickiedRef.getBoundingClientRect();
    var fromTop = bounds.top;
    var shouldSticky = fromTop < 0 || false;

    if (isStickied === shouldSticky) {
      // Nothing has changed
      return;
    }

    isStickied = shouldSticky;

    if (isStickied) {
      stickied.forEach(function (st) {
        st.classList.add('bd-is-stickied');
      });
    } else {
      stickied.forEach(function (st) {
        st.classList.remove('bd-is-stickied');
      });
    }
  }

  // Anchors highlight

  var past_anchors = [];
  anchor_links_el.reverse();
  var trigger_offset = 24; // In pixels
  var typo_el = document.getElementById('typo');

  function whenScrollingAnchors() {
    if (!anchors_ref_el) {
      return;
    }

    var bounds = anchors_ref_el.getBoundingClientRect();
    var anchors_height = anchors_el.clientHeight;
    var typo_bounds = typo_el.getBoundingClientRect();
    var typo_height = typo_el.clientHeight;

    if (bounds.top < 1 && typo_bounds.top - anchors_height + typo_height > 0) {
      anchors_el.classList.add('is-pinned');
    } else {
      anchors_el.classList.remove('is-pinned');
    }

    anchor_links_el.some(function (el) {
      var bounds = el.getBoundingClientRect();
      var href = el.getAttribute('href');
      var key = href.substring(1); // #target -> target

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

  function highlightAnchor() {
    var future_anchors = anchors_order.diff(past_anchors);
    var highest_index = -1;
    var highest_anchor_key = '';

    if (past_anchors.length > 0) {
      past_anchors.forEach(function (key, index) {
        var anchor = anchors_by_id[key];
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
      future_anchors.forEach(function (key, index) {
        var anchor = anchors_by_id[key];
        anchor.nav_el.className = '';
      });
    }
  }

  // Spacing table

  var spacingTables = getAll('.bd-spacing-table');

  spacingTables.forEach(function (spacingEl) {
    var spacingRows = getAll('tbody tr', spacingEl);
    var spacingCells = getAll('tbody td', spacingEl);
    var spacingValues = getAll('tfoot th', spacingEl);

    spacingEl.addEventListener('mouseleave', function () {
      resetTable(spacingCells, spacingValues);
    });

    spacingCells.forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        resetTable(spacingCells, spacingValues);
        var row = Array.prototype.indexOf.call(el.parentNode.parentNode.children, el.parentNode);
        var column = Array.prototype.indexOf.call(el.parentNode.children, el);
        highlightRowAndColumn(row, column, spacingRows, spacingValues);
      });
    });
  });

  function resetTable(cells, values) {
    cells.forEach(function (el) {
      return el.classList.remove('bd-current-row', 'bd-current-column');
    });
    values.forEach(function (el) {
      return el.classList.remove('bd-current-value');
    });
  }

  function highlightRowAndColumn(rowIndex, columnIndex, rows, values) {
    var row = rows[rowIndex];
    var i = columnIndex;

    while (i > -1) {
      row.children[i].classList.add('bd-current-row');
      i--;
    }

    var nextRows = rows.slice(rowIndex);
    nextRows.forEach(function (r) {
      r.children[columnIndex].classList.add('bd-current-column');
    });

    if (columnIndex < 2) {
      return;
    }
    values[columnIndex - 1].classList.add('bd-current-value');
  }

  // Events

  var ticking = false;
  var lastY = 0;

  window.addEventListener('scroll', function () {
    var currentY = window.scrollY;

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

  function getAll(selector) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    return Array.prototype.slice.call(parent.querySelectorAll(selector), 0);
  }

  function removeFromArray(array, value) {
    if (array.includes(value)) {
      var value_index = array.indexOf(value);
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
    var text = el.dataset.name;
    var nameEl = el.querySelector('.bd-name');

    if (!query || query === '') {
      nameEl.innerHTML = text;
      return;
    }

    var lowerText = text.toLowerCase();
    var queryIndex = lowerText.indexOf(query);

    if (queryIndex >= 0) {
      var before = text.substring(0, queryIndex);
      var highlight = '<span class="bd-highlight">' + text.substring(queryIndex, queryIndex + query.length) + '</span>';
      var after = text.substring(queryIndex + query.length);

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