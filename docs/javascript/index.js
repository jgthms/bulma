jQuery(document).ready(function ($) {

  var $grid = $('#grid');
  var $columns = $grid.children('.column');
  var showing = 5;
  var $markup = $('#markup code');
  var $message = $('#message');
  var $add = $('#add');
  var $remove = $('#remove');

  function showColumns() {
    if (showing === 13) {
      $message.show();
    } else {
      $message.hide();
    }

    showing = Math.min(Math.max(parseInt(showing), 2), 12);

    $columns.hide();
    $columns.slice(0, showing).show();

    $markup.html('<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">&quot;columns&quot;</span><span class="nt">&gt;</span>');
    $markup.append('\n');

    for(i = 0; i < showing; i++) {
      $markup.append('  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">&quot;column&quot;</span><span class="nt">&gt;</span>');
      $markup.append(i + 1);
      $markup.append('<span class="nt">&lt;/div&gt;</span>');
      $markup.append('\n');
    }

    $markup.append('<span class="nt">&lt;/div&gt;</span>');
  }

  $add.click(function() {
    showing++;
    showColumns();
  });

  $remove.click(function() {
    showing--;
    showColumns();
  });

});
