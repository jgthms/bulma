---
title: "Light and Dark colors, better look, larger buttons, panel colors, and more"
layout: post
introduction: "A big update for more colors and flexibility"
color: "primary"
name: "Light/Dark colors, better look, larger controls"
icon: "sun"
published: false
---

The new version **[Bulma 0.8.0](#)** is out! It comes with several bug fixes and a lot of nice new features:

* [Light/Dark colors](#light-dark-colors)
* [Better visual look](#better-visual-look)
* [Panel colors](#panel-colors)
* [4-value color map](#4-value-color-map)
* [Scheme variables](#scheme-variables)

More in the [Changelog](#).

{% include elements/anchor.html name="Light/Dark colors" %}

Each main color (`"primary"`, `"info"`, `"success"`, `"warning"`, `"danger"`) now comes with a `*-light` and a `*-dark` version. They are calculated using 2 new color functions:

* `findLightColor()` which finds the light version of a color
* `findDarkolor()` which finds the dark version of a color

The **light** colors are used by the `button` element:

<figure>
  <a href="{{ site.data.links.by_id.elements-button.path }}">
    <img src="{{ site.url }}/images/blog/v8/light-buttons-bis.png" alt="List Bulma buttons" width="530" height="104">
  </a>
</figure>

The **light** and **dark** colors are used by the `message` component, which generates much prettier colored versions. See the difference between before (left) and after (right):

<div class="bd-post-fullwidth">
  <a href="{{ site.data.links.by_id.components-message.path }}">
    <img src="{{ site.url }}/images/blog/v8/messages-before.png" alt="Messages before" width="448" height="1200">
    <img src="{{ site.url }}/images/blog/v8/messages-after.png" alt="Messages after" width="448" height="1200">
  </a>
</div>

{% include elements/anchor.html name="Better visual look" %}

Some of the Bulma colors have been updated:

<table>
  <tr>
    <th>Color</th>
    <th>Before</th>
    <th>After</th>
  </tr>
  <tr>
    <th>
      <code>$green</code>
    </th>
    <td>
      {% include elements/color-square.html value="hsl(141, 71%, 48%)" %}
    </td>
    <td>
      {% include elements/color-square.html value="hsl(141, 53%, 53%)" %}
    </td>
  </tr>
  <tr>
    <th>
      <code>$cyan</code>
    </th>
    <td>
      {% include elements/color-square.html value="hsl(204, 86%, 53%)" %}
    </td>
    <td>
      {% include elements/color-square.html value="hsl(204, 71%, 53%)" %}
    </td>
  </tr>
  <tr>
    <th>
      <code>$red</code>
    </th>
    <td>
      {% include elements/color-square.html value="hsl(348, 100%, 61%)" %}
    </td>
    <td>
      {% include elements/color-square.html value="hsl(348, 86%, 61%)" %}
    </td>
  </tr>
</table>

The <strong>shadows</strong> of the <code>box</code> and <code>card</code> have been improved:

<div class="bd-post-fullwidth">
  <a href="{{ site.data.links.by_id.components-card.path }}">
    <img src="{{ site.url }}/images/blog/v8/card-before.png" alt="Card before" width="464" height="236">
    <img src="{{ site.url }}/images/blog/v8/card-after.png" alt="Card after" width="464" height="236">
  </a>
</div>

<div class="bd-post-fullwidth">
  <a href="{{ site.data.links.by_id.elements-box.path }}" style="display: block;" class="has-text-centered">
    <img src="{{ site.url }}/images/blog/v8/box-before.png" alt="Box before" width="464" height="236">
    <img src="{{ site.url }}/images/blog/v8/box-after.png" alt="Box after" width="464" height="236">
  </a>
</div>

{% include elements/anchor.html name="Panel colors" %}

<p>
  The <a href="{{ site.data.links.by_id.components-panel.path }}">panel component</a> is now available in all <strong>colors</strong>:
</p>

<div class="bd-post-fullwidth">
  <a href="{{ site.data.links.by_id.components-panel.path }}">
    <img src="{{ site.url }}/images/blog/v8/panel-colors.png" alt="Panel colors" width="768" height="1029">
  </a>
</div>

{% include elements/anchor.html name="4-value color map" %}

The `$colors` Sass map now accepts, for each of its values, a map of up to **4** values. For example: the key `"info"` now has the `($info, $info-invert, $info-light, $info-dark)` map.

If you provide a `$custom-colors` map, you can decide to provide a map of 1, 2, 3 or 4 values for each value. If fewer than 4 are provided, Bulma will calculate the remaining ones:

```scss
$custom-colors: (
  "lime": (lime),
  "tomato": (tomato, white),
  "orange": ($orange, $orange-invert, $orange-light),
  "lavender": ($lavender, $lavender-invert, $lavender-light, $lavender-dark)
);
```

This is processed by the updated `mergeColorMaps()` Sass function.

{% include elements/anchor.html name="Scheme variables" %}

There are 6 new `$scheme` derived variables: `$scheme-main` `$scheme-main-bis` `$scheme-main-ter` `$scheme-invert` `$scheme-invert-bis` `$scheme-invert-ter`
They replace the `$white` and `$black` occurences in the codebase. This makes it easy to create a "Dark mode" simply by swapping the values:

```sass
$scheme-main: $black
$scheme-invert: $white
// etc.
```

That is also why most of the codebase now references **derived** variables (`$text`, `$background`, `$border` etc.) instead of **initial** ones (`$grey`, `$grey-lighter`, `$grey-darker` etc.): updating the derived variables will affect all elements and components directly.
