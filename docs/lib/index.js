'use strict';

document.addEventListener('DOMContentLoaded', function () {

  // Intro

  var introVideo = document.getElementById('introVideo');
  var introIframe = document.getElementById('introIframe');
  var introPlayer = new Vimeo.Player(introIframe);
  var npmClipboard = new Clipboard('#npmCopy');

  introPlayer.ready().then(function () {
    introVideo.classList.add('has-loaded');
  });

  npmClipboard.on('success', function (e) {
    e.trigger.innerText = 'copied!';
    e.trigger.classList.add('is-success');
    setTimeout(function () {
      e.trigger.innerText = 'copy';
      e.trigger.classList.remove('is-success');
    }, 500);
    e.clearSelection();
  });

  npmClipboard.on('error', function (e) {
    e.trigger.innerText = 'error!';
    e.trigger.classList.add('is-error');
    setTimeout(function () {
      e.trigger.innerText = 'copy';
      e.trigger.classList.remove('is-error');
    }, 500);
  });

  // Grid

  var $grid = document.getElementById('grid');
  var $columns = Array.prototype.slice.call(document.querySelectorAll('#grid > .column'), 0);
  var $markup = document.querySelector('#markup code');
  var $message = document.getElementById('message');
  var $add = document.getElementById('add');
  var $remove = document.getElementById('remove');
  var showing = 5;

  function showColumns() {
    if (showing === 13) {
      $message.style.display = 'block';
    } else {
      $message.style.display = 'none';
    }

    showing = Math.min(Math.max(parseInt(showing), 2), 12);

    $columns.forEach(function ($el) {
      $el.style.display = 'none';
    });
    $columns.slice(0, showing).forEach(function ($el) {
      $el.style.display = 'block';
    });

    $markup.innerHTML = '<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">&quot;columns&quot;</span><span class="nt">&gt;</span>';
    $markup.insertAdjacentHTML('beforeend', '\n');

    for (var i = 0; i < showing; i++) {
      $markup.insertAdjacentHTML('beforeend', '  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">&quot;column&quot;</span><span class="nt">&gt;</span>');
      $markup.insertAdjacentHTML('beforeend', i + 1);
      $markup.insertAdjacentHTML('beforeend', '<span class="nt">&lt;/div&gt;</span>');
      $markup.insertAdjacentHTML('beforeend', '\n');
    }

    $markup.insertAdjacentHTML('beforeend', '<span class="nt">&lt;/div&gt;</span>');
  }

  $add.addEventListener('click', function () {
    showing++;
    showColumns();
  });

  $remove.addEventListener('click', function () {
    showing--;
    showColumns();
  });
});