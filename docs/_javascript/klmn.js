document.addEventListener('DOMContentLoaded', () => {

  const $klmnColumns = Array.prototype.slice.call(document.querySelectorAll('.bd-klmn-columns'), 0);
  const $klmnGaps = Array.prototype.slice.call(document.querySelectorAll('.bd-klmn-gap'), 0);
  const $klmnValue = document.getElementById('klmnValue');

  $klmnGaps.forEach(el => {
    el.addEventListener('mouseenter', () => {
      const index = el.dataset.value;
      selectGap(index);
    });
  });

  function resetGaps() {
    $klmnGaps.forEach(el => {
      el.classList.remove('bd-is-selected');
    });
  }

  function setColumns(n) {
    $klmnColumns.forEach(el => {
      el.className = `columns is-variable bd-klmn-columns is-${n}`;
    });
  }

  function setValue(n) {
    const rem = `${n * 0.25}rem`;
    $klmnValue.innerHTML = rem;
  }

  function selectGap(n) {
    resetGaps();
    $klmnGaps[n].classList.add('bd-is-selected');
    setColumns(n);
    setValue(n);
  }

  selectGap(3);

});
