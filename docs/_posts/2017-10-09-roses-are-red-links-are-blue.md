---
layout: post
title: "Roses are red – Links are blue"
introduction: "What's better than one tag? Multiple tags!"
color: "link"
name: "Roses are red and links are blue"
icon: "link"
---

By default, a browser will display links in <strong style="color: blue;">blue</strong>. Bulma has up until now used the `$primary` color as the `$link` color:

```sass
// Old styles
$link: $primary !default
```

But the _primary_ color is mostly used as the **brand** color, and is not necessarily well suited for links. For readability purposes, and to add more flexibility to your design choices:

* the `$link` color defaults to `$blue`
* `$info` is using the new `$cyan` color
* `$link` has been added to the `$colors` map as well

```sass
// New styles
$link: $blue !default
$info: $cyan !default
```

<div class="message is-danger">
  <div class="message-header">
    Deprecation warning
  </div>
  <div class="message-body">
    <p>
      Because the modifier <code>is-link</code> for <strong>buttons</strong> already existed, it has been renamed to <code>is-text</code>.
    </p>
  </div>
</div>

As such, the following components are now **blue**:

* [breadcrumb](/documentation/components/breadcrumb/)
* [dropdown](/documentation/components/dropdown/)
* [navbar](/documentation/components/navbar/)
* [pagination](/documentation/components/pagination/)
* [tabs](/documentation/components/tabs/)
* [menu](/documentation/components/menu/)
* [panel](/documentation/components/panel/)

All Bulma elements and components that support **color** modifiers now support the `.is-link` color:

```html
<div class="notification is-link">
  Link notification.
</div>

<div class="notification is-info">
  Info notification.
</div>

<button class="button is-link">
  Link button
</button>

<button class="button is-info">
  Info button
</button>
```

<div class="notification is-link">
  Link notification.
</div>

<div class="notification is-info">
  Info notification.
</div>

<button class="button is-link">
  Link button
</button>

<button class="button is-info">
  Info button
</button>

If you want to use the `$primary` color for your links, just **customize** your Bulma setup by including these rules:

```sass
$link: $primary !default
$link-invert: $primary-invert !default
$link-focus-border: $primary !default
```
