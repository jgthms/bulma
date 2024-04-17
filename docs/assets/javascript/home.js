document.addEventListener("DOMContentLoaded", () => {
  const CIRCLES = {
    a: {
      x: 0,
      y: -400,
      unit: 400,
      speed: 1800,
    },
    b: {
      x: 0,
      y: -540,
      unit: 540,
      speed: 3600,
    },
    c: {
      x: 0,
      y: -680,
      unit: 680,
      speed: 5400,
    },
  };

  const DOTS = {
    // A
    axbom: {
      startAngle: 1000,
      circle: "a",
    },
    ale_codes: {
      startAngle: 0,
      circle: "a",
    },
    modular: {
      startAngle: 600,
      circle: "a",
    },
    opensource: {
      startAngle: 1600,
      circle: "a",
    },
    free: {
      startAngle: -800,
      circle: "a",
    },
    responsive: {
      startAngle: -1300,
      circle: "a",
    },
    // B
    dartsass: {
      startAngle: -1000,
      circle: "b",
    },
    skeletons: {
      startAngle: -300,
      circle: "b",
    },
    dark: {
      startAngle: 1000,
      circle: "b",
    },
    flexbox: {
      startAngle: 2400,
      circle: "b",
    },
    cssvars: {
      startAngle: 3200,
      circle: "b",
    },
    themes: {
      startAngle: 4500,
      circle: "b",
    },
    // C
    autocolor: {
      startAngle: -1000,
      circle: "c",
    },
    smartgrid: {
      startAngle: 800,
      circle: "c",
    },
    infinitysearch: {
      startAngle: 2000,
      circle: "c",
    },
    bruhandle: {
      startAngle: 4000,
      circle: "c",
    },
    jesseschoff: {
      startAngle: 6000,
      circle: "c",
    },
    MyTopSecretName: {
      startAngle: 7500,
      circle: "c",
    },
  };

  const animate = (el, id) => {
    let { startAngle, circle } = DOTS[id];
    let { unit, speed, x, y } = CIRCLES[circle];
    el.style.setProperty("--animation-delay", `var(--circle-delay-${circle})`);

    const rad = startAngle * (Math.PI / speed);
    const left = Math.cos(rad) * unit + x;
    const top = unit * (1 - Math.sin(rad)) + y;
    const transform = `translate3d(${left}px, ${top}px, 0)`;
    el.style.transform = transform;
    DOTS[id].startAngle = DOTS[id].startAngle - 1;
  };

  const $dots = document.querySelectorAll(".js-dot");
  const reducedMotion =
    window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
    window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

  $dots.forEach(($dot) => {
    const id = $dot.dataset.id;

    if (reducedMotion) {
      animate($dot, id);
    } else {
      setInterval(() => {
        animate($dot, id);
      }, 10);
    }
  });

  // Grid

  const $columns = Array.prototype.slice.call(
    document.querySelectorAll("#grid > .column"),
    0,
  );
  const $markup = document.querySelector("#markup code");
  const $message = document.getElementById("message");
  const $add = document.getElementById("add");
  const $remove = document.getElementById("remove");
  let showing = 5;

  function showColumns() {
    if (showing === 13) {
      $message.style.display = "block";
    } else {
      $message.style.display = "none";
    }

    showing = Math.min(Math.max(parseInt(showing), 1), 12);

    $columns.forEach(($el) => {
      $el.style.display = "none";
    });
    $columns.slice(0, showing).forEach(($el) => {
      $el.style.display = "block";
    });

    $markup.innerHTML =
      '<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">&quot;columns&quot;</span><span class="nt">&gt;</span>';
    $markup.insertAdjacentHTML("beforeend", "\n");

    for (let i = 0; i < showing; i++) {
      $markup.insertAdjacentHTML(
        "beforeend",
        '  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">&quot;column&quot;</span><span class="nt">&gt;</span>',
      );
      $markup.insertAdjacentHTML("beforeend", i + 1);
      $markup.insertAdjacentHTML(
        "beforeend",
        '<span class="nt">&lt;/div&gt;</span>',
      );
      $markup.insertAdjacentHTML("beforeend", "\n");
    }

    $markup.insertAdjacentHTML(
      "beforeend",
      '<span class="nt">&lt;/div&gt;</span>',
    );
  }

  $add.addEventListener("click", () => {
    showing++;
    showColumns();
  });

  $remove.addEventListener("click", () => {
    showing--;
    showColumns();
  });
});
