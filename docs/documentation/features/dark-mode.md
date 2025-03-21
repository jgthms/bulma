---
title: Dark Mode in Bulma
layout: docs
markdown: true
theme: features
doc-tab: features
doc-subtab: dark-mode
breadcrumb:
  - home
  - documentation
  - features
  - features-dark-mode
---



Modern browsers come with a way to detect if a user has set their theme preference to `light` or `dark` by using the [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) keyword.

This value can be used in a media query to change a website's styles accordingly:

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Update CSS variables */
  }
}
```

However, it's not possible for a website to alter this preference. That's why it's preferable to **also** add a `data-theme` HTML attribute or a `theme-dark` CSS class.

This is how Bulma defines its dark theme:

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Update CSS variables */
  }
}

[data-theme=dark],
.theme-dark {
  /* Update CSS variables */
}
```

With these rules:

* the website will be **light by default**, if no user preference is set
* it will also be **light** if the user has set their preference to `light`
* the website will be **dark** if the user has set their preference to `dark`

{% include docs/elements/anchor.html name="Force Dark Mode within a page" %}

You can **enable** Dark Mode in part of your HTML by simply using the HTML attribute or the CSS class:

```html
<div>
  This is in Light Mode if the user hasn't set a preference, or if their preference is set to <code>light</code>.
</div>

<div data-theme="dark">
  This is in Dark Mode
</div>

<div class="theme-dark">
  This is also in Dark Mode
</div>
```

{% include docs/elements/anchor.html name="Force Dark Mode for a whole webpage" %}

If you want to enable Dark Mode for a whole webpage, simply set the attribute or the class on the `<html>` element:

```html
<html data-theme="dark">
<!-- Or -->
<html class="theme-dark">
```

{% include docs/elements/anchor.html name="How the Dark theme is created" %}

This is the content of the `sass/themes/dark.scss` file:

```scss
@use "sass/utilities/initial-variables" as iv;
@use "sass/utilities/css-variables" as cv;
@use "sass/utilities/derived-variables" as dv;
@use "sass/themes/setup";

// The main lightness of this theme
$scheme-main-l: 11%;
$background-l: 14%;
$text-l: 71%;

// The main scheme color, used to make calculations
$scheme-main: hsl(iv.$scheme-h, iv.$scheme-s, $scheme-main-l);
$background: hsl(iv.$scheme-h, iv.$scheme-s, $background-l);
$text: hsl(iv.$scheme-h, iv.$scheme-s, $text-l);

@mixin dark-theme {
  // Required: update the lightness colors and hover/active states
  @include cv.register-vars(
    (
      "scheme-brightness": "dark",
      "scheme-main-l": $scheme-main-l,
      "scheme-main-bis-l": $scheme-main-l + 2%,
      "scheme-main-ter-l": $scheme-main-l + 4%,
      "background-l": $background-l,
      "border-weak-l": 21%,
      "border-l": 24%,
      "text-weak-l": 53%,
      "text-l": $text-l,
      "text-strong-l": 93%,
      "text-title-l": 100%,
      "hover-background-l-delta": 5%,
      "active-background-l-delta": 10%,
      "hover-border-l-delta": 10%,
      "active-border-l-delta": 20%,
      "hover-color-l-delta": 5%,
      "active-color-l-delta": 10%,
    )
  );

  // Required: update the "on scheme" colors since the main scheme color is changed
  // from white (100% lightness)
  // to black (11% lightness in this case)
   @each $name, $color in dv.$colors {
    @include cv.generate-on-scheme-colors($name, $color, $scheme-main);
  }

  // Optional: update the shadow color
  @include cv.register-hsl("shadow", white);
}
```

This mixin outputs a list of CSS variables and their new value.

To use this theme with the `prefer-color-scheme` media query, write the following:

```scss
@use "sass/utilities/css-variables" as cv;
@use "sass/themes/dark";

@include cv.system-theme($name: "dark") {
  @include dark.dark-theme;
}
```

To use this theme with the `[data-theme=dark]` and `.theme-dark` selectors, write the following:

```scss
@use "sass/utilities/css-variables" as cv;
@use "sass/themes/dark";
@use "sass/themes/setup";

@include cv.bulma-theme($name: "dark") {
  @include dark.dark-theme;
  @include setup.setup-theme;
}
```


### The `bulma-theme()` mixin

This mixin will allow you to generate a CSS rule-set with both an appropriate HTML attribute selector and a CSS class selector, which names are defined by the `$name` parameter.

```scss
@use "sass/utilities/css-variables" as cv;

@include cv.bulma-theme($name: "my-theme") {
  // Your code
}
```

This will output the following:

```css
[data-theme=my-theme],
.theme-my-theme {
  /* Your code */
}
```

### The `system-theme()` mixin

This mixin will generate a `@media (prefers-color-scheme: $name)` media query.

```scss
@use "sass/utilities/css-variables" as cv;

@include cv.system-theme($name: "dark") {
  // Your code
}
```

This will output the following:

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Your code */
  }
}
```

### The `register-vars()` function

All Bulma CSS variables are prefixed with `bulma-`. This prefix is defined with the `$cssvars-prefix: "bulma-";` Sass variable.

Because writing all CSS variables with this prefix can be cumbersome, Bulma provides a Sass function to register new variables: `register-vars()`.

This function accepts a Sass map of `name: value` pairs.

```scss
@use "sass/utilities/css-variables" as cv;

$scheme-main-l: 11%;
$background-l: 14%;
$text-l: 71%;

@include cv.bulma-theme($name: "my-theme") {
  @include cv.register-vars(
    (
      "scheme-brightness": "dark",
      "scheme-main-l": $scheme-main-l,
      "scheme-main-bis-l": $scheme-main-l + 2%,
      "scheme-main-ter-l": $scheme-main-l + 4%,
      "background-l": $background-l,
      "border-weak-l": 21%,
      "border-l": 24%,
      "text-weak-l": 53%,
      "text-l": $text-l,
      "text-strong-l": 93%,
      "text-title-l": 100%,
      "hover-background-l-delta": 5%,
      "active-background-l-delta": 10%,
      "hover-border-l-delta": 10%,
      "active-border-l-delta": 20%,
      "hover-color-l-delta": 5%,
      "active-color-l-delta": 10%,
    )
  );
}
```

### Updating the lightness

For Dark Mode, Bulma will keep the same hue and saturation of the main scheme color. It will however **invert the lightness** of background, borders, text colors, and hover/active states.

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Lightness Name</th>
      <th colspan="2">Light Mode (default)</th>
      <th colspan="2">Dark Mode (default)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><code>--bulma-scheme-main-l</code></th>
      <td><code>100%</code></td>
      <td class="theme-light"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-l));"></span></td>
      <td><code>11%</code></td>
      <td class="theme-dark"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-l));"></span></td>
    </tr>
    <tr>
      <th><code>--bulma-scheme-main-bis-l</code></th>
      <td><code>98%</code></td>
      <td class="theme-light"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-bis-l));"></span></td>
      <td><code>13%</code></td>
      <td class="theme-dark"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-bis-l));"></span></td>
    </tr>
    <tr>
      <th><code>--bulma-scheme-main-ter-l</code></th>
      <td><code>98%</code></td>
      <td class="theme-light"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-ter-l));"></span></td>
      <td><code>15%</code></td>
      <td class="theme-dark"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-ter-l));"></span></td>
    </tr>
    <tr>
      <th><code>--bulma-background-l</code></th>
      <td><code>96%</code></td>
      <td class="theme-light"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-background-l));"></span></td>
      <td><code>14%</code></td>
      <td class="theme-dark"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-background-l));"></span></td>
    </tr>
    <tr>
      <th><code>--bulma-border-weak-l</code></th>
      <td><code>93%</code></td>
      <td class="theme-light"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-border-weak-l));"></span></td>
      <td><code>21%</code></td>
      <td class="theme-dark"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-border-weak-l));"></span></td>
    </tr>
    <tr>
      <th><code>--bulma-border-l</code></th>
      <td><code>86%</code></td>
      <td class="theme-light"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-border-l));"></span></td>
      <td><code>24%</code></td>
      <td class="theme-dark"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-border-l));"></span></td>
    </tr>
    <tr>
      <th><code>--bulma-text-weak-l</code></th>
      <td><code>48%</code></td>
      <td class="theme-light"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-text-weak-l));"></span></td>
      <td><code>53%</code></td>
      <td class="theme-dark"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-text-weak-l));"></span></td>
    </tr>
    <tr>
      <th><code>--bulma-text-l</code></th>
      <td><code>29%</code></td>
      <td class="theme-light"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-text-l));"></span></td>
      <td><code>71%</code></td>
      <td class="theme-dark"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-text-l));"></span></td>
    </tr>
    <tr>
      <th><code>--bulma-text-strong-l</code></th>
      <td><code>21%</code></td>
      <td class="theme-light"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-text-strong-l));"></span></td>
      <td><code>93%</code></td>
      <td class="theme-dark"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-text-strong-l));"></span></td>
    </tr>
    <tr>
      <th><code>--bulma-text-title-l</code></th>
      <td><code>14%</code></td>
      <td class="theme-light"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-text-title-l));"></span></td>
      <td><code>100%</code></td>
      <td class="theme-dark"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-text-title-l));"></span></td>
    </tr>
    <tr>
      <th><code>--bulma-hover-background-l-delta</code></th>
      <td colspan="2"><code>5%</code></td>
      <td colspan="2"><code>5%</code></td>
    </tr>
    <tr>
      <th><code>--bulma-active-background-l-delta</code></th>
      <td colspan="2"><code>10%</code></td>
      <td colspan="2"><code>10%</code></td>
    </tr>
    <tr>
      <th><code>--bulma-hover-border-l-delta</code></th>
      <td colspan="2"><code>10%</code></td>
      <td colspan="2"><code>10%</code></td>
    </tr>
    <tr>
      <th><code>--bulma-active-border-l-delta</code></th>
      <td colspan="2"><code>20%</code></td>
      <td colspan="2"><code>20%</code></td>
    </tr>
    <tr>
      <th><code>--bulma-hover-color-l-delta</code></th>
      <td colspan="2"><code>5%</code></td>
      <td colspan="2"><code>5%</code></td>
    </tr>
    <tr>
      <th><code>--bulma-active-color-l-delta</code></th>
      <td colspan="2"><code>10%</code></td>
      <td colspan="2"><code>10%</code></td>
    </tr>
  </tbody>
</table>

### The `generate-on-scheme-colors()` function

The **scheme** color is the one used for:

* {% include docs/elements/color-swatch.html background="var(--bulma-background)" %} backgrounds
* {% include docs/elements/color-swatch.html background="var(--bulma-border)" %} borders
* text shades
  * {% include docs/elements/color-swatch.html background="var(--bulma-text-strong)" %} strong text
  * {% include docs/elements/color-swatch.html background="var(--bulma-text-weak)" %} weak text
  * {% include docs/elements/color-swatch.html background="var(--bulma-title-color)" %} title text
  * {% include docs/elements/color-swatch.html background="var(--bulma-text)" %} and normal text

For each of the 7 primary colors {% include docs/elements/primary-colors.html %}, the default Bulma theme generates **on scheme** shades, meaning shades of each color that will look decent on the main scheme color.

In Light Mode, they look like this:

<table class="table is-bordered">
  <tbody>
    {% for color in site.data.colors.justColors %}
      {% assign foreground = color | prepend: 'var(--bulma-' | append: '-on-scheme)' %}
      <tr>
        <th><code>{{ color }}</code></th>
        <td>{% include docs/elements/color-swatch.html background="var(--bulma-scheme-main)" color=foreground text=foreground %}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

Because in Dark Mode we are inverting the lightness of these colors, the page background will go from white {% include docs/elements/color-swatch.html background="#fff" %} to black {% include docs/elements/color-swatch.html background="#141414" %}. We thus need to update the `-on-scheme` colors of all 7 primary colors.

In Dark Mode, they look like this:

<table class="table is-bordered">
  <tbody>
    {% for color in site.data.colors.justColors %}
      {% assign foreground = color | prepend: 'var(--bulma-' | append: '-on-scheme)' %}
      <tr>
        <th><code>{{ color }}</code></th>
        <td class="theme-dark">{% include docs/elements/color-swatch.html background="var(--bulma-scheme-main)" color=foreground text=foreground %}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

If you are creating your own theme, you can automatically generate new `-on-scheme` colors by using the `generate-on-scheme-colors()` for **each** color. It takes 3 parameters:

* `$name` which is a string. E.g. `"primary"`
* `$color` which is the color value. E.g.
* `$scheme-main` which is the theme's main scheme color (the one used as the page background). E.g. `#fff`

The full code looks like this:

```scss
@use "sass/utilities/css-variables" as cv;
@use "sass/utilities/derived-variables" as dv;

$scheme-main-l: 11%;
$scheme-main: hsl(iv.$scheme-h, iv.$scheme-s, $scheme-main-l);

@include cv.bulma-theme($name: "my-theme") {
  @each $name, $color in dv.$colors {
    @include cv.generate-on-scheme-colors($name, $color, $scheme-main);
  }
}
```

### The `setup-theme()` function

In Bulma, some CSS variables reference other CSS variables. For example, `--bulma-scheme-main` is defined like this:

```css
:root {
  --bulma-scheme-main: hsl(
    var(--bulma-scheme-h)
    var(--bulma-scheme-s)
    var(--bulma-scheme-main-l)
  );
}
```

Because of how CSS variables work, if you update the value of `--bulma-scheme-main-l`, you need to define `--bulma-scheme-main` again. That is what `setup-theme()` does.

```css
[data-theme=my-theme],
.theme-my-theme {
  --bulma-scheme-main-l: 7%;
  --bulma-scheme-main: hsl(
    var(--bulma-scheme-h)
    var(--bulma-scheme-s)
    var(--bulma-scheme-main-l)
  );
}
```

If you create your own theme, simply call this function _after_ having set your own CSS variables:

```scss
@use "sass/themes/setup";

@include cv.bulma-theme($name: "my-theme") {
  // Set your own CSS variables,
  // either manually:
  --bulma-scheme-main-l: 7%;
  // or using Bulma's register-vars() function:
  @include register-vars((
    "bulma-scheme-main-l": 7%,
  ));

  // Then, setup the new theme.
  @include setup.setup-theme();
}
```
