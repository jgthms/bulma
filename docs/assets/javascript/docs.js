document.addEventListener("DOMContentLoaded", () => {
  const $links = document.querySelectorAll(".js-sublist-link");
  const $libraryMenu = document.getElementById("js-library-menu");

  const sublistItems = Array.from($links).map((el) => {
    const size = el.dataset.size;
    const isOpen = el.nextElementSibling.classList.contains("is-open");

    if (isOpen) {
      el.classList.add("is-open");
    }

    return {
      el,
      isOpen,
      size: parseInt(size, 10),
    };
  });

  $links.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      el.classList.add("is-clicked");

      const sublistItem = sublistItems.find((item) => item.el === el);
      sublistItem.isOpen = !sublistItem.isOpen;

      const initialValue = 0;
      const totalSize = sublistItems.reduce((accumulator, item) => {
        if (item.isOpen) {
          return accumulator + item.size;
        }

        return accumulator;
      }, initialValue);

      $libraryMenu.style.setProperty("--sublist-size", totalSize);

      el.classList.toggle("is-open");
      el.nextElementSibling.classList.toggle("is-open");
    });
  });

  // MODIFIERS
  const $modifiers = document.querySelectorAll(".js-modifier");

  $modifiers.forEach(($modifier, index) => {
    const target = $modifier.dataset.target;
    const $target = document.getElementById(target);
    const output = $modifier.dataset.output;
    const $output = document.getElementById(output);
    const outputBaseClass = $output?.textContent || "";
    const outputClasses = [];

    const $properties = $modifier.querySelectorAll(".js-modifier-property");
    const $values = $modifier.querySelectorAll(".js-modifier-value");

    let $selectedProperty = $properties[0];
    let $selectedValue = $values[0];
    let property = null;
    let propertyStart = null;
    let propertyEnd = null;

    if ($selectedProperty.dataset.property) {
      property = $selectedProperty.dataset.property;
    } else {
      propertyStart = $selectedProperty.dataset.propertyStart;
      propertyEnd = $selectedProperty.dataset.propertyEnd;
    }

    let value = "";
    let savedClass = "";

    const setTargetClass = (className, save = false) => {
      outputClasses[index] = className;

      const finalClass = [outputBaseClass, ...outputClasses].join(" ").trim();
      $target.className = finalClass;
      $output.textContent = finalClass;

      if (save) {
        savedClass = className;
      }
    };

    $properties.forEach(($property) => {
      const thisProperty = $property.dataset.property || "";

      $property.addEventListener("click", () => {
        property = thisProperty;
        $selectedProperty.classList.remove("is-link");
        $property.classList.add("is-link");
        $selectedProperty = $property;

        if (value !== "") {
          setTargetClass(`${thisProperty}-${value}`);
        } else {
          setTargetClass();
        }
      });
    });

    $values.forEach(($value) => {
      const thisValue = $value.dataset.value || "";

      $value.addEventListener("click", () => {
        if ($selectedValue) {
          $selectedValue.classList.remove("is-link");
        }

        if ($value === $selectedValue) {
          setTargetClass("", true);
          value = "";

          $value.classList.remove("is-link");
          $selectedValue = null;
        } else {
          value = thisValue;

          if (value !== "") {
            if (property) {
              setTargetClass(`${property}-${thisValue}`, true);
            } else {
              setTargetClass(
                `${propertyStart}-${thisValue}-${propertyEnd}`,
                true,
              );
            }
          } else {
            setTargetClass("", true);
          }

          $value.classList.add("is-link");
          $selectedValue = $value;
        }
      });

      $value.addEventListener("mouseenter", () => {
        if (thisValue !== "") {
          if (property) {
            setTargetClass(`${property}-${thisValue}`);
          } else {
            setTargetClass(`${propertyStart}-${thisValue}-${propertyEnd}`);
          }
        } else {
          setTargetClass("");
        }
      });

      $value.addEventListener("mouseleave", () => {
        setTargetClass(savedClass);
      });
    });
  });

  // RESIZABLES
  const $resizables = document.querySelectorAll(".js-resizable");

  const mouseMoveHandler = (e, el, x, w, isResizing, maxWidth, $counter) => {
    if (!isResizing) {
      return;
    }

    const dx = e.clientX - x;
    const desiredWidth = w + dx;

    if (desiredWidth < 240 || desiredWidth > maxWidth) {
      return;
    }

    el.style.width = `${desiredWidth}px`;
    $counter.textContent = `${desiredWidth}px`;
  };

  $resizables.forEach(($resizable) => {
    const counterId = $resizable.dataset.target;
    const $counter = document.getElementById(counterId);
    const $handle = $resizable.querySelector(".js-resizable-handle");
    const styles = window.getComputedStyle($resizable);
    const maxWidth = parseInt(styles.width, 10);
    $counter.textContent = `${maxWidth}px`;

    let x = 0;
    let w = parseInt(styles.width, 10);
    let isResizing = false;

    document.addEventListener("mousemove", (e) => {
      mouseMoveHandler(e, $resizable, x, w, isResizing, maxWidth, $counter);
    });

    document.addEventListener("mouseleave", () => {
      isResizing = false;
    });

    $handle.addEventListener("mousedown", (e) => {
      x = e.clientX;
      const styles = window.getComputedStyle($resizable);
      w = parseInt(styles.width, 10);
      isResizing = true;
    });

    $handle.addEventListener("mouseup", () => {
      isResizing = false;
    });

    document.addEventListener("mouseup", () => {
      isResizing = false;
    });
  });
});
