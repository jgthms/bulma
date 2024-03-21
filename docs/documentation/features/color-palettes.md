---
title: Color Palettes in Bulma
layout: docs
markdown: true
theme: features
doc-tab: features
doc-subtab: color-palettes
breadcrumb:
  - home
  - documentation
  - features
  - features-color-palettes
---

Bulma comes with 7 primary colors:

<table class="table is-bordered">
<tr><td><code>text</code></td><td><span class="bd-color-swatch" style="--background: var(--bulma-text);"></span></td></tr>
<tr><td><code>link</code></td><td><span class="bd-color-swatch" style="--background: var(--bulma-link);"></span></td></tr>
<tr><td><code>primary</code></td><td><span class="bd-color-swatch" style="--background: var(--bulma-primary);"></span></td></tr>
<tr><td><code>info</code></td><td><span class="bd-color-swatch" style="--background: var(--bulma-info);"></span></td></tr>
<tr><td><code>success</code></td><td><span class="bd-color-swatch" style="--background: var(--bulma-success);"></span></td></tr>
<tr><td><code>warning</code></td><td><span class="bd-color-swatch" style="--background: var(--bulma-warning);"></span></td></tr>
<tr><td><code>danger</code></td><td><span class="bd-color-swatch" style="--background: var(--bulma-danger);"></span></td></tr>
</table>

Bulma will automatically **generate a collection of CSS variables** for each of those colors. These sets of variables act as a **color palette** you can use to play with different _shades_ of a same color.

For example, by setting the primary color with `$primary: hsl(171, 100%, 41%)`, Bulma will generate the following CSS variables:

- `--bulma-primary`
- `--bulma-primary-rgb` if you want to create your own RGBA shade: `rgba(var(--bulma-primary-rgb), 0.5)`
- `--bulma-primary-h` equal to the primary **hue**
- `--bulma-primary-s` equal to the primary **saturation**
- `--bulma-primary-l` equal to the primary **lightness**
- `--bulma-primary-base` (equal to `--bulma-primary`)
- `--bulma-primary-invert` which is a color that will look decent on the primary color (in a foreground/background combination)
- `--bulma-primary-light` which is the primary color at `90%` lightness
- `--bulma-primary-light-invert` which is a color that looks good on the `-light` version
- `--bulma-primary-dark` which is the primary color at `20%` lightness
- `--bulma-primary-dark-invert` which is a color that looks good on the `-dark` version
- `--bulma-primary-soft` which is a `light` color in light mode, and a `dark` color in dark mode
- `--bulma-primary-bold` which is a `dark` color in light mode, and a `light` color in dark mode
- `--bulma-primary-soft-invert` which is the same as the `bold` version
- `--bulma-primary-bold-invert` which is the same as the `soft` version
- `--bulma-primary-on-scheme` which is a color that looks good on the `scheme-main` color (which by default is white, and is used as the page's background color)

Here is what they look like:

<table class="table is-bordered">
  <tr>
    <td><code>--bulma-primary</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary);"></span></td>
    <td><span class="color-primary">The quick brown fox jumps over the lazy dog</span></td>
  </tr>
  <tr>
    <td><code>--bulma-primary-invert</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-invert);"></span></td>
    <td><span class="color-primary-invert">The quick brown fox jumps over the lazy dog</span></td>
  </tr>
  <tr>
    <td><code>--bulma-primary-light</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-light);"></span></td>
    <td><span class="color-primary-light">The quick brown fox jumps over the lazy dog</span></td>
  </tr>
  <tr>
    <td><code>--bulma-primary-light-invert</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-light-invert);"></span></td>
    <td><span class="color-primary-light-invert">The quick brown fox jumps over the lazy dog</span></td>
  </tr>
  <tr>
    <td><code>--bulma-primary-dark</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-dark);"></span></td>
    <td><span class="color-primary-dark">The quick brown fox jumps over the lazy dog</span></td>
  </tr>
  <tr>
    <td><code>--bulma-primary-dark-invert</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-dark-invert);"></span></td>
    <td><span class="color-primary-dark-invert">The quick brown fox jumps over the lazy dog</span></td>
  </tr>
  <tr>
    <td><code>--bulma-primary-soft</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-soft);"></span></td>
    <td><span class="has-text-primary-soft">The quick brown fox jumps over the lazy dog</span></td>
  </tr>
  <tr>
    <td><code>--bulma-primary-bold</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-bold);"></span></td>
    <td><span class="has-text-primary-bold">The quick brown fox jumps over the lazy dog</span></td>
  </tr>
  <tr>
    <td><code>--bulma-primary-on-scheme</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-on-scheme);"></span></td>
    <td><span class="color-primary-on-scheme">The quick brown fox jumps over the lazy dog</span></td>
  </tr>
</table>

## Soft and Bold colors

Because Bulma now has a Dark Mode, it comes with a new color concept: **soft** and **bold** colors.

A **soft** color is a shade of a color that has little contrast with the background. It's a muted, faint shade of that color.

In light mode, this means that a soft color will be light as well. It's ideal of **backgrounds**:

<table class="table is-bordered">
  <tr>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-soft);"></span></td>
    <td><code>--bulma-primary-soft</code> as <strong>background</strong></td>
    <td class="has-background-primary-soft">The quick brown fox jumps over the lazy dog</td>
  </tr>
</table>

On the other hand, the **bold** color has a stark contrast with the background. It's a strong, distinct shade of that color.

In light mode, this means that a bold color will be dark. It's ideal of **text colors**:

{% include docs/components/single-color-row.html color="primary-bold" label="text color" classname="has-text-primary-bold" %}

The best use of these colors is to **combine them**: the soft color as background, the bold color as foreground:

<table class="table is-bordered">
  <tr>
    <td>
      <code>--bulma-primary-soft</code> as <strong>background</strong><br>
      <code>--bulma-primary-bold</code> as <strong>foreground</strong>
    </td>
    <td class="has-text-primary-bold has-background-primary-soft" style="vertical-align: middle;">The quick brown fox jumps over the lazy dog</td>
  </tr>
</table>

### Automatic switching when going into Dark Mode

If you use switch to between light mode and dark mode, you will notice that the soft and bold colors will **swap**. That way, you don't need to update your CSS classes to keep a decent design.

<table class="table is-bordered">
  <tr>
    <th>System</th>
    <th>Light Mode</th>
    <th>Dark Mode</th>
  </tr>
  <tr>
    <td class="has-text-primary-bold has-background-primary-soft" style="vertical-align: middle;">The quick brown fox jumps over the lazy dog</td>
    <td class="theme-light has-text-primary-bold has-background-primary-soft" style="vertical-align: middle;">The quick brown fox jumps over the lazy dog</td>
    <td class="theme-dark has-text-primary-bold has-background-primary-soft" style="vertical-align: middle;">The quick brown fox jumps over the lazy dog</td>
  </tr>
</table>


## Invert colors

The purpose of `-invert` colors is to combine them with their base counterparts. For example, if you use `primary-light` as the background color, you can use `primary-light-invert` as the foreground color:

<table class="table is-bordered">
  {% include docs/elements/background-foreground-row.html %}
  {% include docs/elements/background-foreground-row.html color="light" %}
  {% include docs/elements/background-foreground-row.html color="dark" %}
</table>

## 21 shades for each color

Bulma will automatically generate 21 shades of each color, one for each amount of **lightness**, starting from _around_ `0%` and going up in `5%` increments, until `100%` is reached.

> I am saying _around_ `0%` because the last digit is determined by the base color. If the base color's lightness is `42%`, then `--bulma-primary-00` will be `2%`, not `0%`.

<table class="table is-bordered">
  {% for i in (0..19) %}
    {% assign color = i | times: 5 | prepend: '00' | slice: -2, 2 %}
    <tr>
      <td><code>--bulma-primary-{{ color }}</code></td>
      <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-{{ color }});"></span></td>
      <td><code>--bulma-primary-{{ color }}-invert</code></td>
      <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-{{ color }}-invert);"></span></td>
    </tr>
  {% endfor %}

  <tr>
    <td><code>--bulma-primary-100</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-100);"></span></td>
    <td><code>--bulma-primary-100-invert</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-100-invert);"></span></td>
  </tr>
</table>

Each of these shades has an `-invert` counterpart that can be used as a foreground color:

<table class="table is-bordered">
  {% for i in (0..19) %}
    {% assign color = i | times: 5 | prepend: '00' | slice: -2, 2 %}
    {% include docs/elements/background-foreground-row.html color=color %}
  {% endfor %}

{% include docs/elements/background-foreground-row.html color="100" %}

</table>

### Lightness CSS variables

If you write your own CSS and want to use one these shades yourself, you can access the **lightness** value via its dedicated CSS variable that has a `-l` suffix.

For example, the `bulma-primary-75` color is defined like this:

```css
:root {
  --bulma-primary-75: hsla(
    var(--bulma-primary-h),
    var(--bulma-primary-s),
    var(--bulma-primary-75-l),
    1
  );
}
```

In this case, `--bulma-primary-75-l` is equal to `76%`, and you can access its value with the `var(--bulma-primary-75-l)` CSS variable.

## CSS helper classes

While you can access all a color's CSS variables directly by writing `color: var(--bulma-primary)` for example, Bulma also provides **CSS helper classes** for each color.

Those helper classes exist for to set either the `color` or the `background`.

<div class="table-container">
<table class="table is-bordered">
  <thead>
    <tr>
      <th>#</th>
      <th>Color</th>
      <th colspan="2"><code>color</code> class</th>
      <th colspan="2"><code>background</code> class</th>
    </tr>
  </thead>
  <tbody>
    {% include docs/elements/palette-class-row.html color="primary" %}
    {% include docs/elements/palette-class-row.html color="primary-invert" %}
    {% include docs/elements/palette-class-row.html color="primary-light" %}
    {% include docs/elements/palette-class-row.html color="primary-light-invert" %}
    {% include docs/elements/palette-class-row.html color="primary-dark" %}
    {% include docs/elements/palette-class-row.html color="primary-dark-invert" %}
    {% include docs/elements/palette-class-row.html color="primary-on-scheme" %}
    {% for i in (0..19) %}
      {% assign color = i | times: 5 | prepend: '00' | slice: -2, 2 %}
      {% assign name = color | prepend: 'primary-' %}
      {% include docs/elements/palette-class-row.html color=name %}
    {% endfor %}
    {% include docs/elements/palette-class-row.html color="primary-100" %}
  </tbody>
</table>
</div>