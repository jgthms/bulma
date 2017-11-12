document.addEventListener('DOMContentLoaded', () => {

  // Intro

  const introVideo = document.getElementById('introVideo');
  const introIframe = document.getElementById('introIframe');
  const introPlayer = new Vimeo.Player(introIframe);
  const npmClipboard = new Clipboard('#npmCopy');

  introPlayer.ready().then(function() {
    introVideo.classList.add('has-loaded');
  });

  npmClipboard.on('success', function(e) {
    e.trigger.innerText = 'copied!';
    e.trigger.classList.add('is-success');
    setTimeout(() => {
      e.trigger.innerText = 'copy';
      e.trigger.classList.remove('is-success');
    }, 500);
    e.clearSelection();
  });

  npmClipboard.on('error', function(e) {
    e.trigger.innerText = 'error!';
    e.trigger.classList.add('is-error');
    setTimeout(() => {
      e.trigger.innerText = 'copy';
      e.trigger.classList.remove('is-error');
    }, 500);
  });

  // Grid

  const $grid = document.getElementById('grid');
  const $columns = Array.prototype.slice.call(document.querySelectorAll('#grid > .column'), 0);
  const $markup = document.querySelector('#markup code');
  const $message = document.getElementById('message');
  const $add = document.getElementById('add');
  const $remove = document.getElementById('remove');
  let showing = 5;

  function showColumns() {
    if (showing === 13) {
      $message.style.display = 'block';
    } else {
      $message.style.display = 'none';
    }

    showing = Math.min(Math.max(parseInt(showing), 2), 12);

    $columns.forEach($el => {
      $el.style.display = 'none';
    });
    $columns.slice(0, showing).forEach($el => {
      $el.style.display = 'block';
    });

    $markup.innerHTML = '<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">&quot;columns&quot;</span><span class="nt">&gt;</span>';
    $markup.insertAdjacentHTML('beforeend', '\n');

    for(let i = 0; i < showing; i++) {
      $markup.insertAdjacentHTML('beforeend', '  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">&quot;column&quot;</span><span class="nt">&gt;</span>');
      $markup.insertAdjacentHTML('beforeend', i + 1);
      $markup.insertAdjacentHTML('beforeend', '<span class="nt">&lt;/div&gt;</span>');
      $markup.insertAdjacentHTML('beforeend', '\n');
    }

    $markup.insertAdjacentHTML('beforeend', '<span class="nt">&lt;/div&gt;</span>');
  }

  $add.addEventListener('click', () => {
    showing++;
    showColumns();
  });

  $remove.addEventListener('click', () => {
    showing--;
    showColumns();
  });

});
