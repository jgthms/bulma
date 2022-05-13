document.addEventListener("DOMContentLoaded", () => {
  const $grid = document.getElementById("grid");
  const $columns = document.querySelectorAll(".jsColumns");

  $columns.forEach(($) =>
    $.addEventListener(
      "input",
      (event) => {
        const count = event.target.valueAsNumber;
        const suffix = event.target.dataset.suffix;
        console.log("Column count", count);
        $grid.className = `grid has-${count}-cols${suffix}`;
        const $columnsCount = getAll("strong", $.parentNode);
        $columnsCount.innerHTML = count;
      },
      false
    )
  );

  function getAll(selector, parent = document) {
    return Array.prototype.slice.call(parent.querySelectorAll(selector), 0);
  }
});
