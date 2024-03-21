---
title: Themes in Bulma
layout: docs
markdown: true
theme: features
doc-tab: features
doc-subtab: themes
breadcrumb:
  - home
  - documentation
  - features
  - features-themes
---


In Bulma, a **theme** is a **collection** of CSS variables.

Bulma comes with 2 themes:

- `light.scss` (required)
- `dark.scss` (optional)

## The default themes

Because Bulma requires a default value for all CSS variables, it comes with a **default light theme** located at `/sass/themes/light.scss`.

It also comes with a **dark theme** located at `/sass/themes/dark.scss`.

The file `/sass/themes/_index.scss` takes care of including both themes, each in two ways:

* with the `@media (prefers-color-scheme: $name)` media query
* with an HTML attribute `[data-theme=$name]` and CSS class `.theme-$name` selector

The only difference is that the light theme is also defined at the top-level: `:root` (equivalent to the `html` element, the ancestor of all HTML elements on a webpage). This ensures that a **default** value is set for all CSS variables.

The CSS output of that theme resembles the following:

```css
:root {
    /* CSS Variables */
}

@media (prefers-color-scheme: light) {
  :root {
    /* CSS Variables */
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    /* CSS Variables */
  }
}

[data-theme=light],
.theme-light {
  /* CSS Variables */
}

[data-theme=dark],
.theme-dark {
  /* CSS Variables */
}
```

## Creating a custom theme

Creating a theme is essentially **setting your own CSS variables**. A custom theme requires:

* a name like `sunrise`
* a scope like `:root`, `[data-theme=sunrise]`, `.theme-sunrise` or all three
* a set of CSS variables and their new value

### Customizing in the browser

If you set your CSS variables under the `:root` scope, you are **overwriting** Bulma's default theme. This can be done by with Sass or CSS.

To test out the CSS method, simply follow these steps:

{% include docs/elements/step.html image="images/themes/step-1-inspect.png" content="Open your browser inspector" width=496 height=748 %}
{% include docs/elements/step.html image="images/themes/step-2-html.png" content="Select the `html` element" width=528 height=232 %}
{% include docs/elements/step.html image="images/themes/step-3-var.png" content="Insert a new value for the `--bulma-link-h` variable (the hue of the link color)" width=376 height=120 %}
{% include docs/elements/step.html image="images/themes/step-4-menu.png" content="Notice how the CSS Helpers section in the side menu changes color" width=480 height=256 %}
