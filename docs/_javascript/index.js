document.addEventListener("DOMContentLoaded", () => {
  // Intro

  const introVideo = document.getElementById("introVideo");
  const introIframe = document.getElementById("introIframe");
  const npmClipboard = new Clipboard("#npmCopy");

  if (window.Vimeo) {
    const introPlayer = new Vimeo.Player(introIframe);
    introPlayer.ready().then(function () {
      introVideo.classList.add("has-loaded");
    });
  }

  npmClipboard.on("success", function (e) {
    e.trigger.innerText = "copied!";
    e.trigger.classList.add("is-success");
    setTimeout(() => {
      e.trigger.innerText = "copy";
      e.trigger.classList.remove("is-success");
    }, 500);
    e.clearSelection();
  });

  npmClipboard.on("error", function (e) {
    e.trigger.innerText = "error!";
    e.trigger.classList.add("is-error");
    setTimeout(() => {
      e.trigger.innerText = "copy";
      e.trigger.classList.remove("is-error");
    }, 500);
  });

  // Grid

  const $grid = document.getElementById("grid");
  const $columns = Array.prototype.slice.call(
    document.querySelectorAll("#grid > .column"),
    0
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
        '  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">&quot;column&quot;</span><span class="nt">&gt;</span>'
      );
      $markup.insertAdjacentHTML("beforeend", i + 1);
      $markup.insertAdjacentHTML(
        "beforeend",
        '<span class="nt">&lt;/div&gt;</span>'
      );
      $markup.insertAdjacentHTML("beforeend", "\n");
    }

    $markup.insertAdjacentHTML(
      "beforeend",
      '<span class="nt">&lt;/div&gt;</span>'
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

  // Amis

  const $amis = document.getElementById("amis");
  const $pied = document.getElementById("pied");

  if ($amis) {
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
          el.className = "bd-sponsor-item bd-partner-sponsor";
          el.href = item.url;
          el.target = "_blank";
          el.title = item.title || item.id;

          const extension = item.svg ? ".svg" : ".png";
          const img = document.createElement("img");
          img.src = `https://jgthms.com/amis/images/${item.id}${extension}`;

          el.appendChild(img);
          $amis.appendChild(el);

          if (item.pied && $pied) {
            el.className = "bd-sponsor-item bd-footer-sponsor";
            $pied.appendChild(el);
          }
        });
      });
  }
});
